import React, { Component } from 'react';
import StateService from '../../../Services/masterService/StateService';
import { Link } from "react-router-dom";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
import Swal from 'sweetalert2';


class StateMaster extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stateId: this.props.match.params.stateId,
            // stateCode: '',
            stateGstCode: '',
            stateName: '',
            country: '',
            textValue: 'Submit',
            errors: {},
            stateMasterData: [],
        }
        this.changeEventHandler = this.changeEventHandler.bind(this);
        this.saveStateData = this.saveStateData.bind(this);
        this.ViewStateData = this.ViewStateData.bind(this);
        this.deleteStateData = this.deleteStateData.bind(this);
        this.clear = this.clear.bind(this);
        this.reloadTableData = this.reloadTableData.bind(this);

    }
    componentDidMount() {
        this.reloadTableData();
    }

    reloadTableData() {
        //alert("reloadTableData");
        StateService.getStateMaster().then((resp) => {
             console.log("stateMasterData =====>>>>" + JSON.stringify(resp.data.response));
            this.setState({ stateMasterData: resp.data.response });

        });
        //initialize datatable
        $(document).ready(function () {
            setTimeout(function () {
                $('#stateTable').DataTable({
                    pageLength: 5,
                    lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 50]]
                });
            }, 1000);
        });
    }

    changeEventHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    handleValidation = (event) => {
        let errors = {};
        let formIsValid = true;

        // if (!this.state.stateCode) {
        //     formIsValid = false;
        //     errors["stateCode"] = "State Code Cannot be empty";
        // }

        if (!this.state.stateGstCode) {
            formIsValid = false;
            errors["stateGstCode"] = "State GST Code Cannot be empty";
        } else if (typeof this.state.stateGstCode !== NaN) {
            const numberRegEx = /^[0-9\b]+$/;
            if (!numberRegEx.test(String(this.state.stateGstCode).toLowerCase())) {

                formIsValid = false;
                errors["stateGstCode"] = "State GST code must contain only numbers";
            }
        }

        if (!this.state.stateName) {
            formIsValid = false;
            errors["stateName"] = "State Name Cannot be empty";

        } else if (typeof this.state.stateName !== "undefined") {
            if (!(this.state.stateName).match(/^[a-zA-Z\s]*$/)) {
                formIsValid = false;
                errors["stateName"] = "State name must contain only letters";
            }
        }

        if (!this.state.country) {
            formIsValid = false;
            errors["country"] = "Please Select Country ";
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    saveStateData = (event) => {
        //alert("i m in function");
        event.preventDefault();
        let stateData = {
            stateId: this.state.stateId,
            // stateCode: this.state.stateCode,
            stateGstCode: this.state.stateGstCode,
            stateName: this.state.stateName,
            country: this.state.country
        }
        // console.log('stateData => ' + JSON.stringify(stateData));
        const isValid = this.handleValidation();
        // alert(isValid);
        if (isValid) {
            if (this.state.textValue === "Submit") {
                StateService.saveStateMaster(stateData).then(res => {
                    // this.props.history.push('/rna/stateMaster');
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
                    this.reloadTableData();

                });
            } else if (this.state.textValue === "Update") {

                StateService.updateStateMaster(stateData, this.state.stateId).then(res => {
                    // this.props.history.push('/rna/stateMaster');
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
                    this.reloadTableData();
                });
            } else if (this.state.textValue === "Delete") {
                StateService.deleteStateMaster(this.state.stateId).then(res => {
                    this.setState({ stateMasterData: this.state.stateMasterData.filter(stateMasterData => stateMasterData.stateId !== this.state.stateId) })
                    //this.props.history.push('/stateMasterData');
                    let msg = res.data.message;
                    let code = res.data.code;

                    if (code === 100) {
                        Swal.fire({
                            title: "Oops...",
                            text: msg,
                            icon: "error",

                        });

                    }
                    else if (code === 204) {
                        Swal.fire({
                            title: "Good job!",
                            text: msg,
                            icon: "success",

                        });

                    }
                    this.reloadTableData();
                });
            }
            this.clear();
        }


    }

    ViewStateData(stateId) {
        // alert("Update Record function===>>>>"+stateId );
        this.setState({
            textValue: 'Update'
            
        });
        StateService.getStateById(stateId).then((res) => {
            let stateMaster = res.data.response;
            this.setState({
                stateId: stateId,
                // stateCode: stateMaster.stateCode,
                stateGstCode: stateMaster.stateGstCode,
                stateName: stateMaster.stateName,
                country: stateMaster.country
            });
        });
    }

    deleteStateData(stateId) {
        this.setState({
            textValue: 'Delete'
        });
        StateService.getStateById(stateId).then((res) => {
            let stateMaster = res.data.response;
            this.setState({
                stateId: stateId,
                // stateCode: stateMaster.stateCode,
                stateGstCode: stateMaster.stateGstCode,
                stateName: stateMaster.stateName,
                country: stateMaster.country
            });
        });
    }

    clear() {
        this.setState({
            stateId: '',
            //stateCode: '',
            stateGstCode: '',
            stateName: '',
            country: '',
            textValue: 'Submit',
            errors: ''
        });
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
                                                <h3 className="font-weight-bold">State Master</h3>
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
                                                    <Link to="#">StateMaster</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="page-body">
                                <div className="row">
                                    <div className="col-md-6 col-xl-6">
                                        <div className="card p-4">

                                            <div className="form-group">

                                                <input type="hidden" placeholder="State Id" name="stateId" className="form-control"
                                                    value={this.state.stateId} onChange={this.changeEventHandler} />

                                            </div>
                                            {/* <div className="form-group row">
                                                <label className="col-sm-4 col-form-label ">State Code</label>
                                                <div className="col-sm-8">
                                                    <input type="text" className="form-control col-sm-6" name="stateCode" placeholder="Enter State Code" value={this.state.stateCode} onChange={this.changeEventHandler} />
                                                    <span  style={{ color: "red" }}>{this.state.errors["stateCode"]}</span>
                                                </div>
                                            </div> */}
                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label ">State GST Code<span className="text-danger">*</span>:</label>
                                                <div className="col-sm-8">
                                                    <input type="text" className="form-control col-sm-6" name="stateGstCode" placeholder="Enter State GST Code" value={this.state.stateGstCode} onChange={this.changeEventHandler} />
                                                    <span style={{ color: "red" }}>{this.state.errors["stateGstCode"]}</span>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label ">State Name<span className="text-danger">*</span>:</label>
                                                <div className="col-sm-8">
                                                    <input type="text" className="form-control"
                                                        placeholder="Enter State Name" name="stateName" value={this.state.stateName} onChange={this.changeEventHandler} />
                                                    <span style={{ color: "red" }}>{this.state.errors["stateName"]}</span>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label ">Select Country<span className="text-danger">*</span>:</label>
                                                <div className="col-sm-8">
                                                    <select className="form-control" name="country" value={this.state.country} onChange={this.changeEventHandler}>
                                                        <option value="ss">Select Country</option>
                                                        <option value="India">India</option>
                                                    </select>
                                                    <span style={{ color: "red" }}>{this.state.errors["country"]}</span>

                                                </div>
                                            </div>
                                            <div className="form-group row pt-3">
                                                <div className="col-sm-2 offset-sm-7">
                                                    <button className="btn btn-sm btn-grd-primary" onClick={this.saveStateData}>{this.state.textValue}</button>

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
                                                    <table id="stateTable" className="table table-striped table-bordered table-hover">
                                                        <thead>
                                                            <tr>
                                                                {/* <th>Sr. no. </th> */}
                                                                <th>GST Code</th>
                                                                <th>State Name</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="statebody">
                                                            {/* let i = 0; */}
                                                            {
                                                                this.state.stateMasterData.map(
                                                                    stateMasterData =>
                                                                        <tr key={stateMasterData.stateId}>
                                                                            {/* <td>{stateMasterData.stateCode}</td> */}
                                                                            <td>{stateMasterData.stateGstCode}</td>
                                                                            <td>{stateMasterData.stateName}</td>
                                                                            <td>
                                                                                <button className="btn btn-xs btn-grd-primary m-1" onClick={() => this.ViewStateData(stateMasterData.stateId)}><i className="fas fa-edit"></i></button>
                                                                                <button className="btn btn-xs btn-grd-danger m-1"  onClick={() => this.deleteStateData(stateMasterData.stateId)} ><i className="fas fa-trash"></i></button>
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


export default StateMaster;
