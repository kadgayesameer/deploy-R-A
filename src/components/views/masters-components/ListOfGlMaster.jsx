import React, { Component } from 'react';
import GlMasterService from '../../../Services/masterService/GlMasterService';
import { Link } from "react-router-dom";
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';

class ListOfGlMaster extends Component {
    constructor(props) {
        super(props);
        this.state = {
            glMasterData: []
        }
        this.addNewGL = this.addNewGL.bind(this);
        this.viewGlData = this.viewGlData.bind(this);
    }

    componentDidMount() {
        GlMasterService.getGlDataList().then(res => {
            this.setState({ glMasterData: res.data.response });
        })

        $(document).ready(function () {
            setTimeout(function () {
                $('#glTable').DataTable({
                    pageLength: 10,
                    lengthMenu: [[10, 20, -1], [10, 20, 50]]
                });
            }, 1000);
        });
    }

    addNewGL() {
        this.props.history.push('/rna/GLMaster');
    }

    viewGlData(glId, flag) {
        this.props.history.push(`/rna/updateGlMaster/${glId}/${flag}`);
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
                                                <h3 className="font-weight-bold">GL Master</h3>
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
                                                    <Link to="#">GLMaster</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="page-body">
                                <div className="row">
                                    <div className="col-md-12 col-xl-12" >
                                        <div className="card p-4">
                                            <div className="row" >
                                                <div className="col-md-2 offset-10">
                                                    <button
                                                        className="btn btn-sm btn-grd-primary font-weight-bold "
                                                        onClick={this.addNewGL}>
                                                        <i className="fas fa-plus">
                                                            Add New GL
                                                        </i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="card-block table-border-style">
                                                <div className="table-responsive p-2">
                                                    <table id="glTable" className="table table-hover table-bordered table-striped text-center font-weight-bold">
                                                        <thead>
                                                            <tr className="btn-grd-blue-reverse">
                                                                <th>Sr. no. </th>
                                                                <th>GL Type</th>
                                                                <th>GL Name</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                this.state.glMasterData.map(
                                                                    (glMasterData, i) =>
                                                                        <tr key={glMasterData.glId}>
                                                                            <td>{i + 1}</td>
                                                                            {glMasterData.glType === "L" ? <td>Laibility</td> : glMasterData.glType === "A" ? <td>Assest</td> : glMasterData.glType === "E" ? <td>Expenditure</td> : glMasterData.glType === "I" ? <td>Income</td> : <td></td>}
                                                                            <td>{glMasterData.glName}</td>
                                                                            <td>
                                                                                <button className="btn btn-xs btn-grd-primary m-1" onClick={() => this.viewGlData(glMasterData.glId, "M")}><i className="fas fa-edit"></i></button>
                                                                                <button className="btn btn-xs btn-grd-danger m-1" onClick={() => this.viewGlData(glMasterData.glId, "D")}><i className="fas fa-trash"></i></button>
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

export default ListOfGlMaster;