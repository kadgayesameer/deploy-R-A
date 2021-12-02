import React, { Component } from 'react';
import { Link } from "react-router-dom";
import GlMasterService from '../../../Services/masterService/GlMasterService';
import Swal from 'sweetalert2';
import moment from 'moment';

class GLMaster extends Component {
    constructor(props) {
        super(props);
        this.state = {
            glId: this.props.match.params.glId,
            flag: this.props.match.params.flag,
            glType: '',
            groupName: '',
            subGroupName: '',
            subSubGroupName: '',
            glCode: '',
            glName: '',
            note: '',
            contraNote: '',
            glOpenDate: '',
            glTypefilter: '',
            glStatus: 'E',
            subledger: 'Y',
            disableFields: '',
            textValue: 'Submit',
            groupList: [],
            subGroupList: [],
            subSubGrpList: [],
            noteList: [],
            contraNoteList: [],
            filterList: [],
            errors: {}
        };
        this.cancelRecord = this.cancelRecord.bind(this); 
    }

    changeEventHandler = (event) => {

        const name = event.target.name;
        const value = event.target.value;
        //alert("change state====>>"+value);
        this.setState({
            [name]: value
        });
    }

    componentDidMount() {
        GlMasterService.getGlById(this.state.glId).then(res => {
            let glData = res.data.response;
            this.setState({
                glType: glData.glType,
                groupName: glData.groupName,
                subGroupName: glData.subGroupName,
                subSubGroupName: glData.subSubGroupName,
                glCode: glData.glCode,
                glName: glData.glName,
                note: glData.note,
                contraNote: glData.contraNote,
                glOpenDate: glData.glOpenDate,//new Date(glData.glOpenDate).toLocaleDateString(),
                glTypefilter: glData.glTypefilter,
                glStatus: glData.glStatus,
                subledger: glData.subledger
            }, () => {
                console.log("gl date===>>>" + glData.glOpenDate);
            });

            if (this.state.flag == "M") {
                this.setState({
                    disableFields: true,
                    textValue: 'Update'
                });
            } else if (this.state.flag == "D") {
                this.setState({
                    disableFields: true,
                    textValue: 'Delete'
                });
            }
        })

        GlMasterService.getGlGroupDataList().then(res => {
            this.setState({ groupList: res.data.response });
        })

        GlMasterService.getGlSubGroupDataList().then(res => {
            this.setState({ subGroupList: res.data.response });
        })

        GlMasterService.getGlSubSubGroupDataList().then(res => {
            this.setState({ subSubGrpList: res.data.response });
        })

        GlMasterService.getGlNoteDataList().then(res => {
            this.setState({ noteList: res.data.response });
        })

        GlMasterService.getGlContraNoteDataList().then(res => {
            this.setState({ contraNoteList: res.data.response });
        })

        GlMasterService.getGlTypeFilterDataList().then(res => {
            this.setState({ filterList: res.data.response });
        })

    }

    cancelRecord() {
        //alert("cancel");
        this.props.history.push('/rna/listOfGlMaster');
    }

    handleValidation = (event) => {
        let errors = {};
        let formIsValid = true;

        if (!this.state.glType) {
            formIsValid = false;
            errors["glType"] = "Please Select GL Type!";
        }
        if (!this.state.groupName) {
            formIsValid = false;
            errors["groupName"] = "Please Select Group Name!";
        }
        if (!this.state.subGroupName) {
            formIsValid = false;
            errors["subGroupName"] = "Please Select Sub Group Name!";
        }
        if (!this.state.subSubGroupName) {
            formIsValid = false;
            errors["subSubGroupName"] = "Please Select Sub Sub Group Name!";
        }
        if (!this.state.glName) {
            formIsValid = false;
            errors["glName"] = "Please Enter GL Name!";
        }
        if (!this.state.note) {
            formIsValid = false;
            errors["note"] = "Please Select Note!";
        }
        if (!this.state.contraNote) {
            formIsValid = false;
            errors["contraNote"] = "Please Select Contra Note!";
        }
        if (!this.state.glOpenDate) {
            formIsValid = false;
            errors["glOpenDate"] = "Please Select GL Open Date!";
        }
        if (!this.state.glTypefilter) {
            formIsValid = false;
            errors["glTypefilter"] = "Please Select GL Filter Type!";
        }
        if (!this.state.subledger) {
            formIsValid = false;
            errors["subledger"] = "Please Select subledger!";
        }
        if (!this.state.glStatus) {
            formIsValid = false;
            errors["glStatus"] = "Please Select GL Status!";
        }
        this.setState({ errors: errors });
        return formIsValid;
    }


