import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LoanAcOpenComponent extends Component {
  constructor() {
    super();
    this.state = {


      tab: "account",
      accountBtn: "",
      operatorDetailsBtn: "",
      loanDetailsBtn: "",
      guarantorDetailsBtn: "",
      emiCalculatorBtn: "",
      uploadedDocumentsBtn: "",

      date: new Date().toLocaleDateString(),
      currentDate:
        new Date().getDate() +
        "/" +
        (new Date().getMonth() + 1) +
        "/" +
        new Date().getFullYear(),

      accountCollapse: false,
      accountType: "",
      openEffectiveDate: "",
      memberNo: "",
      accountName: "",
      memberType: "",
      constitutionOccupation: "",
      loanType: "",
      issueLoanType: "",
      loanPurpose: "",
      recomemdedBySociety: "",
      address: "",
      schemeDetailsCollapse: false,
      scheme: "",
      interestCalculationFlag: "",
      calculationMode: "",
      ledgerNo: "",
      interestProductFrequency: "",
      interestPaymentFrequency: "",
      interestStopDate: "",
      interestStopReason: "",
      introducerMemberNo: "",



      
      operatorDetailsCollapse: false,
      operationMode: "",
      signatureId: "",
      activeFlag: "",
      signatureAuthority: "",
      signatureMustFlag: "",

      loanDetailsCollapse: false,
      receiptNo: "",
      loanDate: "",
      loanAmount: "",
      loanPeriodYear: "",
      loanPeriodMonth: "",
      loanPeriodDay: "",
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

      guarantorDetailsCollapse: false,
      guarantorCheck: "",
      guarantorName: "",
      relation: "",
      age: "",
      percent: "",
      totalPercent: "",

      emiCalculatorCollapse: false,
      fromDate: "",
      principalAmount: "",
      interestPercent: "",
      tdsPercent: "",
      principleRepayment: "",

      uploadedDocumentsCollapse: false,
    };
  }



  



  changeEventHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
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
                        Loan Account Opening
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
                          <Link to="#">Loan Account Opening</Link>
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
                              this.state.tab === "account"
                                ? "btn btn-block tabActive font-weight-bold text-white"
                                : "btn btn-block btn-grd-secondary font-weight-bold text-dark"
                            }
                            name="account"
                            data-toggle="tab"
                            href="#account"
                            role="tab"
                            aria-expanded="false"
                            onClick={() => this.setState({ tab: "account" })}
                          >
                            Account
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
                              this.state.tab === "loanDetails"
                                ? "btn btn-block tabActive font-weight-bold text-white"
                                : "btn btn-block btn-grd-secondary font-weight-bold text-dark"
                            }
                            name="loanDetails"
                            data-toggle="tab"
                            href="#loanDetails"
                            role="tab"
                            aria-expanded="false"
                            onClick={() =>
                              this.setState({ tab: "loanDetails" })
                            }
                          >
                            Loan Details
                          </button>
                        </li>
                        <li className="nav-item mx-1 py-1">
                          <button
                            className={
                              this.state.tab === "guarantorDetails"
                                ? "btn btn-block tabActive font-weight-bold text-white"
                                : "btn btn-block btn-grd-secondary font-weight-bold text-dark"
                            }
                            name="guarantorDetails"
                            data-toggle="tab"
                            href="#guarantorDetails"
                            role="tab"
                            aria-expanded="false"
                            onClick={() =>
                              this.setState({ tab: "guarantorDetails" })
                            }
                          >
                            Guarantor Details
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
                      <div className="row font-weight-bold p-1">
                        <div className="col-3">
                          A/c No. : <span className="text-primary"></span>
                        </div>
                        <div className="col-3">
                          A/c Name :
                          <span className="text-primary" name="accountName">
                            {this.state.accountName}
                          </span>
                        </div>
                        <div className="col-3">
                          Application No. :{" "}
                          <span className="text-primary"></span>
                        </div>
                        <div className="col-3">
                          Transaction Date :{" "}
                          <span className="text-primary">
                            {this.state.currentDate}
                          </span>
                        </div>
                      </div>
                      <div className="font-weight-bold text-danger p-1">
                        Note : * Fields Are Mandatory.
                      </div>
                      <div className="tab-content tabs card-block">
                        <div
                          id="account"
                          className="tab-pane active p-3"
                          role="tabpanel"
                        >
                          <div className="my-1">
                            <div
                              className="page-header-title row btn-grd-blue text-white f-w-600 my-1 pt-1"
                              data-toggle="collapse"
                              data-target="#accountForm"
                              onClick={() =>
                                this.setState({
                                  accountCollapse: !this.state.accountCollapse,
                                })
                              }
                            >
                              <div className="col-md-10">
                                <h4 className="font-weight-bold">
                                  Loan Account Master
                                </h4>
                              </div>
                              <div className="col-md-2 text-right">
                                {this.state.accountCollapse ? (
                                  <i className="fas fa-plus"></i>
                                ) : (
                                  <i className="fas fa-minus"></i>
                                )}
                              </div>
                            </div>
                            <form
                              id="accountForm"
                              onSubmit={this.handleSubmit}
                              noValidate
                            >
                              <div className="row">
                                <div className="col-6">
                                  <span
                                    className="text-primary"
                                    name="accountType"
                                  >
                                    {this.state.accountType}
                                  </span>
                                </div>
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
                              </div>
                              <div className="row">
                                <div className="col-2">
                                  <label className="font-weight-bold col-form-label">
                                    Member No./Name&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-2">
                                  <input
                                    type="text"
                                    placeholder="Enter Member No."
                                    name="memberNo"
                                    className="form-control form-control-sm"
                                    value={this.state.memberNo}
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
                                <div className="col-3">
                                  <label className="font-weight-bold col-form-label">
                                    Member Type&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3">
                                  <span
                                    className="text-primary"
                                    name="memberType"
                                  >
                                    {this.state.memberType}
                                  </span>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-2">
                                  <label className="font-weight-bold col-form-label">
                                    Account Name&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-4">
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
                                <div className="col-3">
                                  <label className="font-weight-bold col-form-label">
                                    Constitution / Occupation&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3">
                                  <span
                                    className="text-primary"
                                    name="constitutionOccupation"
                                  >
                                    {this.state.constitutionOccupation}
                                  </span>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-3">
                                  <label className="font-weight-bold col-form-label">
                                    Loan Type&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3">
                                  <span
                                    className="text-primary"
                                    name="loanType"
                                  >
                                    {this.state.loanType}
                                  </span>
                                </div>
                                <div className="col-3">
                                  <label className="font-weight-bold col-form-label">
                                    Issue Loan Type&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3">
                                  <select
                                    className="custom-select custom-select-sm"
                                    name="issueLoanType"
                                  >
                                    <option selected disabled>
                                      Issue Loan Type
                                    </option>
                                    <option value="ConsumptionLoan">
                                      Consumption Loan
                                    </option>
                                  </select>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-2">
                                  <label className="font-weight-bold col-form-label">
                                    Loan Purpose&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-4">
                                  <select
                                    className="custom-select custom-select-sm"
                                    name="loanPurpose"
                                  >
                                    <option selected disabled>
                                      Loan Purpose
                                    </option>
                                    <option value="Education">Education</option>
                                    <option value="GoldPurchase">
                                      Gold Purchase
                                    </option>
                                    <option value="Other">Other</option>
                                  </select>
                                </div>
                                <div className="col-3">
                                  <label className="font-weight-bold col-form-label">
                                    Recommend By Society&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3">
                                  <input
                                    type="text"
                                    placeholder="Enter Recommend By Society"
                                    name="recomemdedBySociety"
                                    className="form-control form-control-sm"
                                    value={this.state.recomemdedBySociety}
                                    onChange={this.changeEventHandler}
                                    onKeyUp={this.onKeyUpValue}
                                    required
                                  />
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-3">
                                  <label className="font-weight-bold col-form-label">
                                    Address&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3">
                                  <span className="text-primary" name="address">
                                    {this.state.address}
                                  </span>
                                </div>
                              </div>
                              <div className="text-right">
                                <button className="btn btn-sm btn-grd-green font-weight-bold">
                                  Confirm
                                </button>
                              </div>
                            </form>
                          </div>
                          <div className="my-1">
                            <div
                              className="page-header-title row btn-grd-blue text-white f-w-600 my-1 pt-1"
                              data-toggle="collapse"
                              data-target="#schemeDetailsForm"
                              onClick={() =>
                                this.setState({
                                  schemeDetailsCollapse:
                                    !this.state.schemeDetailsCollapse,
                                })
                              }
                            >
                              <div className="col-md-10">
                                <h4 className="font-weight-bold">
                                  Scheme Details
                                </h4>
                              </div>
                              <div className="col-md-2 text-right">
                                {this.state.schemeDetailsCollapse ? (
                                  <i className="fas fa-plus"></i>
                                ) : (
                                  <i className="fas fa-minus"></i>
                                )}
                              </div>
                            </div>
                            <form
                              id="schemeDetailsForm"
                              onSubmit={this.handleSubmit}
                              noValidate
                            >
                              <div className="row">
                                <div className="col-3">
                                  <label className="font-weight-bold col-form-label">
                                    Scheme&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3">
                                  <input
                                    type="text"
                                    placeholder="Enter Scheme"
                                    name="scheme"
                                    className="form-control form-control-sm"
                                    value={this.state.scheme}
                                    onChange={this.changeEventHandler}
                                    onKeyUp={this.onKeyUpValue}
                                    required
                                  />
                                </div>
                                <div className="col-3">
                                  <label className="font-weight-bold col-form-label">
                                    Interest Calculation Flag&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3">
                                  <select
                                    className="custom-select custom-select-sm"
                                    name="interestCalculationFlag"
                                  >
                                    <option value="Yes" selected>
                                      Yes
                                    </option>
                                    <option value="No">No</option>
                                  </select>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-3">
                                  <label className="font-weight-bold col-form-label">
                                    Calculation Mode&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3">
                                  <span
                                    className="text-primary"
                                    name="calculationMode"
                                  >
                                    {this.state.calculationMode}
                                  </span>
                                </div>
                                <div className="col-3">
                                  <label className="font-weight-bold col-form-label">
                                    Ledger No.&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3">
                                  <input
                                    type="text"
                                    placeholder="Enter Ledger No."
                                    name="ledgerNo"
                                    className="form-control form-control-sm"
                                    value={this.state.ledgerNo}
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
                                  <span
                                    className="text-primary"
                                    name="interestProductFrequency"
                                  >
                                    {this.state.interestProductFrequency}
                                  </span>
                                </div>
                                <div className="col-3">
                                  <label className="font-weight-bold col-form-label">
                                    Interest Payment Frequency&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3">
                                  <span
                                    className="text-primary"
                                    name="interestPaymentFrequency"
                                  >
                                    {this.state.interestPaymentFrequency}
                                  </span>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-3">
                                  <label className="font-weight-bold col-form-label">
                                    Interest Stop Date&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3">
                                  <input
                                    type="date"
                                    placeholder="Enter Interest Stop Date"
                                    name="interestStopDate"
                                    className="form-control form-control-sm"
                                    value={this.state.interestStopDate}
                                    onChange={this.changeEventHandler}
                                    onKeyUp={this.onKeyUpValue}
                                    required
                                  />
                                </div>
                                <div className="col-3">
                                  <label className="font-weight-bold col-form-label">
                                    Interest Stop Reason&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3">
                                  <input
                                    type="text"
                                    placeholder="Enter Interest Stop Reason"
                                    name="interestStopReason"
                                    className="form-control form-control-sm"
                                    value={this.state.interestStopReason}
                                    onChange={this.changeEventHandler}
                                    onKeyUp={this.onKeyUpValue}
                                    required
                                  />
                                </div>
                              </div>
                              <div className="btn-grd-blue-reverse">
                                <h5 className="font-weight-bold p-2">
                                  Introducer Details
                                </h5>
                              </div>
                              <div className="row">
                                <div className="col-3">
                                  <label className="font-weight-bold col-form-label">
                                    Introducer Member No.&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3">
                                  <input
                                    type="date"
                                    placeholder="Enter Introducer Member No."
                                    name="introducerMemberNo"
                                    className="form-control form-control-sm"
                                    value={this.state.introducerMemberNo}
                                    onChange={this.changeEventHandler}
                                    onKeyUp={this.onKeyUpValue}
                                    required
                                  />
                                </div>
                                <div className="col-3">
                                  <label className="font-weight-bold col-form-label">
                                    Introducer Address&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3">
                                  <input
                                    type="text"
                                    placeholder="Enter Introducer Address"
                                    name="introducerAddress"
                                    className="form-control form-control-sm"
                                    value={this.state.introducerAddress}
                                    onChange={this.changeEventHandler}
                                    onKeyUp={this.onKeyUpValue}
                                    required
                                  />
                                </div>
                              </div>
                              <div className="text-right">
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
                                  <label className="font-weight-bold col-form-label">
                                    Member No.&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-2">
                                  <input
                                    type="text"
                                    placeholder="Enter Member No."
                                    name="memberNo"
                                    className="form-control form-control-sm"
                                    value={this.state.memberNo}
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
                              </div>
                              <div className="row">
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
                                      <th>Operator Mode</th>
                                      <th>Member No</th>
                                      <th>Name</th>
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
                                      <td>
                                        <button className="btn btn-sm">
                                          <i className="fas fa-edit"></i>
                                        </button>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div
                          id="loanDetails"
                          className="tab-pane p-3"
                          role="tabpanel"
                        >
                          <div className="my-1">
                            <div
                              className="page-header-title row btn-grd-blue text-white f-w-600 my-1 pt-1"
                              data-toggle="collapse"
                              data-target="#loanDetailsForm"
                              onClick={() =>
                                this.setState({
                                  loanDetailsCollapse:
                                    !this.state.loanDetailsCollapse,
                                })
                              }
                            >
                              <div className="col-md-10">
                                <h4 className="font-weight-bold">
                                  Loan Details
                                </h4>
                              </div>
                              <div className="col-md-2 text-right">
                                {this.state.loanDetailsCollapse ? (
                                  <i className="fas fa-plus"></i>
                                ) : (
                                  <i className="fas fa-minus"></i>
                                )}
                              </div>
                            </div>
                            <form
                              id="loanDetailsForm"
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
                                    Loan Date&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3">
                                  <input
                                    type="date"
                                    placeholder="Enter Loan Date"
                                    name="loanDate"
                                    className="form-control form-control-sm"
                                    value={this.state.loanDate}
                                    onChange={this.changeEventHandler}
                                    onKeyUp={this.onKeyUpValue}
                                    required
                                  />
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-3">
                                  <label className="font-weight-bold col-form-label">
                                    Loan Amount&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                </div>
                                <div className="col-3">
                                  <input
                                    type="text"
                                    placeholder="Enter Loan Amount"
                                    name="loanAmount"
                                    className="form-control form-control-sm text-right"
                                    value={this.state.loanAmount}
                                    onChange={this.changeEventHandler}
                                    onKeyUp={this.onKeyUpValue}
                                    required
                                  />
                                </div>
                                <div className="col-3">
                                  <label className="font-weight-bold col-form-label">
                                    Loan Period&nbsp;
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
                                        placeholder="Year"
                                        name="loanPeriodYear"
                                        className="form-control form-control-sm d-inline"
                                        value={this.state.loanPeriodYear}
                                        onChange={this.changeEventHandler}
                                        onKeyUp={this.onKeyUpValue}
                                        required
                                      />
                                    </div>
                                    <div className="col-4">
                                      Month&nbsp;
                                      <input
                                        type="text"
                                        placeholder="Month"
                                        name="loanPeriodMonth"
                                        className="form-control form-control-sm d-inline"
                                        value={this.state.loanPeriodMonth}
                                        onChange={this.changeEventHandler}
                                        onKeyUp={this.onKeyUpValue}
                                        required
                                      />
                                    </div>
                                    <div className="col-4">
                                      Day&nbsp;
                                      <input
                                        type="text"
                                        placeholder="Day"
                                        name="loanPeriodDay"
                                        className="form-control form-control-sm d-inline"
                                        value={this.state.loanPeriodDay}
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
                                <div className="col-3">
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
                              </div>
                              <div className="row">
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
                              </div>
                              <div className="row">
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
                                    <option value="AutoRenewalwithloanAmountOnly">
                                      Auto Renewal with Deposit Amount Only
                                    </option>
                                    <option value="AutoRenewalwithDeposit+Interest">
                                      Auto Renewal with Deposit + Interest
                                    </option>
                                  </select>
                                </div>
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
                                    <div className="col-6">
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
                                    </div>
                                    <div className="col-6">
                                      Account No.&nbsp;
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
                                <div className="col-3">
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
                                </div>
                              </div>
                              <div className="row">
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
                                      <th>Receipt No.</th>
                                      <th>Loan Date</th>
                                      <th>Loan Amount</th>
                                      <th>Interest Rate</th>
                                      <th>Approximate Maturity Amount</th>
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
                                    </tr>
                                    <tr>
                                      <td>2</td>
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
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div
                          id="guarantorDetails"
                          className="tab-pane p-3"
                          role="tabpanel"
                        >
                          <div className="my-1">
                            <div
                              className="page-header-title row btn-grd-blue text-white f-w-600 my-1 pt-1"
                              data-toggle="collapse"
                              data-target="#guarantorDetailsForm"
                              onClick={() =>
                                this.setState({
                                  guarantorDetailsCollapse:
                                    !this.state.guarantorDetailsCollapse,
                                })
                              }
                            >
                              <div className="col-md-10">
                                <h4 className="font-weight-bold">
                                  Guarantor Details
                                </h4>
                              </div>
                              <div className="col-md-2 text-right">
                                {this.state.guarantorDetailsCollapse ? (
                                  <i className="fas fa-plus"></i>
                                ) : (
                                  <i className="fas fa-minus"></i>
                                )}
                              </div>
                            </div>
                            <div
                              id="guarantorDetailsForm"
                              className="table-responsive my-1"
                            >
                              <table className="table table-bordered table-hover text-center">
                                <thead className="btn-grd-blue-reverse">
                                  <tr>
                                    <th>SN</th>
                                    <th></th>
                                    <th>Guarantor Name</th>
                                    <th>Relation</th>
                                    <th>Age</th>
                                    <th>Percent %</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1</td>
                                    <td className="custom-control custom-checkbox">
                                      <input
                                        type="checkbox"
                                        name="guarantorCheck"
                                        className="custom-control-input"
                                        id="guarantorCheck"
                                        value={this.state.guarantorCheck}
                                        onChange={this.changeEventHandler}
                                        required
                                      />
                                      <label
                                        className="custom-control-label"
                                        for="guarantorCheck"
                                      ></label>
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        placeholder="Enter Nominee Name"
                                        name="guarantorName"
                                        className="form-control form-control-sm"
                                        value={this.state.guarantorName}
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
                                        placeholder="Enter Percent %"
                                        name="percent"
                                        className="form-control form-control-sm"
                                        value={this.state.percent}
                                        onChange={this.changeEventHandler}
                                        onKeyUp={this.onKeyUpValue}
                                        required
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>Total Percent</td>
                                    <td>
                                      <input
                                        type="text"
                                        placeholder="Total Percent"
                                        name="totalPercent"
                                        className="form-control form-control-sm"
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
                                      <button className="btn btn-sm btn-grd-primary font-weight-bold">
                                        Calculate
                                      </button>
                                    </td>
                                    <td>
                                      <button className="btn btn-sm btn-grd-primary font-weight-bold">
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
                                    <th>Description</th>
                                    <th></th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1</td>
                                    <td>Test</td>
                                    <td>
                                      <input
                                        type="file"
                                        placeholder="Enter From Date"
                                        name="loanDocument"
                                        className="form-control form-control-sm"
                                        value={this.state.loanDocument}
                                        onChange={this.changeEventHandler}
                                        onKeyUp={this.onKeyUpValue}
                                        required
                                      />
                                    </td>
                                    <td>
                                      <button className="btn btn-sm btn-grd-danger font-weight-bold">
                                        X
                                      </button>
                                      <button className="btn btn-sm btn-grd-primary mx-1">
                                        <i class="fas fa-eye"></i>
                                      </button>
                                      <button className="btn btn-sm btn-grd-danger">
                                        <i class="fas fa-trash"></i>
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
