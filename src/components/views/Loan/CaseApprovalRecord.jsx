import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import "../../../Assets-Components/css/caseApproval.css"
import { DatePickerInput } from 'rc-datepicker';
import Moment from 'moment';
import Select from "react-select";
import Swal from 'sweetalert2';

import $ from 'jquery';
import CaseApprovalService from '../../../Services/Loan/caseApproval/CaseApprovalService';

class CaseApprovalRecord extends Component {
    constructor(props) {
        super(props);

        this.state = {

            caseType: this.props.data.depositAccountType,
            depositAccountId: this.props.data.depositAccountId,
            loanAccountId: this.props.data.loanAccountId,
            acOpen: this.props.data.accountcNo,
            openBy: this.props.data.accountName,
            approveDate: new Date(),
            approve: '',
            approveDateTime: new Date(),

            depositUploadedDocuments: this.props.data.depositUploadedDocuments,
            showModal: true,
            reason: ''

        }
        this.approve = createRef();
    }

    componentWillMount() {

    }

    componentDidMount() {
        // $(this.modal).modal('show');
    }


    changeHandler = (e) => {

        // e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        })

        if (name === "approve") {

            if (value === "N") {

                // alert("hi");
                // this.setState({
                //     showModal : true
                // })
            }
        }
    }
    submitReason = () => {
        this.setState({
            reason: this.state.reason
        })
    }

    changeApprovaHandler = (val) => {
        this.setState({
            approve: val.value
        })
    }

    changeApproveDateHandler = (e) => {

        this.setState({ approveDate: e })
    }

    changeApproveDateTimeHandler = (e) => {

        this.setState({ approveDateTime: e })
    }

    componentDidUpdate(prevProps, prevState) {

    }

    approveFlagBtn = () => {
        var depositAccId = this.state.depositAccountId;
        let loanAccountId = this.state.loanAccountId;
        var approveFlag = this.state.approve;
        let approveDate = Moment(this.state.approveDate).format('DD-MM-YYYY');

        let approveDateTime = Moment(this.state.approveDateTime).format('DD-MM-YYYY');

        let modalObject = {
            approveDate: approveDate,
            approveDateTime: approveDateTime
        }
        if (this.state.caseType === 'D') {
            if (this.state.approve !== '') {
                if (this.state.approve === 'false') {
                    if (this.state.reason == '' || this.state.reason == null) {
                        Swal.fire({
                            text: "Please Enter Reason !",
                            icon: "warning",

                        });
                    } else {
                        CaseApprovalService.updateDepositAccountApprove(depositAccId, approveFlag, modalObject).then((res) => {
                            console.log("Flag Change : " + JSON.stringify(res.data.response));
                            Swal.fire({
                                text: res.data.message,
                                icon: "success",
                            });
                        })
                    }
                }
                if (this.state.approve === 'true') {
                    CaseApprovalService.updateDepositAccountApprove(depositAccId, approveFlag, modalObject).then((res) => {
                        console.log("Flag Change : " + JSON.stringify(res.data.message));
                        Swal.fire({
                            text: res.data.message,
                            icon: "success",
                        });

                    })
                }
            } else {
                this.approve.current.focus();
                Swal.fire({
                    text: "Please Select Approve Status !",
                    icon: "warning",
                });

                // this.approve.current.classList.add("border", "border-danger");
            }
        }
        else if (this.state.caseType === 'L') {
            if (this.state.approve !== '') {
                if (this.state.approve === 'false') {
                    if (this.state.reason == '' || this.state.reason == null) {
                        Swal.fire({
                            text: "Please Enter Reason !",
                            icon: "warning",

                        });
                    } else {
                        CaseApprovalService.updateLoanAccountApprove(loanAccountId, approveFlag, modalObject).then((res) => {
                            console.log("Flag Change : " + JSON.stringify(res.data.response));
                            Swal.fire({
                                text: res.data.message,
                                icon: "success",
                            });
                        })
                    }
                }
                if (this.state.approve === 'true') {
                    CaseApprovalService.updateLoanAccountApprove(loanAccountId, approveFlag, modalObject).then((res) => {
                        console.log("Flag Change : " + JSON.stringify(res.data.message));
                        Swal.fire({
                            text: res.data.message,
                            icon: "success",
                        });

                    })
                }
            } else {
                this.approve.current.focus();
                Swal.fire({
                    text: "Please Select Approve Status !",
                    icon: "warning",
                });

                // this.approve.current.classList.add("border", "border-danger");
            }

        }

    }

