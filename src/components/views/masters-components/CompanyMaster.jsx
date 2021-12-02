import { event } from 'jquery'
import React, { Component } from 'react'
import $ from 'jquery';
import CompanyMasterService from '../../../Services/masterService/CompanyMasterService';
import Swal from 'sweetalert2';

export default class CompanyMaster extends Component {
    constructor(props) {
        super(props);
        //console.log("stateId===>>"+this.props.match.params.id);
        this.state = {

            // stateId this.props.match.params.stateId,

            adcmId: '',
            companyId: '',
            companyName: '',
            gstinNo: '',
            companyLegalName: '',
            companyRegistrationNo: '',
            companyTradeName: '',
            panNo: '',
            tinNo: '',
            companyTanNo: '',
            pfNo: '',
            esiNo: '',
            pfTaxNo: '',
            compRegNo: '',
            facRegNo: '',
            otherNo: '',
            companyAddress: '',
            companyCity: '',
            landmark: '',
            taluka: '',
            district: '',
            State: '',
            pinCode: '',
            faxNo: '',
            phoneNo: '',
            mobileNo: '',
            emailId: '',
            altemailId: '',
            hoAddress: '',
            hoCity: '',
            holandmark: '',
            hotaluka: '',
            hodistrict: '',
            hoState: '',
            hoPinCode: '',
            hofaxNo: '',
            hophoneNo: '',
            homobileNo: '',
            hoemailId: '',
            hoaltemailId: '',
            CompanyMasterData: [],
            stateList: [],
            talukaList: [],
            districtList: [],
            users:[],
            textValue: 'Submit',

        }
        this.changeEventHandler = this.changeEventHandler.bind(this);
        this.saveCompanyMasterData = this.saveCompanyMasterData.bind(this);
        this.VeiwCompanyMaster = this.VeiwCompanyMaster.bind(this);
        this.deleteCompanyMaster = this.deleteCompanyMaster.bind(this);
        this.UpdateCompanyMaster = this.UpdateCompanyMaster.bind(this);
        this.ClearData = this.ClearData.bind(this);
        this.validation =this.validation.bind(this);
    }


    validation(){
        var Obj = document.getElementById("panNo");
        if (Obj.value != "") {
            var ObjVal = Obj.value;
            var panPat = /^([a-zA-Z]{5})(\d{4})([a-zA-Z]{1})$/;
            if (ObjVal.search(panPat) == -1) {
                alert("Invalid Pan No");
                Obj.focus();
                return false;
            }
          else
            {
              alert("Correct Pan No");
            }
        }   
        
        var Obj1 = document.getElementById("gstinNo");
        if (Obj1.value != "") {
            var ObjVals = Obj1.value;
            var panPat = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
            if (ObjVals.search(panPat) == -1) {
                alert("Invalid GSTIN No");
                Obj.focus();
                return false;
            }
          else
            {
              alert("Correct GSTIN No");
            }
        }   

        var Obj2 = document.getElementById("companyTanNo");
        if (Obj2.value != "") {
            var ObjVals = Obj2.value;
            var panPat = /^[A-Za-z]{4}[0-9]{5}[A-Za-z]{1}$/;
            if (ObjVals.search(panPat) == -1) {
                alert("Invalid tan No");
                Obj.focus();
                return false;
            }
          else
            {
              alert("Correct TAN No");
            }
        } 
        
        var Obj3 = document.getElementById("tinNo");
        if (Obj3.value != "") {
            var ObjVals = Obj3.value;
            var panPat =  /^(?![-])(?!.*[-]$)(?!.*[-]{2})[0-9-]+$/gm;
            if (ObjVals.search(panPat) == -1) {
                alert("Invalid tin No");
                Obj.focus();
                return false;
            }
          else
            {
              alert("Correct TIN No");
            }
        }   

        var Obj4 = document.getElementById("phoneNo");
        if (Obj4.value != "") {
            var ObjVals = Obj4.value;
            var panPat =  /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
            if (ObjVals.search(panPat) == -1) {
                alert("Invalid phone No");
                Obj.focus();
                return false;
            }
          else
            {
              alert("Correct Phone No");
            }
        }  
        
        var Obj5 = document.getElementById("mobileNo");
        if (Obj5.value != "") {
            var ObjVals = Obj5.value;
            var panPat =  /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
            if (ObjVals.search(panPat) == -1) {
                alert("Invalid mobile No");
                Obj.focus();
                return false;
            }
          else
            {
              alert("Correct mobile No");
            }
        }   

        var Obj5 = document.getElementById("hophoneNo");
        if (Obj5.value != "") {
            var ObjVals = Obj5.value;
            var panPat =  /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
            if (ObjVals.search(panPat) == -1) {
                alert("Invalid Head Office Phone No");
                Obj.focus();
                return false;
            }
          else
            {
              alert("Correct Head Office Phone No");
            }
        } 

        var Obj5 = document.getElementById("homobileNo");
        if (Obj5.value != "") {
            var ObjVals = Obj5.value;
            var panPat =  /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
            if (ObjVals.search(panPat) == -1) {
                alert("Invalid Head Office mobile No");
                Obj.focus();
                return false;
            }
          else
            {
              alert("Correct Head office mobile No");
            }
        } 
       

        var Obj6 = document.getElementById("pinCode");
        if (Obj6.value != "") {
            var ObjVals = Obj6.value;
            var panPat =   /^(\d{4}|^\d{6})$/;
            if (ObjVals.search(panPat) == -1) {
                alert("Invalid Pincode");
                Obj.focus();
                return false;
            }
          else
            {
              alert("Correct PinCode");
            }
        } 
      
        var Obj7 = document.getElementById("phoneNo");
        var Obj8 = document.getElementById("mobileNo");
        
        if (Obj7.value != "" || Obj8.value != "") {
            var ObjVals = Obj7.value;
            var ObjValss = Obj8.value;
            var panPat =   /^\d{10}$/;
            if (ObjVals.search(panPat) == -1 || ObjValss.search(panPat) == -1) {
                alert("Invalid Phone no");
                Obj.focus();
                return false;
            }
          else
            {
              alert("Correct Phone no");
            }
        } 
    }

