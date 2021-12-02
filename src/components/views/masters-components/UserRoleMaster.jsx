import React, { Component } from 'react';
import Select from 'react-select';
import UserRoleService from '../../../Services/masterService/UserRoleService';


// import 'react-select/dist/css/react-select.css';

import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
import Swal from 'sweetalert2';
import DataTable, { Alignment } from 'react-data-table-component';

import "../../../Assets-Components/UserRoleMaster/UserRoleMaster.css"
import { Link } from 'react-router-dom';


var select = require('react-select');

// custom style
const customStyles = {
    rows: {
        style: {
            minHeight: '45px', // override the row height
        },
    },
    headCells: {
        style: {
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
            background: '#80d4ff',
            color: 'black',
            fontSize: '13px'
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
        },
    },
};

const moduleColumn = [
    {
        name: 'Module Name',
        selector: row => row.admmModuleName,
        sortable: true,

    }
];

const conditionalRowStyles = [
   { when: row => row.admmModuleName === "Account",
		style: {
			backgroundColor: '#ccffe6',
			color: 'black',
			'&:hover': {
				cursor: 'pointer',
			},
		},
    },
    { when: row => row.admmModuleName === "Loan",
		style: {
			backgroundColor: '#ffccdd',
			color: 'black',
			'&:hover': {
				cursor: 'pointer',
			},
		},
    },
    { when: row => row.admmModuleName === "Admin",
		style: {
			backgroundColor: '#b3ffb3',
			color: 'black',
			'&:hover': {
				cursor: 'pointer',
			},
		},
    }
]
const menuColumn = [{
    name: 'Menu Name',
    selector: row => row.menuName,
    sortable: true,
}];

