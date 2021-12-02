import { Component, createRef } from "react";
import { Link } from "react-router-dom";

import CustomerMasterService from "../../../Services/masterService/CustomerMasterService";

import UserService from "../../../Services/masterService/UserService";
import StateService from "../../../Services/masterService/StateService";
import BranchMasterService from "../../../Services/masterService/BranchMasterService";

import Select from "react-select";
import Swal from "sweetalert2";
import moment from "moment";

export default class CustomerMaster extends Component {
  constructor() {
    super();
    this.customer = createRef();

    this.state = {
      tab: "customerDetails",
      customerDetailsBtn: "",
      addressDetailsBtn: "",
      documentDetailsBtn: "",

      /* showModal: false,
      modalSelect: "", */

      currentDate:
        new Date().getDate() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getFullYear(),
      todayDate:
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getDate(),

      /* options: [
        { value: "Test", label: "Test" },
        { value: "Test2", label: "Test2" },
      ], */

      getCustomersArr: [],
      getUsersArr: [],
      selectedCustomer: [],

      rerenderTable: false,

      editCustomer: "",
      editCustomerArr: [],
      deleteCustomer: "",
      deleteCustomerArr: [],

      customerDetailCollapse: false,
      customerDetailsForm: false,
      customerDetailsFormEdit: false,
      customerDetailsFormDelete: false,
      customerId: "",
      memberNo: "",
      customerCreationDate: "",
      memberMaritalTitle: "",
      firstName: "",
      middleName: "",
      lastName: "",
      gender: "",
      mobileNo: "",
      dateOfBirth: "",
      adhaarNo: "",
      occupation: "",
      panNo: "",
      education: "",
      voterIdNo: "",
      status: "",
      rationCardNo: "",

      customerAddressArr: [
        /* {
          addressId: "",
          addressType: "",
          correspondenceFlag: "",
          addressStatus: "",
          address: "",
          pinCode: "",
          country: "",
          state: "",
          district: "",
          tahasil: "",
          village: "",
          phone1: "",
          phone2: "",
          email: "",
        }, */
      ],
      addressTypeOptions: [
        { label: "Permanent", value: "Permanent" },
        { label: "Temporary", value: "Temporary" },
      ],
      correspondenceFlagOptions: [
        { label: "Yes", value: "Yes" },
        { label: "No", value: "No" },
      ],
      addressStatusOptions: [
        { label: "Active", value: "Active" },
        { label: "Old", value: "Old" },
        { label: "Cancel", value: "Cancel" },
      ],
      stateOptions: [],

      addressDetailCollapse: false,
      addressType: "",
      correspondenceFlag: "",
      addressStatus: "",
      address: "",
      pinCode: "",
      country: "",
      state: "",
      stateName: "",
      stateList: [],
      district: "",
      districtName: "",
      districtList: [],
      tahasil: "",
      tahasilName: "",
      talukaList: [],
      village: "",
      phone1: "",
      phone2: "",
      email: "",
      addressCheckArr: [],
      kycDetailCollapse: false,

      documentDetailCollapse: false,
      selectedFile: null,
    };

    this.addressTypeRef = createRef();
    this.correspondenceFlagRef = createRef();
    this.addressStatusRef = createRef();
    this.districtRef = createRef();
    this.tahasilRef = createRef();
    this.villageRef = createRef();

    /* this.state.tab === "customerDetails"
      ? this.setState({
          customerDetailsBtn: "btn btn-grd-primary",
          addressDetailsBtn: "btn",
          documentDetailsBtn: "btn",
        })
      : this.state.tab === "addressDetails"
      ? this.setState({
          customerDetailsBtn: "btn",
          addressDetailsBtn: "btn btn-grd-primary",
          documentDetailsBtn: "btn",
        })
      : this.setState({
          customerDetailsBtn: "btn",
          addressDetailsBtn: "btn",
          documentDetailsBtn: "btn btn-grd-primary",
        }); */
  }

  componentDidMount = () => {
    this.clearStates();
    /* CustomerMasterService.getUsers().then((resp) => {
      this.setState({ getUsersArr: resp.data.response });
    }); */
    /* this.setState({
      options: this.state.getUsersArr.map((user) => ({
        value: user.userId,
        label: user.username,
      })),
    }); */
  };

  clearStates = () => {
    this.setState({
      tab: "customerDetails",
      customerDetailsBtn: "",
      addressDetailsBtn: "",
      documentDetailsBtn: "",

      currentDate:
        new Date().getDate() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getFullYear(),
      todayDate:
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getDate(),

      /* options: [
      { value: "Test", label: "Test" },
      { value: "Test2", label: "Test2" },
    ], */

      getCustomersArr: [],
      getUsersArr: [],
      selectedCustomer: [],

      editCustomer: "",
      editCustomerArr: [],
      deleteCustomer: "",
      deleteCustomerArr: [],

      customerDetailCollapse: false,
      customerDetailsForm: false,
      customerDetailsFormEdit: false,
      customerDetailsFormDelete: false,
      customerId: "",
      memberNo: "",
      customerCreationDate: "",
      memberMaritalTitle: "",
      firstName: "",
      middleName: "",
      lastName: "",
      gender: "",
      mobileNo: "",
      dateOfBirth: "",
      adhaarNo: "",
      occupation: "",
      panNo: "",
      education: "",
      voterIdNo: "",
      status: "",
      rationCardNo: "",

      addressDetailCollapse: false,
      addressType: "",
      correspondenceFlag: "",
      addressStatus: "",
      address: "",
      pinCode: "",
      country: "",
      state: "",
      stateName: "",
      stateList: [],
      district: "",
      districtName: "",
      districtList: [],
      tahasil: "",
      tahasilName: "",
      talukaList: [],
      village: "",
      phone1: "",
      phone2: "",
      email: "",
      addressCheckArr: [],
      kycDetailCollapse: false,

      documentDetailCollapse: false,
      selectedFile: null,
    });

    this.setState({
      customerCreationDate: this.state.todayDate,
    });

    this.getCustomersList();
    this.getStateList();
    this.getTalukaList();
  };

  getCustomersList = () => {
    CustomerMasterService.getCustomers().then((resp) => {
      this.setState({ getCustomersArr: resp.data.response });
    });
  };

  getStateList = () => {
    BranchMasterService.getStateData().then((res) => {
      this.setState({ stateList: res.data.response }, () => {
        console.log("stateList : " + JSON.stringify(this.state.stateList));
      });
    });

    this.setState({
      stateOptions: [
        this.state.stateList.map((state) => ({
          label: state.stateName,
          value: state.stateId,
        })),
      ],
    });
  };

  getTalukaList = () => {
    BranchMasterService.getTalukaData().then((res) => {
      this.setState({ talukaList: res.data.response }, () => {
        console.log("talukaList : " + JSON.stringify(this.state.talukaList));
      });
    });
  };

  /* newCustomerDetails = (e) => {
    e.preventDefault();
    this.setState({ customerDetailsNew: "Form" });
    console.log("customerDetailsNew : " + this.state.customerDetailsNew);
  }; */

  editCustomer = (customerMasterId) => {
    console.log("customerMasterId : " + JSON.stringify(customerMasterId));

    this.setState(
      {
        editCustomer: customerMasterId,
        // customerDetailsNew: "Form",
        // customerDetailsNew: true,
        customerDetailsForm: true,
        customerDetailsFormEdit: true,
      },
      () => {
        console.log("editCustomer : " + this.state.editCustomer);

        CustomerMasterService.getCustomerById(this.state.editCustomer).then(
          (resp) => {
            console.log(
              "Edit Response : " + JSON.stringify(resp.data.response)
            );
            this.setState({
              editCustomerArr: resp.data.response,
            });
            console.log(
              "editCustomer : " +
                this.state.editCustomer +
                " editCustomerArr : " +
                JSON.stringify(this.state.editCustomerArr)
            );
            this.setState(
              {
                customerId: this.state.editCustomerArr.customerMasterId,
                memberNo: this.state.editCustomerArr.memberNo,
                customerCreationDate:
                  this.state.editCustomerArr.customerCreationDate,
                memberMaritalTitle:
                  this.state.editCustomerArr.memberMaritalTitle,
                firstName: this.state.editCustomerArr.firstName,
                middleName: this.state.editCustomerArr.middleName,
                lastName: this.state.editCustomerArr.lastName,
                gender: this.state.editCustomerArr.gender,
                mobileNo: this.state.editCustomerArr.mobileNo,
                dateOfBirth: this.state.editCustomerArr.dateOfBirth,
                adhaarNo: this.state.editCustomerArr.adhaarNo,
                occupation: this.state.editCustomerArr.occupation,
                panNo: this.state.editCustomerArr.panNo,
                education: this.state.editCustomerArr.education,
                voterIdNo: this.state.editCustomerArr.voterIdNo,
                status:
                  this.state.editCustomerArr.status === false
                    ? "Active"
                    : "Inactive",
                rationCardNo: this.state.editCustomerArr.rationCardNo,
              },
              () => {
                console.log(
                  "editCustomer customerCreationDate : " +
                    this.state.customerCreationDate
                );
              }
            );
          }
        );
      }
    );
    console.log("editCustomer : " + this.state.editCustomer);
  };

  deleteCustomer = (customerMasterId) => {
    console.log("customerMasterId : " + JSON.stringify(customerMasterId));
    this.setState(
      {
        deleteCustomer: customerMasterId,
        // customerDetailsNew: true,
        customerDetailsForm: true,
        customerDetailsFormDelete: true,
      },
      () => {
        console.log("deleteCustomer : " + this.state.deleteCustomer);

        CustomerMasterService.getCustomerById(this.state.deleteCustomer).then(
          (resp) => {
            console.log(
              "Delete Response : " + JSON.stringify(resp.data.response)
            );
            this.setState({
              deleteCustomerArr: resp.data.response,
            });
            console.log(
              "deleteCustomer : " +
                this.state.deleteCustomer +
                " deleteCustomerArr : " +
                JSON.stringify(this.state.deleteCustomerArr)
            );
            this.setState({
              customerId: this.state.deleteCustomerArr.customerMasterId,
              memberNo: this.state.deleteCustomerArr.memberNo,
              customerCreationDate:
                this.state.deleteCustomerArr.customerCreationDate,
              memberMaritalTitle:
                this.state.deleteCustomerArr.memberMaritalTitle,
              firstName: this.state.deleteCustomerArr.firstName,
              middleName: this.state.deleteCustomerArr.middleName,
              lastName: this.state.deleteCustomerArr.lastName,
              gender: this.state.deleteCustomerArr.gender,
              mobileNo: this.state.deleteCustomerArr.mobileNo,
              dateOfBirth: this.state.deleteCustomerArr.dateOfBirth,
              adhaarNo: this.state.deleteCustomerArr.adhaarNo,
              occupation: this.state.deleteCustomerArr.occupation,
              panNo: this.state.deleteCustomerArr.panNo,
              education: this.state.deleteCustomerArr.education,
              voterIdNo: this.state.deleteCustomerArr.voterIdNo,
              status:
                this.state.deleteCustomerArr.status === false
                  ? "Active"
                  : "Inactive",
              rationCardNo: this.state.deleteCustomerArr.rationCardNo,
            });
          }
        );
      }
    );
    console.log("deleteCustomer : " + this.state.deleteCustomer);
  };

