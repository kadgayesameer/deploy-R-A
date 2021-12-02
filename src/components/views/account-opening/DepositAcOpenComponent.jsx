import { event } from "jquery";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import DepositeAcOpeningServices from "../../../Services/accountOpeningServices/DepositeAccount/DepositeAcOpeningServices";
import AuthenticationService from "../../../Services/authService/AuthenticationService";
import DateConversionService from "../../../Services/utilServices/DateConversionService";

export default class DepositeAcOpenComponent extends Component {
  constructor() {
    super();
    this.state = {
      tab: "depositAccount",
      depositAccountBtn: "",
      operatorDetailsBtn: "",
      depositDetailsFDBtn: "",
      nomineeDetailsBtn: "",
      emiCalculatorBtn: "",
      uploadedDocumentsBtn: "",

      date: new Date().toLocaleDateString(),
      enterDate:
        new Date().getDate() +
        "/" +
        (new Date().getMonth() + 1) +
        "/" +
        new Date().getFullYear(),
      transactionDate:
        new Date().getDate() +
        "/" +
        (new Date().getMonth() + 1) +
        "/" +
        new Date().getFullYear(),

      customerId: "",
      depositAccountCollapse: false,
      accountType: "",
      openEffectiveDate: "",
      accountNo: "",
      accountName: "",
      applicationNo: "",
      accountType: "",
      constitutionOccupation: "",
      address: "",
      accountStatus: "",
      customerMaster: {
        customerMasterId: "",
      },
      confirmBtnDisableStatus: true,
      //saveDepositeAccountTab : "",

      // schemeDetailsCollapse: false,
      // scheme: "",
      // interestCalculationFlag: "",
      // calculationMode: "",
      // ledgerNo: "",
      // interestProductFrequency: "",
      // interestPaymentFrequency: "",
      // interestStopDate: "",
      // interestStopReason: "",
      // introducerId: "",

      operatorDetailsCollapse: false,
      operationMode: "",
      signatureId: "",
      activeFlag: "",
      signatureAuthority: "",
      signatureMustFlag: "",

      depositDetailsFDCollapse: false,
      receiptNo: "",
      depositDate: "",
      depositAmount: "",
      depositPeriodYear: "",
      depositPeriodMonth: "",
      depositPeriodDay: "",
      interestRate: "",
      maturityDate: "",
      approximateMaturityDate: "",
      yield: "",
      interestInstallment: "",
      approximateTotalInterestPayable: "",
      lienFlag: "",
      lienDate: "",
      maturityOption: "",
      maturityInterestCondition: "",
      branchCode: "",
      accountNo: "",
      branchName: "",

      nomineeDetailsCollapse: false,
      nomineeCheck: "",
      nomineeName: "",
      relation: "",
      age: "",
      address: "",
      percent: "",
      totalPercent: "",

      emiCalculatorCollapse: false,
      fromDate: "",
      principalAmount: "",
      interestPercent: "",
      tdsPercent: "",
      principleRepayment: "",

      uploadedDocumentsCollapse: false,

      getCustomerMstArr: [],
    };
  }

  componentDidMount() {
    DepositeAcOpeningServices.getAllCustomers().then((resp) => {
      console.log(JSON.stringify(resp.data.response));
      this.setState({ getCustomerMstArr: resp.data.response });
    });
  }

  changeEventHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
    //For Customer Select change Event starts
    if (name === "customerId" && value.length !== 0) {
      //const {options, selectedIndex} = e.target;
      // alert("Hello ===>>>. "+options[selectedIndex].innerHTML)
      this.state.getCustomerMstArr.map((c) => {
        if (c.customerMasterId == value) {
          this.setState({
            accountName: c.firstName + " " + c.middleName + " " + c.lastName,
            constitutionOccupation: c.occupation,
            applicationNo: c.memberNo,
            confirmBtnDisableStatus: false,
            customerMaster: {
              customerMasterId: c.customerMasterId,
            },
          });
          c.customerAddress.map((address) => {
            if (address.addressType == "Residental") {
              this.setState({
                address: address.address,
              });
            }
          });
        }
      });
    } else if (name === "customerId" && value.length === 0) {
      this.setState({ confirmBtnDisableStatus: true }); //disable enable confirm btn according to customer select box
    }
    //For Customer Select change Event Ends
  };

  onSubmitSaveDepositeAccountTab = (e) => {
    e.preventDefault();
    // alert("I am clicked ==>>>" + this.state.customerMaster.customerMasterId);
    if (this.state.customerId.length !== 0) {
      //alert("Hello I am clicked ==>> " + this.state.customer);
      let saveDepositeAccountTab = {
        depositAccountId: null,
        accountcNo: this.state.accountNo,
        accountName: this.state.accountName,
        applicationNo: this.state.applicationNo,
        transactionDate: DateConversionService.convertDateToYyyyMmDd(
          this.state.transactionDate
        ),
        effectiveDate: DateConversionService.convertDateToYyyyMmDd(
          this.state.openEffectiveDate
        ),
        depositAccountNo: this.state.accountNo,
        depositAccountType: this.state.accountType,
        depositAccountName: this.state.accountName,
        occupation: this.state.constitutionOccupation,
        accountAddress: this.state.address,
        accountStatus: this.state.accountStatus,
        status: false,
        customerMaster : this.state.customerMaster,
        enterBy: AuthenticationService.getLoggedInUserName(),
        enterDate: DateConversionService.convertDateToYyyyMmDd(
          this.state.enterDate
        ),
        userId: AuthenticationService.getLoggedInUserName(),
      };

      DepositeAcOpeningServices.saveDepositeAccountFirstTab(
        saveDepositeAccountTab
      ).then((res) => {
        let msg = res.data.message;
        let code = res.data.code;
        if (code === 100) {
          Swal.fire({
            text: msg,
            icon: "error",
          });
        } else if (code === 200) {
          Swal.fire({
            text: msg,
            icon: "success",
          });
        }
        // this.props.history.push("/rna/listOfBranchMaster");
      });
    }
  };

  render() {
    return (
      <>
        <div className="main-panel">
          <div className="content">
            <div className="page-inner">
              {/*---header row-------*/}
              <div className="card p-3">
                <div className="row font-weight-bold">
                  <div className="col-lg-7 m-auto">
                    <div className="page-header-title">
                      <h4 className="text-primary f-w-600 font-weight-bold m-auto">
                        Deposit Account Opening
                      </h4>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="page-header-breadcrumb text-center">
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
                          <Link to="#">Account Opening</Link>
                        </li>
                        <li className="separator">
                          <i className="flaticon-right-arrow"></i>
                        </li>
                        <li className="nav-item">
                          <Link to="#">Deposit Account Opening</Link>
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
                      <ul className="nav nav-tabs nav-fill">
                        <li className="nav-item mx-1 py-1">
                          <button
                            className={
                              this.state.tab === "depositAccount"
                                ? "btn btn-block tabActive font-weight-bold text-white"
                                : "btn btn-block btn-grd-secondary font-weight-bold text-dark"
                            }
                            name="depositAccount"
                            data-toggle="tab"
                            href="#depositAccount"
                            role="tab"
                            aria-expanded="false"
                            onClick={() =>
                              this.setState({ tab: "depositAccount" })
                            }
                          >
                            Deposit Account
                          </button>
                        </li>
                        <li className="nav-item mx-1 py-1">
                          <button
                            className={
                              this.state.tab === "operatorDetails"
                                ? "btn btn-block tabActive font-weight-bold text-white"
                                : "btn btn-block btn-grd-secondary font-weight-bold text-dark"
                            }
                            name="operatorDetails"
                            data-toggle="tab"
                            href="#operatorDetails"
                            role="tab"
                            aria-expanded="false"
                            onClick={() =>
                              this.setState({ tab: "operatorDetails" })
                            }
                          >
                            Operator Details
                          </button>
                        </li>
                        <li className="nav-item mx-1 py-1">
                          <button
                            className={
                              this.state.tab === "depositDetailsFD"
                                ? "btn btn-block tabActive font-weight-bold text-white"
                                : "btn btn-block btn-grd-secondary font-weight-bold text-dark"
                            }
                            name="depositDetailsFD"
                            data-toggle="tab"
                            href="#depositDetailsFD"
                            role="tab"
                            aria-expanded="false"
                            onClick={() =>
                              this.setState({ tab: "depositDetailsFD" })
                            }
                          >
                            Deposit Details (FD)
                          </button>
                        </li>
                        <li className="nav-item mx-1 py-1">
                          <button
                            className={
                              this.state.tab === "nomineeDetails"
                                ? "btn btn-block tabActive font-weight-bold text-white"
                                : "btn btn-block btn-grd-secondary font-weight-bold text-dark"
                            }
                            name="nomineeDetails"
                            data-toggle="tab"
                            href="#nomineeDetails"
                            role="tab"
                            aria-expanded="false"
                            onClick={() =>
                              this.setState({ tab: "nomineeDetails" })
                            }
                          >
                            Nominee Details
                          </button>
                        </li>
                        <li className="nav-item mx-1 py-1">
                          <button
                            className={
                              this.state.tab === "emiCalculator"
                                ? "btn btn-block tabActive font-weight-bold text-white"
                                : "btn btn-block btn-grd-secondary font-weight-bold text-dark"
                            }
                            name="emiCalculator"
                            data-toggle="tab"
                            href="#emiCalculator"
                            role="tab"
                            aria-expanded="false"
                            onClick={() =>
                              this.setState({ tab: "emiCalculator" })
                            }
                          >
                            EMI Calculator
                          </button>
                        </li>
                        <li className="nav-item mx-1 py-1">
                          <button
                            className={
                              this.state.tab === "uploadedDocuments"
                                ? "btn btn-block tabActive font-weight-bold text-white"
                                : "btn btn-block btn-grd-secondary font-weight-bold text-dark"
                            }
                            name="uploadedDocuments"
                            data-toggle="tab"
                            href="#uploadedDocuments"
                            role="tab"
                            aria-expanded="false"
                            onClick={() =>
                              this.setState({ tab: "uploadedDocuments" })
                            }
                          >
                            Uploaded Documents
                          </button>
                        </li>
                      </ul>
                      <div className="row font-weight-bold p-1 my-2">
                        <div className="col-12 offset-3">
                          <div className="col-5">
                            <select
                              className="custom-select custom-select-sm text-center"
                              name="customerId"
                              id="customerId"
                              value={this.state.customerId}
                              onChange={this.changeEventHandler}
                            >
                              {/* <option selected disabled>Select Customer</option> */}
                              <option value="">Select Customer</option>
                              {this.state.getCustomerMstArr.map((customer) => (
                                <option
                                  key={customer.customerMasterId}
                                  value={customer.customerMasterId}
                                >
                                  {customer.firstName} {customer.middleName}{" "}
                                  {customer.lastName}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row font-weight-bold p-1">
                        <div className="col-3">
                          A/c No. :{" "}
                          <span className="text-primary">
                            {this.state.accountNo}
                          </span>
                        </div>
                        <div className="col-3">
                          A/c Name :
                          <span className="text-primary" name="accountName">
                            &nbsp; {this.state.accountName}
                          </span>
                        </div>
                        <div className="col-3">
                          Application No. :{" "}
                          <span className="text-primary">
                            {this.state.applicationNo}
                          </span>
                        </div>
                        <div className="col-3">
                          Transaction Date :{" "}
                          <span className="text-primary">
                            {this.state.transactionDate}
                          </span>
                        </div>
                      </div>
                      <div className="font-weight-bold text-danger p-1">
                        Note : * Fields Are Mandatory.
                      </div>
                      <div className="tab-content tabs card-block">
                        <div
                          id="depositAccount"
                          className="tab-pane active p-3"
                          role="tabpanel"
                        >
                          <div className="my-1">
                            <div
                              className="page-header-title row btn-grd-blue text-white f-w-600 my-1 pt-1"
                              data-toggle="collapse"
                              data-target="#depositAccountForm"
                              onClick={() =>
                                this.setState({
                                  depositAccountCollapse:
                                    !this.state.depositAccountCollapse,
                                })
                              }
                            >
                              <div className="col-md-10">
                                <h4 className="font-weight-bold">
                                  Deposit Account
                                </h4>
                              </div>
                              <div className="col-md-2 text-right">
                                {this.state.depositAccountCollapse ? (
                                  <i className="fas fa-plus"></i>
                                ) : (
                                  <i className="fas fa-minus"></i>
                                )}
                              </div>
                            </div>
                            <form id="depositAccountForm" noValidate>
                              <div className="row">
                                {/* <div className="col-6">
                                  <span
                                    className="text-primary"
                                    name="accountType"
                                  >
                                    {this.state.accountType}
                                  </span>
                                </div> */}
                                <div className="col-3">
                                  <label className="font-weight-bold col-form-label">
                                    Open/Effective Date&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3">
                                  <input
                                    type="date"
                                    placeholder="Enter Open/Effective Date"
                                    name="openEffectiveDate"
                                    className="form-control form-control-sm"
                                    value={this.state.openEffectiveDate}
                                    onChange={this.changeEventHandler}
                                    onKeyUp={this.onKeyUpValue}
                                    required
                                  />
                                </div>
                                <div className="col-2">
                                  <label className="font-weight-bold col-form-label">
                                    Account No.&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3">
                                  <input
                                    type="text"
                                    placeholder="Enter Member No."
                                    name="accountNo"
                                    className="form-control form-control-sm"
                                    value={this.state.accountNo}
                                    onChange={this.changeEventHandler}
                                    onKeyUp={this.onKeyUpValue}
                                    required
                                  />
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-3">
                                  <label className="font-weight-bold col-form-label">
                                    Account Type&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3">
                                  <select
                                    className="custom-select custom-select-sm"
                                    name="accountType"
                                    value={this.state.accountType}
                                    onChange={this.changeEventHandler}
                                  >
                                    <option selected disabled value="">
                                      Select Account Type
                                    </option>
                                    <option value="L">Loan</option>
                                    <option value="D">Deposite</option>
                                  </select>
                                </div>
                                <div className="col-2">
                                  <label className="font-weight-bold col-form-label">
                                    Account Name&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3">
                                  <input
                                    type="text"
                                    placeholder="Enter Account Name"
                                    name="accountName"
                                    className="form-control form-control-sm"
                                    value={this.state.accountName}
                                    onChange={this.changeEventHandler}
                                    onKeyUp={this.onKeyUpValue}
                                    required
                                  />
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-3">
                                  <label className="font-weight-bold col-form-label">
                                    Constitution / Occupation&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3 mt-2">
                                  <span
                                    className="text-primary"
                                    name="constitutionOccupation"
                                  >
                                    {this.state.constitutionOccupation}
                                  </span>
                                </div>
                                <div className="col-2">
                                  <label className="font-weight-bold col-form-label">
                                    Address&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3 mt-2">
                                  <span className="text-primary" name="address">
                                    {this.state.address}
                                  </span>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-3">
                                  <label className="font-weight-bold col-form-label">
                                    Account Status&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3">
                                  <select
                                    className="custom-select custom-select-sm"
                                    name="accountStatus"
                                    value={this.state.accountStatus}
                                    onChange={this.changeEventHandler}
                                  >
                                    <option selected disabled value="">
                                      Account Status
                                    </option>
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                  </select>
                                </div>
                              </div>
                              <div className="text-right">
                                <button
                                  type="submit"
                                  className="btn btn-sm btn-grd-green font-weight-bold"
                                  onClick={this.onSubmitSaveDepositeAccountTab}
                                  disabled={this.state.confirmBtnDisableStatus}
                                >
                                  Confirm
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div
                          id="operatorDetails"
                          className="tab-pane p-3"
                          role="tabpanel"
                        >
                          <div className="my-1">
                            <div
                              className="page-header-title row btn-grd-blue text-white f-w-600 my-1 pt-1"
                              data-toggle="collapse"
                              data-target="#operatorDetailsForm"
                              onClick={() =>
                                this.setState({
                                  operatorDetailsCollapse:
                                    !this.state.operatorDetailsCollapse,
                                })
                              }
                            >
                              <div className="col-md-10">
                                <h4 className="font-weight-bold">
                                  Particulars of the Applicant / Operator
                                </h4>
                              </div>
                              <div className="col-md-2 text-right">
                                {this.state.operatorDetailsCollapse ? (
                                  <i className="fas fa-plus"></i>
                                ) : (
                                  <i className="fas fa-minus"></i>
                                )}
                              </div>
                            </div>
                            <form
                              id="operatorDetailsForm"
                              onSubmit={this.handleSubmit}
                              noValidate
                            >
                              <div className="row">
                                <div className="col-2">
                                  <label className="font-weight-bold col-form-label">
                                    Operation Mode&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-4">
                                  <input
                                    type="text"
                                    placeholder="Enter Operation Mode"
                                    name="operationMode"
                                    className="form-control form-control-sm"
                                    value={this.state.operationMode}
                                    onChange={this.changeEventHandler}
                                    onKeyUp={this.onKeyUpValue}
                                    required
                                  />
                                </div>
                                <div className="col-2">
                                  <span
                                    className="text-primary"
                                    name="accountName"
                                  >
                                    {this.state.accountName}
                                  </span>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-2">
                                  <label className="font-weight-bold col-form-label">
                                    Operator Name&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-4">
                                  <input
                                    type="text"
                                    placeholder="Enter Operator Name"
                                    name="accountName"
                                    className="form-control form-control-sm"
                                    value={this.state.accountName}
                                    onChange={this.changeEventHandler}
                                    onKeyUp={this.onKeyUpValue}
                                    required
                                    disabled
                                  />
                                  <span
                                    className="text-primary"
                                    name="accountName"
                                  >
                                    {this.state.accountName}
                                  </span>
                                </div>
                                <div className="col-2">
                                  <label className="font-weight-bold col-form-label">
                                    Address Details&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-4">
                                  <textarea
                                    name="addressDetails"
                                    id="addressDetails"
                                    rows="2"
                                    placeholder="Enter Address Details"
                                    className="form-control form-control-sm"
                                    value={this.state.address}
                                    onChange={this.changeEventHandler}
                                    onKeyUp={this.onKeyUpValue}
                                    required
                                    disabled
                                  ></textarea>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-2">
                                  <label className="font-weight-bold col-form-label">
                                    Signature Id&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-2">
                                  <input
                                    type="text"
                                    placeholder="Enter Signature Id"
                                    name="signatureId"
                                    className="form-control form-control-sm"
                                    value={this.state.signatureId}
                                    onChange={this.changeEventHandler}
                                    onKeyUp={this.onKeyUpValue}
                                    required
                                  />
                                </div>
                                <div className="col-2">
                                  <button className="btn btn-sm btn-grd-danger font-weight-bold">
                                    View
                                  </button>
                                </div>
                                <div className="col-2">
                                  <label className="font-weight-bold col-form-label">
                                    Active Flag&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-4">
                                  <select
                                    className="custom-select custom-select-sm"
                                    name="activeFlag"
                                  >
                                    <option value="Yes" selected>
                                      Yes
                                    </option>
                                    <option value="No">No</option>
                                  </select>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-2">
                                  <label className="font-weight-bold col-form-label">
                                    Signature Authority&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-4">
                                  <select
                                    className="custom-select custom-select-sm"
                                    name="signatureAuthority"
                                  >
                                    <option value="Yes" selected>
                                      Yes
                                    </option>
                                    <option value="No">No</option>
                                  </select>
                                </div>
                                <div className="col-2">
                                  <label className="font-weight-bold col-form-label">
                                    Signature Must Flag&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-4">
                                  <select
                                    className="custom-select custom-select-sm"
                                    name="signatureMustFlag"
                                  >
                                    <option value="Yes" selected>
                                      Yes
                                    </option>
                                    <option value="No">No</option>
                                  </select>
                                </div>
                              </div>
                              <div className="text-right">
                                <button className="btn btn-sm btn-grd-primary font-weight-bold mr-1">
                                  Previous
                                </button>
                                <button className="btn btn-sm btn-grd-green font-weight-bold mr-1">
                                  Confirm
                                </button>
                                <button className="btn btn-sm btn-grd-primary font-weight-bold">
                                  Next
                                </button>
                              </div>

                              <div className="table-responsive my-1">
                                <table className="table table-bordered table-hover table-striped text-center">
                                  <thead className="btn-grd-blue-reverse">
                                    <tr>
                                      <th>SN</th>
                                      <th>Member Id</th>
                                      <th>Name</th>
                                      <th>Signature Authority</th>
                                      <th>Signature Must Flag</th>
                                      <th>Status</th>
                                      <th>Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>1</td>
                                      <td>Test</td>
                                      <td>Test</td>
                                      <td>Test</td>
                                      <td>Test</td>
                                      <td>Test</td>
                                      <td>Test</td>
                                    </tr>
                                    <tr>
                                      <td>2</td>
                                      <td>Test</td>
                                      <td>Test</td>
                                      <td>Test</td>
                                      <td>Test</td>
                                      <td>Test</td>
                                      <td>Test</td>
                                    </tr>
                                    <tr>
                                      <td>3</td>
                                      <td>Test</td>
                                      <td>Test</td>
                                      <td>Test</td>
                                      <td>Test</td>
                                      <td>Test</td>
                                      <td>Test</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div
                          id="depositDetailsFD"
                          className="tab-pane p-3"
                          role="tabpanel"
                        >
                          <div className="my-1">
                            <div
                              className="page-header-title row btn-grd-blue text-white f-w-600 my-1 pt-1"
                              data-toggle="collapse"
                              data-target="#depositDetailsFDForm"
                              onClick={() =>
                                this.setState({
                                  depositDetailsFDCollapse:
                                    !this.state.depositDetailsFDCollapse,
                                })
                              }
                            >
                              <div className="col-md-10">
                                <h4 className="font-weight-bold">
                                  Deposit Details (FD)
                                </h4>
                              </div>
                              <div className="col-md-2 text-right">
                                {this.state.depositDetailsFDCollapse ? (
                                  <i className="fas fa-plus"></i>
                                ) : (
                                  <i className="fas fa-minus"></i>
                                )}
                              </div>
                            </div>
                            <form
                              id="depositDetailsFDForm"
                              onSubmit={this.handleSubmit}
                              noValidate
                            >
                              <div className="row">
                                <div className="col-3">
                                  <label className="font-weight-bold col-form-label">
                                    Receipt No.&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3">
                                  <input
                                    type="text"
                                    placeholder="Enter Receipt No."
                                    name="receiptNo"
                                    className="form-control form-control-sm"
                                    value={this.state.receiptNo}
                                    onChange={this.changeEventHandler}
                                    onKeyUp={this.onKeyUpValue}
                                    required
                                  />
                                </div>
                                <div className="col-3">
                                  <label className="font-weight-bold col-form-label">
                                    Deposit Date&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3">
                                  <input
                                    type="date"
                                    placeholder="Enter Deposit Date"
                                    name="depositDate"
                                    className="form-control form-control-sm"
                                    value={this.state.depositDate}
                                    onChange={this.changeEventHandler}
                                    onKeyUp={this.onKeyUpValue}
                                    required
                                  />
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-3">
                                  <label className="font-weight-bold col-form-label">
                                    Deposit Amount&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3">
                                  <input
                                    type="text"
                                    placeholder="Enter Deposit Amount"
                                    name="depositAmount"
                                    className="form-control form-control-sm text-right"
                                    value={this.state.depositAmount}
                                    onChange={this.changeEventHandler}
                                    onKeyUp={this.onKeyUpValue}
                                    required
                                  />
                                </div>
                                <div className="col-3">
                                  <label className="font-weight-bold col-form-label">
                                    Deposit Period&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3">
                                  <div className="row">
                                    <div className="col-4">
                                      Year&nbsp;
                                      <input
                                        type="text"
                                        placeholder="Enter Year"
                                        name="depositPeriodYear"
                                        className="form-control form-control-sm d-inline"
                                        value={this.state.depositPeriodYear}
                                        onChange={this.changeEventHandler}
                                        onKeyUp={this.onKeyUpValue}
                                        required
                                      />
                                    </div>
                                    <div className="col-4">
                                      Month&nbsp;
                                      <input
                                        type="text"
                                        placeholder="Enter Month"
                                        name="depositPeriodMonth"
                                        className="form-control form-control-sm d-inline"
                                        value={this.state.depositPeriodMonth}
                                        onChange={this.changeEventHandler}
                                        onKeyUp={this.onKeyUpValue}
                                        required
                                      />
                                    </div>
                                    <div className="col-4">
                                      Day&nbsp;
                                      <input
                                        type="text"
                                        placeholder="Enter Day"
                                        name="depositPeriodDay"
                                        className="form-control form-control-sm d-inline"
                                        value={this.state.depositPeriodDay}
                                        onChange={this.changeEventHandler}
                                        onKeyUp={this.onKeyUpValue}
                                        required
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-3">
                                  <label className="font-weight-bold col-form-label">
                                    Lien Flag&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3">
                                  <select
                                    className="custom-select custom-select-sm"
                                    name="lienFlag"
                                  >
                                    <option value="Yes" selected>
                                      Yes
                                    </option>
                                    <option value="No">No</option>
                                  </select>
                                </div>
                                <div className="col-3">
                                  <label className="font-weight-bold col-form-label">
                                    Lien Date&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3">
                                  <span
                                    className="text-primary"
                                    name="lienDate"
                                  >
                                    {this.state.lienDate}
                                  </span>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-3">
                                  <label className="font-weight-bold col-form-label">
                                    Account No.&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3">
                                  <div className="row">
                                    {/* <div className="col-6">
                                      Branch Code&nbsp;
                                      <input
                                        type="text"
                                        placeholder="Branch Code"
                                        name="branchCode"
                                        className="form-control form-control-sm d-inline"
                                        value={this.state.branchCode}
                                        onChange={this.changeEventHandler}
                                        onKeyUp={this.onKeyUpValue}
                                        required
                                      />
                                    </div> */}
                                    <div className="col-12">
                                      {/* Account No.&nbsp; */}
                                      <input
                                        type="text"
                                        placeholder="Account No."
                                        name="accountNo"
                                        className="form-control form-control-sm d-inline"
                                        value={this.state.accountNo}
                                        onChange={this.changeEventHandler}
                                        onKeyUp={this.onKeyUpValue}
                                        required
                                      />
                                    </div>
                                  </div>
                                </div>
                                {/* <div className="col-3">
                                  <label className="font-weight-bold col-form-label">
                                    Branch Name&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3">
                                  <span
                                    className="text-primary"
                                    name="branchName"
                                  >
                                    {this.state.branchName}
                                  </span>
                                </div> */}
                                <div className="col-3">
                                  <label className="font-weight-bold col-form-label">
                                    Account Name&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3">
                                  <span
                                    className="text-primary"
                                    name="accountName"
                                  >
                                    {this.state.accountName}
                                  </span>
                                </div>
                              </div>

                              <div className="row mt-2">
                                <div className="col-3">
                                  <label className="font-weight-bold col-form-label">
                                    Interest Rate&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3">
                                  <input
                                    type="text"
                                    placeholder="Enter Interest Rate"
                                    name="interestRate"
                                    className="form-control form-control-sm text-right"
                                    value={this.state.interestRate}
                                    onChange={this.changeEventHandler}
                                    onKeyUp={this.onKeyUpValue}
                                    required
                                  />
                                </div>
                                <div className="col-3">
                                  <label className="font-weight-bold col-form-label">
                                    Maturity Date&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3">
                                  <input
                                    type="date"
                                    placeholder="Enter Maturity Date"
                                    name="maturityDate"
                                    className="form-control form-control-sm text-center"
                                    value={this.state.maturityDate}
                                    onChange={this.changeEventHandler}
                                    onKeyUp={this.onKeyUpValue}
                                    required
                                  />
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-3">
                                  <label className="font-weight-bold col-form-label">
                                    Approximate Maturity Amount&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3">
                                  <input
                                    type="text"
                                    placeholder="Enter Approximate Maturity Amount text-right"
                                    name="approximateMaturityDate"
                                    className="form-control form-control-sm"
                                    value={this.state.approximateMaturityDate}
                                    onChange={this.changeEventHandler}
                                    onKeyUp={this.onKeyUpValue}
                                    required
                                  />
                                </div>
                                {/* <div className="col-3">
                                  <label className="font-weight-bold col-form-label">
                                    Yield&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div> 
                                <div className="col-3">
                                  <span className="text-primary" name="yield">
                                    {this.state.yield}
                                  </span>
                                </div>
                                */}
                                <div className="col-3">
                                  <label className="font-weight-bold col-form-label">
                                    Interest Installment&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3">
                                  <input
                                    type="text"
                                    placeholder="Enter Interest Installment"
                                    name="interestInstallment"
                                    className="form-control form-control-sm text-right"
                                    value={this.state.interestInstallment}
                                    onChange={this.changeEventHandler}
                                    onKeyUp={this.onKeyUpValue}
                                    required
                                  />
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-3">
                                  <label className="font-weight-bold col-form-label">
                                    Interest Payment Frequency&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3">
                                  <select
                                    className="custom-select custom-select-sm"
                                    name="interestPaymentFrequency"
                                  >
                                    <option value="NotApplicable" selected>
                                      Not Applicable
                                    </option>
                                    <option value="Monthly">Monthly</option>
                                    <option value="Quarterly">Quarterly</option>
                                    <option value="HalfYearly">
                                      Half Yearly
                                    </option>
                                    <option value="Yearly">Yearly</option>
                                    <option value="OnMaturity">
                                      On Maturity
                                    </option>
                                  </select>
                                </div>

                                <div className="col-3">
                                  <label className="font-weight-bold col-form-label">
                                    Approximate Total Interest Payable&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3">
                                  <input
                                    type="text"
                                    placeholder="Enter Approximate Total Interest Payable"
                                    name="approximateTotalInterestPayable"
                                    className="form-control form-control-sm text-right"
                                    value={
                                      this.state.approximateTotalInterestPayable
                                    }
                                    onChange={this.changeEventHandler}
                                    onKeyUp={this.onKeyUpValue}
                                    required
                                  />
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-3">
                                  <label className="font-weight-bold col-form-label">
                                    Interest Product Frequency&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3">
                                  <select
                                    className="custom-select custom-select-sm"
                                    name="interestProductFrequency"
                                  >
                                    <option value="NotApplicable" selected>
                                      Not Applicable
                                    </option>
                                    <option value="Daily">Daily</option>
                                    <option value="Monthly">Monthly</option>
                                    <option value="Quarterly">Quarterly</option>
                                  </select>
                                </div>

                                <div className="col-3">
                                  <label className="font-weight-bold col-form-label">
                                    Maturity Option&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3">
                                  <select
                                    className="custom-select custom-select-sm"
                                    name="maturityOption"
                                  >
                                    <option value="NotApplicable" selected>
                                      Not Applicable
                                    </option>
                                    <option value="MaturityAmountTransferedTo">
                                      Maturity Amount Transfered To
                                    </option>
                                    <option value="AutoRenewalwithDepositAmountOnly">
                                      Auto Renewal with Deposit Amount Only
                                    </option>
                                    <option value="AutoRenewalwithDeposit+Interest">
                                      Auto Renewal with Deposit + Interest
                                    </option>
                                  </select>
                                </div>
                              </div>

                              {/* <div className="row">
                                <div className="col-3">
                                  <label className="font-weight-bold col-form-label">
                                    Account Name&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3">
                                  <span
                                    className="text-primary"
                                    name="accountName"
                                  >
                                    {this.state.accountName}
                                  </span>
                                </div>
                              </div> */}

                              <div className="row">
                                <div className="col-3">
                                  <label className="font-weight-bold col-form-label">
                                    Maturity Interest Condition&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3">
                                  <select
                                    className="custom-select custom-select-sm"
                                    name="maturityInterestCondition"
                                  >
                                    <option value="NotApplicable" selected>
                                      Not Applicable
                                    </option>
                                    <option value="TransferToAccount">
                                      Transfer To Account
                                    </option>
                                    <option value="TransferToPayable">
                                      Transfer To Payable
                                    </option>
                                    <option value="TransferToBank">
                                      Transfer To Bank
                                    </option>
                                  </select>
                                </div>
                              </div>
                              <div className="text-right">
                                <button className="btn btn-sm btn-grd-primary font-weight-bold mr-1">
                                  Previous
                                </button>
                                <button className="btn btn-sm btn-grd-green font-weight-bold mr-1">
                                  Confirm
                                </button>
                                <button className="btn btn-sm btn-grd-primary font-weight-bold">
                                  Next
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div
                          id="nomineeDetails"
                          className="tab-pane p-3"
                          role="tabpanel"
                        >
                          <div className="my-1">
                            <div
                              className="page-header-title row btn-grd-blue text-white f-w-600 my-1 pt-1"
                              data-toggle="collapse"
                              data-target="#nomineeDetailsForm"
                              onClick={() =>
                                this.setState({
                                  nomineeDetailsCollapse:
                                    !this.state.nomineeDetailsCollapse,
                                })
                              }
                            >
                              <div className="col-md-10">
                                <h4 className="font-weight-bold">
                                  Nominee Details
                                </h4>
                              </div>
                              <div className="col-md-2 text-right">
                                {this.state.nomineeDetailsCollapse ? (
                                  <i className="fas fa-plus"></i>
                                ) : (
                                  <i className="fas fa-minus"></i>
                                )}
                              </div>
                            </div>
                            <div
                              id="nomineeDetailsForm"
                              className="table-responsive my-1"
                            >
                              <table className="table table-bordered table-hover text-center">
                                <thead className="btn-grd-blue-reverse">
                                  <tr>
                                    <th>SN</th>
                                    <th></th>
                                    <th>Nominee Name</th>
                                    <th>Relation</th>
                                    <th>Age</th>
                                    <th>Address</th>
                                    <th>Percent %</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1</td>
                                    <td className="custom-control custom-checkbox">
                                      <input
                                        type="checkbox"
                                        name="nomineeCheck"
                                        className="custom-control-input"
                                        id="nomineeCheck"
                                        value={this.state.nomineeCheck}
                                        onChange={this.changeEventHandler}
                                        required
                                      />
                                      <label
                                        className="custom-control-label"
                                        for="nomineeCheck"
                                      ></label>
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        placeholder="Enter Nominee Name"
                                        name="nomineeName"
                                        className="form-control form-control-sm"
                                        value={this.state.nomineeName}
                                        onChange={this.changeEventHandler}
                                        onKeyUp={this.onKeyUpValue}
                                        required
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        placeholder="Enter Relation"
                                        name="relation"
                                        className="form-control form-control-sm"
                                        value={this.state.relation}
                                        onChange={this.changeEventHandler}
                                        onKeyUp={this.onKeyUpValue}
                                        required
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        placeholder="Enter Age"
                                        name="age"
                                        className="form-control form-control-sm"
                                        value={this.state.age}
                                        onChange={this.changeEventHandler}
                                        onKeyUp={this.onKeyUpValue}
                                        required
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        placeholder="Enter Address"
                                        name="percent"
                                        className="form-control form-control-sm"
                                        value={this.state.percent}
                                        onChange={this.changeEventHandler}
                                        onKeyUp={this.onKeyUpValue}
                                        required
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        placeholder="Enter Percent %"
                                        name="percent"
                                        className="form-control form-control-sm"
                                        value={this.state.address}
                                        onChange={this.changeEventHandler}
                                        onKeyUp={this.onKeyUpValue}
                                        required
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colSpan="6" className="text-right mr-2">
                                      Total Percent
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        placeholder="Total Percent"
                                        name="totalPercent"
                                        className="form-control form-control-sm text-right"
                                        value={this.state.totalPercent}
                                        onChange={this.changeEventHandler}
                                        onKeyUp={this.onKeyUpValue}
                                        required
                                      />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div className="text-right">
                              <button className="btn btn-sm btn-grd-primary font-weight-bold mr-1">
                                Previous
                              </button>
                              <button className="btn btn-sm btn-grd-green font-weight-bold">
                                Confirm
                              </button>
                            </div>
                          </div>
                        </div>
                        <div
                          id="emiCalculator"
                          className="tab-pane p-3"
                          role="tabpanel"
                        >
                          <div className="my-1">
                            <div
                              className="page-header-title row btn-grd-blue text-white f-w-600 my-1 pt-1"
                              data-toggle="collapse"
                              data-target="#emiCalculatorForm"
                              onClick={() =>
                                this.setState({
                                  emiCalculatorCollapse:
                                    !this.state.emiCalculatorCollapse,
                                })
                              }
                            >
                              <div className="col-md-10">
                                <h4 className="font-weight-bold">
                                  EMI Calculator
                                </h4>
                              </div>
                              <div className="col-md-2 text-right">
                                {this.state.emiCalculatorCollapse ? (
                                  <i className="fas fa-plus"></i>
                                ) : (
                                  <i className="fas fa-minus"></i>
                                )}
                              </div>
                            </div>
                            <div
                              id="emiCalculatorForm"
                              className="table-responsive my-1"
                            >
                              <table className="table table-bordered table-hover text-center">
                                <thead className="btn-grd-blue-reverse">
                                  <tr>
                                    <th>SN</th>
                                    <th>From Date</th>
                                    <th>Principle Amount</th>
                                    <th>Interest Percent</th>
                                    <th>Tds Percent</th>
                                    <th>Principle Repayment</th>
                                    <th colSpan={2}></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1</td>
                                    <td>
                                      <input
                                        type="text"
                                        placeholder="Enter From Date"
                                        name="fromDate"
                                        className="form-control form-control-sm"
                                        value={this.state.fromDate}
                                        onChange={this.changeEventHandler}
                                        onKeyUp={this.onKeyUpValue}
                                        required
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        placeholder="Enter Principle Amount"
                                        name="principalAmount"
                                        className="form-control form-control-sm"
                                        value={this.state.principalAmount}
                                        onChange={this.changeEventHandler}
                                        onKeyUp={this.onKeyUpValue}
                                        required
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        placeholder="Enter Interest Percent"
                                        name="interestPercent"
                                        className="form-control form-control-sm"
                                        value={this.state.interestPercent}
                                        onChange={this.changeEventHandler}
                                        onKeyUp={this.onKeyUpValue}
                                        required
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        placeholder="Enter Tds Percent"
                                        name="tdsPercent"
                                        className="form-control form-control-sm"
                                        value={this.state.tdsPercent}
                                        onChange={this.changeEventHandler}
                                        onKeyUp={this.onKeyUpValue}
                                        required
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        placeholder="Enter Principle Repayment"
                                        name="principleRepayment"
                                        className="form-control form-control-sm"
                                        value={this.state.principleRepayment}
                                        onChange={this.changeEventHandler}
                                        onKeyUp={this.onKeyUpValue}
                                        required
                                      />
                                    </td>
                                    <td>
                                      <button className="btn btn-sm btn-grd-primary">
                                        Calculate
                                      </button>
                                    </td>
                                    <td>
                                      <button className="btn btn-sm btn-grd-primary">
                                        Clear
                                      </button>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table className="table table-bordered table-hover text-center">
                                <thead className="btn-grd-blue-reverse">
                                  <tr>
                                    <th>SN</th>
                                    <th>Date</th>
                                    <th>Total Interest Amount</th>
                                    <th>TDS Amount</th>
                                    <th>Interest Amt.</th>
                                    <th>Principal Received</th>
                                    <th>Principal Repayment</th>
                                    <th>Balance</th>
                                    <th>EMI Payment</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1</td>
                                    <td>Test</td>
                                    <td>Test</td>
                                    <td>Test</td>
                                    <td>Test</td>
                                    <td>Test</td>
                                    <td>Test</td>
                                    <td>Test</td>
                                    <td>Test</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div className="text-right">
                              <button className="btn btn-sm btn-grd-primary mr-1">
                                Previous
                              </button>
                              <button className="btn btn-sm btn-success mr-1">
                                Confirm
                              </button>
                            </div>
                          </div>
                        </div>
                        <div
                          id="uploadedDocuments"
                          className="tab-pane p-3"
                          role="tabpanel"
                        >
                          <div className="my-1">
                            <div
                              className="page-header-title row btn-grd-blue text-white f-w-600 my-1 pt-1"
                              data-toggle="collapse"
                              data-target="#uploadedDocumentsForm"
                              onClick={() =>
                                this.setState({
                                  uploadedDocumentsCollapse:
                                    !this.state.uploadedDocumentsCollapse,
                                })
                              }
                            >
                              <div className="col-md-10">
                                <h4 className="font-weight-bold">
                                  Uploaded Documents
                                </h4>
                              </div>
                              <div className="col-md-2 text-right">
                                {this.state.uploadedDocumentsCollapse ? (
                                  <i className="fas fa-plus"></i>
                                ) : (
                                  <i className="fas fa-minus"></i>
                                )}
                              </div>
                            </div>
                            <div
                              id="uploadedDocumentsForm"
                              className="table-responsive my-1"
                            >
                              <table className="table table-bordered table-hover text-center">
                                <thead className="btn-grd-blue-reverse">
                                  <tr>
                                    <th>SN</th>
                                    <th>Document No.</th>
                                    <th>Document Name</th>
                                    <th>Document Type</th>
                                    <th></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1</td>
                                    <td>Test</td>
                                    <td>Test</td>
                                    <td>Test</td>
                                    <td>
                                      <button className="btn btn-sm btn-grd-danger">
                                        View
                                      </button>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div className="text-right">
                              <button className="btn btn-sm btn-grd-primary font-weight-bold mr-1">
                                Previous
                              </button>
                              <button className="btn btn-sm btn-grd-green font-weight-bold">
                                Confirm
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
          </div>
        </div>
      </>
    );
  }
}
