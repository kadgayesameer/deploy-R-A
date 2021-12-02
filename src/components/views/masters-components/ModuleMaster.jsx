import React, { Component } from 'react';
import ModuleMasterService from '../../../Services/masterService/ModuleMasterService';

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
import Swal from "sweetalert2";

class ModuleMaster extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //moduleId: this.props.match.params.id,
            moduleId: "",
            seqno: "",
            code: "",
            name: "",
            source: "",
            status: "",
            getModuleMastersNoArr: [],
            saveForm: "Save",
            numbersOnly: /^[0-9\b]+$/,
        };
        this.changeEventHandler = this.changeEventHandler.bind(this);

        this.getModuleMasters = this.getModuleMasters.bind(this);
        this.getModuleMaster = this.getModuleMaster.bind(this);
        this.submitFormBtn = this.submitFormBtn.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
        this.editModuleMaster = this.editModuleMaster.bind(this);
    }
    
    //method for show table
    componentDidMount() {
       this.reRenderPage();
    }

    reRenderPage = () => {   

       this.setState({
            moduleId: "",
            seqno: "", 
            code: "",
            name: "",
            source: "",
            status: "",
        });

         //initialize datatable
         if ($.fn.DataTable.isDataTable("#moduleMasterTable")) {
            $("#moduleMasterTable").DataTable().destroy();
        }

        $("#moduleMasterTable moduleMasterTableBody").empty();
        

        ModuleMasterService.getModuleMasters().then((resp) => {
            console.log("List of moduleMaster =====>>>>" + JSON.stringify(resp.data.response));
            this.setState({ getModuleMastersNoArr: resp.data.response });
        });

       
        //initialize datatable
        $(() => {
          setTimeout(function () {
            $("#moduleMasterTable").DataTable({
              lengthMenu: [
                [5, 10, 25, 50, -1],
                [5, 10, 25, 50, "All"],
              ],
              pageLength: 5,
            });
          }, 1000);
        });
    };

    changeEventHandler = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]: value,
        });
    };
    
    getModuleMasters = (e) => {
        e.preventDefault();
        let getModuleMasters = {
            admmModuleId: this.state.moduleId,
            seqNo: this.state.seqno,
            admmModuleCode: this.state.code,
            admmModuleName: this.state.name,
            admmModSource: this.state.source,
            admmStatus: "",
        };
        console.log("Module master Details Fetched => " + JSON.stringify(getModuleMasters));
    };

    getModuleMaster = (e) => {
        e.preventDefault();
        let getModuleMaster = {
            admmModuleId: this.state.moduleId,
            seqNo: this.state.seqno,
            admmModuleCode: this.state.code,
            admmModuleName: this.state.name,
            admmModSource: this.state.source,
            admmStatus: "",
        };
        console.log(
          "Module Master Details Fetched By Id => " + JSON.stringify(getModuleMaster)
        );
    
        ModuleMasterService.getModuleMaster(getModuleMaster).then((resp) => {
          console.log("Module Master Fetched By Id Successful.");
        });
      };

    //method for save data
    submitFormBtn = (e) => {
        e.preventDefault();
        let submitMaster = {
            admmModuleId: this.state.moduleId,
            seqNo: this.state.seqno,
            admmModSource: this.state.source,
            admmModuleCode: this.state.code,
            admmModuleName: this.state.name,
            admmStatus: "",
        };
        
        console.log("Module master Details Saved => " + JSON.stringify(submitMaster));
        
            if (this.state.seqno.length === 0 || this.state.code.length === 0 ||
                this.state.name.length === 0 || this.state.source.length === 0) 
            {
                alert("Fields Are Mendatory..");
            } else if (
                this.state.seqno.length < 6 &&
                this.state.seqno.length > 6
            ) {
                alert("Seqno must be required.");
            } else if (!Number(this.state.seqno)) {
                alert("Please Enter Sequnce in Numbers Only.");
            } else if (this.state.saveForm === "Save") {
                ModuleMasterService.saveModuleMaster(submitMaster).then((resp) => {
                    alert("Record Saved Successfully.");
                    this.reRenderPage();
                });    
            } else  if (this.state.saveForm === "Delete") {
                ModuleMasterService.deleteModuleMaster(
                  this.state.moduleId,
                  submitMaster
                ).then((resp) => {
                  alert("Record Deleted Successfully.");
                  this.setState({ saveForm: "Submit" });
                  this.reRenderPage();
                });
            } 
    };

    editModuleMaster= (moduleId) =>{
        console.log("Edit Module id="+ moduleId)
        ModuleMasterService.getModuleMasterById(moduleId).then((res) => {
            let moduleMaster = res.data.response;
            // this.setState({ moduleMaster: this.state.moduleMaster.filter(moduleMaster => moduleMaster.admmModuleId !== id) });
            this.setState({
                moduleId: moduleMaster.admmModuleId,
                source: moduleMaster.admmModSource,
                code: moduleMaster.admmModuleCode,
                name: moduleMaster.admmModuleName,
                seqno: moduleMaster.seqNo,
                status:moduleMaster.admmStatus
            });
            console.log("Edit Module=====" + JSON.stringify(moduleMaster))
            //this.setState({ saveForm: "Update" });
        });
    }
    
    deleteModule = (moduleId) => {
        console.log("function Delete id="+moduleId);
        ModuleMasterService.getModuleMasterById(moduleId).then((resp) => {
            let deleteModuleMaster=resp.data.response;
            this.setState({
                moduleId: deleteModuleMaster.admmModuleId,
                source: deleteModuleMaster.admmModSource,
                code: deleteModuleMaster.admmModuleCode,
                name: deleteModuleMaster.admmModuleName,
                seqno: deleteModuleMaster.seqNo,
                status:deleteModuleMaster.admmStatus
            });
            console.log("Delete Module=====" + JSON.stringify(deleteModuleMaster));
          this.setState({ saveForm: "Delete" });
         // console.log("PinCode Details Deleted => " + JSON.stringify(deleteModuleMaster));
        });
    };

    render() {
        return (
            <>
                <div className="main-panel">
                    <div className="content">
                        <div className="page-inner">
                        {/*Page Header Start*/}
                        <div className="card p-3">
                            <div className="row">
                                <div className="col-lg-8 m-auto">
                                    <div className="page-header-title">
                                        <h4 className="text-primary f-w-600 m-auto">Module Master</h4>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="page-header-breadcrumb">
                                        <ul class="breadcrumbs">
                                            <li class="nav-home">
                                                <a href="index.html"><i class="flaticon-home"></i></a>
                                            </li>
                                            <li class="separator">
                                                <i class="flaticon-right-arrow"></i>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#">Masters</a>
                                            </li>
                                            <li class="separator">
                                                <i class="flaticon-right-arrow"></i>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#">Module Master</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>{/*Page Header Row End*/}
                        </div>
                        {/*Page Header End*/}

                        {/*Page Body Start*/}
                        <div className="page-body">
                            <div className="row">
                                {/*First tab Start*/}
                                <div className="col-md-6 col-xl-6">
                                    <div className="card p-4">
                                    {/*Form Start*/}
                                        <form onSubmit={this.handleSubmit} noValidate>
                                        <div className="form-group d-none">
                                            <input type="hidden" placeholder="Module Id" name="moduleId" className="form-control"
                                                    value={this.state.moduleId} onChange={this.changeEventHandler} />
                                        </div>
                                        
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-form-label">Sequence No <span className="text-danger">*</span></label>
                                            <div className="col-sm-9">
                                                <input type="text" placeholder="Sequence No" name="seqno" className="form-control"
                                                        value={this.state.seqno} onChange={this.changeEventHandler} minLength={6}
                                                        maxLength={6} required />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-form-label">Master Code <span className="text-danger">*</span></label>
                                            <div className="col-sm-9">
                                                <input type="text" placeholder="Master Code" name="code" className="form-control"
                                                    value={this.state.code} onChange={this.changeEventHandler} required />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-form-label">Master Name <span className="text-danger">*</span></label>
                                            <div className="col-sm-9">
                                                <input type="text" placeholder="Master Name" name="name" className="form-control"
                                                    value={this.state.name} onChange={this.changeEventHandler} required />
                                            </div>
                                        </div>
                                    
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-form-label">Master Source <span className="text-danger">*</span></label>
                                            <div className="col-sm-9">
                                                <input type="text" placeholder="Master Source" name="source" className="form-control"
                                                    value={this.state.source} onChange={this.changeEventHandler} required />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <div className="col-sm-12 text-right">
                                                <button className="btn btn-sm btn-grd-primary mx-3" onClick={this.submitFormBtn}>
                                                    {this.state.saveForm === "Delete"? "Delete": this.state.saveForm === "Update"
                                                                        ? "Update": "Submit"}
                                                </button>
                                                <button className="btn btn-sm btn-danger"onClick={() => this.reRenderPage()}>Cancel</button>
                                            </div>
                                        </div>
                                    </form>
                                    {/*Form End*/}
                                    </div>
                                </div>
                                {/*First tab End*/}
                                {/*Second tab Start*/}
                                <div className="col-md-6 col-xl-6">
                                    <div className="card p-4">
                                        <div className="card-block table-border-style">
                                            <div className="table-responsive">
                                            <table id="moduleMasterTable"className="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>Seq.No</th>
                                                        <th>Code</th>
                                                        <th>Name</th>
                                                        <th>Source</th>
                                                        <th className="text-center">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="moduleMasterTableBody">
                                                    {this.state.getModuleMastersNoArr.map((data) => (
                                                        <tr key={data.admmModuleId}>
                                                            <td>{data.seqNo}</td>
                                                            <td>{data.admmModuleCode}</td>
                                                            <td>{data.admmModuleName}</td>
                                                            <td>{data.admmModSource}</td>
                                                            <td className="text-center">
                                                                <button onClick={() => this.editModuleMaster(data.admmModuleId)} className="btn btn-xs btn-primary m-1"><i class="fas fa-pencil-alt"></i></button>
                                                                <button onClick={() =>this.deleteModule(data.admmModuleId)} className="btn btn-xs btn-danger m-1"><i class="fas fa-trash-alt"></i></button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Second tab End*/}
                            </div>
                        </div>
                        {/*Page Body End*/}
                    </div>
                </div>
            </div>
            </>
        );
    }
}
export default ModuleMaster;