  componentDidUpdate = () => {
    // console.log("tab : " + this.state.tab);
    if (this.state.rerenderTable === true) {
      this.getCustomersList();
      this.setState({ rerenderTable: false });
    }
  };

  selectCustomer = (val) => {
    UserService.getUser(val.value).then((resp) => {
      this.setState({ selectedCustomer: resp.data.response });
      this.setState({
        customerCreationDate: this.state.todayDate,
        memberNo: this.state.selectedCustomer.userId,
        firstName: this.state.selectedCustomer.firstName,
        middleName: this.state.selectedCustomer.middleName,
        lastName: this.state.selectedCustomer.lastName,
        mobileNo: this.state.selectedCustomer.userMobileNo,
        adhaarNo: this.state.selectedCustomer.aadharCardNo,
        panNo: this.state.selectedCustomer.panNo,
        address: this.state.selectedCustomer.useraddress,
        phone1: this.state.selectedCustomer.userMobileNo,
        phone2: this.state.selectedCustomer.alternateMobileNo,
        email: this.state.selectedCustomer.userEmail,
      });
      StateService.getStateById(
        this.state.selectedCustomer.stateName.stateId
      ).then((res) => {
        let stateMaster = res.data.response;
        this.setState({
          state: stateMaster.stateName,
          country: stateMaster.country,
        });
      });

      BranchMasterService.getDistrictByStateId(
        this.state.selectedCustomer.stateName.stateId
      ).then((res) => {
        this.setState({ districtList: res.data.response });
      });

      BranchMasterService.getTalukaData().then((res) => {
        this.setState({ talukaList: res.data.response }, () => {
          console.log("talukaList : " + JSON.stringify(this.state.talukaList));
        });
      });
    });
  };

  /* Customer Details Tab */
  memberMaritalTitle = (val) => {
    this.setState({ memberMaritalTitle: val.value }, () => {
      console.log("label : " + val.label + " value : " + val.value);
      console.log("memberMaritalTitle : " + this.state.memberMaritalTitle);
    });
  };

  gender = (val) => {
    this.setState({ gender: val.value }, () => {
      console.log("label : " + val.label + " value : " + val.value);
      console.log("gender : " + this.state.gender);
    });
  };

  education = (val) => {
    this.setState({ education: val.value }, () => {
      console.log("label : " + val.label + " value : " + val.value);
      console.log("education : " + this.state.education);
    });
  };

  status = (val) => {
    this.setState({ status: val.value }, () => {
      console.log("label : " + val.label + " value : " + val.value);
      console.log("status : " + this.state.status);
    });
  };

  /* Address Details Tab */
  addressType = (val) => {
    this.setState({ addressType: val.value }, () => {
      console.log("label : " + val.label + " value : " + val.value);
      console.log("addressType : " + this.state.addressType);
    });
  };

  correspondenceFlag = (val) => {
    this.setState({ correspondenceFlag: val.value }, () => {
      console.log("label : " + val.label + " value : " + val.value);
      console.log("correspondenceFlag : " + this.state.correspondenceFlag);
    });
  };

  addressStatus = (val) => {
    this.setState({ addressStatus: val.value }, () => {
      console.log("label : " + val.label + " value : " + val.value);
      console.log("addressStatus : " + this.state.addressStatus);
    });
  };

  stateValue = (val) => {
    this.setState({ state: val.value, stateName: val.label }, () => {
      console.log("label : " + val.label + " value : " + val.value);
      console.log("state : " + this.state.state);
    });

    BranchMasterService.getDistrictByStateId(val.value).then((res) => {
      // console.log("getDistrictByStateId=====>>>>"+JSON.stringify(res.data.response));
      this.setState({
        districtList: res.data.response,
      });
    });
  };

  district = (val) => {
    this.setState({ district: val.value, districtName: val.label }, () => {
      console.log("label : " + val.label + " value : " + val.value);
      console.log("district : " + this.state.district);
    });
  };

  tahasil = (val) => {
    this.setState({ tahasil: val.value, tahasilName: val.label }, () => {
      console.log("label : " + val.label + " value : " + val.value);
      console.log("tahasil : " + this.state.tahasil);
    });
  };

  village = (val) => {
    this.setState({ village: val.value }, () => {
      console.log("label : " + val.label + " value : " + val.value);
      console.log("village : " + this.state.village);
    });
  };

  addressCheck = (e) => {
    console.log("addressCheck : " + e.target.name + " " + e.target.value);

    var addressCheck = this.state.addressCheckArr;
    // addressCheck.push(e.target.name, e.target.value);

    var name = e.target.name;
    var value = e.target.value;

    var checks = { [name]: value };
    addressCheck.push(checks);

    this.setState({ addressCheckArr: addressCheck }, () => {
      console.log(
        "addressCheckArr : " + JSON.stringify(this.state.addressCheckArr)
      );
    });
  };

  clearAddressFields = () => {
    this.setState(
      {
        addressType: "",
        correspondenceFlag: "",
        addressStatus: "",
        address: "",
        pinCode: "",
        country: "",
        state: "",
        district: "",
        tahasil: "",
        village: "",
        phone1: "",
        phone2: "",
        email: "",
        addressCheckArr: [],
      },
      () => {
        console.log(
          "addressType : " +
            this.state.addressType +
            " correspondenceFlag : " +
            this.state.correspondenceFlag +
            " addressStatus : " +
            this.state.addressStatus +
            " address : " +
            this.state.address +
            " pinCode : " +
            this.state.pinCode +
            " country : " +
            this.state.country +
            " state : " +
            this.state.state +
            " district : " +
            this.state.district +
            " tahasil : " +
            this.state.tahasil +
            " village : " +
            this.state.village +
            " phone1 : " +
            this.state.phone1 +
            " phone2 : " +
            this.state.phone2 +
            " email : " +
            this.state.email +
            " addressCheckArr : " +
            JSON.stringify(this.state.addressCheckArr)
        );
      }
    );
  };

  addAddressDetails = () => {
    var customerAddress = this.state.customerAddressArr;
    var address = {
      addressId: customerAddress.length + 1,
      addressType: this.state.addressType,
      correspondenceFlag: this.state.correspondenceFlag,
      addressStatus: this.state.addressStatus,
      address: this.state.address,
      pinCode: this.state.pinCode,
      country: this.state.country,
      state: this.state.state,
      district: this.state.district,
      tahasil: this.state.tahasil,
      village: this.state.village,
      phone1: this.state.phone1,
      phone2: this.state.phone2,
      email: this.state.email,
    };
    customerAddress.push(address);
    console.log("customerAddress.length : " + customerAddress.length);

    /* this.state.customerAddressArr.push(address);
    console.log(
      "customerAddressArr : " + JSON.stringify(this.state.customerAddressArr)
    ); */

    this.setState(
      {
        customerAddressArr: customerAddress,
        /* customerAddressArr: [
          {
            addressType: this.state.addressType,
            correspondenceFlag: this.state.correspondenceFlag,
            addressStatus: this.state.addressStatus,
            address: this.state.address,
            pinCode: this.state.pinCode,
            country: this.state.country,
            state: this.state.state,
            district: this.state.district,
            tahasil: this.state.tahasil,
            village: this.state.village,
            phone1: this.state.phone1,
            phone2: this.state.phone2,
            email: this.state.email,
          },
        ], */
      },
      () => {
        console.log(
          "customerAddressArr : " +
            JSON.stringify(this.state.customerAddressArr)
        );
      }
    );
  };

  deleteAddressRow = (i) => {
    // e.preventDefault();

    /* let rows = [this.state.customerAddressArr];
    console.log("rows : " + JSON.stringify(rows));
    // rows.splice(i, 1);
    this.setState({
      customerAddressArr: rows,
    }); */

    /* let rows = [
        this.state
          .customerAddressArr,
      ]; */
    console.log(
      "this.state.customerAddressArr : " +
        JSON.stringify(this.state.customerAddressArr)
    );
    const rows = this.state.customerAddressArr.filter(
      (row) => row.addressId !== i + 1
    );
    /* rows.filter(
        (row) =>
          row !== rows.slice(1, 2)
      ); */
    /* rows.filter(
        (row) =>
          row !==
          rows.slice(i + 1, i + 2)
      ); */
    // rows.splice(i + 1, 1);
    console.log("rows : " + JSON.stringify(rows));

    this.setState(
      {
        customerAddressArr: rows,
      },
      () => {
        console.log(
          "this.state.customerAddressArr : " +
            JSON.stringify(this.state.customerAddressArr)
        );
      }
    );

    let addr = rows;
    let j = 0;
    let addrs = addr;

    if (rows.length !== 0) {
      while (j < rows.length) {
        console.log("j : " + j);
        addrs[j].addressId = j + 1;
        j = j + 1;
        console.log("j : " + j);
      }
    }

    console.log(JSON.stringify(addrs));
    /* this.setState({
        customerAddressArr: rows,
      }); */
  };

  /* deleteAddressRow = () => {
    this.state.addressCheckArr.map((addressCheck) => {
      this.state.customerAddressArr.map((customerAddress, i) => {
        if (customerAddress === addressCheck[addressCheck]) {
          console.log("i : " + i + 1);
        }
        console.log("customerAddress : " + JSON.stringify(customerAddress));
      });
      return this.setState(
        (prevState) => ({
          customerAddressArr: this.state.customerAddressArr.filter(
            (customerAddress) => {
              return customerAddress !== addressCheck;
            }
          ),
          customerAddressArr: prevState.customerAddressArr.filter(
            (customerAddress) => {
              return customerAddress !== addressCheck.addressCheck;
            }
          ),
        }),
        () => {
          console.log(
            "addressCheckArr : " + JSON.stringify(this.state.addressCheckArr)
          );
          console.log(
            "customerAddressArr : " +
              JSON.stringify(this.state.customerAddressArr)
          );
        }
      );
    });
  }; */

  newAddress = (e) => {
    e.preventDefault();

    this.clearAddressFields();
  };

