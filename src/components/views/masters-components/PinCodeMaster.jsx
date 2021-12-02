import React, { Component } from "react";
import { Link } from "react-router-dom";
import PinCodeMasterService from "../../../Services/masterService/PinCodeMasterService";

//Datatable Modules
import $ from "jquery";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import Swal from "sweetalert2";

class PinCodeMaster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // pinCodeId: this.props.match.params.pinCodeId,
      pinCodeId: "",
      pinCode: "",
      postOfficeName:"",
      area:"",
      city: "",
      state:"",
      district: "",
      taluka: "",
      status: "",
      getPinCodesNoArr: [],
      stateList: [],
      talukaList: [],
      districtList: [],
      saveForm: "Save",
      alphabetsOnly: /^[A-Za-z]+$/,
      flag: "",
      disableFields: "",
    };

    this.changeEventHandler = this.changeEventHandler.bind(this);

    this.getPinCodes = this.getPinCodes.bind(this);
    this.getPinCode = this.getPinCode.bind(this);
    this.submitFormBtn = this.submitFormBtn.bind(this);
    this.deletePinCode = this.deletePinCode.bind(this);
    this.updatePinCode = this.updatePinCode.bind(this);
    this.onKeyUpValue = this.onKeyUpValue.bind(this);
  }
  
  onKeyUpValue(event) {
    console.log(event.target.value);
    if(this.state.pinCode.length === 6)
    {
      console.log("hi")
      PinCodeMasterService.getPinCode(this.state.pinCode).then((res) => {
        let pinCode = res.data.response;
        console.log("PinCode responce=====" + JSON.stringify(pinCode));
        if(pinCode === res.data.response){
          console.log("pinCode exist=====" + JSON.stringify(res.data.response))
          Swal.fire({
            title: 'PinCode Already Exist',
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Edit',
          }).then((result) => {  
            if (result.isConfirmed) {
              PinCodeMasterService.getPinCode(this.state.pinCode).then((res) => {
                let updatePinCodeNoArr = res.data.response;
                this.setState({
                  pinCodeId: updatePinCodeNoArr.pinCodeId,
                  pinCode: updatePinCodeNoArr.pinCode,
                  postOfficeName :updatePinCodeNoArr.postOfficeName,
                  area:updatePinCodeNoArr.area,
                  city: updatePinCodeNoArr.city,
                  state:updatePinCodeNoArr.state,
                  taluka: updatePinCodeNoArr.taluka,
                  district: updatePinCodeNoArr.district,
                  status: updatePinCodeNoArr.status,
                });
                console.log("PinCode responce=====" + JSON.stringify(updatePinCodeNoArr));
                console.log("this.state.pinCodeId : " + this.state.pinCodeId);
                console.log("this.state.pinCode : " + this.state.pinCode);
                console.log("this.state.city : " + this.state.city);
                console.log("this.state.taluka : " + this.state.taluka);
                console.log("this.state.district : " + this.state.district);
                console.log("this.state.status : " + this.state.status);
              });
              this.setState({
                pinCodeId: this.state.pinCodeId,
                pinCode:this.state.pinCode,
                city: this.state.city,
                taluka: this.state.taluka,
                district: this.state.district,
                status: this.state.status,
                disableFields:false
              });
              this.setState({ saveForm: "Update" });
            }
          })
        }
      },(error) =>{
        //alert(error.message)
       
        Swal.fire({
          title: 'PinCode Not Exist',
          icon: 'success',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Ok'
        }).then((result) => {  
          
          if (result.isConfirmed) {
            this.setState({
              disableFields:false
            });
           
          }
          PinCodeMasterService.getStateData().then((res) => {
            this.setState({ stateList: res.data.response });
          })
          console.log("stateList : ", this.state.stateId);

          console.log("StateId="+this.stateId);
          PinCodeMasterService.getDistrictByStateId(this.state.stateId).then((res) => {
            this.setState({ districtList: res.data.response });
          })
          console.log("District list: "+this.state.districtList);

          console.log("DistricId="+this.state.districtId);
          PinCodeMasterService.getTalukaByDistrictId(this.state.districtId).then((res) => {
           
            this.setState({ talukaList: res.data.response });
          })
          console.log("Taluka list: "+this.state.talukaList);
      
         
        })
      }
      );
    }
  
  }

  reRenderPage = () => {
    this.setState({
      // pinCodeId: this.props.match.params.pinCodeId,
      pinCodeId: "",
      pinCode: "",
      postOfficeName:"",
      area:"",
      city: "",
      state:"",
      taluka: "",
      district: "",
      status: "",
      disableFields: true,
    });

    PinCodeMasterService.getStateData().then((res) => {
      this.setState({ stateList: res.data.response });
    })
    console.log("stateList : ", this.state.stateList);

    PinCodeMasterService.getTalukaData().then((res) => {
      this.setState({ talukaList: res.data.response });
    })
    console.log("Taluka list: "+this.state.talukaList);

    PinCodeMasterService.getDistrictData().then((res) => {
        this.setState({ districtList: res.data.response });
    })
    console.log("District list: "+this.state.districtList);

    if ($.fn.DataTable.isDataTable("#pinCodeTable")) {
      // $("#pinCodeTable").DataTable().fnClearTable();
      $("#pinCodeTable").DataTable().destroy();
      // $("#pinCodeTable #pinCodeTableBody").clear().draw();
    }

    if (this.state.flag === "Last") {
      $("#pinCodeTable #pinCodeTableBody").empty();
      this.setState({ flag: "" });
    }

    PinCodeMasterService.getPinCodes().then((resp) => {
      this.setState({ getPinCodesNoArr: resp.data.response });
    });

    //initialize datatable
    $(() => {
      // $("#pinCodeTable").DataTable().destroy();
      setTimeout(function () {
        $("#pinCodeTable").DataTable({
          lengthMenu: [
            [5, 10, 25, 50, -1],
            [5, 10, 25, 50, "All"],
          ],
          pageLength: 5,
        });
      }, 1000);
    });

    // this.setState({ saveForm: "Save" });
    console.log("getPinCodesNoArr : ", this.state.getPinCodesNoArr);
  };

  getPinCodes = (e) => {
    e.preventDefault();
    let getPinCodesNo = {
      pinCodeId: this.state.pinCodeId,
      pinCode: this.state.pinCode,
      postOfficeName:this.state.postOfficeName,
      area:this.state.area,
      city: this.state.city,
      state:this.state.state,
      talukaName: this.state.taluka,
      districtName: this.state.district,
      status:this.state.status
    };
    console.log("PinCodes Details Fetched => " + JSON.stringify(getPinCodesNo));

    /* PinCodeMasterService.getPinCodes(getPinCodesNo).then((resp) => {
      this.setState = {
        getPinCodesNo: resp.data.response,
      };
      console.log("PinCodes State : " + this.state.getPinCodesNo);
    }); */
  };


  getPinCode = (e) => {
    e.preventDefault();
    let getPinCodeNo = {
      pinCodeId: this.state.pinCodeId,
      pinCode: this.state.pinCode,
      postOfficeName:this.state.postOfficeName,
      area:this.state.area,
      city: this.state.city,
      state:this.state.state,
      talukaName: this.state.taluka,
      districtName: this.state.district,
      status:this.state.status
    };
    console.log(
      "PinCode Details Fetched By Id => " + JSON.stringify(getPinCodeNo)
    );

    PinCodeMasterService.getPinCode(getPinCodeNo).then((resp) => {
      console.log("PinCode Fetched By Id Successful.");
    });
  };

  submitFormBtn = (e) => {
    e.preventDefault();
    let pinCodeMaster = {
      pinCodeId: this.state.pinCodeId,
      pinCode: this.state.pinCode,
      postOfficeName:this.state.postOfficeName,
      area:this.state.area,
      city: this.state.city,
      state:this.state.state,
      talukaName: this.state.taluka,
      districtName: this.state.district,
      status:this.state.status
    };
    console.log("PinCode Details Saved => " + JSON.stringify(pinCodeMaster));

    if (this.state.saveForm === "Delete") {
      PinCodeMasterService.getPinCodes().then((resp) => {
        if (resp.data.response.length === 1) this.setState({ flag: "Last" });
      });
      PinCodeMasterService.deletePinCode(
        this.state.pinCodeId,
        pinCodeMaster
      ).then((resp) => {
        console.log("Record Deleted Successfully.");
        this.reRenderPage();
      });
    } else {
      if (
        this.state.pinCode.length === 0 || this.state.postOfficeName.length === 0 ||
        this.state.area.length === 0 || this.state.city.length === 0 ||
        this.state.state.length ===0 || this.state.taluka.length === 0 ||
        this.state.district.length === 0
      ) {
        alert("Please Fill All The Fields.");
      } else if (this.state.pinCode.length < 6 && this.state.pinCode.length > 6) {
        alert("PinCode must be of 6 characters.");
      } else if (!Number(this.state.pinCode)) {
        alert("Please Enter PinCode in Numbers Only.");
      }  else if (this.state.saveForm === "Save") {
          
        PinCodeMasterService.savePinCode(pinCodeMaster).then((resp) => {
          console.log("Record Saved Successfully.");
          this.reRenderPage();
          Swal.fire({
            position: "top-right",
            icon: "success",
            title: "Data has been save successfully",
            showConfirmButton: false,
            timer: 1500
          });
        });
      } else if (this.state.saveForm === "Update") {
       
        PinCodeMasterService.updatePinCode(
          this.state.pinCodeId,
          pinCodeMaster
        ).then((resp) => {
          console.log("Record Updated Successfully.");
          this.reRenderPage();
          Swal.fire({
            position: "top-right",
            icon: "success",
            title: "Data has been update successfully",
            showConfirmButton: false,
            timer: 1500
          });
        });
      }
    }
  };

  deletePinCode = (e, pinCodeId) => {
    e.preventDefault();
    PinCodeMasterService.getPinCode(pinCodeId).then((resp) => {
      let deletePinCodeNoArr = resp.data.response;
      this.setState({
        pinCodeId: deletePinCodeNoArr.pinCodeId,
        pinCode: deletePinCodeNoArr.pinCode,
        city: deletePinCodeNoArr.city,
        taluka: deletePinCodeNoArr.taluka,
        district: deletePinCodeNoArr.district,
        status: deletePinCodeNoArr.status,
        disableFields: true,
      });
      this.setState({ saveForm: "Delete" });
      console.log(
        "PinCode Details Deleted => " + JSON.stringify(deletePinCodeNoArr)
      );
      console.log("this.state.pinCodeId : " + this.state.pinCodeId);
      console.log("this.state.pinCode : " + this.state.pinCode);
      console.log("this.state.city : " + this.state.city);
      console.log("this.state.taluka : " + this.state.taluka);
      console.log("this.state.district : " + this.state.district);
      console.log("this.state.status : " + this.state.status);
    });
  };

  updatePinCode = (e, pinCodeId) => {
    e.preventDefault();
    PinCodeMasterService.getPinCode(pinCodeId).then((resp) => {
      let updatePinCodeNoArr = resp.data.response;
      this.setState({
        pinCodeId: updatePinCodeNoArr.pinCodeId,
        pinCode: updatePinCodeNoArr.pinCode,
        city: updatePinCodeNoArr.city,
        taluka: updatePinCodeNoArr.taluka,
        district: updatePinCodeNoArr.district,
        status: updatePinCodeNoArr.status,
      });
      this.setState({ saveForm: "Update" });
      console.log(
        "PinCode Details Updated => " + JSON.stringify(updatePinCodeNoArr)
      );
      console.log("this.state.pinCodeId : " + this.state.pinCodeId);
      console.log("this.state.pinCode : " + this.state.pinCode);
      console.log("this.state.city : " + this.state.city);
      console.log("this.state.taluka : " + this.state.taluka);
      console.log("this.state.district : " + this.state.district);
      console.log("this.state.status : " + this.state.status);
    });
  };

  componentDidMount() {
    this.reRenderPage();
  }

  changeEventHandler = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    // const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <>
        <div className="main-panel">
          <div className="content">
            <div className="page-inner">
              {/*---header row-------*/}
              <div className="card p-3">
                <div className="row">
                  <div className="col-lg-8 m-auto">
                    <div className="page-header-title">
                      <h4 className="text-primary f-w-600 m-auto">PIN Code Master</h4>
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
                          <Link to="#">PinCodeMaster</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/*---header row end-------*/}
              {/*---header row-------*/}
              <div className="page-body">
                <div className="row">
                  <div className="col-md-12 ">
                    <div className="card p-4">
                      <form onSubmit={this.handleSubmit} noValidate>
                        <div className="form-group d-none">
                          <input type="hidden" placeholder="Pin Code Id" name="pinCodeId" className="form-control"
                                  value={this.state.pinCodeId} onChange={this.changeEventHandler} />
                        </div>
                        <div className="form-group row">
                          <label className="col-sm-1 col-form-label">PIN Code <span className="text-danger">*</span></label>
                          <div className="col-sm-3">
                            <input type="text" placeholder="Enter Pin Code" name="pinCode" pattern="[0-9\b]*"
                                    className="form-control" value={this.state.pinCode} onChange={this.changeEventHandler} onKeyUp={this.onKeyUpValue}
                                    minLength={6} maxLength={6} required  />
                          </div>
                          <label className="offset-1 col-sm-2 col-form-label">Post Office Name <span className="text-danger">*</span></label>
                          <div className="col-sm-3">
                            <input type="text" placeholder="Enter Post Office Name" name="postOfficeName" pattern="[a-zA-Z]*"
                                    className="form-control" value={this.state.postOfficeName} onChange={this.changeEventHandler}
                                    required disabled={this.state.disableFields} />
                          </div>
                        </div>

                        <div className="form-group row">
                          <label className="col-sm-1 col-form-label">Area <span className="text-danger">*</span></label>
                          <div className="col-sm-3">
                            <input type="text" placeholder="Please Enter Area" name="area" pattern="[a-zA-Z]*" className="form-control"
                                  value={this.state.area} onChange={this.changeEventHandler} required disabled={this.state.disableFields} />
                          </div>
                          <label className="offset-1 col-sm-2 col-form-label">City <span className="text-danger">*</span></label>
                          <div className="col-sm-3">
                            <input type="text" placeholder="Please Enter City" name="city" pattern="[a-zA-Z]*" className="form-control"
                                  value={this.state.city} onChange={this.changeEventHandler} required disabled={this.state.disableFields} />
                          </div>
                        </div>

                        <div className="form-group row">
                          <label className="col-sm-1 col-form-label">State <span className="text-danger">*</span></label>
                          <div className="col-sm-3">
                            <select className="form-control" name="state" value={this.state.state} onChange={this.changeEventHandler} disabled={this.state.disableFields}>
                              <option value="ss">Select State</option>
                              {this.state.stateList.map(r =>
                                  <option key={r.stateId} value={r.stateId}>{r.stateName}</option>)}
                            </select>
                          </div>
                         
                          <label className="offset-1 col-sm-2 col-form-label">District <span className="text-danger">*</span></label>
                          <div className="col-sm-3">
                            <select className="form-control" name="district" value={this.state.value} onChange={this.changeEventHandler} disabled={this.state.disableFields}>
                              <option value="ss">Select District</option>
                                { this.state.districtList.map(r =>
                                    <option key={r.districtId} value={r.districtId}>{r.districtName}</option>)}
                            </select>
                          </div>
                        </div>

                        <div className="form-group row">
                          <label className="col-sm-1 col-form-label">Taluka <span className="text-danger">*</span></label>
                          <div className="col-sm-3">
                            <select className="form-control" name="taluka" value={this.state.value} onChange={this.changeEventHandler} disabled={this.state.disableFields}>
                              <option value="ss">Select Taluka</option>
                                { this.state.talukaList.map(r =>
                                    <option key={r.talukaId} value={r.talukaId}>{r.talukaName}</option>)}
                            </select>
                          </div>
                        </div>

                        <div className="form-group row">
                          <div className="col-sm-12 text-right">
                            <button className="btn btn-sm btn-grd-primary mx-3" onClick={this.submitFormBtn}>
                              {this.state.saveForm === "Delete"? "Delete": this.state.saveForm === "Update"
                                                      ? "Update" : "Submit"}
                            </button>
                            <button className="btn btn-sm btn-grd-danger" onClick={() => this.reRenderPage()}>Cancel</button>
                          </div>
                        </div>

                      </form>
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

export default PinCodeMaster;
