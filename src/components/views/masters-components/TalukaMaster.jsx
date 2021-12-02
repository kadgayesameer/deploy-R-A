import React, { Component } from 'react';
import TalukaService from '../../../Services/masterService/TalukaService';
import Swal from 'sweetalert2';

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';


class TalukaMaster extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            talukaId: '',
            talukaCode: '',
            talukaName: '',
            districtId : '',
            districtName: '',
            status: '',
            talukaarray: [],
            district: [],
            saveForm: '',
            talukaMaster : '',
        }

        // this.changeTalukaNameHandler   = this.changeTalukaNameHandler.bind(this);
        // this.changeTalukaIdHandler     = this.changeTalukaIdHandler.bind(this);
        // this.changeTalukaCodeHandler   = this.changeTalukaCodeHandler.bind(this);
        // this.changeDistrictNameHandler = this.changeDistrictNameHandler.bind(this);

        this.changeEventHandler = this.changeEventHandler.bind(this);
        this.saveTaluka = this.saveTaluka.bind(this);

    }

    // reRenderPage = () => {
    //     this.setState({
    //       // pinCodeId: this.props.match.params.pinCodeId,
    //       talukaCode : "",
    //       talukaName : "",
    //       districtName : "",
    //       status: "",
    //       disableFields: false,
    //     });
    // }

    reRenderPage = () => {
        this.setState({
          // pinCodeId: this.props.match.params.pinCodeId,
          talukaCode : "",
          talukaName : "",
          districtName : "",
          status: "",
          disableFields: false,
          disableFields: false,
        });
    
        if ($.fn.DataTable.isDataTable("#TalukaTable")) {
          $("#TalukaTable").DataTable().destroy();
        }

        TalukaService.getTalukas().then(
            (resp) => {
                this.setState({ talukaarray: resp.data.response })
            }
        );
    
        //initialize datatable
        $(() => {
          // $("#pinCodeTable").DataTable().destroy();
          setTimeout(function () {
            $("#TalukaTable").DataTable({
              lengthMenu: [
                [5, 10, 25, 50, -1],
                [5, 10, 25, 50, "All"],
              ],
              pageLength: 5,
            });
          }, 1000);
        });
        this.setState({ saveForm: "Save" });

        // this.setState({ saveForm: "Save" });
        console.log("Taluka List" + this.state.talukaarray);
      };





    saveTaluka = (e) => {

        if (
            this.state.talukaCode.length === 0 ||
            this.state.talukaName.length === 0 ||
            this.state.districtName.length === 0 
          ) {
            Swal.fire({
                title: "Oops...",
                text: 'Fill All The Fields',
                icon: "error",
            });
          } else  {

        e.preventDefault();
        // alert(this.state.districtName);
        let taluka = {
            id         :  this.state.id,
            talukaCode : this.state.talukaCode,
            talukaName: this.state.talukaName,
            districtName: {
            districtId: this.state.districtName
            },
            status: false ,
        };
        this.setState({ saveForm: "Save" });
        console.log('Save Data  => ' + JSON.stringify(taluka));
         
        TalukaService.createTaluka(taluka).then((res) => {
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
                // this.fetchData();
                this.reRenderPage();
            },  (error) => {
                console.log("Response ====>> " + error);
            }
            );
       }
    }

    editTaluka = (e, talukaId) => {
        e.preventDefault();
        TalukaService.getTALUKA(talukaId).then((resp) => {
            this.setState({ updateTalukaArr: resp.data.response });
            let updateTalukaArr1 = resp.data.response;
            this.setState({
                talukaId: updateTalukaArr1.talukaId,
                talukaCode: updateTalukaArr1.talukaCode,
                talukaName: updateTalukaArr1.talukaName,
                districtName: updateTalukaArr1.districtName.districtId,
                status: updateTalukaArr1.status,
            });
            this.setState({ saveForm: "Update" });
            console.log("Taluka Details To Be Edited => " + JSON.stringify(updateTalukaArr1)
            );
            console.log("this.state.talukaId : " + this.state.talukaId);
            console.log("this.state.talukaCode : " + this.state.talukaCode);
            console.log("this.state.talukaName : " + this.state.talukaName);
            console.log("this.state.districtName : " + this.state.districtName);
            console.log("this.state.status : " + this.state.status);
        });
    };

    editDeleteTaluka = (e, talukaId) => {
        e.preventDefault();
        TalukaService.getTALUKA(talukaId).then((resp) => {
            this.setState({ updateTalukaArr: resp.data.response });
            let updateTalukaArr1 = resp.data.response;
            this.setState({
                talukaId: updateTalukaArr1.talukaId,
                talukaCode: updateTalukaArr1.talukaCode,
                talukaName: updateTalukaArr1.talukaName,
                districtName: updateTalukaArr1.districtName.districtId,
                status: updateTalukaArr1.status,
            });
            this.setState({ saveForm: "Delete" });
            console.log("Taluka Details To Be Deleted => " + JSON.stringify(updateTalukaArr1)
            );
            console.log("this.state.talukaId : " + this.state.talukaId);
            console.log("this.state.talukaCode : " + this.state.talukaCode);
            console.log("this.state.talukaName : " + this.state.talukaName);
            console.log("this.state.districtName : " + this.state.districtName);
            console.log("this.state.status : " + this.state.status);
        });
    };

    updateTaluka = (e) => {
        
        if (
            this.state.talukaCode.length === 0 ||
            this.state.talukaName.length === 0 ||
            this.state.districtName.length === 0 
          ) {
            Swal.fire({
                title: "Oops...",
                text: 'Fill All The Fields',
                icon: "error",
            });
          } else  {
        e.preventDefault();
        let taluka = {
            talukaId: this.state.talukaId,
            talukaCode: this.state.talukaCode,
            talukaName: this.state.talukaName,
            districtName: {
                districtId: this.state.districtName
                },
            status: this.state.status,
        };

        console.log('Taluka Update => ' + JSON.stringify(taluka));
        //event.preventDefault();
        // TalukaService.updateTALUKA(taluka, this.state.talukaId).then((res) => {
        //     console.log("Taluka Data Updated Successfully");
        // });
        TalukaService.updateTALUKA(taluka, this.state.talukaId).then((res) => {
            console.log("Taluka Data Updated Successfully");
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
            // this.fetchData();
            this.reRenderPage();

        },  (error) => {
            console.log("Response ====>> " + error);
        }
        );
    }
}

    deleteTaluka = (e) => {
        if (
            this.state.talukaCode.length === 0 ||
            this.state.talukaName.length === 0 ||
            this.state.districtName.length === 0 
          ) {
            Swal.fire({
                title: "Oops...",
                text: 'Fill All The Fields',
                icon: "error",
            });
          } else  {
        e.preventDefault();
        let taluka = {
            talukaId: this.state.talukaId,
            talukaCode: this.state.talukaCode,
            talukaName: this.state.talukaName,
            districtName: {
                districtId: this.state.districtName
                },
            status: this.state.status,
        };
        console.log('Taluka Update => ' + JSON.stringify(taluka));
        TalukaService.deleteTaluka(this.state.talukaId).then((res) => {
            console.log("Taluka Data Deleted Successfully");
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
            // this.fetchData();
            this.reRenderPage();

        },  (error) => {
            console.log("Response ====>> " + error);
        }
        );
    }
}

    componentDidMount() {
        // this.reRenderPage();
        this.fetchData();
        TalukaService.getDistrictData().then((res) => {
            console.log(res);
            this.setState({ district: res.data.response })
        });
    }

    fetchData() {
        TalukaService.getTalukas().then(
            (resp) => {
                this.setState({ talukaarray: resp.data.response })
            }
        );
        console.log("Taluka List" + this.state.talukaarray);
        this.setState({ saveForm: "Save" });

        //initialize datatable
        $(() => {
            setTimeout(function () {
                $("#TalukaTable").DataTable({
                    lengthMenu: [
                        [5, 10, 25, 50, -1],
                        [5, 10, 25, 50, "All"],
                    ],
                    pageLength: 5,
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


    render() {
        return (
            <>
                <div className="main-panel">
                    <div className="content">
                        <div className="page-inner">
                            <div className="card p-3">
                                <div className="row align-items-end">
                                    <div className="col-lg-8">
                                        <div className="page-header-title">
                                            {/* <i className="icofont icofont-file-code bg-c-blue"></i> */}
                                            <div className="d-inline">
                                                <h4 className="text-primary f-w-600 m-auto">Taluka Master</h4>
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

                                                <input type="hidden" placeholder="Taluka Id" name="id" className="form-control"
                                                    value={this.state.id} onChange={this.changeEventHandler} />

                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label ">Taluka Code</label>
                                                <div className="col-sm-8">
                                                    <input type="text" className="form-control"
                                                        placeholder="Enter Taluka Code"
                                                        name="talukaCode" value={this.state.talukaCode} onChange={this.changeEventHandler} />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label">Taluka Name</label>
                                                <div className="col-sm-8">
                                                    <input type="text" className="form-control"
                                                        placeholder="Type your title in Placeholder" name="talukaName" value={this.state.talukaName} onChange={this.changeEventHandler} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label">District</label>
                                                <div className="col-sm-8">
                                                    <select name="districtName" value={this.state.districtName} className="form-control"  onChange={this.changeEventHandler}>
                                                        <option value="">Select</option>
                                                        {
                                                            this.state.district.map(r =>
                                                                <option key={r.districtId} value={r.districtId}>
                                                                    {r.districtName}
                                                                </option>
                                                            )
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row pt-3">
                                                <div className="col-sm-12 text-right">
                                                    <button className="btn btn-sm btn-grd-primary mx-3" onClick={this.state.saveForm === "Save" ? this.saveTaluka : this.state.saveForm === "Update" ? (e) => this.updateTaluka(e) : (e) => this.deleteTaluka(e)}>{this.state.saveForm === "Save" ? "Submit" : this.state.saveForm === "Update" ? "Update" : "Delete"}</button>
                                                    <button  className="btn btn-sm btn-grd-danger" onClick={() => this.reRenderPage()}>Cancel</button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-md-12 col-xl-6">
                                        <div className="card p-4">
                                            <div className="card-header">
                                                <div className="card-header-right">    <ul className="list-unstyled card-option">        <li><i className="icofont icofont-simple-left "></i></li>        <li><i className="icofont icofont-maximize full-card"></i></li>        <li><i className="icofont icofont-minus minimize-card"></i></li>        <li><i className="icofont icofont-refresh reload-card"></i></li></ul></div>
                                            </div>

                                            <div className="card-block table-border-style">
                                                <div className="table-responsive">
                                                    <table id="TalukaTable" className="table table-striped table-bordered">
                                                        <thead>
                                                            <tr>
                                                                {/* <th>Sr. No. </th> */}
                                                                <th>Taluka Code</th>
                                                                <th>Taluka Name</th>
                                                                <th>District Name</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                this.state.talukaarray.map(
                                                                    talukas =>
                                                                        <tr>
                                                                            <td>{talukas.talukaCode}</td>
                                                                            <td>{talukas.talukaName}</td>
                                                                            <td>{talukas.districtName.districtName}</td>
                                                                            <td className="text-center">
                                                                              <button onClick={(e) => this.editTaluka(e, talukas.talukaId)} className="btn btn-xs btn-grd-primary m-1"><i className="fas fa-edit"></i></button>
                                                                              <button onClick={(e) => this.editDeleteTaluka(e, talukas.talukaId)} className="btn btn-xs btn-grd-danger m-1"> <i className="fas fa-trash"></i></button>
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


export default TalukaMaster;