  deleteAddress = (e, i) => {
    e.preventDefault();

    console.log("i : " + i);

    this.deleteAddressRow(i);
  };

  addAddress = (e) => {
    e.preventDefault();

    this.addAddressDetails();
  };

  newKYC = (e) => {
    e.preventDefault();
  };

  deleteKYC = (e) => {
    e.preventDefault();
  };

  addKYC = (e) => {
    e.preventDefault();
  };

  submitFormBtn = (e) => {
    e.preventDefault();

    if (this.state.tab === "customerDetails") {
      let customerDetails = {
        memberNo: this.state.memberNo,
        customerCreationDate: this.state.customerCreationDate,
        memberMaritalTitle: this.state.memberMaritalTitle,
        firstName: this.state.firstName,
        middleName: this.state.middleName,
        lastName: this.state.lastName,
        gender: this.state.gender,
        mobileNo: this.state.mobileNo,
        dateOfBirth: this.state.dateOfBirth,
        adhaarNo: this.state.adhaarNo,
        occupation: this.state.occupation,
        panNo: this.state.panNo,
        education: this.state.education,
        voterIdNo: this.state.voterIdNo,
        status: this.state.status === "Active" ? false : true,
        rationCardNo: this.state.rationCardNo,
      };

      if (
        !this.state.customerDetailsFormEdit &&
        !this.state.customerDetailsFormDelete
      ) {
        console.log(
          "Customer Details Saved => " + JSON.stringify(customerDetails)
        );
      } else if (
        this.state.customerDetailsFormEdit &&
        !this.state.customerDetailsFormDelete
      ) {
        console.log(
          "Customer Details Updated => " + JSON.stringify(customerDetails)
        );
      } else if (
        !this.state.customerDetailsFormEdit &&
        this.state.customerDetailsFormDelete
      ) {
        console.log(
          "Customer Details Deleted => " + JSON.stringify(customerDetails)
        );
      }

      if (
        this.state.memberNo.length === 0 ||
        this.state.customerCreationDate.length === 0 ||
        this.state.memberMaritalTitle.length === 0 ||
        this.state.firstName.length === 0 ||
        this.state.middleName.length === 0 ||
        this.state.lastName.length === 0 ||
        this.state.gender.length === 0 ||
        this.state.mobileNo.length === 0 ||
        this.state.dateOfBirth.length === 0 ||
        this.state.adhaarNo.length === 0 ||
        this.state.occupation.length === 0 ||
        this.state.panNo.length === 0 ||
        this.state.education.length === 0 ||
        this.state.voterIdNo.length === 0 ||
        this.state.status.length === 0 ||
        this.state.rationCardNo.length === 0
      ) {
        console.log(
          "memberNo : " +
            this.state.memberNo +
            "  customerCreationDate : " +
            this.state.customerCreationDate +
            "  memberMaritalTitle : " +
            this.state.memberMaritalTitle +
            "  firstName : " +
            this.state.firstName +
            "  middleName : " +
            this.state.middleName +
            "  lastName : " +
            this.state.lastName +
            "  gender : " +
            this.state.gender +
            "  mobileNo : " +
            this.state.mobileNo +
            "  dateOfBirth : " +
            this.state.dateOfBirth +
            "  adhaarNo : " +
            this.state.adhaarNo +
            "  occupation : " +
            this.state.occupation +
            "  panNo : " +
            this.state.panNo +
            "  education : " +
            this.state.education +
            "  voterIdNo : " +
            this.state.voterIdNo +
            "  status : " +
            this.state.status +
            "  rationCardNo : " +
            this.state.rationCardNo
        );
        Swal.fire({
          icon: "error",
          title: "Please Fill All The Fields.",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (
        this.state.voterIdNo.length < 10 &&
        this.state.voterIdNo.length > 10
      ) {
        Swal.fire({
          icon: "error",
          title: "Voter Id No. must be of 10 characters.",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (
        this.state.rationCardNo.length < 10 &&
        this.state.rationCardNo.length > 10
      ) {
        Swal.fire({
          icon: "error",
          title: "Ration Card No. must be of 10 characters.",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (!Number(this.state.rationCardNo)) {
        Swal.fire({
          icon: "error",
          title: "Please Enter Ration Card No. in Numbers Only.",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (
        !this.state.customerDetailsFormEdit &&
        !this.state.customerDetailsFormDelete
      ) {
        CustomerMasterService.saveCustomerDetails(customerDetails).then(
          (resp) => {
            console.log("Record Saved Successfully.");
            Swal.fire({
              position: "top-right",
              icon: "success",
              title: "Data Saved Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            this.setState({ customerDetailsForm: false });
          }
        );
        this.clearStates();
      } else if (
        this.state.customerDetailsFormEdit &&
        !this.state.customerDetailsFormDelete
      ) {
        CustomerMasterService.updateCustomerDetails(
          customerDetails,
          this.state.customerId
        ).then((resp) => {
          console.log("Record Updated Successfully.");
          Swal.fire({
            position: "top-right",
            icon: "success",
            title: "Data Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          this.setState({ customerDetailsForm: false });
        });
        this.clearStates();
      } else if (
        !this.state.customerDetailsFormEdit &&
        this.state.customerDetailsFormDelete
      ) {
        CustomerMasterService.deleteCustomerDetails(this.state.customerId).then(
          (resp) => {
            console.log("Record Deleted Successfully.");
            Swal.fire({
              position: "top-right",
              icon: "success",
              title: "Data Deleted Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            this.setState({ customerDetailsForm: false });
          }
        );
        this.clearStates();
      }
    }

    if (this.state.tab === "addressDetails") {
      let customerAddress = {
        addressType: this.state.addressType,
        correspondenceFlag: this.state.correspondenceFlag,
        addressStatus: this.state.addressStatus,
        address: this.state.address,
        pinCode: this.state.pinCode,
        country: this.state.country,
        state: this.state.state,
        district: this.state.district,
        tahasil: this.state.tahasil,
        village: this.state.village,
        phone1: this.state.phone1,
        phone2: this.state.phone2,
        email: this.state.email,
      };
      console.log(
        "Customer Details Saved => " + JSON.stringify(customerAddress)
      );

      if (
        this.state.addressType.length === 0 ||
        this.state.correspondenceFlag.length === 0 ||
        this.state.addressStatus.length === 0 ||
        this.state.address.length === 0 ||
        this.state.pinCode.length === 0 ||
        this.state.country.length === 0 ||
        this.state.state.length === 0 ||
        this.state.district.length === 0 ||
        this.state.tahasil.length === 0 ||
        this.state.village.length === 0 ||
        this.state.phone1.length === 0 ||
        this.state.phone2.length === 0 ||
        this.state.email.length === 0
      ) {
        console.log(
          "addressType : " +
            this.state.addressType +
            "  correspondenceFlag : " +
            this.state.correspondenceFlag +
            "  addressStatus : " +
            this.state.addressStatus +
            "  address : " +
            this.state.address +
            "  pinCode : " +
            this.state.pinCode +
            "  country : " +
            this.state.country +
            "  state : " +
            this.state.state +
            "  district : " +
            this.state.district +
            "  tahasil : " +
            this.state.tahasil +
            "  village : " +
            this.state.village +
            "  phone1 : " +
            this.state.phone1 +
            "  phone2 : " +
            this.state.phone2 +
            "  email : " +
            this.state.email
        );
        Swal.fire({
          icon: "error",
          title: "Please Fill All The Fields.",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (
        this.state.pinCode.length < 6 &&
        this.state.pinCode.length > 6
      ) {
        Swal.fire({
          icon: "error",
          title: "PinCode must be of 6 characters.",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (
        this.state.phone1.length < 10 &&
        this.state.phone1.length > 10
      ) {
        Swal.fire({
          icon: "error",
          title: "Phone 1 No. must be of 10 characters.",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (!Number(this.state.phone1)) {
        Swal.fire({
          icon: "error",
          title: "Please Enter Phone 1 No. in Numbers Only.",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (
        this.state.phone2.length < 10 &&
        this.state.phone2.length > 10
      ) {
        Swal.fire({
          icon: "error",
          title: "Phone 2 No. must be of 10 characters.",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (!Number(this.state.phone2)) {
        Swal.fire({
          icon: "error",
          title: "Please Enter Phone 2 No. in Numbers Only.",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (
        /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)
      ) {
        Swal.fire({
          icon: "error",
          title: "Please Enter Email in Proper Format.",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        CustomerMasterService.saveCustomerAddress(customerAddress).then(
          (resp) => {
            console.log("Record Saved Successfully.");
            Swal.fire({
              position: "top-right",
              icon: "success",
              title: "Data Saved Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        );
      }
    }

    if (this.state.tab === "documentDetails") {
      let documentDetails = {
        memberNo: this.state.memberNo,
        customerCreationDate: this.state.customerCreationDate,
        memberMaritalTitle: this.state.memberMaritalTitle,
        firstName: this.state.firstName,
        middleName: this.state.middleName,
        lastName: this.state.lastName,
        gender: this.state.gender,
        mobileNo: this.state.mobileNo,
        dateOfBirth: this.state.dateOfBirth,
        adhaarNo: this.state.adhaarNo,
        occupation: this.state.occupation,
        panNo: this.state.panNo,
        education: this.state.education,
        voterIdNo: this.state.voterIdNo,
        status: this.state.status,
        rationCardNo: this.state.rationCardNo,
      };
      console.log(
        "Customer Details Saved => " + JSON.stringify(documentDetails)
      );

      if (
        this.state.memberNo.length === 0 ||
        this.state.customerCreationDate.length === 0 ||
        this.state.memberMaritalTitle.length === 0 ||
        this.state.firstName.length === 0 ||
        this.state.middleName.length === 0 ||
        this.state.lastName.length === 0 ||
        this.state.gender.length === 0 ||
        this.state.mobileNo.length === 0 ||
        this.state.dateOfBirth.length === 0 ||
        this.state.adhaarNo.length === 0 ||
        this.state.occupation.length === 0 ||
        this.state.panNo.length === 0 ||
        this.state.education.length === 0 ||
        this.state.voterIdNo.length === 0 ||
        this.state.status.length === 0 ||
        this.state.rationCardNo.length === 0
      ) {
        console.log(
          "memberNo : " +
            this.state.memberNo +
            "  customerCreationDate : " +
            this.state.customerCreationDate +
            "  memberMaritalTitle : " +
            this.state.memberMaritalTitle +
            "  firstName : " +
            this.state.firstName +
            "  middleName : " +
            this.state.middleName +
            "  lastName : " +
            this.state.lastName +
            "  gender : " +
            this.state.gender +
            "  mobileNo : " +
            this.state.mobileNo +
            "  dateOfBirth : " +
            this.state.dateOfBirth +
            "  adhaarNo : " +
            this.state.adhaarNo +
            "  occupation : " +
            this.state.occupation +
            "  panNo : " +
            this.state.panNo +
            "  education : " +
            this.state.education +
            "  voterIdNo : " +
            this.state.voterIdNo +
            "  status : " +
            this.state.status +
            "  rationCardNo : " +
            this.state.rationCardNo
        );
        Swal.fire({
          icon: "error",
          title: "Please Fill All The Fields.",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (
        this.state.voterIdNo.length < 10 &&
        this.state.voterIdNo.length > 10
      ) {
        Swal.fire({
          icon: "error",
          title: "Voter Id No. must be of 10 characters.",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (
        this.state.rationCardNo.length < 10 &&
        this.state.rationCardNo.length > 10
      ) {
        Swal.fire({
          icon: "error",
          title: "Ration Card No. must be of 10 characters.",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (!Number(this.state.rationCardNo)) {
        Swal.fire({
          icon: "error",
          title: "Please Enter Ration Card No. in Numbers Only.",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        CustomerMasterService.saveDocumentDetails(documentDetails).then(
          (resp) => {
            console.log("Record Saved Successfully.");
            Swal.fire({
              position: "top-right",
              icon: "success",
              title: "Data Saved Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        );
      }
    }

    this.setState({ rerenderTable: true });

    this.clearStates();

    /* if (
      this.state.pinCode.length === 0 ||
      this.state.postOfficeName.length === 0 ||
      this.state.area.length === 0 ||
      this.state.city.length === 0 ||
      this.state.state.length === 0 ||
      this.state.taluka.length === 0 ||
      this.state.district.length === 0
    ) {
      alert("Please Fill All The Fields.");
    } else if (this.state.pinCode.length < 6 && this.state.pinCode.length > 6) {
      alert("PinCode must be of 6 characters.");
    } else if (!Number(this.state.pinCode)) {
      alert("Please Enter PinCode in Numbers Only.");
    } else if (this.state.saveForm === "Save") {
      CustomerMasterService.savePinCode(customerDetails).then((resp) => {
        console.log("Record Saved Successfully.");
        this.reRenderPage();
        Swal.fire({
          position: "top-right",
          icon: "success",
          title: "Data Saved Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    } */
  };

  fillData = (...user) => {
    console.log("username : " + user.username);
    console.log("firstName : " + user);
    console.log("lastName : " + user);
  };

  onFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  onFileUpload = () => {
    const formData = new FormData();

    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    console.log("File Uploaded : " + this.state.selectedFile);

    // axios.post("api/uploadfile", formData);
  };

  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>

          <p>File Name: {this.state.selectedFile.name}</p>

          <p>File Type: {this.state.selectedFile.type}</p>

          <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  changeEventHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });

    if (name === "state") {
      BranchMasterService.getDistrictByStateId(value).then((res) => {
        // console.log("getDistrictByStateId=====>>>>"+JSON.stringify(res.data.response));
        this.setState({
          districtList: res.data.response,
        });
      });
    }
  };

  /* modalShow = (val) => {
    console.log("val.value : " + val.value);
    this.setState({ modalSelect: val.value });
    if (val.value === "No") this.setState({ showModal: true });
  };

  modalHide = () => {
    this.setState({ showModal: false });
  }; */

  render() {
    return (
      <>
        <div className="main-panel">
          <div className="content">
            <div className="page-inner">
              {/*---header row-------*/}
              <div className="card p-3">
                <div className="row font-weight-bold">
                  <div className="col-lg-8 m-auto">
                    <div className="page-header-title">
                      <h4 className="text-primary f-w-600 font-weight-bold m-auto">
                        Customer Master
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
                          <Link to="#">Customer Master</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/*---header row end-------*/}

              {/* <button
                type="button"
                className="btn btn-primary"
                // onClick={this.modalShow}
                data-toggle={this.state.showModal === true ? "modal" : ""}
                data-target={
                  this.state.showModal === true ? "#exampleModal" : ""
                }
              >
                Launch demo modal
              </button>
              <Select
                options={[
                  {
                    value: "Yes",
                    label: "Yes",
                  },
                  {
                    value: "No",
                    label: (
                      <span
                        className="d-block"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        No
                      </span>
                    ),
                  },
                ]}
                onChange={this.modalShow}
              />

              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Modal title
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        onClick={this.modalHide}
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">...</div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                        onClick={this.modalHide}
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div> */}

              {/*---header row-------*/}
              <div className="page-body">
                <div className="row">
                  <div className="col-md-12 ">
                    <div className="card p-4">
                      {this.state.customerDetailsForm === true ? (
                        <div>
                          <ul className="nav nav-tabs nav-fill">
                            <li className="nav-item mx-1 py-1">
                              <button
                                className={
                                  this.state.tab === "customerDetails"
                                    ? "btn btn-block tabActive font-weight-bold text-white"
                                    : "btn btn-block btn-grd-secondary font-weight-bold text-dark"
                                }
                                /* className="btn" */
                                /* className={
                              this.state.tab === "customerDetails"
                                ? "btn font-weight-bold btn-grd-primary"
                                : "btn btn-grd-secondary font-weight-bold text-dark"
                            } */
                                name="customerDetails"
                                data-toggle="tab"
                                href="#customerDetails"
                                role="tab"
                                aria-expanded="false"
                                onClick={() =>
                                  this.setState({ tab: "customerDetails" })
                                }
                              >
                                Customer Details
                              </button>
                            </li>
                            <li className="nav-item mx-1 py-1">
                              <button
                                className={
                                  this.state.tab === "addressDetails"
                                    ? "btn btn-block tabActive font-weight-bold text-white"
                                    : "btn btn-block btn-grd-secondary font-weight-bold text-dark"
                                }
                                /* className="btn" */
                                /* className={
                              this.state.tab === "addressDetails"
                                ? "btn font-weight-bold btn-grd-primary"
                                : "btn btn-grd-secondary font-weight-bold text-dark"
                            } */
                                name="addressDetails"
                                data-toggle="tab"
                                href="#addressDetails"
                                role="tab"
                                aria-expanded="false"
                                onClick={() =>
                                  this.setState({ tab: "addressDetails" })
                                }
                              >
                                Address Details
                              </button>
                            </li>
                            <li className="nav-item mx-1 py-1">
                              <button
                                className={
                                  this.state.tab === "documentDetails"
                                    ? "btn btn-block tabActive font-weight-bold text-white"
                                    : "btn btn-block btn-grd-secondary font-weight-bold text-dark"
                                }
                                /* className="btn" */
                                /* className={
                              this.state.tab === "documentDetails"
                                ? "btn font-weight-bold btn-grd-primary"
                                : "btn btn-grd-secondary font-weight-bold text-dark"
                            } */
                                name="documentDetails"
                                data-toggle="tab"
                                href="#documentDetails"
                                role="tab"
                                aria-expanded="false"
                                onClick={() =>
                                  this.setState({ tab: "documentDetails" })
                                }
                              >
                                Document Details
                              </button>
                            </li>
                          </ul>
                          <div className="tab-content tabs card-block">
                            {/* {this.state.tab === "customerDetails" ? ( */}
                            <div
                              id="customerDetails"
                              className="tab-pane active p-3"
                              role="tabpanel"
                              //style={{ maxHeight: 545 /* 470 */, overflow: "auto" }}
                            >
                              <div
                                className="page-header-title row btn-grd-blue text-white f-w-600 my-1 pt-2"
                                data-toggle="collapse"
                                data-target="#customerDetail"
                                onClick={() =>
                                  this.setState({
                                    customerDetailCollapse:
                                      !this.state.customerDetailCollapse,
                                  })
                                }
                              >
                                <div className="col-md-10">
                                  <h4 className="font-weight-bold">
                                    Customer Details
                                  </h4>
                                </div>
                                <div className="col-md-2 text-right">
                                  {this.state.customerDetailCollapse ? (
                                    <i className="fas fa-plus"></i>
                                  ) : (
                                    <i className="fas fa-minus"></i>
                                  )}
                                </div>
                              </div>
                              <div className="font-weight-bold text-danger">
                                Note : * Fields Are Mandatory.
                              </div>
                              <form
                                id="customerDetail"
                                onSubmit={this.handleSubmit}
                                action=""
                                noValidate
                              >
                                {/* <div className="form-group row">
                                  <label className="font-weight-bold col-sm-3 col-form-label">
                                    Select Customer&nbsp;
                                    <span className="text-danger">*</span>&nbsp;:
                                  </label>
                                  <div className="col-sm-9">
                                    <select name="customers" id="customers">
                                      {this.state.getUsersArr.map((user) => (
                                        <option value={user.userId}>
                                          {user.username}
                                        </option>
                                      ))}
                                    </select>
                                    <Select
                                      options={this.state.getUsersArr.map(
                                        (user) => ({
                                          value: user.userId,
                                          label: user.username,
                                        })
                                      )}
                                      onChange={this.selectCustomer}
                                      isSearchable
                                      placeholder="Select Customer"
                                    />
                                    <input
                                      type="text"
                                      placeholder="Select Customer"
                                      id="customer"
                                      name="customer"
                                      ref={this.customer}
                                      pattern="[0-9\b]*"
                                      className="form-control form-control-sm"
                                      value={this.state.customer}
                                      onChange={this.changeEventHandler}
                                      onKeyUp={this.onKeyUpValue}
                                      required
                                    />
                                  </div>
                                </div> */}

                                <div className="form-group row">
                                  <label className="font-weight-bold col-sm-3 col-form-label">
                                    Customer No.&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                  <div className="col-sm-3">
                                    <input
                                      type="text"
                                      placeholder="Enter Customer No."
                                      name="memberNo"
                                      pattern="[0-9\b]*"
                                      className="form-control form-control-sm"
                                      value={this.state.memberNo}
                                      onChange={this.changeEventHandler}
                                      onKeyUp={this.onKeyUpValue}
                                      disabled={
                                        this.state.customerDetailsFormDelete
                                      }
                                    />
                                  </div>
                                  <label className="font-weight-bold col-sm-3 col-form-label">
                                    Customer Creation Date&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                  <div className="col-sm-3">
                                    <input
                                      type="text"
                                      placeholder="Enter Customer Creation Date"
                                      name="customerCreationDate"
                                      pattern="[0-9\b]*"
                                      className="form-control form-control-sm text-center font-weight-bold"
                                      value={
                                        !this.state.customerDetailsFormEdit &&
                                        !this.state.customerDetailsFormDelete
                                          ? new Date().getDate() +
                                            "/" +
                                            (new Date().getMonth() + 1) +
                                            "/" +
                                            new Date().getFullYear()
                                          : moment(
                                              this.state.customerCreationDate
                                            ).format("DD-MM-yyyy")
                                      }
                                      onKeyUp={this.onKeyUpValue}
                                      disabled={
                                        this.state.customerDetailsFormDelete
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="form-group row">
                                  <label className="font-weight-bold col-sm-3 offset-3 col-form-label">
                                    First Name&nbsp;
                                    <span className="text-danger">*</span>
                                  </label>
                                  <label className="font-weight-bold col-sm-3 col-form-label">
                                    Middle Name&nbsp;
                                    <span className="text-danger">*</span>
                                  </label>
                                  <label className="font-weight-bold col-sm-3 col-form-label">
                                    Last Name&nbsp;
                                    <span className="text-danger">*</span>
                                  </label>
                                </div>

                                <div className="form-group row">
                                  <label className="font-weight-bold col-sm-2 col-form-label">
                                    Member Name&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                  <div
                                    className="col-sm-1"
                                    style={{ paddingLeft: 0, paddingRight: 0 }}
                                  >
                                    <Select
                                      name="memberMaritalTitle"
                                      // value={this.state.memberMaritalTitle}
                                      onChange={this.memberMaritalTitle}
                                      /* value={
                                        this.state.memberMaritalTitle
                                          ? this.options.find(
                                              (obj) =>
                                                obj.value ===
                                                this.state.memberMaritalTitle
                                            )
                                          : null
                                      } */
                                      options={[
                                        {
                                          value: "Mr",
                                          label: "Mr.",
                                        },
                                        {
                                          value: "Mrs",
                                          label: "Mrs.",
                                        },
                                        {
                                          value: "Miss",
                                          label: "Miss",
                                        },
                                        {
                                          value: "Ku",
                                          label: "Ku.",
                                        },
                                      ]}
                                      isSearchable
                                      placeholder={
                                        this.state.customerDetailsFormEdit ||
                                        this.state.customerDetailsFormDelete
                                          ? this.state.memberMaritalTitle
                                          : "Title"
                                      }
                                      isDisabled={
                                        this.state.customerDetailsFormDelete
                                      }
                                    />
                                    {/* <select
                                      className="custom-select custom-select-sm"
                                      name="memberMaritalTitle"
                                      value={this.state.memberMaritalTitle}
                                      onChange={this.memberMaritalTitle}
                                      style={{ padding: 5 }}
                                    >
                                      <option value="Mr" defaultValue>
                                        Mr.
                                      </option>
                                      <option value="Mrs">Mrs.</option>
                                      <option value="Miss">Miss</option>
                                      <option value="Ku">Ku.</option>
                                    </select> */}
                                  </div>
                                  <div className="col-sm-3">
                                    <input
                                      type="text"
                                      placeholder="Enter First Name"
                                      name="firstName"
                                      className="form-control form-control-sm"
                                      /* data-toggle="modal"
                                      data-target="#customerModal" */
                                      value={this.state.firstName}
                                      onChange={this.changeEventHandler}
                                      onKeyUp={this.onKeyUpValue}
                                      disabled={
                                        this.state.customerDetailsFormDelete
                                      }
                                    />
                                  </div>
                                  <div className="col-sm-3">
                                    <input
                                      type="text"
                                      placeholder="Enter Middle Name"
                                      name="middleName"
                                      className="form-control form-control-sm"
                                      value={this.state.middleName}
                                      onChange={this.changeEventHandler}
                                      onKeyUp={this.onKeyUpValue}
                                      disabled={
                                        this.state.customerDetailsFormDelete
                                      }
                                    />
                                  </div>
                                  <div className="col-sm-3">
                                    <input
                                      type="text"
                                      placeholder="Enter Last Name"
                                      name="lastName"
                                      className="form-control form-control-sm"
                                      value={this.state.lastName}
                                      onChange={this.changeEventHandler}
                                      onKeyUp={this.onKeyUpValue}
                                      disabled={
                                        this.state.customerDetailsFormDelete
                                      }
                                    />
                                  </div>
                                </div>

                                {/* <!-- Customer Details Modal Start --> */}
                                <div
                                  className="modal fade"
                                  id="customerModal"
                                  tabindex="-1"
                                  role="dialog"
                                  aria-labelledby="customerModalLabel"
                                  aria-hidden="true"
                                >
                                  <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                      <div className="modal-header btn-grd-primary">
                                        <h3
                                          className="modal-title"
                                          id="customerModalLabel"
                                        >
                                          Customer Details
                                        </h3>
                                        <button
                                          type="button"
                                          className="close text-white"
                                          data-dismiss="modal"
                                          aria-label="Close"
                                        >
                                          <span aria-hidden="true">
                                            &times;
                                          </span>
                                        </button>
                                      </div>
                                      <div className="modal-body">
                                        <div className="table-responsive">
                                          <table className="table table-bordered table-hover table-striped">
                                            <thead>
                                              <tr>
                                                <th>Sr. No.</th>
                                                <th>Username</th>
                                                <th>Name</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              {this.state.getUsersArr.map(
                                                (user, i) => (
                                                  <tr
                                                    onClick={(user) =>
                                                      this.fillData(
                                                        user.username,
                                                        user.firstName,
                                                        user.lastName
                                                      )
                                                    }
                                                  >
                                                    <th>{++i}</th>
                                                    <th>{user.username}</th>
                                                    <td>
                                                      {user.firstName +
                                                        " " +
                                                        user.middleName +
                                                        " " +
                                                        user.lastName}
                                                    </td>
                                                  </tr>
                                                )
                                              )}
                                            </tbody>
                                          </table>
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
                                        >
                                          Save changes
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* <!-- Customer Details Modal End --> */}

                                <div className="form-group row">
                                  <label className="font-weight-bold col-sm-3 col-form-label">
                                    Gender&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                  <div className="col-sm-3">
                                    <Select
                                      name="gender"
                                      // value={this.state.gender}
                                      onChange={this.gender}
                                      options={[
                                        {
                                          value: "Male",
                                          label: "Male",
                                        },
                                        {
                                          value: "Female",
                                          label: "Female",
                                        },
                                        {
                                          value: "TransGender",
                                          label: "Trans Gender",
                                        },
                                      ]}
                                      isSearchable
                                      placeholder={
                                        this.state.customerDetailsFormEdit ||
                                        this.state.customerDetailsFormDelete
                                          ? this.state.gender
                                          : "Select Gender"
                                      }
                                      isDisabled={
                                        this.state.customerDetailsFormDelete
                                      }
                                    />
                                    {/* <select
                                      className="custom-select custom-select-sm"
                                      name="gender"
                                      value={this.state.gender}
                                      onChange={this.gender}
                                    >
                                      <option value="Male" defaultValue>
                                        Male
                                      </option>
                                      <option value="Female">Female</option>
                                      <option value="TransGender">
                                        Trans-Gender
                                      </option>
                                    </select> */}
                                  </div>
                                  <label className="font-weight-bold col-sm-3 col-form-label">
                                    Mobile No.&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                  <div className="col-sm-3">
                                    <input
                                      type="text"
                                      placeholder="Enter Mobile No."
                                      name="mobileNo"
                                      className="form-control form-control-sm"
                                      value={this.state.mobileNo}
                                      onChange={this.changeEventHandler}
                                      onKeyUp={this.onKeyUpValue}
                                      minLength={10}
                                      maxLength={10}
                                      disabled={
                                        this.state.customerDetailsFormDelete
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="form-group row">
                                  <label className="font-weight-bold col-sm-3 col-form-label">
                                    Date Of Birth&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                  <div className="col-sm-3">
                                    <input
                                      type="date"
                                      placeholder="Enter Date Of Birth"
                                      name="dateOfBirth"
                                      className="form-control form-control-sm"
                                      value={this.state.dateOfBirth}
                                      onChange={this.changeEventHandler}
                                      onKeyUp={this.onKeyUpValue}
                                      disabled={
                                        this.state.customerDetailsFormDelete
                                      }
                                    />
                                  </div>
                                  <label className="font-weight-bold col-sm-3 col-form-label">
                                    Aadhar No.&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                  <div className="col-sm-3">
                                    <input
                                      type="text"
                                      placeholder="Enter Aadhar No."
                                      name="adhaarNo"
                                      className="form-control form-control-sm"
                                      value={this.state.adhaarNo}
                                      onChange={this.changeEventHandler}
                                      onKeyUp={this.onKeyUpValue}
                                      minLength={12}
                                      maxLength={12}
                                      disabled={
                                        this.state.customerDetailsFormDelete
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="form-group row">
                                  <label className="font-weight-bold col-sm-3 col-form-label">
                                    Occupation&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                  <div className="col-sm-3">
                                    <input
                                      type="text"
                                      placeholder="Enter Occupation"
                                      name="occupation"
                                      pattern="[a-zA-Z\b]*"
                                      className="form-control form-control-sm"
                                      value={this.state.occupation}
                                      onChange={this.changeEventHandler}
                                      onKeyUp={this.onKeyUpValue}
                                      disabled={
                                        this.state.customerDetailsFormDelete
                                      }
                                    />
                                  </div>
                                  <label className="font-weight-bold col-sm-3 col-form-label">
                                    PAN No.&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                  <div className="col-sm-3">
                                    <input
                                      type="text"
                                      placeholder="Enter PAN No."
                                      name="panNo"
                                      className="form-control form-control-sm"
                                      value={this.state.panNo}
                                      onChange={this.changeEventHandler}
                                      onKeyUp={this.onKeyUpValue}
                                      minLength={10}
                                      maxLength={10}
                                      disabled={
                                        this.state.customerDetailsFormDelete
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="form-group row">
                                  <label className="font-weight-bold col-sm-3 col-form-label">
                                    Education&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                  <div className="col-sm-3">
                                    <Select
                                      name="education"
                                      // value={this.state.education}
                                      onChange={this.education}
                                      options={[
                                        {
                                          value: "UnderGraduate",
                                          label: "Under Graduate",
                                        },
                                        {
                                          value: "Graduate",
                                          label: "Graduate",
                                        },
                                        {
                                          value: "PostGraduate",
                                          label: "Post Graduate",
                                        },
                                      ]}
                                      isSearchable
                                      placeholder={
                                        this.state.customerDetailsFormEdit ||
                                        this.state.customerDetailsFormDelete
                                          ? this.state.education
                                          : "Select Education"
                                      }
                                      isDisabled={
                                        this.state.customerDetailsFormDelete
                                      }
                                    />
                                    {/* <select
                                      className="custom-select custom-select-sm"
                                      name="education"
                                      value={this.state.education}
                                      onChange={this.education}
                                    >
                                      <option
                                        value="UnderGraduate"
                                        defaultValue
                                      >
                                        Under Graduate
                                      </option>
                                      <option value="Graduate">Graduate</option>
                                      <option value="PostGraduate">
                                        Post Graduate
                                      </option>
                                    </select> */}
                                  </div>
                                  <label className="font-weight-bold col-sm-3 col-form-label">
                                    Voter Id No.&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                  <div className="col-sm-3">
                                    <input
                                      type="text"
                                      placeholder="Enter Voter Id No."
                                      name="voterIdNo"
                                      pattern="[A-Z0-9\b]*"
                                      className="form-control form-control-sm"
                                      value={this.state.voterIdNo}
                                      onChange={this.changeEventHandler}
                                      onKeyUp={this.onKeyUpValue}
                                      minLength={10}
                                      maxLength={10}
                                      disabled={
                                        this.state.customerDetailsFormDelete
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="form-group row">
                                  <label className="font-weight-bold col-sm-3 col-form-label">
                                    Status&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                  <div className="col-sm-3">
                                    <Select
                                      name="status"
                                      // value={this.state.status}
                                      onChange={this.status}
                                      options={[
                                        {
                                          value: "Active",
                                          label: "Active",
                                        },
                                        {
                                          value: "Inactive",
                                          label: "Inactive",
                                        },
                                      ]}
                                      isSearchable
                                      placeholder={
                                        this.state.customerDetailsFormEdit ||
                                        this.state.customerDetailsFormDelete
                                          ? this.state.status
                                          : "Select Status"
                                      }
                                      isDisabled={
                                        this.state.customerDetailsFormDelete
                                      }
                                    />
                                    {/* <select
                                      className="custom-select custom-select-sm"
                                      name="status"
                                      value={this.state.status}
                                      onChange={this.status}
                                    >
                                      <option value="Active" defaultValue>
                                        Active
                                      </option>
                                      <option value="Inactive">Inactive</option>
                                    </select> */}
                                  </div>
                                  <label className="font-weight-bold col-sm-3 col-form-label">
                                    Ration Card No.&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                  <div className="col-sm-3">
                                    <input
                                      type="text"
                                      placeholder="Enter Ration Card No."
                                      name="rationCardNo"
                                      pattern="[0-9\b]*"
                                      className="form-control form-control-sm"
                                      value={this.state.rationCardNo}
                                      onChange={this.changeEventHandler}
                                      onKeyUp={this.onKeyUpValue}
                                      minLength={10}
                                      maxLength={10}
                                      disabled={
                                        this.state.customerDetailsFormDelete
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="form-group row">
                                  <div className="col-sm-12 text-right">
                                    <button
                                      className="btn btn-sm btn-grd-primary font-weight-bold mx-3"
                                      onClick={this.submitFormBtn}
                                    >
                                      {!this.state.customerDetailsFormEdit &&
                                      !this.state.customerDetailsFormDelete
                                        ? "Save & Proceed"
                                        : this.state.customerDetailsFormEdit &&
                                          !this.state.customerDetailsFormDelete
                                        ? "Update & Proceed"
                                        : "Delete & Proceed"}
                                    </button>
                                    <button
                                      className="btn btn-sm btn-grd-danger font-weight-bold"
                                      onClick={this.clearStates}
                                    >
                                      Cancel
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                            {/* ) : this.state.tab === "addressDetails" ? ( */}
                            <div
                              id="addressDetails"
                              className="tab-pane p-3"
                              role="tabpanel"
                              style={{
                                maxHeight: 545 /* 470 */,
                                overflow: "auto",
                              }}
                            >
                              <div
                                className="page-header-title row btn-grd-blue text-white f-w-600 my-1 pt-2"
                                data-toggle="collapse"
                                data-target="#addressDetail"
                                onClick={() =>
                                  this.setState({
                                    addressDetailCollapse:
                                      !this.state.addressDetailCollapse,
                                  })
                                }
                              >
                                <div className="col-md-10">
                                  <h4 className="font-weight-bold">
                                    Address Details
                                  </h4>
                                </div>
                                <div className="col-md-2 text-right">
                                  {this.state.addressDetailCollapse ? (
                                    <i className="fas fa-plus"></i>
                                  ) : (
                                    <i className="fas fa-minus"></i>
                                  )}
                                </div>
                              </div>
                              <div className="font-weight-bold text-danger">
                                Note : * Fields Are Mandatory.
                              </div>
                              <form
                                id="addressDetail"
                                className="collapse show"
                                onSubmit={this.handleSubmit}
                                noValidate
                              >
                                <div className="form-group row">
                                  <label className="font-weight-bold col-sm-2 col-form-label">
                                    Address Type&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                  <div className="col-sm-2">
                                    <Select
                                      name="addressType"
                                      value={this.state.addressType}
                                      onChange={this.addressType}
                                      options={this.state.addressTypeOptions}
                                      /* options={[
                                        {
                                          value: "Permanent",
                                          label: "Permanent",
                                        },
                                        {
                                          value: "Temporary",
                                          label: "Temporary",
                                        },
                                      ]} */
                                      isSearchable
                                      placeholder={
                                        this.state.addressType || "Type"
                                      }
                                      ref={(ref) => {
                                        this.addressTypeRef = ref;
                                      }}
                                    />
                                    {/* <select
                                  className="custom-select custom-select-sm"
                                  name="addressType"
                                >
                                  <option value="Residential">
                                    Residential
                                  </option>
                                </select> */}
                                  </div>
                                  <label className="font-weight-bold col-sm-2 col-form-label">
                                    Correspondence Flag&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                  <div className="col-sm-2">
                                    <Select
                                      name="correspondenceFlag"
                                      value={this.state.correspondenceFlag}
                                      onChange={this.correspondenceFlag}
                                      options={
                                        this.state.correspondenceFlagOptions
                                      }
                                      /* options={[
                                        {
                                          value: "Yes",
                                          label: "Yes",
                                        },
                                        {
                                          value: "No",
                                          label: "No",
                                        },
                                      ]} */
                                      isSearchable
                                      placeholder={
                                        this.state.correspondenceFlag || "Flag"
                                      }
                                      ref={this.correspondenceFlagRef}
                                    />
                                    {/* <select
                                  className="custom-select custom-select-sm"
                                  name="correspondenceFlag"
                                  required
                                >
                                  <option value="Yes" selected>
                                    Yes
                                  </option>
                                  <option value="No">No</option>
                                </select> */}
                                  </div>
                                  <label className="font-weight-bold col-sm-2 col-form-label">
                                    Status&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                  <div className="col-sm-2">
                                    <Select
                                      name="addressStatus"
                                      value={this.state.addressStatus}
                                      onChange={this.addressStatus}
                                      options={this.state.addressStatusOptions}
                                      /* options={[
                                        {
                                          value: "Active",
                                          label: "Active",
                                        },
                                        {
                                          value: "Old",
                                          label: "Old",
                                        },
                                        {
                                          value: "Cancel",
                                          label: "Cancel",
                                        },
                                      ]} */
                                      isSearchable
                                      placeholder={
                                        this.state.addressStatus || "Status"
                                      }
                                      ref={this.addressStatusRef}
                                    />
                                    {/* <select
                                  className="custom-select custom-select-sm"
                                  name="addressStatus"
                                  required
                                >
                                  <option value="Active" selected>
                                    Active
                                  </option>
                                  <option value="Old">Old</option>
                                  <option value="Cancel">Cancel</option>
                                </select> */}
                                  </div>
                                </div>

                                <div className="form-group row">
                                  <label className="font-weight-bold col-sm-2 col-form-label">
                                    Address&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                  <div className="col-sm-4">
                                    <textarea
                                      placeholder="Enter Address"
                                      name="address"
                                      rows="3"
                                      className="form-control form-control-sm"
                                      value={this.state.address}
                                      onChange={this.changeEventHandler}
                                      onKeyUp={this.onKeyUpValue}
                                      required
                                    ></textarea>
                                  </div>
                                  <label className="font-weight-bold col-sm-2 col-form-label">
                                    PinCode&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                  <div className="col-sm-4">
                                    <input
                                      type="text"
                                      placeholder="Enter PinCode"
                                      name="pinCode"
                                      pattern="[0-9\b]*"
                                      className="form-control form-control-sm"
                                      value={this.state.pinCode}
                                      onChange={this.changeEventHandler}
                                      onKeyUp={this.onKeyUpValue}
                                      required
                                    />
                                  </div>
                                </div>

                                <div className="form-group row">
                                  <label className="font-weight-bold col-sm-2 col-form-label">
                                    Country&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                  <div className="col-sm-4">
                                    <input
                                      type="text"
                                      placeholder="Enter Country"
                                      name="country"
                                      pattern="[0-9\b]*"
                                      className="form-control form-control-sm"
                                      value={this.state.country}
                                      onChange={this.changeEventHandler}
                                      onKeyUp={this.onKeyUpValue}
                                      required
                                    />
                                  </div>
                                  <label className="font-weight-bold col-sm-2 col-form-label">
                                    State&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                  <div className="col-sm-4">
                                    <Select
                                      name="state"
                                      value={this.state.state}
                                      onChange={this.stateValue}
                                      // options={this.state.stateOptions}
                                      options={this.state.stateList.map(
                                        (state) => ({
                                          value: state.stateId,
                                          label: state.stateName,
                                        })
                                      )}
                                      isSearchable
                                      placeholder={
                                        this.state.state
                                          ? this.state.stateName
                                          : "State"
                                      }
                                      ref={this.stateRef}
                                    />
                                    {/* <input
                                      type="text"
                                      placeholder="Enter State"
                                      name="state"
                                      pattern="[0-9\b]*"
                                      className="form-control form-control-sm"
                                      value={this.state.state}
                                      onChange={this.changeEventHandler}
                                      onKeyUp={this.onKeyUpValue}
                                      required
                                    /> */}
                                  </div>
                                </div>

                                <div className="form-group row">
                                  <label className="font-weight-bold col-sm-2 col-form-label">
                                    District&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                  <div className="col-sm-4">
                                    <Select
                                      name="district"
                                      value={this.state.district}
                                      onChange={this.district}
                                      options={this.state.districtList.map(
                                        (district) => ({
                                          value: district.districtId,
                                          label: district.districtName,
                                        })
                                      )}
                                      isSearchable
                                      placeholder={
                                        this.state.district
                                          ? this.state.districtName
                                          : "District"
                                      }
                                      ref={this.districtRef}
                                    />
                                    {/* <select
                                  className="custom-select custom-select-sm"
                                  name="district"
                                  required
                                >
                                  <option selected disabled>
                                    Select District
                                  </option>
                                  {this.state.districtList.map((district) => (
                                    <option
                                      key={district.districtId}
                                      value={district.districtId}
                                    >
                                      {district.districtName}
                                    </option>
                                  ))}
                                </select> */}
                                  </div>
                                  <label className="font-weight-bold col-sm-2 col-form-label">
                                    Tahasil&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                  <div className="col-sm-4">
                                    <Select
                                      name="tahasil"
                                      value={this.state.tahasil}
                                      onChange={this.tahasil}
                                      options={this.state.talukaList.map(
                                        (taluka) => ({
                                          value: taluka.talukaId,
                                          label: taluka.talukaName,
                                        })
                                      )}
                                      isSearchable
                                      placeholder={
                                        this.state.tahasil
                                          ? this.state.tahasilName
                                          : "Tahasil"
                                      }
                                      ref={this.tahasilRef}
                                    />
                                    {/* <select
                                  className="custom-select custom-select-sm"
                                  name="tahasil"
                                  required
                                >
                                  <option selected disabled>
                                    Select Tahasil
                                  </option>
                                  {this.state.talukaList.map((taluka) => (
                                    <option
                                      key={taluka.talukaId}
                                      value={taluka.talukaId}
                                    >
                                      {taluka.talukaName}
                                    </option>
                                  ))}
                                </select> */}
                                  </div>
                                </div>

                                <div className="form-group row">
                                  <label className="font-weight-bold col-sm-2 col-form-label">
                                    Village&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                  <div className="col-sm-4">
                                    <Select
                                      name="village"
                                      value={this.state.village}
                                      onChange={this.village}
                                      options={[
                                        {
                                          value: "Test",
                                          label: "Test",
                                        },
                                      ]}
                                      isSearchable
                                      placeholder={
                                        this.state.village
                                          ? this.state.village
                                          : "Village"
                                      }
                                      ref={this.villageRef}
                                    />
                                    {/* <select
                                  className="custom-select custom-select-sm"
                                  name="village"
                                  required
                                >
                                  <option selected disabled>
                                    Select Village
                                  </option>
                                </select> */}
                                  </div>
                                  <label className="font-weight-bold col-sm-2 col-form-label">
                                    Phone 1&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                  <div className="col-sm-4">
                                    <input
                                      type="text"
                                      placeholder="Enter Phone 1"
                                      name="phone1"
                                      pattern="[0-9\b]*"
                                      className="form-control form-control-sm"
                                      value={this.state.phone1}
                                      onChange={this.changeEventHandler}
                                      onKeyUp={this.onKeyUpValue}
                                      minLength={10}
                                      maxLength={10}
                                      required
                                    />
                                  </div>
                                </div>

                                <div className="form-group row">
                                  <label className="font-weight-bold col-sm-2 col-form-label">
                                    Phone 2&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                  <div className="col-sm-4">
                                    <input
                                      type="text"
                                      placeholder="Enter Phone 2"
                                      name="phone2"
                                      pattern="[0-9\b]*"
                                      className="form-control form-control-sm"
                                      value={this.state.phone2}
                                      onChange={this.changeEventHandler}
                                      onKeyUp={this.onKeyUpValue}
                                      minLength={10}
                                      maxLength={10}
                                      required
                                    />
                                  </div>
                                  <label className="font-weight-bold col-sm-2 col-form-label">
                                    Email&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                  <div className="col-sm-4">
                                    <input
                                      type="email"
                                      placeholder="Enter Email"
                                      name="email"
                                      className="form-control form-control-sm"
                                      value={this.state.email}
                                      onChange={this.changeEventHandler}
                                      onKeyUp={this.onKeyUpValue}
                                      required
                                    />
                                  </div>
                                </div>

                                <div className="form-group row">
                                  <div className="col-12 text-right">
                                    <button
                                      className="btn btn-sm btn-grd-primary mr-1"
                                      onClick={this.newAddress}
                                    >
                                      New Record
                                    </button>
                                    {/* <button
                                      className="btn btn-sm btn-grd-danger mr-1"
                                      onClick={this.deleteAddress}
                                    >
                                      Delete Record From Table
                                    </button> */}
                                    <button
                                      className="btn btn-sm btn-grd-green"
                                      onClick={this.addAddress}
                                    >
                                      Add Record To Table
                                    </button>
                                  </div>
                                </div>

                                <div className="table-responsive">
                                  <table className="table table-bordered table-hover table-striped text-center">
                                    <thead>
                                      <tr className="btn-grd-blue-reverse">
                                        <th colSpan={2}>SN</th>
                                        <th>Address Type</th>
                                        <th>Address</th>
                                        <th>Village</th>
                                        <th>Status</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {this.state.customerAddressArr.map(
                                        (address, i) => {
                                          return (
                                            <tr key={i + 1}>
                                              <td
                                                id={
                                                  "deleteAddressBtn" + (i + 1)
                                                }
                                              >
                                                <button
                                                  className="btn btn-xs btn-grd-danger m-1"
                                                  onClick={(e) =>
                                                    this.deleteAddress(e, i)
                                                  }
                                                >
                                                  <i className="fas fa-trash"></i>
                                                </button>
                                                {/* <div className="form-check">
                                                  <input
                                                    className="form-check-input position-static"
                                                    type="checkbox"
                                                    name="addressCheck"
                                                    id={
                                                      "addressCheck" + (i + 1)
                                                    }
                                                    value={
                                                      "addressCheck" + (i + 1)
                                                    }
                                                    aria-label="..."
                                                    onClick={this.addressCheck}
                                                  />
                                                </div> */}
                                              </td>
                                              <td id={"SN" + (i + 1)}>
                                                {i + 1}
                                              </td>
                                              <td id={"addressType" + (i + 1)}>
                                                {address.addressType}
                                              </td>
                                              <td id={"address" + (i + 1)}>
                                                {address.address}
                                              </td>
                                              <td id={"village" + (i + 1)}>
                                                {address.village}
                                              </td>
                                              <td
                                                id={"addressStatus" + (i + 1)}
                                              >
                                                {address.addressStatus}
                                              </td>
                                            </tr>
                                          );
                                        }
                                      )}
                                      {/* <tr>
                                        <td>1</td>
                                        <td>
                                          <div className="form-check">
                                            <input
                                              className="form-check-input position-static"
                                              type="checkbox"
                                              id="blankCheckbox1"
                                              value="option1"
                                              aria-label="..."
                                            />
                                          </div>
                                        </td>
                                        <td>Test</td>
                                        <td>Test</td>
                                        <td>Test</td>
                                        <td>Test</td>
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <td>
                                          <div className="form-check">
                                            <input
                                              className="form-check-input position-static"
                                              type="checkbox"
                                              id="blankCheckbox2"
                                              value="option2"
                                              aria-label="..."
                                            />
                                          </div>
                                        </td>
                                        <td>Test</td>
                                        <td>Test</td>
                                        <td>Test</td>
                                        <td>Test</td>
                                      </tr>
                                      <tr>
                                        <td>3</td>
                                        <td>
                                          <div className="form-check">
                                            <input
                                              className="form-check-input position-static"
                                              type="checkbox"
                                              id="blankCheckbox3"
                                              value="option3"
                                              aria-label="..."
                                            />
                                          </div>
                                        </td>
                                        <td>Test</td>
                                        <td>Test</td>
                                        <td>Test</td>
                                        <td>Test</td>
                                      </tr> */}
                                    </tbody>
                                  </table>
                                </div>
                              </form>

                              <div
                                className="page-header-title row btn-grd-blue text-white f-w-600 my-1 pt-2"
                                data-toggle="collapse"
                                data-target="#kycDetail"
                                onClick={() =>
                                  this.setState({
                                    kycDetailCollapse:
                                      !this.state.kycDetailCollapse,
                                  })
                                }
                              >
                                <div className="col-md-10">
                                  <h4 className="font-weight-bold">
                                    KYC Details
                                  </h4>
                                </div>
                                <div className="col-md-2 text-right">
                                  {this.state.kycDetailCollapse ? (
                                    <i className="fas fa-plus"></i>
                                  ) : (
                                    <i className="fas fa-minus"></i>
                                  )}
                                </div>
                                {/* <div className="col-md-2 text-right">
                              {this.state.kycDetailCollapse ? (
                                <i
                                  className="fas fa-plus"
                                  data-toggle="collapse"
                                  data-target="#kycDetail"
                                  onClick={() =>
                                    this.setState({
                                      kycDetailCollapse:
                                        !this.state.kycDetailCollapse,
                                    })
                                  }
                                ></i>
                              ) : (
                                <i
                                  className="fas fa-minus"
                                  data-toggle="collapse"
                                  data-target="#kycDetail"
                                  onClick={() =>
                                    this.setState({
                                      kycDetailCollapse:
                                        !this.state.kycDetailCollapse,
                                    })
                                  }
                                ></i>
                              )}
                            </div> */}
                              </div>
                              <div className="font-weight-bold text-danger">
                                Note : * Fields Are Mandatory.
                              </div>
                              <div className="text-danger font-weight-bold">
                                Note : Only jpg, jpeg, png and pdf are allowed.
                                (*Note : Image should not be larger than 50KB.)
                              </div>
                              <form
                                id="kycDetail"
                                className="collapse show"
                                onSubmit={this.handleSubmit}
                                noValidate
                              >
                                <div className="form-group row">
                                  <label className="font-weight-bold col-sm-2 col-form-label">
                                    Document Type&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                  <div className="col-sm-4">
                                    <select
                                      className="custom-select custom-select-sm"
                                      name="documentType"
                                      required
                                    >
                                      <option value="AddressProof">
                                        Address Proof
                                      </option>
                                      <option value="IdentityProof">
                                        Identity Proof
                                      </option>
                                      <option value="Others">Others</option>
                                    </select>
                                  </div>
                                  <label className="font-weight-bold col-sm-2 col-form-label">
                                    Document Id&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                  <div className="col-sm-4">
                                    <select
                                      className="custom-select custom-select-sm"
                                      name="documentId"
                                      required
                                    >
                                      <option value="AddressProof">
                                        Address Proof
                                      </option>
                                      <option value="IdentityProof">
                                        Identity Proof
                                      </option>
                                      <option value="Others">Others</option>
                                    </select>
                                  </div>
                                </div>

                                <div className="form-group row">
                                  <label className="font-weight-bold col-sm-2 col-form-label">
                                    Document Detail&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                  <div className="col-sm-4">
                                    <input
                                      type="text"
                                      placeholder="Enter Document Detail"
                                      name="documentDetail"
                                      pattern="[0-9\b]*"
                                      className="form-control form-control-sm"
                                      value={this.state.documentDetail}
                                      onChange={this.changeEventHandler}
                                      onKeyUp={this.onKeyUpValue}
                                      required
                                    />
                                  </div>
                                  <label className="font-weight-bold col-sm-2 col-form-label">
                                    Doc No.&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                  <div className="col-sm-4">
                                    <input
                                      type="text"
                                      placeholder="Enter Doc No."
                                      name="docNo"
                                      pattern="[0-9\b]*"
                                      className="form-control form-control-sm"
                                      value={this.state.docNo}
                                      onChange={this.changeEventHandler}
                                      onKeyUp={this.onKeyUpValue}
                                      required
                                    />
                                  </div>
                                </div>

                                <div className="form-group row">
                                  <label className="font-weight-bold col-sm-2 col-form-label">
                                    Expiry Date&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                  <div className="col-sm-4">
                                    <input
                                      type="date"
                                      placeholder="Enter Enpiry Date"
                                      name="expiryDate"
                                      pattern="[0-9\b]*"
                                      className="form-control form-control-sm"
                                      value={this.state.expiryDate}
                                      onChange={this.changeEventHandler}
                                      onKeyUp={this.onKeyUpValue}
                                      required
                                    />
                                  </div>
                                  <label className="font-weight-bold col-sm-2 col-form-label">
                                    Certified By&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                  <div className="col-sm-4">
                                    <select
                                      className="custom-select custom-select-sm"
                                      name="certifiedBy"
                                      required
                                    >
                                      <option selected disabled>
                                        Select Certified By
                                      </option>
                                      <option value="SelfCertified">
                                        Self Certified
                                      </option>
                                      <option value="TrueCopies">
                                        True-Copies
                                      </option>
                                      <option value="Notary">Notary</option>
                                      <option value="Other">Other</option>
                                    </select>
                                  </div>
                                </div>

                                <div className="form-group row">
                                  <label className="font-weight-bold col-sm-2 col-form-label">
                                    Compulsory Flag&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                  <div className="col-sm-4">
                                    <div className="custom-control custom-radio custom-control-inline d-inline">
                                      <input
                                        type="radio"
                                        id="compulsoryFlagYes"
                                        name="compulsoryFlag"
                                        className="custom-control-input"
                                      />
                                      <label
                                        className="custom-control-label"
                                        for="compulsoryFlagYes"
                                      >
                                        Yes
                                      </label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline d-inline">
                                      <input
                                        type="radio"
                                        id="compulsoryFlagNo"
                                        name="compulsoryFlag"
                                        className="custom-control-input"
                                      />
                                      <label
                                        className="custom-control-label"
                                        for="compulsoryFlagNo"
                                      >
                                        No
                                      </label>
                                    </div>
                                  </div>
                                  {/* <label className="font-weight-bold col-sm-2 col-form-label">
                                Rating Existing&nbsp;
                                <span className="text-danger">*</span>&nbsp;:
                              </label>
                              <div className="col-sm-4"></div> */}
                                </div>

                                <div className="form-group row">
                                  <label className="font-weight-bold col-sm-2 col-form-label">
                                    Select File&nbsp;
                                    <span className="text-danger">*</span>
                                    &nbsp;:
                                  </label>
                                  <div className="col-sm-4">
                                    <button className="btn btn-sm btn-grd-primary mx-1">
                                      <i className="fas fa-folder-open"></i>
                                    </button>
                                    <button className="btn btn-sm btn-grd-danger font-weight-bold mx-1">
                                      X
                                    </button>
                                    <button className="btn btn-sm btn-grd-primary font-weight-bold mx-1">
                                      View File
                                    </button>
                                  </div>
                                  <div className="col-6 text-right font-weight-bold">
                                    <button
                                      className="btn btn-sm btn-grd-primary mr-1"
                                      onClick={this.newKYC}
                                    >
                                      New Record
                                    </button>
                                    <button
                                      className="btn btn-sm btn-grd-danger mr-1"
                                      onClick={this.deleteKYC}
                                    >
                                      Delete Record From Table
                                    </button>
                                    <button
                                      className="btn btn-sm btn-grd-green"
                                      onClick={this.addKYC}
                                    >
                                      Add Record To Table
                                    </button>
                                  </div>
                                </div>

                                <div className="table-responsive">
                                  <table className="table table-bordered table-hover table-striped text-center">
                                    <thead>
                                      <tr className="btn-grd-blue-reverse">
                                        <th>SN</th>
                                        <th>Document Type</th>
                                        <th>Document Detail</th>
                                        <th>Doc No.</th>
                                        {/* <th>Rating Required</th> */}
                                        <th>Compulsary Flag</th>
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

                                <div className="text-right">
                                  <button className="btn btn-sm btn-grd-primary font-weight-bold">
                                    Proceed
                                  </button>
                                </div>
                              </form>
                            </div>
                            {/* ) : ( */}
                            <div
                              id="documentDetails"
                              className="tab-pane p-3"
                              role="tabpanel"
                              //style={{ maxHeight: 545 /* 470 */, overflow: "auto" }}
                            >
                              <div
                                className="page-header-title row btn-grd-blue text-white f-w-600 my-1 pt-2"
                                data-toggle="collapse"
                                data-target="#documentDetail"
                                onClick={() =>
                                  this.setState({
                                    documentDetailCollapse:
                                      !this.state.documentDetailCollapse,
                                  })
                                }
                              >
                                <div className="col-md-10">
                                  <h4 className="font-weight-bold">
                                    Signature/Photo
                                  </h4>
                                </div>
                                <div className="col-md-2 text-right">
                                  {this.state.documentDetailCollapse ? (
                                    <i className="fas fa-plus"></i>
                                  ) : (
                                    <i className="fas fa-minus"></i>
                                  )}
                                </div>
                              </div>
                              <div className="font-weight-bold text-danger">
                                Note : * Fields Are Mandatory.
                              </div>
                              <div className="text-danger font-weight-bold">
                                Note : Image should not be larger than 50KB.
                              </div>
                              <div id="documentDetail">
                                <div className="row">
                                  <div className="col-md-6 border-right border-dark">
                                    <div className="row">
                                      <div className="col-md-4 font-weight-bold">
                                        Signature&nbsp;
                                        <span className="text-danger">*</span>
                                        &nbsp;:
                                      </div>
                                      <div className="col-md-8">
                                        <div
                                          className="border border-dark"
                                          style={{ width: 100, height: 100 }}
                                        >
                                          <img
                                            src={
                                              this.state.selectedFile /* 
                                            ? this.state.selectedFile[0]
                                            : "" */
                                            }
                                            alt=""
                                          />
                                        </div>
                                        <div className="my-1">
                                          <input
                                            type="file"
                                            className="form-control form-control-sm"
                                            onChange={this.onFileChange}
                                          />
                                          {/* <button className="btn btn-sm btn-grd-primary mx-1">
                                        <i className="fas fa-folder-open"></i>
                                      </button> */}
                                          <button
                                            className="btn btn-sm btn-grd-primary font-weight-bold mx-1"
                                            onClick={this.onFileUpload}
                                          >
                                            Upload File
                                          </button>
                                          <button className="btn btn-sm btn-grd-danger font-weight-bold mx-1">
                                            X
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="row">
                                      <div className="col-md-4 font-weight-bold">
                                        Photo&nbsp;
                                        <span className="text-danger">*</span>
                                        &nbsp;:
                                      </div>
                                      <div className="col-md-8">
                                        <div
                                          className="border border-dark"
                                          style={{ width: 100, height: 100 }}
                                        ></div>
                                        <div className="my-1">
                                          <input
                                            type="file"
                                            className="form-control form-control-sm"
                                            onChange={this.onFileChange}
                                          />
                                          {/* <button className="btn btn-sm btn-grd-primary mx-1">
                                        <i className="fas fa-folder-open"></i>
                                      </button> */}
                                          <button
                                            className="btn btn-sm btn-grd-primary font-weight-bold mx-1"
                                            onClick={this.onFileUpload}
                                          >
                                            Upload File
                                          </button>
                                          <button className="btn btn-sm btn-grd-danger font-weight-bold mx-1">
                                            X
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="text-center my-1">
                                  <button className="btn btn-sm btn-grd-primary font-weight-bold">
                                    Proceed
                                  </button>
                                </div>

                                <div className="page-header-title row text-primary f-w-600">
                                  <div className="col-md-10">
                                    <h4 className="font-weight-bold">
                                      Upload Document
                                    </h4>
                                  </div>
                                  <div className="col-md-2 font-weight-bold text-right">
                                    X
                                  </div>
                                </div>
                                <div
                                  className="border w-100 bg-light"
                                  style={{ height: 145 }}
                                >
                                  {this.fileData()}
                                </div>
                                <div className="text-right my-1">
                                  <button className="btn btn-sm btn-grd-secondary font-weight-bold text-dark">
                                    Close
                                  </button>
                                </div>
                              </div>
                            </div>
                            {/* )} */}
                          </div>
                        </div>
                      ) : (
                        <div className="table-responsive">
                          <div className="text-right">
                            <button
                              className="btn btn-sm btn-grd-primary font-weight-bold my-1"
                              onClick={() =>
                                this.setState({
                                  customerDetailsForm: true,
                                })
                              }
                            >
                              Add New Customer
                            </button>
                          </div>
                          <table className="table table-hover table-bordered table-striped text-center font-weight-bold">
                            <thead>
                              <tr className="btn-grd-blue-reverse">
                                <th>Sr. No.</th>
                                <th>Customer No.</th>
                                <th>Customer Name</th>
                                <th>Mobile Number</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {this.state.getCustomersArr.map((customer, i) => (
                                <tr key={customer.customerMasterId}>
                                  <td>{i + 1}</td>
                                  <td>{customer.memberNo}</td>
                                  <td>
                                    {customer.firstName +
                                      " " +
                                      customer.lastName}
                                  </td>
                                  <td>{customer.mobileNo}</td>
                                  <td>
                                    <button
                                      className="btn btn-sm btn-grd-primary mr-1"
                                      onClick={() =>
                                        this.editCustomer(
                                          customer.customerMasterId
                                        )
                                      }
                                    >
                                      <i className="fas fa-edit"></i>
                                    </button>
                                    <button
                                      className="btn btn-sm btn-grd-danger"
                                      onClick={() =>
                                        this.deleteCustomer(
                                          customer.customerMasterId
                                        )
                                      }
                                    >
                                      <i className="fas fa-trash"></i>
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
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
