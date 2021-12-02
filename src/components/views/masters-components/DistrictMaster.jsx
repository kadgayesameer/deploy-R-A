import React, { Component } from 'react';
import DistrictService from '../../../Services/masterService/DistrictService';

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
import Swal from 'sweetalert2';

const changeButton = false;

class DistrictMaster extends Component {
    constructor(props) {
        super(props)
        this.state = {
            districtId: '',
            districtCode: '',
            districtName: '',
            stateMaster: '',
            stateNameData: [],
            district: [],
            errors: {},

            textButton: 'Submit',

        }

        this.changeDistrictNameHandler = this.changeDistrictNameHandler.bind(this);
        this.changeDistrictIdHandler = this.changeDistrictIdHandler.bind(this);
        this.changeDistrictCodeHandler = this.changeDistrictCodeHandler.bind(this);
        // this.changeStateNameHandler = this.changeStateNameHandler.bind(this);
        this.saveDistrict = this.saveDistrict.bind(this);
        this.clear = this.clear.bind(this);
        this.changeEventHandler = this.changeEventHandler.bind(this);

    }

    handleValidation = (event) => {

        // alert("inside hv");
        let errors = {};
        let formIsValid = true;

        if (!this.state.districtCode) {
            formIsValid = false;
            // alert("hi");
            errors["districtCodeError"] = "District Code Cannot be empty";
        }

        if (!this.state.districtName) {
            formIsValid = false;
            errors["districtNameError"] = "District Name Cannot be empty";
        } else if (typeof this.state.districtCode !== NaN) {
            const numberRegEx = /^[0-9\b]+$/;
            if (!numberRegEx.test(String(this.state.districtCode).toLowerCase())) {

                formIsValid = false;
                errors["districtCodeError"] = "District code must contain only numbers";
            }
        }

        if (!this.state.stateMaster) {
            formIsValid = false;
            errors["stateName"] = "Please Select State";

        } else if (typeof this.state.districtName !== "undefined") {
            if (!(this.state.districtName).match(/^[a-zA-Z\s]*$/)) {
                formIsValid = false;
                errors["districtName"] = "District name must contain only letters";
            }
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    saveDistrict = (e) => {
        e.preventDefault();
        // alert(this.state.stateMaster);
        let district = {
            districtId: this.state.districtId,
            districtCode: this.state.districtCode,
            districtName: this.state.districtName,
            stateMaster: {
                stateId: this.state.stateMaster
            }
        };

        // console.log('District => ' + JSON.stringify(district));
        // if (this.state.stateMaster == "ss" || this.state.stateMaster == "") {
        //     // alert("Please Select State");
        //     this.state.errors["stateNameError"] = "Please Select Country ";
        //     return false;
        // }

        const isValid = this.handleValidation();
        // alert(isValid)
        if (isValid) {
            if (this.state.textButton == "Submit") {
                DistrictService.createDistrict(district).then((res) => {

                    let msg = res.data.message;
                    let code = res.data.code;

                    if (code === 100) {
                        Swal.fire({
                            title: "Oops...",
                            text: msg,
                            icon: "error",

                        });

                    }
                    else if (code === 200) {
                        Swal.fire({
                            title: "Good job!",
                            text: msg,
                            icon: "success",

                        });

                    }
                    this.fetchData();

                },  (error) => {
                    console.log("Response ====>> " + error);
                }
                );
            } else if (this.state.textButton == "Update") {

                DistrictService.updateDistrictListById(district.districtId, district).then((res) => {
                    this.fetchData();

                    let msg = res.data.msg;
                    let code = res.data.code;

                    if (code === 100) {
                        Swal.fire({
                            title: "Oops...",
                            text: msg,
                            icon: "error",

                        });

                    }
                    else if (code === 200) {
                        Swal.fire({
                            title: "Good job!",
                            text: msg,
                            icon: "success",

                        });

                    }

                });

            } else if (this.state.textButton == "Delete") {

                DistrictService.deleteDistrict(this.state.districtId).then((res) => {
                    // this.setState({ district: this.state.district.filter(district => district.districtId !== this.state.districtId) })
                    this.fetchData();
                    let msg = res.data.msg;
                    let code = res.data.code;

                    if (code === 100) {
                        Swal.fire({
                            title: "Oops...",
                            text: msg,
                            icon: "error",

                        });

                    }
                    else if (code === 200) {
                        Swal.fire({
                            title: "Good job!",
                            text: msg,
                            icon: "success",

                        });

                    }


                });

            }
        }

    }

    editEmployee(desId) {

        this.setState({
            textButton: 'Update'
        })
        DistrictService.getDistrictListById(desId).then((resp) => {
            let district = resp.data.response;
            this.setState({
                districtId: district.districtId,
                districtCode: district.districtCode,
                districtName: district.districtName,
                stateMaster: district.stateMaster.stateId

            });
            // alert(district.stateMaster.stateId);
            // this.fetchData();

        });

    }

    deleteEmployee(desId) {

        this.setState({
            textButton: 'Delete'
        });

        DistrictService.getDistrictListById(desId).then((resp) => {
            let district = resp.data.response;
            this.setState({
                districtId: district.districtId,
                districtCode: district.districtCode,
                districtName: district.districtName,
                stateMaster: district.stateMaster.stateId

            });
            // this.fetchData();

        });

    }

    componentDidMount() {

        this.fetchData();
        DistrictService.getStateData().then((res) => {

            console.log(res);
            this.setState({ stateNameData: res.data.response })
        });

    }
    fetchData() {

        if ($.fn.DataTable.isDataTable('#districtTable')) {
            $('#districtTable').DataTable().destroy();
        }

        // $("#districtTable").empty();
        $("#districtTable districtTbody").empty();

        DistrictService.getDistrict().then(
            (resp) => {

                this.setState({ district: resp.data.response })
                // this.setState({ stateMaster: resp.data.response.stateMaster.stateName})
            }
        );

        //initialize datatable


        $(document).ready(function () {

            setTimeout(function () {


                $('#districtTable').DataTable({

                    pageLength: 5,
                    lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 50]]
                });
            }, 1000);
        });
    }

