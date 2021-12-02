import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuMasterService from '../../../Services/masterService/MenuMasterService';

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
import Swal from 'sweetalert2';

class MenuMaster extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuId: '',
            menuName: '',
            path : '',
            menuTableData:[],
            moduleMaster:'',
            moduleData:[],
            textButton: 'Submit',
        }

        this.changeHandler = this.changeHandler.bind(this);

    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData=()=>{
        if ($.fn.DataTable.isDataTable('#menuTable')) {
            $('#menuTable').DataTable().destroy();
        }

        $("#menuTable menuTbody").empty();

        MenuMasterService.getMenu().then(
            (resp) => {

                this.setState({ menuTableData: resp.data.response })
                
            }
        );

        MenuMasterService.getModule().then(
            (resp)=>{
                this.setState({moduleData: resp.data.response})
            }
        );

        //initialize datatable
        $(document).ready(function () {

            setTimeout(function () {
                $('#menuTable').DataTable({

                    pageLength: 5,
                    lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 50]]
                });
            }, 1000);
        });
    }

    saveDistrict =(e)=>{
        e.preventDefault();
        let menuData ={
            menuId : this.state.menuId,
            menuName : this.state.menuName,
            path : this.state.path,
            moduleMaster: {
                admmModuleId:this.state.moduleMaster
            }
        };

        console.log("Final Object : "+menuData);
        if (this.state.textButton == "Submit") {
            MenuMasterService.createMenu(menuData).then((res) => {

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
                this.clear();
                this.fetchData();

            },  (error) => {
                console.log("Response ====>> " + error);
            }
            );
        }else if (this.state.textButton == "Update") {

            MenuMasterService.updateMenuListById(menuData.menuId, menuData).then((res) => {
                this.fetchData();

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
                this.clear();

            });

        } else if (this.state.textButton == "Delete") {

            MenuMasterService.deleteMenu(this.state.menuId).then((res) => {
                // this.setState({ district: this.state.district.filter(district => district.districtId !== this.state.districtId) })
                this.fetchData();
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

                this.clear();
            });

        }
   }

   editMenu(menuId){
    this.setState({
        textButton: 'Update'
    })

    MenuMasterService.getMenuListById(menuId).then((resp) => {
        let menuData = resp.data.response;
        this.setState({
            menuId: menuData.menuId,
            menuName: menuData.menuName,
            path : menuData.path,
            // moduleMaster : menuData.moduleMaster.admmModuleId
            
        });
        
    });
   }

   deleteMenu(menuId){
    this.setState({
        textButton: 'Delete'
    })
    
    MenuMasterService.getMenuListById(menuId).then((resp) => {
        let menuData = resp.data.response;
        this.setState({
            menuId: menuData.menuId,
            menuName: menuData.menuName,
            path: menuData.path
            
        });
        
    });
   }

    changeHandler=(event)=>{
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            
            [name]:value});
    }

    clear=()=>{
        this.setState({
            menuId : '',
            menuName: '',
            path:'',
            moduleMaster:'ss',
            textButton: 'Submit',
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
                                                <h3 className="font-weight-bold">Menu Master</h3>
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

                                                <input type="hidden" placeholder="Menu Id" name="id" className="form-control"
                                                    value={this.state.menuId} onChange={this.changeDistrictIdHandler} />

                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label ">Menu Name</label>
                                                <div className="col-sm-8">
                                                    <input type="text" className="form-control" name="menuName" value={this.state.menuName} onChange={this.changeHandler} />
                                                    {/* <span style={{ color: "red" }}>{this.state.errors["MenuNameError"]}</span> */}
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label ">Path</label>
                                                <div className="col-sm-8">
                                                    <input type="text" className="form-control" name="path" value={this.state.path} onChange={this.changeHandler} />
                                                    {/* <span style={{ color: "red" }}>{this.state.errors["MenuNameError"]}</span> */}
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label">Select Module</label>
                                                <div className="col-sm-8">
                                                    
                                                    <select className="form-control" name="moduleMaster" value={this.state.moduleMaster} onChange={this.changeHandler}>
                                                        <option value="ss">Select Module</option>
                                                        {
                                                            this.state.moduleData.map(r =>
                                                                <option key={r.admmModuleId} value={r.admmModuleId}>
                                                                    {r.admmModuleName}
                                                                </option>
                                                            )
                                                        }
                                                    </select>
                                                    {/* <span style={{ color: "red" }}>{this.state.errors["stateNameError"]}</span> */}

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


                                    <div className="col-md-6 col-xl-6">
                                        <div className="card p-4">

                                            <div className="card-block table-border-style">
                                                <div className="table-responsive p-2">
                                                    <table id="menuTable" className="table table-striped table-bordered table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th>Sr. No.</th>
                                                            <th>Menu Name</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="menuTbody">
                                                        {
                                                            this.state.menuTableData.map(
                                                                menuTData =>
                                                                    <tr key={menuTData.menuId}>
                                                                        <td>{menuTData.menuId}</td>
                                                                        <td>{menuTData.menuName}</td>
                                                                        <td className="text-center">
                                                                            <button onClick={() => this.editMenu(menuTData.menuId)} className="btn btn-xs btn-grd-primary m-1"><i class="fas fa-edit"></i></button>
                                                                            <button onClick={() => this.deleteMenu(menuTData.menuId)} className="btn btn-xs btn-grd-danger m-1"><i class="fas fa-trash"></i></button>
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
};

export default MenuMaster;