    logChange = (val) => {
        console.log("Select 2 value is :" + JSON.stringify(val.value));
        this.setState({ users: val.value });

    }

    ClearData() {
        this.setState({
            adcmId: '',
            companyId: '',
            companyName: '',
            gstinNo: '',
            companyLegalName: '',
            companyRegistrationNo: '',
            companyTradeName: '',
            panNo: '',
            tinNo: '',
            companyTanNo: '',
            pfNo: '',
            esiNo: '',
            pfTaxNo: '',
            compRegNo: '',
            facRegNo: '',
            otherNo: '',
            companyAddress: '',
            companyCity: '',
            landmark: '',
            taluka: '',
            district: '',
            State: '',
            pinCode: '',
            faxNo: '',
            phoneNo: '',
            mobileNo: '',
            emailId: '',
            altemailId: '',
            hoAddress: '',
            hoCity: '',
            holandmark: '',
            hotaluka: '',
            hodistrict: '',
            hoState: '',
            hoPinCode: '',
            hofaxNo: '',
            hophoneNo: '',
            homobileNo: '',
            hoemailId: '',
            hoaltemailId: '',
            CompanyMasterData: [],
            textValue: 'Submit',
        });
    }

    componentDidMount() {
        this.reloadTableData();
    }

    changeEventHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    reloadTableData() {
        // this.state = {

        //     // stateId this.props.match.params.stateId,

        //     adcmId: '',
        //     companyId: '',
        //     companyName: '',
        //     gstinNo: '',
        //     companyLegalName: '',
        //     companyRegistrationNo: '',
        //     companyTradeName: '',
        //     panNo: '',
        //     tinNo: '',
        //     companyTanNo: '',
        //     pfNo: '',
        //     esiNo: '',
        //     pfTaxNo: '',
        //     compRegNo: '',
        //     facRegNo: '',
        //     otherNo: '',
        //     companyAddress: '',
        //     companyCity: '',
        //     landmark: '',
        //     taluka: '',
        //     district: '',
        //     State: '',
        //     pinCode: '',
        //     faxNo: '',
        //     phoneNo: '',
        //     mobileNo: '',
        //     emailId: '',
        //     altemailId: '',
        //     hoAddress: '',
        //     hoCity: '',
        //     holandmark: '',
        //     hotaluka: '',
        //     hodistrict: '',
        //     hoState: '',
        //     hoPinCode: '',
        //     hofaxNo: '',
        //     hophoneNo: '',
        //     homobileNo: '',
        //     hoemailId: '',
        //     hoaltemailId: '',
        //     CompanyMasterData: [],
        //     stateList: [],
        //     talukaList: [],
        //     districtList: [],
        //     users:[],
        //     textValue: 'Submit',

        // }

        CompanyMasterService.getCompanyDetails().then((resp) => {
             this.setState({ CompanyMasterData: resp.data.response });
         });
         console.log("Company list: "+this.state.CompanyMasterData);

        CompanyMasterService.getTalukaData().then((res) => {
            this.setState({ talukaList: res.data.response });
        })
        console.log("Taluka list: "+this.state.talukaList);

        CompanyMasterService.getDistrictData().then((res) => {
            this.setState({ districtList: res.data.response });
        })
        console.log("District list: "+this.state.districtList);

        CompanyMasterService.getStateData().then((res) => {
            this.setState({ stateList: res.data.response });
        })
        console.log("State list: "+this.state.stateList);

        $(document).ready(function () {
            setTimeout(function () {
                $('#companyTable').DataTable({
                    pageLength: 5,
                    lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 50]]
                });
            }, 1000);
        });
    }

    VeiwCompanyMaster = () => {
        this.setState({
            textValue: 'Update'
        });
        CompanyMasterService.getCompanyDetails().then((res) => {
            let companyMaster = res.data.response;
            this.setState({
                adcmLegalName: companyMaster.adcmLegalName,
                adcmAdd: companyMaster.adcmAdd,
                adcmCopregNo: companyMaster.adcmCopregNo,
            });
        });

    }



    deleteCompanyMaster(adcmId) {
        this.setState({
            textValue: 'Delete'
        });

        CompanyMasterService.getCompanyById(adcmId).then((res) => {

            let companyMaster = res.data.response;


            this.setState({
                companyId: companyMaster.adcmId,
                companyName: companyMaster.adcmName,
                gstinNo: companyMaster.adcmGstnNo,
                companyLegalName: companyMaster.adcmLegalName,
                companyRegistrationNo: companyMaster.adcmCopregNo,
                companyTradeName: companyMaster.adcmTradeName,
                panNo: companyMaster.adcmPanNo,
                tinNo: companyMaster.adcmTinNo,
                companyTanNo: companyMaster.adcmTanNo,
                pfNo: companyMaster.adcmPfNo,
                esiNo: companyMaster.adcmEsiNo,
                pfTaxNo: companyMaster.adcmPftaxNo,
                compRegNo: companyMaster.adcmRegNo,
                facRegNo: companyMaster.adcmFacregNo,
                otherNo: companyMaster.adcmOtherNo,
                companyAddress: companyMaster.adcmAdd,
                companyCity: companyMaster.adcmCity,
                landmark: companyMaster.adcmLandmark,
                taluka: companyMaster.adcmTalukaId,
                district: companyMaster.adcmDistrictId,
                State: companyMaster.adcmStateId,
                pinCode: companyMaster.adcmPin,
                faxNo: companyMaster.adcmFax,
                phoneNo: companyMaster.adcmPhone1,
                mobileNo: companyMaster.adcmPhone2,
                emailId: companyMaster.adcmMailid1,
                altemailId: companyMaster.adcmMailid2,
                hoAddress: companyMaster.adcmAddHo,
                hoCity: companyMaster.adcmCityHo,
                holandmark: companyMaster.adcmLandmarkHo,
                hotaluka: companyMaster.adcmTalukaIdHo,
                hodistrict: companyMaster.adcmDistrictIdHo,
                hoState: companyMaster.adcmStateIdHo,
                hoPinCode: companyMaster.adcmPinHo,
                hofaxNo: companyMaster.adcmFaxHo,
                hophoneNo: companyMaster.adcmPhone1Ho,
                homobileNo: companyMaster.adcmPhone2Ho,
                hoemailId: companyMaster.adcmMailid1Ho,
                hoaltemailId: companyMaster.adcmMailid2Ho,
            });
        })


    }



    UpdateCompanyMaster(adcmId) {

        this.setState({
            textValue: 'Update'
        });

        CompanyMasterService.getCompanyById(adcmId).then((res) => {

            let companyMaster = res.data.response;

            console.log('requestdata => ' + JSON.stringify(companyMaster));

            this.setState({
                companyId: companyMaster.adcmId,
                companyName: companyMaster.adcmName,
                gstinNo: companyMaster.adcmGstnNo,
                companyLegalName: companyMaster.adcmLegalName,
                companyRegistrationNo: companyMaster.adcmCopregNo,
                companyTradeName: companyMaster.adcmTradeName,
                panNo: companyMaster.adcmPanNo,
                tinNo: companyMaster.adcmTinNo,
                companyTanNo: companyMaster.adcmTanNo,
                pfNo: companyMaster.adcmPfNo,
                esiNo: companyMaster.adcmEsiNo,
                pfTaxNo: companyMaster.adcmPftaxNo,
                compRegNo: companyMaster.adcmRegNo,
                facRegNo: companyMaster.adcmFacregNo,
                otherNo: companyMaster.adcmOtherNo,
                companyAddress: companyMaster.adcmAdd,
                companyCity: companyMaster.adcmCity,
                landmark: companyMaster.adcmLandmark,
                taluka: companyMaster.adcmTalukaId,
                district: companyMaster.adcmDistrictId,
                State: companyMaster.adcmStateId,
                pinCode: companyMaster.adcmPin,
                faxNo: companyMaster.adcmFax,
                phoneNo: companyMaster.adcmPhone1,
                mobileNo: companyMaster.adcmPhone2,
                emailId: companyMaster.adcmMailid1,
                altemailId: companyMaster.adcmMailid2,
                hoAddress: companyMaster.adcmAddHo,
                hoCity: companyMaster.adcmCityHo,
                holandmark: companyMaster.adcmLandmarkHo,
                hotaluka: companyMaster.adcmTalukaIdHo,
                hodistrict: companyMaster.adcmDistrictIdHo,
                hoState: companyMaster.adcmStateIdHo,
                hoPinCode: companyMaster.adcmPinHo,
                hofaxNo: companyMaster.adcmFaxHo,
                hophoneNo: companyMaster.adcmPhone1Ho,
                homobileNo: companyMaster.adcmPhone2Ho,
                hoemailId: companyMaster.adcmMailid1Ho,
                hoaltemailId: companyMaster.adcmMailid2Ho,
            });
        })
    }

    saveCompanyMasterData = (event) => {
        event.preventDefault();
        this.validation();
        let companyData = {
            adcmId: this.state.adcmId,
            adcmName: this.state.companyName,
            adcmGstnNo: this.state.gstinNo,
            adcmLegalName: this.state.companyLegalName,
            adcmCopregNo: this.state.companyRegistrationNo,
            adcmTradeName: this.state.companyTradeName,
            adcmPanNo: this.state.panNo,
            adcmTinNo: this.state.tinNo,
            adcmTanNo: this.state.companyTanNo,
            adcmPfNo: this.state.pfNo,
            adcmEsiNo: this.state.esiNo,
            adcmPftaxNo: this.state.pfTaxNo,
            adcmRegNo: this.state.compRegNo,
            adcmFacregNo: this.state.facRegNo,
            adcmOtherNo: this.state.otherNo,
            adcmAdd: this.state.companyAddress,
            adcmCity: this.state.companyCity,
            adcmLandmark: this.state.landmark,
            adcmTalukaId: this.state.taluka,
            adcmDistrictId: this.state.district,
            adcmStateId: this.state.State,
            adcmPin: this.state.pinCode,
            adcmFax: this.state.faxNo,
            adcmPhone1: this.state.phoneNo,
            adcmPhone2: this.state.mobileNo,
            adcmMailid1: this.state.emailId,
            adcmMailid2: this.state.altemailId,
            adcmAddHo: this.state.hoAddress,
            adcmCityHo: this.state.hoCity,
            adcmLandmarkHo: this.state.holandmark,
            adcmTalukaIdHo: this.state.hotaluka,
            adcmDistrictIdHo: this.state.hodistrict,
            adcmStateIdHo: this.state.hoState,
            adcmPinHo: this.state.hoPinCode,
            adcmFaxHo: this.state.hofaxNo,
            adcmPhone1Ho: this.state.hophoneNo,
            adcmPhone2Ho: this.state.homobileNo,
            adcmMailid1Ho: this.state.hoemailId,
            adcmMailid2Ho: this.state.hoaltemailId,
        }
        console.log('stateData => ' + JSON.stringify(companyData));
          
        if (
            this.state.companyName.length === 0 ||
            this.state.gstinNo.length === 0 ||
            this.state.companyRegistrationNo.length === 0 ||
            this.state.panNo.length === 0 ||
            this.state.tinNo.length === 0 ||
            this.state.companyTanNo.length === 0 ||
            this.state.pfNo.length === 0 ||
            this.state.esiNo.length === 0 ||
            this.state.pfTaxNo.length === 0 ||
            this.state.compRegNo.length === 0 ||
            this.state.facRegNo.length === 0 ||
            this.state.companyAddress.length === 0 ||
            this.state.companyCity.length === 0 ||
            this.state.landmark.length === 0 ||
            this.state.taluka.length === 0 ||
            this.state.district.length === 0 ||
            this.state.State.length === 0 ||
            this.state.pinCode.length === 0 ||
            this.state.mobileNo.length === 0 ||
            this.state.emailId.length === 0 ||
            this.state.hoAddress.length === 0 ||
            this.state.hoCity.length === 0 ||
            this.state.holandmark.length === 0 ||
            this.state.hotaluka.length === 0 ||
            this.state.hodistrict.length === 0 ||
            this.state.hoState.length === 0 ||
            this.state.hoPinCode.length === 0 ||
            this.state.homobileNo.length === 0 ||
            this.state.hoemailId.length === 0 
        ){
            alert("Please Fill All The Fields.");
        }
        else  
        if (this.state.textValue === "Submit") {
            CompanyMasterService.saveCompanyMasterData(companyData).then(res => {
                let msg = res.data.msg;
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
                console.log("Data Save Successfully" + res);
                this.reloadTableData();
            })

        }


        else if (this.state.textValue === "Update") {
            alert("i m in Update");
            CompanyMasterService.updateCompanyMaster(companyData, this.state.companyId).then(res => {
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
                   // this.ClearData();

                }
                this.reloadTableData();
            });
        }
        else if (this.state.textValue === "Delete") {

            //     alert("adcmId"+adcmId);

            CompanyMasterService.deleteCompanyMaster(this.state.companyId).then(res => {
                //  this.setState({ CompanyMasterData: this.state.CompanyMasterData.filter(CompanyMasterData => CompanyMasterData.adcmId !== this.state.companyId) })
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
                else if (code === 200) {
                    Swal.fire({
                        title: "Good job!",
                        text: msg,
                        icon: "success",

                    });
                    this.ClearData();
                }

                this.reloadTableData();

            });
        }
    }

    render() {
        return (
            <>
                <div className="main-panel">
                    <div className="content">
                        <div className="page-inner">

                            <div className="page-wrapper">

                                <div className="card p-3">
                                    <div className="row">
                                        <div className="col-lg-8 m-auto">
                                            <div className="page-header-title">
                                                <h4 className="text-primary f-w-600 m-auto">
                                                    Company Master
                                                </h4>
                                            </div>
                                        </div>

                                        <div className="col-lg-4">
                                            <div className="page-header-breadcrumb">
                                                <ul className="breadcrumbs">
                                                    <li className="nav-home">
                                                        <a href="index.html">
                                                            <i className="flaticon-home"></i>
                                                        </a>
                                                    </li>
                                                    <li className="separator">
                                                        <i className="flaticon-right-arrow"></i>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="#">Forms</a>
                                                    </li>
                                                    <li className="separator">
                                                        <i className="flaticon-right-arrow"></i>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="#">Basic Form</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div></div>



                                <div id="accordion">
                                    <div class="card">
                                        <div class="card-header" id="headingOne">
                                            <h5 class="mb-0">
                                                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Company Data
                                                </button>
                                            </h5>
                                        </div>

                                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div class="card-body">

                                                <div className="page-body">
                                                    <div className="row">
                                                        <div className="col-md-12 col-xl-12">
                                                            <div className="card p-4">



                                                                <div className="row">
                                                                    <div className="col-lg-12 col-xl-12">


                                                                        <ul className="nav nav-tabs  tabs" role="tablist">
                                                                            <li className="nav-item">
                                                                                <a className="nav-link active" data-toggle="tab" href="#home1" role="tab" aria-expanded="true">Company Details</a>
                                                                            </li>
                                                                            <li className="nav-item">
                                                                                <a className="nav-link" data-toggle="tab" href="#profile1" role="tab" aria-expanded="false">Company Address</a>
                                                                            </li>
                                                                            <li className="nav-item">
                                                                                <a className="nav-link" data-toggle="tab" href="#messages1" role="tab" aria-expanded="false">Head Office Address</a>
                                                                            </li>
                                                                            {/* <li className="nav-item">
                                                                    <a className="nav-link" data-toggle="tab" href="#settings1" role="tab" aria-expanded="false">Settings</a>
                                                                </li> */}
                                                                        </ul>
                                                                        <br></br>

                                                                        <div className="tab-content tabs card-block">


                                                                            <div className="tab-pane active" id="home1" role="tabpanel">

                                                                                <div className="row" aria-expanded="true">

                                                                                    <input type="hidden" placeholder="Company Id" name="companyId" id="companyId" value={this.state.adcmId} className="form-control" onChange={this.changeEventHandler}
                                                                                    />
                                                                                    <label className="col-sm-12 col-lg-2 col-xl-2">Company Name <span className="text-danger">*</span></label>
                                                                                    <div className="col-sm-12 col-lg-4 col-xl-4">
                                                                                        <input type="text" placeholder="Please Enter Company Name" pattern="[a-zA-Z]*" className="form-control companyName" value={this.state.companyName} 
                                                                                        onChange={this.changeEventHandler} name="companyName" id="companyName" required />
                                                                                    </div>

                                                                                    <label className="col-sm-12 col-lg-2 col-xl-2">GSTIN No <span className="text-danger">*</span></label>

                                                                                    <div className="col-sm-12 col-lg-4 col-xl-4 ">
                                                                                        <input type="text" placeholder="Please Enter GSTIN No" pattern="[A-Z0-9]*" className="form-control gstinNo" name="gstinNo" id="gstinNo" value={this.state.gstinNo} onChange={this.changeEventHandler} />
                                                                                    </div>


                                                                                </div>
                                                                                <br></br>

                                                                                <div className="row" aria-expanded="true">
                                                                                    <label className="col-sm-12 col-lg-2 col-xl-2">Company Legal Name </label>
                                                                                    <div className="col-sm-12 col-lg-4 col-xl-4 ">
                                                                                        <input type="text" placeholder="Please Enter Company Legal Name" pattern="[a-zA-Z]*" value={this.state.companyLegalName} onChange={this.changeEventHandler} className="form-control companyLegalName" name="companyLegalName" id="companyLegalName" />
                                                                                    </div>

                                                                                    <label className="col-sm-12 col-lg-2 col-xl-2">Registration No  <span className="text-danger">*</span></label>
                                                                                    <div className="col-sm-12 col-lg-4 col-xl-4">
                                                                                        <input type="text" placeholder="Please Enter Registration No" pattern="[a-zA-Z0-9]*" class="form-control companyRegistrationNo" name="companyRegistrationNo" id="companyRegistrationNo" value={this.state.companyRegistrationNo} onChange={this.changeEventHandler} />
                                                                                    </div>


                                                                                </div>
                                                                                <br></br>
                                                                                <div className="row" aria-expanded="true">

                                                                                    <label className="col-sm-12 col-lg-2 col-xl-2">Company Trade Name </label>
                                                                                    <div className="col-sm-12 col-lg-4 col-xl-4">
                                                                                        <input type="text" placeholder="Please Enter Company Trade Name" pattern="[a-zA-Z]*"  class="form-control companyTradeName" name="companyTradeName" id="companyTradeName" value={this.state.companyTradeName} onChange={this.changeEventHandler} />
                                                                                    </div>

                                                                                    <label className="col-sm-12 col-lg-2 col-xl-2">Pan No <span className="text-danger">*</span></label>
                                                                                    <div className="col-sm-12 col-lg-4 col-xl-4 ">
                                                                                        <input type="text" placeholder="Please Enter Pan No" pattern="[A-Z0-9]*" className="form-control panNo" name="panNo" id="panNo" value={this.state.panNo} onChange={this.changeEventHandler} />
                                                                                    </div>
                                                                                </div>

                                                                                <br></br>
                                                                                <div className="row" aria-expanded="true">
                                                                                    <label className="col-sm-12 col-lg-2 col-xl-2">Tin No <span className="text-danger">*</span></label>
                                                                                    <div className="col-sm-12 col-lg-4 col-xl-4 ">
                                                                                        <input type="text" placeholder="Please Enter Tin No" pattern="[0-9]*" className="form-control tinNo" name="tinNo" id="tinNo" value={this.state.tinNo} onChange={this.changeEventHandler} />
                                                                                    </div>

                                                                                    <label className="col-sm-12 col-lg-2 col-xl-2">Tan No <span className="text-danger">*</span></label>
                                                                                    <div className="col-sm-12 col-lg-4 col-xl-4">
                                                                                        <input type="text" placeholder="Please Enter Tan No" pattern="[A-Z0-9]*" class="form-control companyTanNo" name="companyTanNo" id="companyTanNo" value={this.state.companyTanNo} onChange={this.changeEventHandler} />
                                                                                    </div>
                                                                                </div>

                                                                                <br></br>
                                                                                <div className="row" aria-expanded="true">

                                                                                    <label className="col-sm-12 col-lg-2 col-xl-2">PF No <span className="text-danger">*</span></label>
                                                                                    <div className="col-sm-12 col-lg-4 col-xl-4">
                                                                                        <input type="text" placeholder="Please Enter PF No" pattern="[a-zA-Z0-9]*" class="form-control pfNo" name="pfNo" id="pfNo" value={this.state.pfNo} onChange={this.changeEventHandler} />
                                                                                    </div>

                                                                                    <label className="col-sm-12 col-lg-2 col-xl-2">ESI No <span className="text-danger">*</span></label>
                                                                                    <div className="col-sm-12 col-lg-4 col-xl-4 ">
                                                                                        <input type="text" placeholder="Please Enter ESI No" pattern="[a-zA-Z0-9]*" className="form-control esiNo" name="esiNo" id="esiNo" value={this.state.esiNo} onChange={this.changeEventHandler} />
                                                                                    </div>

                                                                                </div>
                                                                                <br></br>
                                                                                <div className="row" aria-expanded="true">

                                                                                    <label className="col-sm-12 col-lg-2 col-xl-2">PF Tax No <span className="text-danger">*</span></label>
                                                                                    <div className="col-sm-12 col-lg-4 col-xl-4">
                                                                                        <input type="text" placeholder="Please Enter PF Tax No" pattern="[a-zA-Z0-9]*" class="form-control pfTaxNo" name="pfTaxNo" id="pfTaxNo" value={this.state.pfTaxNo} onChange={this.changeEventHandler} />
                                                                                    </div>

                                                                                    <label className="col-sm-12 col-lg-2 col-xl-2">Comp Registration No <span className="text-danger">*</span></label>
                                                                                    <div className="col-sm-12 col-lg-4 col-xl-4 ">
                                                                                        <input type="text" placeholder="Please Enter Company Registration No" pattern="[a-zA-Z0-9]*" className="form-control compRegNo" name="compRegNo" id="compRegNo" value={this.state.compRegNo} onChange={this.changeEventHandler} />
                                                                                    </div>
                                                                                </div>
                                                                                <br></br>
                                                                                <div className="row" aria-expanded="true">

                                                                                    <label className="col-sm-12 col-lg-2 col-xl-2">Fac Registration No <span className="text-danger">*</span></label>
                                                                                    <div className="col-sm-12 col-lg-4 col-xl-4">
                                                                                        <input type="text" placeholder="Please Enter Fac Registration No" pattern="[a-zA-Z0-9]*" class="form-control pfTaxNo" name="facRegNo" id="facRegNo" value={this.state.facRegNo} onChange={this.changeEventHandler} />
                                                                                    </div>

                                                                                    <label className="col-sm-12 col-lg-2 col-xl-2">Other No</label>
                                                                                    <div className="col-sm-12 col-lg-4 col-xl-4 ">
                                                                                        <input type="text"  placeholder="Please Enter Other No" pattern="[a-zA-Z0-9]*" className="form-control otherNo" name="otherNo" id="otherNo" value={this.state.otherNo} onChange={this.changeEventHandler} />
                                                                                    </div>

                                                                                </div>
                                                                                <br></br>

                                                                                <div className="row" aria-expanded="true">

                                                                                    <div className="col-lg-10 col-xl-10">

                                                                                    </div>



                                                                                </div>
                                                                            </div>


                                                                            <div className="tab-pane" id="profile1" role="tabpanel" aria-expanded="false">

                                                                                <div className="row" aria-expanded="true">
                                                                                    <label className="col-sm-2 col-lg-2 col-xl-2">Company Address <span className="text-danger">*</span></label>
                                                                                    <div className="col-sm-2 col-lg-4 col-xl-4 ">
                                                                                        <textarea rows="1" cols="5" className="form-control companyAddress" name="companyAddress" id="companyAddress" placeholder="Company Address" value={this.state.companyAddress} onChange={this.changeEventHandler}></textarea>
                                                                                    </div>
                                                                                    <label className="col-sm-12 col-lg-2 col-xl-2">Company City <span className="text-danger">*</span></label>
                                                                                    <div className="col-sm-12 col-lg-4 col-xl-4 ">
                                                                                        <input type="text" placeholder="Please Enter City" pattern="[a-zA-Z0-9]*" className="form-control companyCity" name="companyCity" id="companyCity" value={this.state.companyCity} onChange={this.changeEventHandler} />
                                                                                    </div>
                                                                                </div>
                                                                                <br></br>
                                                                                <div className="row" aria-expanded="true">
                                                                                    <label className="col-sm-12 col-lg-2 col-xl-2">Landmark <span className="text-danger">*</span></label>
                                                                                    <div className="col-sm-12 col-lg-4 col-xl-4 ">
                                                                                        <input type="text" placeholder="Please Enter Landmark" pattern="[a-zA-Z0-9]*" className="form-control landmark" name="landmark" id="landmark" value={this.state.landmark} onChange={this.changeEventHandler} />
                                                                                    </div>

                                                                                    <label className="col-sm-12 col-lg-2 col-xl-2">State <span className="text-danger">*</span></label>
                                                                                    <div className="col-sm-12 col-lg-4 col-xl-4 ">
                                                                                        <select className="form-control" name="state" value={this.state.state} onChange={this.changeEventHandler}>
                                                                                            <option value="ss">Select State</option>
                                                                                            {
                                                                                                this.state.stateList.map(r =>
                                                                                                    <option key={r.stateId} value={r.stateId}>
                                                                                                        {r.stateName}
                                                                                                    </option>
                                                                                                )
                                                                                            }
                                                                                        </select>
                                                                                        {/* <span style={{ color: "red" }}>{this.state.errors["state"]}</span> */}
                                                                                    </div>
                                                                                    

                                                                                </div>

                                                                                <br></br>
                                                                                <div className="row" aria-expanded="true">
                                                                                    <label className="col-sm-12 col-lg-2 col-xl-2">Disrict <span className="text-danger">*</span></label>
                                                                                    <div className="col-sm-12 col-lg-4 col-xl-4 ">
                                                                                        <select className="form-control" name="district" value={this.state.district} onChange={this.changeEventHandler}>
                                                                                            <option value="ss">Select District</option>
                                                                                            {
                                                                                                this.state.districtList.map(r =>
                                                                                                    <option key={r.districtId} value={r.districtId}>
                                                                                                        {r.districtName}
                                                                                                    </option>
                                                                                                )
                                                                                            }
                                                                                        </select>
                                                                                        {/* <span style={{ color: "red" }}>{this.state.errors["district"]}</span> */}
                                                                                    </div>

                                                                                    <label className="col-sm-12 col-lg-2 col-xl-2">Taluka <span className="text-danger">*</span></label>
                                                                                    <div className="col-sm-12 col-lg-4 col-xl-4 ">
                                                                                    <select className="form-control" name="taluka" value={this.state.taluka} onChange={this.changeEventHandler}>
                                                                                        <option value="ss">Select Taluka</option>
                                                                                        {
                                                                                            this.state.talukaList.map(r =>
                                                                                                <option key={r.talukaId} value={r.talukaId}>
                                                                                                    {r.talukaName}
                                                                                                </option>
                                                                                            )
                                                                                        }
                                                                                    </select>   
                                                                                    </div>
                                                                                    

                                                                                </div>

                                                                                <br></br>
                                                                                <div className="row" aria-expanded="true">
                                                                                    <label className="col-sm-12 col-lg-2 col-xl-2">Pin Code <span className="text-danger">*</span></label>
                                                                                    <div className="col-sm-12 col-lg-4 col-xl-4 ">
                                                                                        <input type="text" placeholder="Please Enter Pincode No" pattern="[a-zA-Z0-9]*" className="form-control pinCode" name="pinCode" id="pinCode" value={this.state.pinCode} onChange={this.changeEventHandler} />
                                                                                        
                                                                                    </div>


                                                                                    <label className="col-sm-12 col-lg-2 col-xl-2">Fax No </label>
                                                                                    <div className="col-sAm-12 col-lg-4 col-xl-4 ">
                                                                                        <input type="text" placeholder="Please Enter Fax No" pattern="[a-zA-Z0-9]*" className="form-control faxNo" name="faxNo" id="faxNo" value={this.state.faxNo} onChange={this.changeEventHandler} />
                                                                                    </div>

                                                                                </div>

                                                                                <br></br>

                                                                                <div className="row" aria-expanded="true">
                                                                                    <label className="col-sm-12 col-lg-2 col-xl-2">Phone No </label>
                                                                                    <div className="col-sm-12 col-lg-4 col-xl-4 ">
                                                                                        <input type="text" placeholder="Please Enter Phone No" pattern="[a-zA-Z0-9]*" className="form-control phoneNo" name="phoneNo" id="phoneNo" value={this.state.phoneNo} onChange={this.changeEventHandler} />
                                                                                    </div>

                                                                                    <label className="col-sm-12 col-lg-2 col-xl-2">Mobile No <span className="text-danger">*</span></label>
                                                                                    <div className="col-sAm-12 col-lg-4 col-xl-4 ">
                                                                                        <input type="text" placeholder="Please Enter Mobile No" pattern="[a-zA-Z0-9]*" className="form-control mobileNo" id="mobileNo" name="mobileNo" value={this.state.mobileNo} onChange={this.changeEventHandler} />
                                                                                    </div>

                                                                                </div>

                                                                                <br></br>

                                                                                <div className="row" aria-expanded="true">
                                                                                    <label className="col-sm-12 col-lg-2 col-xl-2">Email Id <span className="text-danger">*</span></label>
                                                                                    <div className="col-sm-12 col-lg-4 col-xl-4 ">
                                                                                        <input type="text" placeholder="Please Enter Email Id" pattern="[a-zA-Z0-9]*" className="form-control emailId" id="emailId" name="emailId" value={this.state.emailId} onChange={this.changeEventHandler} />
                                                                                    </div>


                                                                                    <label className="col-sm-12 col-lg-2 col-xl-2">Alternate Email Id </label>
                                                                                    <div className="col-sAm-12 col-lg-4 col-xl-4 ">
                                                                                        <input type="text" placeholder="Please Enter Alternate Email Id" pattern="[a-zA-Z0-9]*" className="form-control altemailId" id="altemailId" name="altemailId" value={this.state.altemailId} onChange={this.changeEventHandler} />
                                                                                    </div>

                                                                                </div>
                                                                                <br></br>
                                                                                <div className="row" aria-expanded="true">

                                                                                    <div className="col-lg-10 col-xl-10">
                                                                                    </div>

                                                                                </div>

                                                                            </div>

                                                                            <div className="tab-pane" id="messages1" role="tabpanel" aria-expanded="false">


                                                                                <div className="row" aria-expanded="true">
                                                                                    <label className="col-sm-2 col-lg-2 col-xl-2">HO Address <span className="text-danger">*</span></label>
                                                                                    <div className="col-sm-2 col-lg-4 col-xl-4 ">
                                                                                        <textarea rows="1" cols="5" className="form-control hoAddress" id="hoAddress" placeholder="Head Office Address" name="hoAddress" value={this.state.hoAddress} onChange={this.changeEventHandler} ></textarea>
                                                                                    </div>
                                                                                    <label className="col-sm-12 col-lg-2 col-xl-2"> City <span className="text-danger">*</span></label>
                                                                                    <div className="col-sm-12 col-lg-4 col-xl-4 ">
                                                                                        <input type="text" placeholder="Please Enter City" pattern="[a-zA-Z0-9]*" className="form-control hoCity" id="hoCity" name="hoCity" value={this.state.hoCity} onChange={this.changeEventHandler} />
                                                                                    </div>
                                                                                </div>
                                                                                <br></br>
                                                                                <div className="row" aria-expanded="true">
                                                                                    <label className="col-sm-12 col-lg-2 col-xl-2">Landmark <span className="text-danger">*</span></label>
                                                                                    <div className="col-sm-12 col-lg-4 col-xl-4 ">
                                                                                        <input type="text" placeholder="Please Enter Landmark" pattern="[a-zA-Z0-9]*" className="form-control holandmark" id="holandmark" name="holandmark" value={this.state.holandmark} onChange={this.changeEventHandler} />
                                                                                    </div>
                                                                                    <label className="col-sm-12 col-lg-2 col-xl-2">State <span className="text-danger">*</span></label>
                                                                                    <div className="col-sm-12 col-lg-4 col-xl-4 ">
                                                                                        <select className="form-control" name="state" value={this.state.state} onChange={this.changeEventHandler}>
                                                                                            <option value="ss">Select State</option>
                                                                                            {
                                                                                                this.state.stateList.map(r =>
                                                                                                    <option key={r.stateId} value={r.stateId}>
                                                                                                        {r.stateName}
                                                                                                    </option>
                                                                                                )
                                                                                            }
                                                                                        </select>
                                                                                        {/* <span style={{ color: "red" }}>{this.state.errors["state"]}</span> */}
                                                                                    </div>
                                                                                </div>

                                                                                <br></br>
                                                                                <div className="row" aria-expanded="true">
                                                                                    <label className="col-sm-12 col-lg-2 col-xl-2">Disrict <span className="text-danger">*</span></label>
                                                                                    <div className="col-sm-12 col-lg-4 col-xl-4 ">
                                                                                        <select className="form-control" name="district" value={this.state.district} onChange={this.changeEventHandler}>
                                                                                            <option value="ss">Select District</option>
                                                                                            {
                                                                                                this.state.districtList.map(r =>
                                                                                                    <option key={r.districtId} value={r.districtId}>
                                                                                                        {r.districtName}
                                                                                                    </option>
                                                                                                )
                                                                                            }
                                                                                        </select>
                                                                                        {/* <span style={{ color: "red" }}>{this.state.errors["district"]}</span> */}
                                                                                    </div>

                                                                                    <label className="col-sm-12 col-lg-2 col-xl-2">Taluka <span className="text-danger">*</span></label>
                                                                                    <div className="col-sm-12 col-lg-4 col-xl-4 ">
                                                                                        <select className="form-control" name="taluka" value={this.state.taluka} onChange={this.changeEventHandler}>
                                                                                            <option value="ss">Select Taluka</option>
                                                                                            {
                                                                                                this.state.talukaList.map(r =>
                                                                                                    <option key={r.talukaId} value={r.talukaId}>
                                                                                                        {r.talukaName}
                                                                                                    </option>
                                                                                                )
                                                                                            }
                                                                                        </select>
                                                                                        {/* <span style={{ color: "red" }}>{this.state.errors["taluka"]}</span> */}
                                                                                    </div>
                                                                                    

                                                                                </div>

                                                                                <br></br>
                                                                                <div className="row" aria-expanded="true">
                                                                                    <label className="col-sm-12 col-lg-2 col-xl-2">Pin Code <span className="text-danger">*</span></label>
                                                                                    <div className="col-sm-12 col-lg-4 col-xl-4 ">
                                                                                        <input type="text" placeholder="Please Enter PinCode No" pattern="[a-zA-Z0-9]*" className="form-control hoPinCode" id="hoPinCode" name="hoPinCode" value={this.state.hoPinCode} onChange={this.changeEventHandler} />
                                                                                    </div>


                                                                                    <label className="col-sm-12 col-lg-2 col-xl-2">Fax No </label>
                                                                                    <div className="col-sAm-12 col-lg-4 col-xl-4 ">
                                                                                        <input type="text" placeholder="Please Enter Fax No" pattern="[a-zA-Z0-9]*" className="form-control hofaxNo" id="hofaxNo" name="hofaxNo" value={this.state.hofaxNo} onChange={this.changeEventHandler} />
                                                                                    </div>

                                                                                </div>

                                                                                <br></br>
                                                                                <div className="row" aria-expanded="true">
                                                                                    <label className="col-sm-12 col-lg-2 col-xl-2">Phone No </label>
                                                                                    <div className="col-sm-12 col-lg-4 col-xl-4 ">
                                                                                        <input type="text" placeholder="Please Enter Phone No" pattern="[a-zA-Z0-9]*" className="form-control hophoneNo" id="hophoneNo" name="hophoneNo" value={this.state.hophoneNo} onChange={this.changeEventHandler} />
                                                                                    </div>


                                                                                    <label className="col-sm-12 col-lg-2 col-xl-2">Mobile No <span className="text-danger">*</span></label>
                                                                                    <div className="col-sAm-12 col-lg-4 col-xl-4 ">
                                                                                        <input type="text" placeholder="Please Enter Mobile No" pattern="[a-zA-Z0-9]*" className="form-control homobileNo" id="homobileNo" name="homobileNo" value={this.state.homobileNo} onChange={this.changeEventHandler} />
                                                                                    </div>

                                                                                </div>


                                                                                <br></br>
                                                                                <div className="row" aria-expanded="true">
                                                                                    <label className="col-sm-12 col-lg-2 col-xl-2">Email Id <span className="text-danger">*</span></label>
                                                                                    <div className="col-sm-12 col-lg-4 col-xl-4 ">
                                                                                        <input type="text" placeholder="Please Enter Email Id" pattern="[a-zA-Z0-9]*" className="form-control hoemailId" id="hoemailId" name="hoemailId" value={this.state.hoemailId} onChange={this.changeEventHandler} />
                                                                                    </div>


                                                                                    <label className="col-sm-12 col-lg-2 col-xl-2">Alternate Email Id </label>
                                                                                    <div className="col-sAm-12 col-lg-4 col-xl-4 ">
                                                                                        <input type="text" placeholder="Please Enter Alternate Email Id" pattern="[a-zA-Z0-9]*" className="form-control hoaltemailId" id="hoaltemailId" name="hoaltemailId" value={this.state.hoaltemailId} onChange={this.changeEventHandler} />
                                                                                    </div>

                                                                                </div>

                                                                                <br></br>

                                                                                <div className="row" aria-expanded="true">

                                                                                    <div className="col-lg-10 col-xl-10">
                                                                                    </div>
                                                                                    <div className="col-sm-6 col-lg-1 col-xl-1 ">
                                                                                        <button className="btn hor-grd btn-grd-primary savePg1" id="savePg1" onClick={this.saveCompanyMasterData} onChange={this.changeEventHandler} name="savePg1">{this.state.textValue}</button>

                                                                                    </div>
                                                                                    <div className="col-sm-6 col-lg-1 col-xl-1">
                                                                                        <button class="btn btn-warning cleardata" id="cleardata" onClick={this.ClearData} name="cleardata" >Clear Data</button>
                                                                                    </div>
                                                                                </div>



                                                                            </div>


                                                                        </div>
                                                                    </div>

                                                                </div>

                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="headingTwo">
                                            <h5 class="mb-0">
                                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Company Data Table
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                            <div class="card-body">
                                                <div className="col-md-12 col-xl-12">
                                                    <div className="card p-4">

                                                        <div className="card-block table-border-style">
                                                            <div className="table-responsive p-2">
                                                                <table id="companyTable" className="table table-striped table-bordered table-hover">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Company Registration No</th>
                                                                            <th>Company Name</th>

                                                                            <th>Company Address</th>
                                                                            <th>Action</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody id="companyTbody">
                                                                        {
                                                                            this.state.CompanyMasterData.map(
                                                                                CompanyMasterData =>
                                                                                    <tr key={CompanyMasterData.adcmId}>
                                                                                        <td>{CompanyMasterData.adcmCopregNo}</td>
                                                                                        <td>{CompanyMasterData.adcmLegalName}</td>

                                                                                        <td>{CompanyMasterData.adcmAdd}</td>

                                                                                        <td className="text-center">
                                                                                            <button className="btn btn-xs btn-grd-primary m-1" onClick={() => this.UpdateCompanyMaster(CompanyMasterData.adcmId)} ><i class="fas fa-edit"></i></button>
                                                                                            <button className="btn btn-xs btn-grd-danger m-1" onClick={() => this.deleteCompanyMaster(CompanyMasterData.adcmId)} ><i class="fas fa-trash"></i></button>


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
                        </div>
                    </div>
                </div>





            </>
        )
    }
}