class UserRoleMaster extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userRoleId: '',
            userName: '',
            users: [],
            userNameId: [],

            userRole: [],

            moduleMaster: [],
            moduleModList: [],

            finalModuleMenu: [],
            finalData: '',

            userMaster: [],

            menuMaster: [],
            menus: [],

            toggledClearRows: false,

            // for user Priviously selected record display

            updateModuleData: [],
            updateMenuData: [
                { admmModuleId: '', admmModSource: '', admmModuleCode: '', admmModuleName: '', admmStatus: '', ipAddress: '', lastUpdate: '', macAddress: '', reportServerName: '', seqNo: '', userId: '', menus: [] }
            ],
            updatedUserData: [],

            menusUpdateData: [{ menuId: '', menuName: "", path: "", status: '' }],

            textButton: "Submit"
        }

        this.logChange = this.logChange.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {

        console.log("ON page load : " + JSON.stringify(this.state.updateMenuData));

        UserRoleService.getMenu().then((res) => {

            console.log(res.data.response);
            this.setState({
                menuMaster: res.data.response
            });

        });

        UserRoleService.getModuleMasters().then((res) => {

            this.setState({
                moduleMaster: res.data.response
            });
        });

        UserRoleService.getUserMasters().then((res) => {

            this.setState({
                userMaster: res.data.response
            });

        });

    }

    rowMenuCritera = (row) => {
        var a = row;
        var b = this.state.menusUpdateData;
        let rrr = false;

        this.state.menusUpdateData.map((m) => {
            // alert("menusUpdateData===>>>"+m.menuName);
            if (a.menuName === m.menuName) {
                // alert("a===>>>"+a.menuName);
                // alert("menusUpdateData===>>>"+m.menuName);
                rrr = a.menuName === m.menuName;
            }

        });
        return rrr;
    }

    rowModuleCritera = (row) => {
        var a = row;
        var b = this.state.updateMenuData;
        let rrr = false;

        this.state.updateMenuData.map((m) => {
            // alert("menusUpdateData===>>>"+m.menuName);
            if (a.admmModuleName === m.admmModuleName) {
                // alert("a===>>>"+a.admmModuleName);
                // alert("menusUpdateData===>>>"+m.admmModuleName);
                rrr = a.admmModuleName === m.admmModuleName;

            }
        });
        return rrr;
    }

    logChange = (val) => {

        this.setState({
            menusUpdateData: []
        })
        this.setState({
            menusUpdateData: [{ menuId: '', menuName: "", path: "", status: '' }]
        })
        // console.log("Select 2 value is :" + JSON.stringify(val.value.userId));
        this.setState({ users: val.value });

        UserRoleService.getUserRoleUpdatedData(val.value.userId).then((res) => {
            console.log("Update Record Are : " + JSON.stringify(res));

            if (res.data.response.length != 0) {
                // alert(res.data.response.length);
                res.data.response.map((updateData) => {

                    this.setState({
                        userRoleId: updateData.userRoleId
                    })

                    this.setState({
                        updateMenuData: updateData.moduleModList
                    })
                    // alert("HIIIIIIIII : "+JSON.stringify(this.state.updateMenuData));
                })

                // console.log("Update Record are : " + this.state.updateMenuData);
                this.state.updateMenuData.map((updateMenu) => {

                    // alert("HIIIIIIIII : "+JSON.stringify(updateMenu));
                    this.setState({
                        menusUpdateData: updateMenu.menus
                    })
                    this.fetchData();
                })

            } else {
                this.setState({
                    menusUpdateData: [{ menuId: '', menuName: "", path: "", status: '' }]
                })
                this.setState({
                    updateMenuData: [{ admmModuleId: '', admmModSource: '', admmModuleCode: '', admmModuleName: '', admmStatus: '', ipAddress: '', lastUpdate: '', macAddress: '', reportServerName: '', seqNo: '', userId: '', menus: [] }]
                })

                this.setState({
                    userRoleId: ''
                })
                this.fetchData();
            }
            console.log("Update Menus Record  : " + JSON.stringify(this.state.menusUpdateData));
        });
    }

    getModuleName = row => {
        this.setState({ moduleModList: true });
    }

    ModulehandleChange = row => {
        console.log(JSON.stringify(row.selectedRows));
        this.setState({ moduleModList: row.selectedRows });
    }

    menuhandleChange = row => {
        // alert(JSON.stringify(row.selectedRows));
        this.setState({ menus: row.selectedRows });
    }

    setModuleMenuData = () => {

        var finalD = [];
        this.state.moduleModList.map((module) => {
            console.log("Module Loop : " + JSON.stringify(module));
            // this.state.menus.map((menusD) =>{
            //     console.log("menu Loop : "+JSON.stringify(menusD));
            let subModule = {
                admmModuleId: module.admmModuleId,
                admmModSource: module.admmModSource,
                admmModuleCode: module.admmModuleCode,
                admmModuleName: module.admmModuleName,
                admmStatus: module.admmStatus,
                ipAddress: module.ipAddress,
                lastUpdate: module.lastUpdate,
                macAddress: module.macAddress,
                reportServerName: module.reportServerName,
                seqNo: module.seqNo,
                userId: module.userId,
                menus: this.state.menus
            }
            finalD.push(subModule);

        })

        console.log("FInal D Array : ", finalD);
        // this.setState({finalData : finalD });
    }

    saveUserRole = () => {
        // this.setModuleMenuData();
        var finalD = [];
        this.state.moduleModList.map((module) => {
            console.log("Module Loop : " + JSON.stringify(module));
            // this.state.menus.map((menusD) =>{
            //     console.log("menu Loop : "+JSON.stringify(menusD));
            let subModule = {
                admmModuleId: module.admmModuleId,
                admmModSource: module.admmModSource,
                admmModuleCode: module.admmModuleCode,
                admmModuleName: module.admmModuleName,
                admmStatus: module.admmStatus,
                ipAddress: module.ipAddress,
                lastUpdate: module.lastUpdate,
                macAddress: module.macAddress,
                reportServerName: module.reportServerName,
                seqNo: module.seqNo,
                userId: module.userId,
                menus: this.state.menus
            }
            finalD.push(subModule);

        });

        let userRole = {
            userRoleId: this.state.userRoleId,
            users: this.state.users,
            moduleModList: finalD

        }
        console.log("Final Object : " + JSON.stringify(userRole));
        console.log("Final module Data : " + JSON.stringify(this.state.finalData));

        UserRoleService.saveUserRoleMaster(userRole).then((res) => {

            alert(res.data.message);
            // this.setState({userRoleId : ''})
            // this.fetchData();
            // this.clearData();
        });
        console.log("Updated UserRoleId is : " + this.state.userRoleId);
    }

    


    clearData = () => {

        this.setState({ toggledClearRows: !this.state.toggledClearRows })
    }



    render() {
        let options = this.state.userMaster.map(function (userData) {
            // console.log("Data lIst is : " + JSON.stringify(userData.firstName));
            // alert(userData.firstName);
            return { value: userData, label: userData.firstName };
        })
        return (
            <>
                <div className="main-panel">
                    <div className="content">
                        <div className="page-inner" /*style={{ backgroundColor: "#d9d9d9" }}*/>
                            <div className="card p-3">
                                <div className="row font-weight-bold">
                                    <div className="col-lg-8 m-auto">
                                        <div className="page-header-title">
                                            <h4 className="text-primary f-w-600 font-weight-bold m-auto">
                                                User Role Master
                                            </h4>
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
                                                    <Link to="#">User Role Master</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="page-body">
                                <div className="row">
                                    <div className="col-md-12 col-xl-12">
                                        <div className="card p-2">

                                            <div className="form-group">

                                                <input type="hidden" placeholder="" name="userRoleMasterId" className="form-control"
                                                    value={this.state.userRoleId} onChange={this.changeHandler} />

                                            </div>
                                            {/* {alert(this.state.userMaster)} */}
                                            <div className="form-group row">
                                                <label className="col-sm-1 offset-sm-2 col-form-label ">Select User </label>
                                                <div className="col-sm-6">
                                                    {/* <input type="text" className="form-control" name="userName" value={this.state.userName} onChange={this.changeHandler} /> */}
                                                    {/* <span style={{ color: "red" }}>{this.state.errors["MenuNameError"]}</span> */}
                                                    <Select
                                                        name="form-field-name"
                                                        value={this.state.value}
                                                      
                                                        options={options}
                                                        onChange={this.logChange} />
                                                </div>
                                            </div>
                                            {/* </div>
                                    </div> */}


                                            {/* <div className="col-md-12 col-xl-12"> */}
                                            <div className="card">
                                                <div className="row">
                                                    <div className="col-md-6 col-xl-6">
                                                        <div className="card p-4">

                                                            <div className="card-block table-border-style">
                                                                <div className="table-responsive p-2">

                                                                    <DataTable
                                                                        pagination

                                                                        responsive={true}
                                                                        striped={true}
                                                                        paginationPerPage={5}
                                                                        paginationRowsPerPageOptions={[5, 10, 25, 50, 100]}
                                                                        columns={moduleColumn}
                                                                        data={this.state.moduleMaster}
                                                                        selectableRows
                                                                        // onRowClicked={this.getModuleName}
                                                                        selectableRowSelected={this.rowModuleCritera}
                                                                        onSelectedRowsChange={this.ModulehandleChange}
                                                                        Clicked
                                                                        conditionalRowStyles={conditionalRowStyles}
                                                                        // subHeaderAlign={Alignment.Center}
                                                                        clearSelectedRows={this.state.toggledClearRows}
                                                                        subHeaderAlign={Alignment.CENTER}
                                                                        customStyles={customStyles}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-xl-6">
                                                        <div className="card p-4">

                                                            <div className="card-block table-border-style">
                                                                <div className="table-responsive p-2">


                                                                    <DataTable
                                                                        pagination
                                                                        highlightOnHover
                                                                        subHeaderAlign
                                                                        expandableRows
                                                                        expandableRowsHideExpander
                                                                        defaultSortFieldId={1}
                                                                        responsive={true}
                                                                        striped={true}
                                                                        paginationPerPage={5}
                                                                        paginationRowsPerPageOptions={[5, 10, 25, 50, 100]}
                                                                        columns={menuColumn}
                                                                        data={this.state.menuMaster}
                                                                        selectableRows
                                                                        selectableRowSelected={this.rowMenuCritera}
                                                                        onSelectedRowsChange={this.menuhandleChange}
                                                                        Clicked
                                                                        // subHeaderAlign={Alignment.Center}
                                                                        clearSelectedRows={this.state.toggledClearRows}
                                                                        subHeaderAlign={Alignment.CENTER}
                                                                        customStyles={customStyles}

                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group row pt-3">
                                                    <div className="col-sm-1 offset-sm-1">
                                                        <button className="btn btn-sm btn-grd-primary" onClick={this.saveUserRole}>{this.state.textButton}</button>
                                                    </div>

                                                    <div className="col-sm-1">
                                                        <button className="btn btn-sm btn-grd-danger" onClick={this.clearData}>Cancel</button>
                                                    </div>


                                                </div>
                                            </div>
                                            {/* </div> */}
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

export default UserRoleMaster;