    render() {
        const { showModal } = this.state;
        // alert(this.state.showModal);
        return (
            <>
                <div className="">
                    <div className="">
                        <div className="" >
                            <div className="page-body">
                                <div className="card p-5" style={{ backgroundColor: "#e6e6e6" }}>
                                    <div className="row">
                                        <div className="col-md-12 col-xl-12 col-lg-12">


                                            <div className="form-group row">


                                                <input type="hidden" className="textBoxSize form-control" id="depositAccountId" placeholder="" value={this.state.depositAccountId} />

                                                <div className="mb-3 col-sm-2">
                                                    <label for="" className="font-weight-bold form-label">A/C Open</label>
                                                    <input type="text" className="textBoxSize form-control" id="exampleFormControlInput1" placeholder="" name="acOpen" value={this.state.acOpen} onChange={this.changeHandler} />
                                                </div>
                                                <div className="mb-3 col-sm-3">
                                                    <label for="exampleFormControlInput1" className="font-weight-bold form-label">Open By</label>
                                                    <input type="text" className="textBoxSize form-control" id="exampleFormControlInput1" placeholder="" name="openBy" value={this.state.openBy} onChange={this.changeHandler} />
                                                </div>
                                                <div className="mb-3 col-sm-3">
                                                    <label for="exampleFormControlInput1" className=" font-weight-bold form-label">Approve Date</label>
                                                    {/* <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" /> */}
                                                    <DatePickerInput name="approve" onChange={this.changeApproveDateHandler} value={this.state.approveDate} />
                                                </div>
                                                <div className="mb-3 col-sm-2">
                                                    <label for="exampleFormControlInput1" className="font-weight-bold form-label">Approve</label>
                                                    {/* <select className="form-control" name="approve" onChange={this.changeHandler} value={this.state.approve}  >
                                                        <option value="st">Select</option>
                                                        <option value="true" >Yes</option>
                                                        <option value="false" data-toggle="modal"
                                                            data-target="#caseApprovalModal">No</option>

                                                    </select> */}

                                                    <Select
                                                        ref={this.approve}
                                                        name="approve"
                                                        // value={this.state.memberGender}
                                                        onChange={this.changeApprovaHandler}
                                                        options={[
                                                            {
                                                                value: "true",
                                                                label: "Yes",
                                                            },
                                                            {
                                                                value: "false",
                                                                label: <span
                                                                    className="d-block"
                                                                    data-toggle="modal"
                                                                    data-target="#caseApprovalModal"

                                                                >
                                                                    No
                                                                </span>,
                                                            },

                                                        ]}
                                                        isSearchable
                                                        placeholder="Select"
                                                    />

                                                </div>
                                                <div className="mb-2 col-sm-2">
                                                    <label for="exampleFormControlInput1" className="font-weight-bold form-label">Approve Date/Time</label>
                                                    <DatePickerInput name="approveDateTime" onChange={this.changeApproveDateTimeHandler} value={this.state.approveDateTime} />
                                                </div>
                                                <div className="mb-2 col-sm-2 offset-sm-10">
                                                    <button type="button" className="btn btn-grd-primary" onClick={this.approveFlagBtn} >
                                                        Approve
                                                    </button>
                                                </div>



                                            </div>


                                        </div>

                                        {/* <div className="row"> */}
                                        <div className="col-md-12 col-xl-12 col-lg-12 col-sm-12">
                                            <div class="card-body">
                                                <h5 class="card-title">Documents List :</h5>
                                                <div className="col-sm-12">
                                                    {/* {this.state.depositUploadedDocuments.map((res) => ( */}
                                                    {/* <label className="col-sm-1">1.</label>
                                                    <label className="col-sm-3">Addhar Card</label>
                                                    <button className='col-sm-2 btn btn-sm btn-danger text-white'>View</button> */}
                                                    <div className="card-block table-border-style">
                                                        <div className="table-responsive p-2">
                                                            <table id="districtTable" className="table table-striped table-bordered table-hover">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Sr. No.</th>
                                                                        <th>Document Name</th>
                                                                        <th>Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody id="disttictTbody">
                                                                    {/* {
                                                                this.state.depositUploadedDocuments.map(
                                                                    document =>
                                                                        <tr key={document.despositUploadDocId}>
                                                                            <td>{document.districtCode}</td>
                                                                            <td>{document.documentName}</td>
                                                                            <td><button className="btn btn-sm btn-danger text-white">View</button></td>
                                                                           
                                                                        </tr>
                                                                )
                                                            } */}
                                                                    <tr>
                                                                        <th>1</th>
                                                                        <th>Aadhar Card</th>
                                                                        <th><button className="btn btn-sm btn-danger text-white">View</button></th>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>2</th>
                                                                        <th>Pan Card</th>
                                                                        <th><button className="btn btn-sm btn-danger text-white">View</button></th>
                                                                    </tr>

                                                                </tbody>

                                                            </table>
                                                        </div>
                                                    </div>
                                                    {/* // ))

                                                        // } */}
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

                {/* <!-- Customer Details Modal Start --> */}


                {/* <!-- Customer Details Modal Start --> */}
                <div
                    className="modal fade"
                    id="caseApprovalModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="caseApprovalModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header btn-grd-primary">
                                <h3
                                    className="modal-title"
                                    id="caseApprovalModalLabel"
                                >
                                    Case Not Approve Reason
                                </h3>
                                <button
                                    type="button"
                                    className="close text-white"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="table-responsive">
                                    <label for="" className="font-weight-bold form-label">Reason :</label>
                                    <input type="textarea" className="textBoxSize form-control" id="reason" placeholder="" name="reason" value={this.state.reason} onChange={this.changeHandler} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-grd-danger"
                                    data-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-grd-primary"
                                    onChange={this.submitReason}
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Customer Details Modal End --> */}
                {/* <!-- Customer Details Modal End --> */}
            </>
        );
    }
}

CaseApprovalRecord.propTypes = {

};

export default CaseApprovalRecord;