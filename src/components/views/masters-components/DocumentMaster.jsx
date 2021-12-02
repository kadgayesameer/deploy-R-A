import React, { Component } from 'react';
import DocumentMasterService from '../../../Services/masterService/DocumentMasterService';
import Swal from 'sweetalert2';
import $ from 'jquery';
import { Link } from "react-router-dom";

class DocumentMaster extends Component {
    constructor(props) {
        super(props);
        this.state = {
            docType: 'L',
            documentData: [{ docId: "", docName: "", imgStatus: "yes", priority: "low", compulsary: "yes" }],
            documentItems: [{ docId: "", docName: "", imgStatus: "yes", priority: "low", compulsary: "yes" }],
            errors: {}
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        DocumentMasterService.getDocumentListByDoc(this.state.docType).then((res) => {
            this.setState({
                documentData: res.data.response
            });
        })
    }

    changeHandler = (event) => {
        this.setState({ docType: event.target.value })
    }

    changeEventHandler = (i, event) => {
        const name = event.target.name;
        const value = event.target.value;
        if (["docName", "imgStatus", "priority", "compulsary"].includes(event.target.name)) {
            const { name, value } = event.target;
            let documentData = [...this.state.documentData];
            documentData[i] = { ...documentData[i], [name]: value };
            this.setState({ documentData });
        }

    }

    appendNewRow = (event) => {
        event.preventDefault();
        this.setState((prevState) => ({
            documentData: [...prevState.documentData, { docId: "", docName: "", imgStatus: "yes", priority: "low", compulsary: "yes" }]
        }))
    }

    handleValidation = (event) => {
        let errors = {};
        let formIsValid = true;
        //console.log("validation documentData=====>>>"+JSON.stringify(this.state.documentData));
        // if (!this.state.documentData) {
        //     formIsValid = false;
        //     errors["tableError"] = "Please Enter Name of Document.";
        // }

        $('#documentTable').find('tr input[type=text]').each(function () {
            //alert("table validation===>>>"+$(this).val());
            // var table = document.getElementById("documentTable");
            // var row = table.rows[index];
            //document.getElementsByTagName("tr")[index].id;
            // alert("table row id===>>>"+$('input[name="docName"]'));
            if ($(this).val() == "") {
                formIsValid = false;
                errors["tableError"] = "Please Enter Name of Document.";
                $('td input[name="docName"]').focus();
            }
        })
        this.setState({ errors: errors });
        return formIsValid;
    }

    saveDocumentData = (event) => {
        event.preventDefault();
        let data = {
            "docType": this.state.docType,
            "documentList": JSON.stringify(this.state.documentData)
        }
        const isValid = this.handleValidation();
        //  alert(isValid);
        if (isValid) {
            DocumentMasterService.saveDocumentData(data).then(res => {
                let msg = res.data.message;
                let code = res.data.code;
                this.fetchData();
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
            }).catch(error => {
                Swal.fire({
                    text: "Something Went Wrong",
                    icon: "error",
                });
            });
        }
    }

    handleDeleteRow = (index, docId) => {
        if (docId != "") {
            DocumentMasterService.getDocumenById(docId).then((res) => {
                this.setState({
                    documentItems: res.data.response
                });
                DocumentMasterService.deleteDocumentById(docId).then((res) => {
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
                })
            })
        }
        let rows = [...this.state.documentData]
        rows.splice(index, 1)
        this.setState({
            documentData: rows
        })
    }

    viewDocumentData = (event) => {
        event.preventDefault();
        this.setState({ docType: event.target.value })
        const value = event.target.value;
        DocumentMasterService.getDocumentListByDoc(value).then((res) => {
            this.setState({
                documentData: res.data.response
            });
        })
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
                                                <h3 className="font-weight-bold">Document Master</h3>
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
                                                    <Link to="#">DocumentMaster</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="page-body">
                                <div className="row">
                                    <div className="col-md-12 col-xl-12" id="documentTable">
                                        <div className="card p-4">
                                            <div className="form-group row" aria-expanded="true">
                                                <label className="col-sm-12 col-lg-1 col-xl-1 ">Type:</label>
                                                <div className="col-sm-12 col-lg-2 col-xl-2 ">
                                                    <select className="form-control" name="docType" onChange={this.changeHandler} onChange={this.viewDocumentData}>
                                                        {/* <option value="ss">Select Type</option> */}
                                                        <option value="L">Loan</option>
                                                        <option value="D">Deposite</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row" >
                                                <div className="col-md-2 offset-10">
                                                    <button className="btn btn-primary" onClick={this.appendNewRow}><i className="fas fa-plus">Add</i></button>
                                                </div>
                                            </div>
                                            <div className="card-block table-border-style">
                                                <div className="table-responsive p-2">
                                                    <span style={{ color: "red" }}>{this.state.errors["tableError"]}</span>
                                                    <table id="documentTable" className="table table-hover table-bordered table-striped text-center font-weight-bold">
                                                        <thead>
                                                            <tr className="btn-grd-blue-reverse">
                                                                <th>Sr. No </th>
                                                                <th>Document Name</th>
                                                                <th>Image</th>
                                                                <th>Priority</th>
                                                                <th>Compulsary</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                this.state.documentData.map((documentData, i) => (
                                                                    <tr key={i}>
                                                                        <td>{i + 1}</td>
                                                                        <td>
                                                                            <input type="hidden" className="form-control" name="docId" onChange={this.changeEventHandler.bind(this, i)} value={documentData.docId} />
                                                                            <input type="text" className="form-control" name="docName" onChange={this.changeEventHandler.bind(this, i)} value={documentData.docName} />
                                                                        </td>
                                                                        <td>
                                                                            <select className="form-control" name="imgStatus" onChange={this.changeEventHandler.bind(this, i)} value={documentData.imgStatus}>
                                                                                <option value="yes">Yes</option>
                                                                                <option value="no">No</option>
                                                                            </select>
                                                                        </td>
                                                                        <td>
                                                                            <select className="form-control" name="priority" onChange={this.changeEventHandler.bind(this, i)} value={documentData.priority}>
                                                                                <option value="high">High</option>
                                                                                <option value="medium">Medium</option>
                                                                                <option value="low">Low</option>
                                                                            </select>
                                                                        </td>
                                                                        <td>
                                                                            <select className="form-control" name="compulsary" onChange={this.changeEventHandler.bind(this, i)} value={documentData.compulsary}>
                                                                                <option value="yes">Yes</option>
                                                                                <option value="no">No</option>
                                                                            </select>
                                                                        </td>
                                                                        <td>
                                                                            <button className="btn btn-xs btn-grd-danger m-1" onClick={this.handleDeleteRow.bind(this, i, documentData.docId)}><i className="fas fa-trash"></i></button>
                                                                            {/* <button className="btn btn-xs btn-grd-primary m-1" onClick={() => this.viewDataBranch(documentData.branchId,"M")}><i className="fas fa-edit"></i></button>
                                                                        <button className="btn btn-xs btn-grd-danger m-1" onClick={() => this.viewDataBranch(documentData.branchId,"D")}><i className="fas fa-trash"></i></button> */}
                                                                        </td>
                                                                    </tr>
                                                                ))
                                                            }
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-2 offset-10">
                                                    <button className="btn btn-primary" onClick={this.saveDocumentData}>Save</button>
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


export default DocumentMaster;