    saveGlData = (event) => {
        event.preventDefault();
        let glData = {
            glType: this.state.glType,
            groupName: this.state.groupName,
            subGroupName: this.state.subGroupName,
            subSubGroupName: this.state.subSubGroupName,
            glCode: this.state.glCode,
            glName: this.state.glName,
            note: this.state.note,
            contraNote: this.state.contraNote,
            glOpenDate: this.state.glOpenDate,
            glTypefilter: this.state.glTypefilter,
            glStatus: this.state.glStatus,
            subledger: this.state.subledger
        }
        const isValid = this.handleValidation();
        if (isValid) {
            if (this.state.textValue === "Submit") {
                let result = 0;
                let addres = 0;
                let result1 = null;
                GlMasterService.getGlCode(this.state.glType).then(res => {

                    let oldGlCode = res.data.response;
                  //  alert("oldGlCode====>>>"+oldGlCode);
                    result = parseInt(oldGlCode.substring(1));
                    addres = result + 1;
                   // alert(addres);
                    if (addres < 10) {
                        result1 = this.state.glType.concat("000" + addres);
                    } else if (addres > 9) {
                        result1 = this.state.glType.concat("00" + addres);
                    } else if (addres > 99) {
                        result1 = this.state.glType.concat("0" + addres);
                    } else if (addres > 999) {
                        result1 = this.state.glType.concat(addres);
                    }


                    this.setState({ glCode: result1 });

                    // alert(result1);
                    let glMasterData = {
                        glType: this.state.glType,
                        groupName: this.state.groupName,
                        subGroupName: this.state.subGroupName,
                        subSubGroupName: this.state.subSubGroupName,
                        glCode: result1,
                        glName: this.state.glName,
                        note: this.state.note,
                        contraNote: this.state.contraNote,
                        glOpenDate: this.state.glOpenDate,
                        glTypefilter: this.state.glTypefilter,
                        glStatus: this.state.glStatus,
                        subledger: this.state.subledger
                    }
                    GlMasterService.saveGLData(glMasterData).then(res => {
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
                                text: "Your GL Code is " + result1 + " Generated Successfully",
                                icon: "success",
                            });
                        }
                        this.props.history.push('/rna/listOfGlMaster');
                    })
                })
            } else if (this.state.textValue === "Update") {
                
                GlMasterService.updateGlMaster(glData, this.state.glId).then(res => {
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
                    this.props.history.push('/rna/listOfGlMaster');
                })
            }
            else if (this.state.textValue === "Delete") {
                GlMasterService.deleteGlById(this.state.glId).then(res => {
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
                    this.props.history.push('/rna/listOfGlMaster');
                })
            }
        }
    }

    render() {
        //const [startDate, setStartDate] = useState(new Date());
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
                                    <div className="col-md-12 col-xl-12" id="glForm">
                                        <div className="card p-4">
                                            <div className="form-group row">
                                                <label className="col-sm-12 col-lg-2 col-xl-2 font-weight-bold col-form-label">GL Type <span className="text-danger">*</span></label>
                                                <div className="col-sm-12 col-lg-4 col-xl-4">
                                                    <select
                                                        className="form-control "
                                                        name="glType"
                                                        value={this.state.glType}
                                                        onChange={this.changeEventHandler} 
                                                        // disabled={this.state.disableFields}
                                                        disabled={this.state.flag === "M"?this.state.disableFields:this.state.flag ==="D"?this.state.disableFields:""}
                                                        >

                                                        <option value="sgt">Select GL Type</option>
                                                        <option value="L">Laibility</option>
                                                        <option value="A">Assest</option>
                                                        <option value="I">Income</option>
                                                        <option value="E">Expenditure</option>
                                                    </select>
                                                    <span style={{ color: "red" }}>{this.state.errors["glType"]}</span>
                                                </div>
                                                <label className="col-sm-12 col-lg-2 col-xl-2 font-weight-bold col-form-label">Group Name <span className="text-danger">*</span></label>
                                                <div className="col-sm-12 col-lg-4 col-xl-4">
                                                    <select className="form-control"
                                                        name="groupName"
                                                        value={this.state.groupName}
                                                        onChange={this.changeEventHandler} 
                                                        disabled={this.state.flag ==="D"?this.state.disableFields:""}
                                                        >
                                                        
                                                        <option value="sgn">Select Group Name</option>
                                                        {/* <option value="1">Group Name</option> */}
                                                        {
                                                            this.state.groupList.map(r =>
                                                                <option key={r.groupId} value={r.groupId}>
                                                                    {r.groupName}
                                                                </option>
                                                            )
                                                        }
                                                    </select>
                                                    <span style={{ color: "red" }}>{this.state.errors["groupName"]}</span>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-12 col-lg-2 col-xl-2 font-weight-bold col-form-label">Sub Group Name<span className="text-danger">*</span></label>
                                                <div className="col-sm-12 col-lg-4 col-xl-4">
                                                    <select
                                                        className="form-control "
                                                        name="subGroupName"
                                                        value={this.state.subGroupName}
                                                        onChange={this.changeEventHandler} 
                                                        disabled={this.state.flag ==="D"?this.state.disableFields:""}>
                                                        <option value="sgn">Select Sub Group Name</option>
                                                        {/* <option value="1"> Sub Group Name</option> */}
                                                        {
                                                            this.state.subGroupList.map(r =>
                                                                <option key={r.subGrpId} value={r.subGrpId}>
                                                                    {r.subGroupName}
                                                                </option>
                                                            )
                                                        }
                                                    </select>
                                                    <span style={{ color: "red" }}>{this.state.errors["subGroupName"]}</span>
                                                </div>
                                                <label className="col-sm-12 col-lg-2 col-xl-2 font-weight-bold col-form-label">Sub Sub Group Name<span className="text-danger">*</span></label>
                                                <div className="col-sm-12 col-lg-4 col-xl-4 ">
                                                    <select
                                                        className="form-control "
                                                        name="subSubGroupName"
                                                        value={this.state.subSubGroupName}
                                                        onChange={this.changeEventHandler}
                                                        disabled={this.state.flag ==="D"?this.state.disableFields:""} >
                                                        <option value="sgn">Select Sub Sub Group Name</option>
                                                        {/* <option value="1"> Sub Sub Group Name</option> */}
                                                        {
                                                            this.state.subSubGrpList.map(r =>
                                                                <option key={r.subSGrpId} value={r.subSGrpId}>
                                                                    {r.subSGrpName}
                                                                </option>
                                                            )
                                                        }
                                                    </select>
                                                    <span style={{ color: "red" }}>{this.state.errors["subSubGroupName"]}</span>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-12 col-lg-2 col-xl-2 font-weight-bold col-form-label">GL Name <span className="text-danger">*</span></label>
                                                <div className="col-sm-12 col-lg-2 col-xl-2">
                                                    <input type="text"
                                                        placeholder="GL Code"
                                                        name="glCode"
                                                        className="form-control"
                                                        value={this.state.glCode}
                                                        onChange={this.changeEventHandler}
                                                        disabled="true" />
                                                </div>
                                                <div className="col-sm-12 col-lg-8 col-xl-8">
                                                    <input
                                                        type="text"
                                                        placeholder="Please Enter GL Name"
                                                        name="glName"
                                                        className="form-control "
                                                        value={this.state.glName}
                                                        onChange={this.changeEventHandler} 
                                                        disabled={this.state.flag ==="D"?this.state.disableFields:""}/>
                                                    <span style={{ color: "red" }}>{this.state.errors["glName"]}</span>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-12 col-lg-2 col-xl-2 col-form-label font-weight-bold ">Note <span className="text-danger">*</span></label>
                                                <div className="col-sm-12 col-lg-4 col-xl-4">
                                                    <select
                                                        className="form-control "
                                                        name="note"
                                                        value={this.state.note}
                                                        onChange={this.changeEventHandler} 
                                                        disabled={this.state.flag ==="D"?this.state.disableFields:""}>
                                                        <option value="sgn">Select Note</option>
                                                        {/* <option value="1">Note</option> */}
                                                        {
                                                            this.state.noteList.map(r =>
                                                                <option key={r.noteId} value={r.noteId}>
                                                                    {r.noteName}
                                                                </option>
                                                            )
                                                        }
                                                    </select>
                                                    <span style={{ color: "red" }}>{this.state.errors["note"]}</span>
                                                </div>
                                                <label className="col-sm-12 col-lg-2 col-xl-2 font-weight-bold col-form-label">Contra Note<span className="text-danger">*</span></label>
                                                <div className="col-sm-12 col-lg-4 col-xl-4">
                                                    <select
                                                        className="form-control "
                                                        name="contraNote"
                                                        value={this.state.contraNote}
                                                        onChange={this.changeEventHandler} 
                                                        disabled={this.state.flag ==="D"?this.state.disableFields:""}>
                                                        <option value="sgt">Select Contra Note</option>
                                                        {/* <option value="3"> Contra Note</option> */}
                                                        {
                                                            this.state.contraNoteList.map(r =>
                                                                <option key={r.contraId} value={r.contraId}>
                                                                    {r.contraName}
                                                                </option>
                                                            )
                                                        }
                                                    </select>
                                                    <span style={{ color: "red" }}>{this.state.errors["contraNote"]}</span>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-12 col-lg-2 col-xl-2 font-weight-bold col-form-label">GL Open Date<span className="text-danger">*</span></label>
                                                <div className="col-sm-12 col-lg-4 col-xl-4">

                                                    <input
                                                        type="date"
                                                        name="glOpenDate"
                                                        className="form-control "
                                                        value={(this.state.glOpenDate) ? this.state.glOpenDate : moment(this.state.glOpenDate).format('DD-MM-yyyy')}
                                                        onChange={this.changeEventHandler}
                                                        onKeyUp={this.onKeyUpValue}
                                                        disabled={this.state.flag ==="D"?this.state.disableFields:""}
                                                    />
                                                    <span style={{ color: "red" }}>{this.state.errors["glOpenDate"]}</span>
                                                </div>
                                                <label className="col-sm-12 col-lg-2 col-xl-2 font-weight-bold col-form-label">GL Type Filter<span className="text-danger">*</span></label>
                                                <div className="col-sm-12 col-lg-4 col-xl-4">
                                                    <select
                                                        className="form-control "
                                                        name="glTypefilter"
                                                        value={this.state.glTypefilter}
                                                        onChange={this.changeEventHandler} 
                                                        disabled={this.state.flag ==="D"?this.state.disableFields:""}>
                                                        <option value="sgt">Select GL Type Filter</option>
                                                        {/* <option value="1">Filter</option> */}
                                                        {
                                                            this.state.filterList.map(r =>
                                                                <option key={r.flGlTypeId} value={r.flGlTypeId}>
                                                                    {r.flGlTyName}
                                                                </option>
                                                            )
                                                        }
                                                    </select>
                                                    <span style={{ color: "red" }}>{this.state.errors["glTypefilter"]}</span>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-12 col-lg-2 col-xl-2 col-sm-2 font-weight-bold col-form-label">Status <span className="text-danger">*</span></label>
                                                <div className="col-sm-12 col-lg-4 col-xl-4">
                                                    <select
                                                        className="form-control "
                                                        name="glStatus"
                                                        value={this.state.glStatus}
                                                        onChange={this.changeEventHandler} 
                                                        disabled={this.state.flag ==="D"?this.state.disableFields:""}>

                                                        <option value="E">Enable</option>
                                                        <option value="D">Disable</option>
                                                    </select>
                                                    <span style={{ color: "red" }}>{this.state.errors["glStatus"]}</span>
                                                </div>
                                                <label className="col-sm-12 col-lg-2 col-xl-2 font-weight-bold col-form-label">Is Subledger Present<span className="text-danger">*</span></label>
                                                <div className="col-sm-12 col-lg-4 col-xl-4">
                                                    <select
                                                        className="form-control "
                                                        name="subledger"
                                                        value={this.state.subledger}
                                                        onChange={this.changeEventHandler} 
                                                        disabled={this.state.flag ==="D"?this.state.disableFields:""}>
                                                        <option value="Y">Yes</option>
                                                        <option value="N">No</option>
                                                    </select>
                                                    <span style={{ color: "red" }}>{this.state.errors["subledger"]}</span>
                                                </div>
                                            </div>
                                            <div className="row pt-3" aria-expanded="true" >

                                                <div className="col-lg-10 col-xl-10">
                                                </div>
                                                <div className="col-sm-6 col-lg-1 col-xl-1 ">
                                                    <button
                                                        className="btn hor-grd btn-grd-primary "
                                                        onClick={this.saveGlData}>
                                                        {this.state.textValue}
                                                    </button>
                                                </div>
                                                <div className="col-sm-6 col-lg-1 col-xl-1">
                                                    <button
                                                        className="btn hor-grd btn-grd-danger"
                                                        onClick={this.cancelRecord}>
                                                        Cancel
                                                    </button>
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

export default GLMaster;