    changeDistrictIdHandler = (event) => {
        this.setState({ id: event.target.value });
    }
    changeDistrictCodeHandler = (event) => {
        this.setState({ districtCode: event.target.value });
    }
    changeDistrictNameHandler = (event) => {
        this.setState({ districtName: event.target.value });
    }
    // changeStateNameHandler = (event) => {
    //     this.setState({ stateName: event.target.value });
    // }

    changeEventHandler = (event) => {
        // this.setState({stateName : event.target.value});

        this.setState({ stateMaster: event.target.value })

    }



    clear() {

        this.setState({
            districtId: '',
            districtCode: '',
            districtName: '',
            stateMaster: "ss",
            textButton: 'Submit'
        });
    }

    render() {
        return (
            <>
                <div className="main-panel">
                    <div className="content">
                        <div className="page-inner" /*style={{ backgroundColor: "#d9d9d9" }}*/>
                            <div className="card p-3">
                                <div className="row align-items-end">
                                    <div className="col-lg-8">
                                        <div className="page-header-title">

                                            <div className="d-inline">
                                                <h3 className="font-weight-bold">District Master</h3>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="page-body">
                                <div className="row">
                                    <div className="col-md-6 col-xl-6">
                                        <div className="card p-4">

                                            <div className="form-group">

                                                <input type="hidden" placeholder="District Id" name="id" className="form-control"
                                                    value={this.state.districtId} onChange={this.changeDistrictIdHandler} />

                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label ">District Code</label>
                                                <div className="col-sm-4">
                                                    <input type="text" className="form-control" name="districtCode" value={this.state.districtCode} onChange={this.changeDistrictCodeHandler} />
                                                    <span style={{ color: "red" }}>{this.state.errors["districtCodeError"]}</span>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label">District Name</label>
                                                <div className="col-sm-8">
                                                    <input type="text" className="form-control"
                                                        placeholder="Enter District Name" name="districtName" value={this.state.districtName} onChange={this.changeDistrictNameHandler} />
                                                    <span style={{ color: "red" }}>{this.state.errors["districtNameError"]}</span>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label">Select State</label>
                                                <div className="col-sm-8">
                                                    
                                                    <select className="form-control" value={this.state.stateMaster} onChange={this.changeEventHandler}>
                                                        <option value="ss">Select State</option>
                                                        {
                                                            this.state.stateNameData.map(r =>
                                                                <option key={r.stateId} value={r.stateId}>
                                                                    {r.stateName}
                                                                </option>
                                                            )
                                                        }
                                                    </select>
                                                    <span style={{ color: "red" }}>{this.state.errors["stateNameError"]}</span>

                                                </div>
                                            </div>
                                            <div className="form-group row pt-3">
                                                <div className="col-sm-2 offset-sm-7">
                                                    <button className="btn btn-sm btn-grd-primary" onClick={this.saveDistrict}>{this.state.textButton}</button>
                                                </div>

                                                <div className="col-sm-2 ml-3">
                                                    <button className="btn btn-sm btn-grd-danger" onClick={this.clear}>Cancel</button>
                                                </div>


                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-md-12 col-xl-6">
                                        <div className="card p-4">

                                            <div className="card-block table-border-style">
                                                <div className="table-responsive p-2">
                                                    <table id="districtTable" className="table table-striped table-bordered table-hover">
                                                        <thead>
                                                            <tr>
                                                                <th>District Code</th>
                                                                <th>District Name</th>
                                                                <th>State Name</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="disttictTbody">
                                                            {
                                                                this.state.district.map(
                                                                    districts =>
                                                                        <tr key={districts.districtId}>
                                                                            <td>{districts.districtCode}</td>
                                                                            <td>{districts.districtName}</td>
                                                                            <td>{districts.stateMaster.stateName}</td>
                                                                            <td className="text-center">
                                                                                <button onClick={() => this.editEmployee(districts.districtId)} className="btn btn-xs btn-grd-primary m-1"><i class="fas fa-edit"></i></button>
                                                                                <button onClick={() => this.deleteEmployee(districts.districtId)} className="btn btn-xs btn-grd-danger m-1"><i class="fas fa-trash"></i></button>


                                                                            </td>
                                                                        </tr>
                                                                )
                                                            }
                                                        </tbody>

                                                    </table>
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


export default DistrictMaster;