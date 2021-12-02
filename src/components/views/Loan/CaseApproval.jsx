import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Select from 'react-select';

import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
// import TransactionDetails from './TransactionDetails';

import DataTable, { Alignment } from 'react-data-table-component';
import CaseApprovalRecord from './CaseApprovalRecord';

import { DatePickerInput } from 'rc-datepicker';
import "rc-datepicker/lib/style.css";
import "../Loan/TransactionTable.css";

import "../../../Assets-Components/css/caseApproval.css"
import CaseApprovalService from "../../../Services/Loan/caseApproval/CaseApprovalService"

import Moment from 'moment';

var select = require('react-select');

const customStyles = {
    rows: {
        style: {
            minHeight: '35px', // override the row height
        },
    },
    headCells: {
        style: {
            paddingLeft: '10px', // override the cell padding for head cells
            paddingRight: '10px',
            minHeight: '30px',
            backgroundColor: '#99e6ff',
            color: 'black',
            fontSize: '13px',
            Height: '1px',
            fontWeight: '500px'
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',

        },
    }
};


const columns = [
    {
        name: 'Customer Code',
        selector: row => row.depositAccountId,
        sortable: true,
    },
    {
        name: 'AC / No',
        selector: row => row.accountcNo,
        sortable: true,
    },
    {
        name: 'Type',
        selector: row => row.depositAccountType === "D" ? "Deposit" : row.depositAccountType === "L" ? "Loan" : "",
        sortable: true,
    },
    {
        name: 'AC / Name',
        selector: row => row.accountName,
        sortable: true,
    },
    {
        name: 'Amount',
        selector: row => row.depositDetails === null ? "" : row.depositDetails.depositAmount,
        sortable: true,
    },
];

const conditionalRowStyles = [{
    when: row => row.approvedStatusFlag === "true",
    style: {
        backgroundColor: '#ccffcc',
        color: 'black',
        '&:hover': {
            cursor: 'pointer',
        },
    },
}]

var alltransactionData = [];

class CaseApproval extends Component {
    constructor(props) {
        super(props);

        this.state = {
            CaseApprovalId: '',
            toDate: '',
            fromDate: '',
            caseType: '',
            transactionDetailsCollapse: 'none',
            showResults: true,
            textButton: 'Search',

            transactionAllData: [],
            // transactionData: []
            transactionData: alltransactionData,
            depositDetails: [],
            tableFlag: false

        }

        this.searchType = this.searchType.bind(this);
        // this.format = this.format.bind(this);

    }

    componentWillMount() {

    }

    componentDidUpdate(prevProps, prevState) {
        let flag = '';
        let Data = [];
        // this.fetchData(flag, Data);
    }

    componentDidMount() {

    }
    fetchData() {

    }

    changeToDateHandler = (e) => {

        // alert(e);
        this.setState({
            toDate: e
        });
        this.setState({ caseType: "st" })
    };

    changeFromDateHandler = (e) => {
        // alert(e);
        this.setState({
            fromDate: e
        });
        this.setState({ caseType: "st" })
    };

    caseTypeDetails = () => {
        // alert("Selected Type");
        this.setState({
            showResults: true
        })

    }

    GetTableList = () => {

        this.setState({
            tableFlag: false
        })
        $("#transactionTable").css("display", "none");

        this.setState({
            transactionDetailsCollapse: 'none'
        })

        this.setState({
            transactionData: alltransactionData
        });

        let fromDate = Moment(this.state.fromDate).format('DD-MM-YYYY');
        let toDate = Moment(this.state.toDate).format('DD-MM-YYYY');
        let caseType = this.state.caseType;

        // alert(caseType);
        if (caseType === "deposite") {
            this.setState({ transactionData: alltransactionData });
            CaseApprovalService.getDepositeAccountByFromAndToDate(fromDate, toDate).then((res) => {

                this.setState({
                    transactionData: res.data.response
                });

                console.log("Deposit Data List : " + JSON.stringify(this.state.transactionData));

            })
        } else if (caseType === "Loan") {

            this.setState({ transactionData: [] });

            CaseApprovalService.getLoanAccountByFromAndToDate(fromDate, toDate).then((res) => {
                this.setState({ transactionData: res.data.response });

                console.log("Loan Data List : " + JSON.stringify(this.state.transactionData));
            })
        }
    }


    searchType = () => {
        $("#transactionTable").css("display", "block");
        this.setState({
            tableFlag: true
        })
    }

    changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({

            [name]: value
        });
    }

    CaseApprovalRecord = ({ data }) => <pre>{<CaseApprovalRecord data={data} />}</pre>

    render() {
        const tableFlag = this.state.tableFlag;
        return (
            <div>
                <div className="main-panel">
                    <div className="content">
                        <div className="page-inner" /*style={{ backgroundColor: "#d9d9d9" }}*/>
                            <div className="card p-3">
                                <div className="row font-weight-bold">
                                    <div className="col-lg-8 m-auto">
                                        <div className="page-header-title">
                                            <h4 className="text-primary f-w-600 font-weight-bold m-auto">
                                                Case Approval
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
                                                    <Link to="#">Loan</Link>
                                                </li>
                                                <li className="separator">
                                                    <i className="flaticon-right-arrow"></i>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="#">Case Approval</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="page-body">
                                <div className="row">
                                    {/* <div className="card p-4"> */}
                                    <div className="col-md-12 col-xl-12 col-sm-12 col-lg-12">
                                        <div className="card p-4">
                                            <div className="form-group">

                                                <input type="hidden" placeholder="CaseApprovalId" name="CaseApprovalId" className="form-control"
                                                    value={this.state.CaseApprovalId} onChange={this.changeHandler} />

                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-1 col-form-label font-weight-bold">From Date</label>
                                                <div className="col-sm-2">
                                                    {/* <input type="text" className="form-control" name="toDate" value={this.state.toDate} onChange={this.changeHandler} /> */}
                                                    {/* <span style={{ color: "red" }}>{this.state.errors["MenuNameError"]}</span> */}
                                                    <DatePickerInput name="fromData" onChange={this.changeFromDateHandler} value={this.state.fromDate} format='DD/MM/YYYY' onClick={this.GetTableList} readOnly />
                                                </div>

                                                <label className="col-sm-1 col-form-label font-weight-bold">To Date</label>
                                                <div className="col-sm-2">
                                                    {/* <input type="text" className="form-control" name="fromDate" value={this.state.fromDate} onChange={this.changeHandler} /> */}
                                                    {/* <span style={{ color: "red" }}>{this.state.errors["MenuNameError"]}</span> */}
                                                    <DatePickerInput name="toDate" onChange={this.changeToDateHandler} value={this.state.toDate} format='DD/MM/YYYY' onClick={this.GetTableList} readOnly />
                                                </div>

                                                <label className="col-sm-1 col-form-label font-weight-bold">Type</label>
                                                <div className="col-sm-3">

                                                    <select className="form-control" name="caseType" onChange={this.changeHandler} onClick={this.GetTableList} value={this.state.caseType}>
                                                        <option value="st">Select Type</option>
                                                        <option value="loan" >Loan</option>
                                                        <option value="deposite">Deposite</option>

                                                    </select>
                                                </div>

                                                <div className="col-sm-2">
                                                    <button className="btn btn-sm btn-grd-primary" onClick={this.searchType} >{this.state.textButton}</button>
                                                </div>

                                            </div>

                                            <div className="col-md-12 col-xl-12 col-sm-12 col-lg-12">
                                                <div className="">

                                                    <div id="transactionTable" style={{ display: this.state.transactionDetailsCollapse }}>

                                                        {this.state.tableFlag ? <div className="card p-4" ><h4 className="card-title font-weight-bold">Transaction Details</h4><DataTable
                                                            pagination

                                                            responsive={true}
                                                            striped={true}
                                                            paginationPerPage={5}

                                                            // paginationRowsPerPageOptions={[5, 10, 25, 50, 100]}
                                                            columns={columns}
                                                            // data={alltransactionData}
                                                            data={this.state.transactionData}
                                                            expandableRows
                                                            expandableRowsComponent={this.CaseApprovalRecord}
                                                            conditionalRowStyles={conditionalRowStyles}
                                                            subHeaderAlign={Alignment.CENTER}
                                                            customStyles={customStyles}
                                                        /></div> : <></>}
                                                        {/* <table id="tranTable" className="table table-striped table-bordered table-hover">
                                                        <thead>
                                                            <tr>
                                                                <th></th>
                                                                <th>Customer Code</th>
                                                                <th>A/C No.</th>
                                                                <th>Type</th>
                                                                <th>A/C Name</th>
                                                                <th>Amount</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="disttictTbody">
                                                            {
                                                                this.state.transactionAllData.map(
                                                                    districts =>
                                                                        <tr key={districts.depositAccountId}>
                                                                            <td></td>
                                                                            <td>{districts.depositAccountId}</td>
                                                                            <td>{districts.acNo}</td>
                                                                            <td>{districts.acNo}</td>
                                                                            <td>{districts.acName}</td>
                                                                            <td>{districts.acName}</td>
                                                                            
                                                                        </tr>
                                                                )
                                                            }
                                                        </tbody>

                                                    </table> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >


        );
    }
}



export default CaseApproval;



// ######################## extra stuff ############################

// transactionData: [{
//                 customerCode: 101,
//                 acNo: 10101010,
//                 type: 'Loan',
//                 acName: 'Sameer Kadgaye',
//                 amount: '3000000 Rs.'
//             },
//             {
//                 customerCode: 101,
//                 acNo: 10101010,
//                 type: 'Loan',
//                 acName: 'Sameer Kadgaye',
//                 amount: '3000000 Rs.'
//             },
//             {
//                 customerCode: 101,
//                 acNo: 10101010,
//                 type: 'Loan',
//                 acName: 'Sameer Kadgaye',
//                 amount: '3000000 Rs.'
//             }]




//  depositAccountId : res.depositAccountId,
//                 acNo : res.acNo,
//                 acName : res.acName,
//                 caseType : 'Deposit',
//                 amount : 1000000


// {
//     depositDetailsId: "",
//     receiptNo: "",
//     depositDate: "",
//     depositAmount: "",
//     depositYear: "",
//     depositMonth: "",
//     depositDay: "",
//     lienFlag: "",
//     lienDate: "",
//     depositAccountNo: "",
//     depositAccountName: "",
//     interestRate: "",
//     maturityDate: "",
//     approximateMaturityAmount: "",
//     interestInstallment: "",
//     interestPaymentFrequency: "",
//     approximateTotalInterestPayable: "",
//     interestProductFrequency: "",
//     maturityOption: "",
//     maturityInterestCondition: "",
//     enterBy: "",
//     enterDate: "",
//     ipAddress: "",
//     macAddress: "",
//     userId: ""
// }