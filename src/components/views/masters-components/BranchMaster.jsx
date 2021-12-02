import React, { Component } from 'react';
import BranchMasterService from '../../../Services/masterService/BranchMasterService';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";

class BranchMaster extends Component {
    constructor(props) {
        super(props);
        this.state = {
            branchId: this.props.match.params.branchId,
            flag: this.props.match.params.flag,
            companyName: 'ss',
            branchName: '',
            gstInNo: '',
            registrationNo: '',
            branchAddress: '',
            branchCity: '',
            landmark: '',
            taluka: 'ss',
            district: 'ss',
            state: 'ss',
            pinCode: '',
            faxNo: '',
            phoneNo: '',
            mobileNo: '',
            emailId: '',
            altEmail: '',
            errors: {},
            companyNameData: [],
            stateList: [],
            talukaList: [],
            districtList: [],
            textValue: 'Save'
        }
        this.changeEventHandler = this.changeEventHandler.bind(this);
        this.cancelRecord = this.cancelRecord.bind(this);
    }

    componentDidMount() {
        //alert("componentDidMount==>>"+this.state.branchId);
        BranchMasterService.getBranchById(this.state.branchId).then(res => {
            let branchData = res.data.response;
            this.setState({
                branchId: branchData.branchId,
                companyName: branchData.companyName,
                branchName: branchData.branchName,
                gstInNo: branchData.gstInNo,
                registrationNo: branchData.registrationNo,
                branchAddress: branchData.branchAddress,
                branchCity: branchData.branchCity,
                landmark: branchData.landmark,
                taluka: branchData.taluka,
                district: branchData.district,
                state: branchData.state,
                pinCode: branchData.pinCode,
                faxNo: branchData.faxNo,
                phoneNo: branchData.phoneNo,
                mobileNo: branchData.mobileNo,
                emailId: branchData.emailId,
                altEmail: branchData.altEmail
            });
            if (this.state.flag == "M") {
                this.setState({
                    textValue: 'Update'
                });
            } else if (this.state.flag == "D") {
                this.setState({
                    textValue: 'Delete'
                });
            }
        })
        BranchMasterService.getCompanyData().then((res) => {
            this.setState({ companyNameData: res.data.response });
        })

        BranchMasterService.getDistrictData().then((res) => {
            this.setState({ districtList: res.data.response });
        })

        BranchMasterService.getTalukaData().then((res) => {
            this.setState({ talukaList: res.data.response });
        })

        BranchMasterService.getStateData().then((res) => {
            this.setState({ stateList: res.data.response });
        })
    }

    changeEventHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
        //alert(name);
        if (name == "companyName") {
            // alert(value);
            BranchMasterService.getCompanyDataById(value).then((res) => {
                console.log(res.data.response);
                this.setState({ gstInNo: res.data.response.adcmGstnNo });
                this.setState({ registrationNo: res.data.response.adcmFacregNo });
            })
        }
        if (name == "state") {
            BranchMasterService.getDistrictByStateId(value).then((res) => {
                // console.log("getDistrictByStateId=====>>>>"+JSON.stringify(res.data.response));
                this.setState({
                    districtList: res.data.response,
                    talukaList: [],
                    district: 'ss'
                });
            })
        }
        if (name == "district") {
            // alert("district===>>"+value);
            BranchMasterService.getTalukaByDistrictId(value).then((res) => {
                //console.log("getDistrictByStateId=====>>>>"+JSON.stringify(res.data.response));
                this.setState({
                    talukaList: res.data.response,
                    taluka: 'ss'
                });
            })
        }
    }

    handleValidation = (event) => {
        let errors = {};
        let formIsValid = true;

        if (!this.state.companyName) {
            formIsValid = false;
            errors["companyName"] = "Company Name Cannot be empty";
        }
        if (!this.state.branchName) {
            formIsValid = false;
            errors["branchName"] = "Branch Name Cannot be empty";
        }

        if (!this.state.registrationNo) {
            formIsValid = false;
            errors["registrationNo"] = "Regitration No Cannot be empty";
        }

        if (!this.state.gstInNo) {
            formIsValid = false;
            errors["gstInNo"] = "GSTIN No Cannot be empty";
        }

        if (!this.state.branchAddress) {
            formIsValid = false;
            errors["branchAddress"] = "Please enter branch address.";
        }
        if (!this.state.branchCity) {
            formIsValid = false;
            errors["branchCity"] = "Please enter branch city.";
        }
        if (!this.state.taluka) {
            formIsValid = false;
            errors["taluka"] = "Please select taluka.";
        }
        if (!this.state.district) {
            formIsValid = false;
            errors["district"] = "Please select district.";
        }
        // alert(this.state.state);
        if (!this.state.state) {
            formIsValid = false;
            errors["state"] = "Please select state.";
        }
        if (!this.state.pinCode) {
            formIsValid = false;
            errors["pinCode"] = "Please enter branch pincode.";
        } else if (typeof this.state.pinCode !== NaN) {
            const numberRegEx = /^\d{6}$/;
            if (!numberRegEx.test(String(this.state.pinCode).toLowerCase())) {

                formIsValid = false;
                errors["pinCode"] = "Please enter valid pincode";
            }
        }

        if ((!this.state.phoneNo)) {
            formIsValid = false;
            errors["phoneNo"] = "Please enter Contact details.";
        } else if (typeof this.state.phoneNo !== NaN) {
            const numberRegEx = /^\d{10}$/;
            if (!numberRegEx.test(String(this.state.phoneNo).toLowerCase())) {

                formIsValid = false;
                errors["phoneNo"] = "Please enter valid numbers";
            }
        }

        if ((!this.state.mobileNo)) {
            formIsValid = false;
            errors["mobileNo"] = "Please enter Contact details.";
        } else if ((typeof this.state.mobileNo !== NaN)) {
            const numberRegEx = /^\d{10}$/;
            if (!numberRegEx.test(String(this.state.mobileNo).toLowerCase())) {
                formIsValid = false;
                errors["mobileNo"] = "Please enter valid numbers";
            }
        }

        if (!this.state.emailId) {
            formIsValid = false;
            errors["emailId"] = "Please enter Email Id.";
        } else if ((typeof this.state.emailId !== NaN)) {
            const numberRegEx = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
            if (!numberRegEx.test(String(this.state.emailId).toLowerCase())) {
                formIsValid = false;
                errors["emailId"] = "Please enter valid Email Id";
            }
        }

        // if(!this.state.faxNo){
        //     formIsValid = true;
        // }
        // else if ((typeof this.state.faxNo !== NaN)) {
        //     const numberRegEx = /^\+?[0-9]{6,}$/;
        //     if (!numberRegEx.test(String(this.state.faxNo).toLowerCase())) {
        //         formIsValid = false;
        //         errors["faxNo"] = "Please enter valid Fax Number!";
        //     }
        // }
        this.setState({ errors: errors });
        return formIsValid;
    }

    saveBranchData = (event) => {
        // alert("hit saveBranchData");
        event.preventDefault();
        let branchData = {
            branchId: this.state.branchId,
            companyName: this.state.companyName,
            branchName: this.state.branchName,
            gstInNo: this.state.gstInNo,
            registrationNo: this.state.registrationNo,
            branchAddress: this.state.branchAddress,
            branchCity: this.state.branchCity,
            landmark: this.state.landmark,
            taluka: this.state.taluka,
            district: this.state.district,
            state: this.state.state,
            pinCode: this.state.pinCode,
            faxNo: this.state.faxNo,
            phoneNo: this.state.phoneNo,
            mobileNo: this.state.mobileNo,
            emailId: this.state.emailId,
            altEmail: this.state.altEmail
        }
        const isValid = this.handleValidation();
        // alert(isValid);
        if (isValid) {
            if (this.state.textValue === "Save") {
                BranchMasterService.saveBranchMaster(branchData).then(res => {
                    let msg = res.data.message;
                    let code = res.data.code;
                    if (code === 100) {
                        Swal.fire({
                            text: msg,
                            icon: "error",
                        });
                    }
                    else if (code === 200) {
                        Swal.fire({
                            text: msg,
                            icon: "success",
                        });
                    }
                    this.props.history.push('/rna/listOfBranchMaster');
                })
            } else if (this.state.textValue === "Update") {
                //alert("i m in update");
                BranchMasterService.updateBranchMaster(branchData, this.state.branchId).then((res) => {
                    let msg = res.data.message;
                    let code = res.data.code;
                    if (code === 100) {
                        Swal.fire({
                            text: msg,
                            icon: "error",
                        });
                    }
                    else if (code === 200) {
                        Swal.fire({
                            text: msg,
                            icon: "success",
                        });
                    }
                    this.props.history.push('/rna/listOfBranchMaster');
                })
            } else if (this.state.textValue === "Delete") {
                BranchMasterService.deleteBranchMaster(this.state.branchId).then((res) => {
                    let msg = res.data.message;
                    let code = res.data.code;
                    if (code === 100) {
                        Swal.fire({
                            text: msg,
                            icon: "error",
                        });
                    }
                    else if (code === 200) {
                        Swal.fire({
                            text: msg,
                            icon: "success",
                        });
                    }
                    this.props.history.push('/rna/listOfBranchMaster');
                })
            }
        }
    }

    cancelRecord() {
        //alert("cancel");
        this.props.history.push('/rna/listOfBranchMaster');
    }


    render() {
        return (
            <>
                <div className="main-panel">
                    <div className="content">
                        <div className="page-inner" style={{ backgroundColor: "#d9d9d9" }}>
                            <div className="card p-3">
                                <div className="row align-items-end">
                                    <div className="col-lg-8">
                                        <div className="page-header-title">

                                            <div className="d-inline">
                                                <h3 className="font-weight-bold">Branch Master</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="page-header-breadcrumb">
                                            <ul className="breadcrumbs">
                                                <li className="nav-home">
                                                    <Link to="index.html">
                                                        <i className="flaticon-home"></i>
                                                    </Link>
                                                </li>
                                                <li className="separator">
                                                    <i className="flaticon-right-arrow"></i>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="#">Masters</Link>
                                                </li>
                                                <li className="separator">
                                                    <i className="flaticon-right-arrow"></i>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="#">BranchMaster</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="page-body">
                                <div className="row">
                                    <div className="col-md-12 col-xl-12" id="branchForm">
                                        <div className="card p-4">
                                            <div className="form-group">

                                                <input type="hidden"
                                                    placeholder="Branch Id"
                                                    name="branchId"
                                                    className="form-control"
                                                    value={this.state.branchId}
                                                    onChange={this.changeEventHandler} />
                                            </div>
                                            <div className="form-group row" aria-expanded="true">
                                                <label className="col-sm-12 col-lg-2 col-xl-2 ">Company Name<span className="text-danger">*</span></label>
                                                <div className="col-sm-12 col-lg-4 col-xl-4 ">
                                                    {/* <input type="text" className="form-control " name="companyName" placeholder="Enter Company Name" value={this.state.companyName} onChange={this.changeEventHandler} /> */}
                                                    <select
                                                        className="form-control"
                                                        name="companyName"
                                                        value={this.state.companyName}
                                                        onChange={this.changeEventHandler}>
                                                        <option value="ss">Select Company</option>
                                                        {
                                                            this.state.companyNameData.map(r =>
                                                                <option key={r.adcmId} value={r.adcmId}>
                                                                    {r.adcmName}
                                                                </option>
                                                            )
                                                        }
                                                    </select>
                                                    <span style={{ color: "red" }}>{this.state.errors["companyName"]}</span>
                                                </div>
                                                <label className="col-sm-12 col-lg-2 col-xl-2 ">Branch Name<span className="text-danger">*</span></label>
                                                <div className="col-sm-12 col-lg-4 col-xl-4">
                                                    <input type="text"
                                                        className="form-control "
                                                        name="branchName"
                                                        placeholder="Enter Branch Name"
                                                        value={this.state.branchName}
                                                        onChange={this.changeEventHandler} />
                                                    <span style={{ color: "red" }}>{this.state.errors["branchName"]}</span>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-12 col-lg-2 col-xl-2 ">Registration No.<span className="text-danger">*</span></label>
                                                <div className="col-sm-12 col-lg-4 col-xl-4">
                                                    <input type="text"
                                                        className="form-control "
                                                        name="registrationNo"
                                                        placeholder="Enter Registration No."
                                                        value={this.state.registrationNo}
                                                        onChange={this.changeEventHandler} />
                                                    <span style={{ color: "red" }}>{this.state.errors["registrationNo"]}</span>
                                                </div>
                                                
                                                <label className="col-sm-12 col-lg-2 col-xl-2 ">GSTIN No<span className="text-danger">*</span></label>
                                                <div className="col-sm-12 col-lg-4 col-xl-4 ">
                                                    <input
                                                        type="text"
                                                        className="form-control "
                                                        name="gstInNo"
                                                        placeholder="Enter GSTIN Number"
                                                        value={this.state.gstInNo}
                                                        onChange={this.changeEventHandler} />
                                                    <span style={{ color: "red" }}>{this.state.errors["gstInNo"]}</span>
                                                </div>
                                            </div>
                                            <div className="form-group row" aria-expanded="true">

                                                <label className="col-sm-12 col-lg-2 col-xl-2 ">Branch Address<span className="text-danger">*</span>:</label>
                                                <div className="col-sm-12 col-lg-4 col-xl-4 ">
                                                    <textarea rows="1"
                                                        cols="5"
                                                        className="form-control"
                                                        name="branchAddress"
                                                        placeholder="Enter Branch Address"
                                                        value={this.state.branchAddress}
                                                        onChange={this.changeEventHandler}></textarea>
                                                    <span style={{ color: "red" }}>{this.state.errors["branchAddress"]}</span>
                                                </div>

                                                <label className="col-sm-12 col-lg-2 col-xl-2 ">Branch City<span className="text-danger">*</span>:</label>
                                                <div className="col-sm-12 col-lg-4 col-xl-4">
                                                    <input type="text"
                                                        className="form-control"
                                                        name="branchCity"
                                                        placeholder="Enter Branch City"
                                                        value={this.state.branchCity}
                                                        onChange={this.changeEventHandler} />
                                                    <span style={{ color: "red" }}>{this.state.errors["branchCity"]}</span>
                                                </div>

                                            </div>
                                            <div className="form-group row" aria-expanded="true">

                                                <label className="col-sm-12 col-lg-2 col-xl-2 ">Landmark:</label>
                                                <div className="col-sm-12 col-lg-4 col-xl-4 ">
                                                    <input type="text"
                                                        className="form-control"
                                                        name="landmark"
                                                        placeholder="Enter Landmark"
                                                        value={this.state.landmark}
                                                        onChange={this.changeEventHandler} />
                                                    <span style={{ color: "red" }}>{this.state.errors["landmark"]}</span>
                                                </div>

                                                <label className="col-sm-12 col-lg-2 col-xl-2 ">State<span className="text-danger">*</span>:</label>
                                                <div className="col-sm-12 col-lg-4 col-xl-4">
                                                    {/* <input type="text" className="form-control" name="state" placeholder="Enter State" value={this.state.state} onChange={this.changeEventHandler} /> */}
                                                    <select className="form-control" name="state" value={this.state.state} onChange={this.changeEventHandler}>
                                                        <option value="ss">Select State</option>
                                                        {
                                                            this.state.stateList.map(r =>
                                                                <option key={r.stateId} value={r.stateId}>
                                                                    {r.stateName}
                                                                </option>
                                                            )
                                                        }
                                                    </select>
                                                    <span style={{ color: "red" }}>{this.state.errors["state"]}</span>
                                                </div>

                                            </div>
                                            <div className="form-group row" aria-expanded="true">

                                                <label className="col-sm-12 col-lg-2 col-xl-2 ">Disrict<span className="text-danger">*</span>:</label>
                                                <div className="col-sm-12 col-lg-4 col-xl-4 ">
                                                    {/* <input type="text" className="form-control" name="district" placeholder="Enter District" value={this.state.district} onChange={this.changeEventHandler} /> */}
                                                    <select
                                                        className="form-control"
                                                        name="district"
                                                        value={this.state.district}
                                                        onChange={this.changeEventHandler}>
                                                        <option value="ss">Select District</option>
                                                        {
                                                            this.state.districtList.map(r =>
                                                                <option key={r.districtId} value={r.districtId}>
                                                                    {r.districtName}
                                                                </option>
                                                            )
                                                        }
                                                    </select>
                                                    <span style={{ color: "red" }}>{this.state.errors["district"]}</span>
                                                </div>
                                                <label className="col-sm-12 col-lg-2 col-xl-2 ">Taluka<span className="text-danger">*</span>:</label>
                                                <div className="col-sm-12 col-lg-4 col-xl-4">
                                                    {/* <input type="text" className="form-control" name="taluka" placeholder="Enter Taluka" value={this.state.taluka} onChange={this.changeEventHandler} /> */}
                                                    <select
                                                        className="form-control"
                                                        name="taluka"
                                                        value={this.state.taluka}
                                                        onChange={this.changeEventHandler}>
                                                        <option value="ss">Select Taluka</option>
                                                        {
                                                            this.state.talukaList.map(r =>
                                                                <option key={r.talukaId} value={r.talukaId}>
                                                                    {r.talukaName}
                                                                </option>
                                                            )
                                                        }
                                                    </select>
                                                    <span style={{ color: "red" }}>{this.state.errors["taluka"]}</span>
                                                </div>
                                            </div>
                                            <div className="form-group row" aria-expanded="true">

                                                <label className="col-sm-12 col-lg-2 col-xl-2 ">Pin Code<span className="text-danger">*</span>:</label>
                                                <div className="col-sm-12 col-lg-4 col-xl-4 ">
                                                    <input type="text"
                                                        className="form-control"
                                                        name="pinCode"
                                                        placeholder="Enter PinCode"
                                                        value={this.state.pinCode}
                                                        onChange={this.changeEventHandler} />
                                                    <span style={{ color: "red" }}>{this.state.errors["pinCode"]}</span>
                                                </div>

                                                <label className="col-sm-12 col-lg-2 col-xl-2 ">Fax No:</label>
                                                <div className="col-sm-12 col-lg-4 col-xl-4">
                                                    <input type="text"
                                                        className="form-control"
                                                        name="faxNo"
                                                        placeholder="Enter Fax Number"
                                                        value={this.state.faxNo}
                                                        onChange={this.changeEventHandler} />
                                                    <span style={{ color: "red" }}>{this.state.errors["faxNo"]}</span>
                                                </div>

                                            </div>
                                            <div className="form-group row" aria-expanded="true">

                                                <label className="col-sm-12 col-lg-2 col-xl-2 ">Phone No<span className="text-danger">*</span>:</label>
                                                <div className="col-sm-12 col-lg-4 col-xl-4 ">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="phoneNo"
                                                        placeholder="Enter Phone Number"
                                                        value={this.state.phoneNo}
                                                        onChange={this.changeEventHandler} />
                                                    <span style={{ color: "red" }}>{this.state.errors["phoneNo"]}</span>
                                                </div>

                                                <label className="col-sm-12 col-lg-2 col-xl-2 ">Mobile No<span className="text-danger">*</span>:</label>
                                                <div className="col-sm-12 col-lg-4 col-xl-4">
                                                    <input type="text"
                                                        className="form-control"
                                                        name="mobileNo"
                                                        placeholder="Enter Mobile Number"
                                                        value={this.state.mobileNo}
                                                        onChange={this.changeEventHandler} />
                                                    <span style={{ color: "red" }}>{this.state.errors["mobileNo"]}</span>
                                                </div>

                                            </div>
                                            <div className="form-group row" aria-expanded="true">

                                                <label className="col-sm-12 col-lg-2 col-xl-2 ">Email Id<span className="text-danger">*</span>:</label>
                                                <div className="col-sm-12 col-lg-4 col-xl-4 ">
                                                    <input type="text"
                                                        className="form-control"
                                                        name="emailId"
                                                        placeholder="Enter Email Id"
                                                        value={this.state.emailId}
                                                        onChange={this.changeEventHandler} />
                                                    <span style={{ color: "red" }}>{this.state.errors["emailId"]}</span>
                                                </div>

                                                <label className="col-sm-12 col-lg-2 col-xl-2 ">Alternate Email Id:</label>
                                                <div className="col-sm-12 col-lg-4 col-xl-4">
                                                    <input type="text"
                                                        className="form-control"
                                                        name="altEmail"
                                                        placeholder="Enter Alternate Email Id"
                                                        value={this.state.altEmail}
                                                        onChange={this.changeEventHandler} />
                                                    <span style={{ color: "red" }}>{this.state.errors["altEmail"]}</span>
                                                </div>

                                            </div>
                                            <div className="row pt-3" aria-expanded="true" >

                                                <div className="col-lg-10 col-xl-10">
                                                </div>
                                                <div className="col-sm-6 col-lg-1 col-xl-1 ">
                                                    <button className="btn hor-grd btn-grd-primary " onClick={this.saveBranchData}>{this.state.textValue}</button>
                                                </div>
                                                <div className="col-sm-6 col-lg-1 col-xl-1">
                                                    <button className="btn hor-grd btn-grd-danger" onClick={this.cancelRecord}>Cancel</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default BranchMaster;



