import React, { Component } from 'react';
import BranchMasterService from '../../../Services/masterService/BranchMasterService';
import { Link } from "react-router-dom";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';

class ListOfBranchMaster extends Component {
    constructor(props) {
        super(props);
        this.state = {
            branchMasterData: []
        }
        this.addNewBranch = this.addNewBranch.bind(this);
        this.viewDataBranch = this.viewDataBranch.bind(this);
    }

    componentDidMount() {
        BranchMasterService.getBranchMaster().then(res => {
            //console.log()
            this.setState({ branchMasterData: res.data.response });
        })

        //initialize datatable
        $(document).ready(function () {
            setTimeout(function () {
                $('#stateTable').DataTable({
                    pageLength: 10,
                    lengthMenu: [[10, 20, -1], [10, 20, 50]]
                });
            }, 1000);
        });
    }

    addNewBranch() {
        this.props.history.push('/rna/branchMaster');
    }

    viewDataBranch(branchId, flag) {
        //alert(flag);
        this.props.history.push(`/rna/updateBranchMaster/${branchId}/${flag}`);
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
                                    <div className="col-md-12 col-xl-12" id="branchTable">
                                        <div className="card p-4">
                                            <div className="row" >
                                                <div className="col-md-2 offset-10">
                                                    <button
                                                        className="btn btn-sm btn-grd-primary font-weight-bold my-1"
                                                        onClick={this.addNewBranch}>
                                                        <i className="fas fa-plus">
                                                            Add Branch
                                                        </i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="card-block table-border-style">
                                                <div className="table-responsive p-2">
                                                    <table id="stateTable" className="table table-hover table-bordered table-striped text-center font-weight-bold">
                                                        <thead>
                                                            <tr className="btn-grd-blue-reverse">
                                                                <th>Sr. no. </th>
                                                                <th>Branch Name</th>
                                                                <th>Branch Address</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                this.state.branchMasterData.map(
                                                                    (branchMasterData, i )=>
                                                                        <tr key={branchMasterData.branchId}>
                                                                            <td>{i+1}</td>
                                                                            <td>{branchMasterData.branchName}</td>
                                                                            <td>{branchMasterData.branchAddress}</td>
                                                                            <td>
                                                                                <button className="btn btn-xs btn-grd-primary m-1" onClick={() => this.viewDataBranch(branchMasterData.branchId, "M")}><i className="fas fa-edit"></i></button>
                                                                                <button className="btn btn-xs btn-grd-danger m-1" onClick={() => this.viewDataBranch(branchMasterData.branchId, "D")}><i className="fas fa-trash"></i></button>
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

export default ListOfBranchMaster;