import React, { Component } from "react";
import TalukaService from "../../../Services/masterService/TalukaService";
import Swal from "sweetalert2";
import UserService from "../../../Services/masterService/UserService";
import Select from "react-select";

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

class UserMaster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      userId: "",
      username: "",
      password: "",
      confirmPassword: "",
      mPin: "",
      firstName: "",
      middleName: "",
      lastName: "",
      userMobileNo: "",
      alternateMobileNo: "",
      userEmail: "",
      alternateEmail: "",
      useraddress: "",
      panNo: "",
      aadharCardNo: "",
      userDesignation: "",
      stateId: "",
      stateName: "",
      adcmId: "",
      adcmName: "",
      branchId: [],
      branchName: [],
      usersarray: [],
      stateList: [],
      companylistarray: [],
      Branchlistarray: [],
      updateUserrray: [],
      updateUserArr: "",
      updateUserArr1: "",
      updateUserarrcomp: "",
      updateUserarrcomp1: "",
      companyName: "",
      moduleModList: [],
      finalBranchArray: [],
      checkedCompany: "",
      checkedBranch: "",
      finalArray: [],
      errors: {},
      rol: "",
      customerDetailsForm: false,
      customerDetailsFormEdit: false,
      customerDetailsFormDelete: false,
    };

    this.changeEventHandler = this.changeEventHandler.bind(this);
    this.saveUser = this.saveUser.bind(this);
    this.clear = this.clear.bind(this);
  }

  reRenderPage = () => {
    this.setState({
      // pinCodeId: this.props.match.params.pinCodeId,
      talukaCode: "",
      talukaName: "",
      districtName: "",
      status: "",
      disableFields: false,
      disableFields: false,
    });

    if ($.fn.DataTable.isDataTable("#userTable")) {
      $("#userTable").DataTable().destroy();
    }

    UserService.getUsers().then((resp) => {
      this.setState({ usersarray: resp.data.response });
    //   alert("usersarray List" + JSON.stringify(resp));
    });

    //initialize datatable
    $(() => {
      // $("#pinCodeTable").DataTable().destroy();
      setTimeout(function () {
        $("#userTable").DataTable({
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
    // console.log("Taluka List" + this.state.talukaarray);
  };

  handleValidation = (event) => {
    let errors = {};
    let formIsValid = true;

    if (!this.state.username) {
      formIsValid = false;
      errors["username"] = "User Name Cannot be empty";
    }

    if (!this.state.password) {
      formIsValid = false;
      errors["password"] = "Password Cannot be empty";
    }

    if (!this.state.confirmPassword) {
      formIsValid = false;
      errors["confirmPassword"] = "Confirm Password Cannot be empty";
    }

    if (!this.state.mPin) {
      formIsValid = false;
      errors["mPin"] = "Mpin Cannot be empty";
    } else if (typeof this.state.mPin !== NaN) {
      const numberRegEx = /^[0-9\b]+$/;
      if (!numberRegEx.test(String(this.state.mPin).toLowerCase())) {
        formIsValid = false;
        errors["mPin"] = "Mpin  must contain only numbers";
      }
    }
    // else if (this.state.mPin.length != 6){
    //     formIsValid = false;
    //     errors["mPin"] = "Mpin Must Be 6 Digits";
    // }

    if (!this.state.firstName) {
      formIsValid = false;
      errors["firstName"] = "First Name Cannot be empty";
    } else if (typeof this.state.firstName !== "undefined") {
      if (!this.state.firstName.match(/^[a-zA-Z\s]*$/)) {
        formIsValid = false;
        errors["firstName"] = "First Name must contain only letters";
      }
    }

    if (!this.state.middleName) {
      formIsValid = false;
      errors["middleName"] = "Middle Name Cannot be empty";
    } else if (typeof this.state.middleName !== "undefined") {
      if (!this.state.middleName.match(/^[a-zA-Z\s]*$/)) {
        formIsValid = false;
        errors["middleName"] = "Middle Name must contain only letters";
      }
    }

    if (!this.state.lastName) {
      formIsValid = false;
      errors["lastName"] = "Last Name Cannot be empty";
    } else if (typeof this.state.lastName !== "undefined") {
      if (!this.state.lastName.match(/^[a-zA-Z\s]*$/)) {
        formIsValid = false;
        errors["lastName"] = "Last Name must contain only letters";
      }
    }

    if (!this.state.userMobileNo) {
      formIsValid = false;
      errors["userMobileNo"] = "Mobile Number Cannot be empty";
    } else if (typeof this.state.userMobileNo !== NaN) {
      const numberRegEx = /^[0-9\b]+$/;
      if (!numberRegEx.test(String(this.state.userMobileNo).toLowerCase())) {
        formIsValid = false;
        errors["userMobileNo"] = "Mobile Number  must contain only numbers";
      }
    }

    if (!this.state.alternateMobileNo) {
      formIsValid = false;
      errors["alternateMobileNo"] = "Alternate Mobile Number Cannot be empty";
    } else if (typeof this.state.alternateMobileNo !== NaN) {
      const numberRegEx = /^[0-9\b]+$/;
      if (
        !numberRegEx.test(String(this.state.alternateMobileNo).toLowerCase())
      ) {
        formIsValid = false;
        errors["alternateMobileNo"] =
          "Alternate Mobile Number  must contain only numbers";
      }
    }

    if (!this.state.userEmail) {
      formIsValid = false;
      errors["userEmail"] = "Email Cannot be empty";
    } else if (typeof this.state.userEmail !== NaN) {
      const numberRegEx =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!numberRegEx.test(String(this.state.userEmail).toLowerCase())) {
        formIsValid = false;
        errors["userEmail"] = "Please Check Email Format";
      }
    }

    if (!this.state.alternateEmail) {
      formIsValid = false;
      errors["alternateEmail"] = "Alternate Email Cannot be empty";
    } else if (typeof this.state.alternateEmail !== NaN) {
      const numberRegEx =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!numberRegEx.test(String(this.state.alternateEmail).toLowerCase())) {
        formIsValid = false;
        errors["alternateEmail"] = "Please Check Email Format";
      }
    }

    if (!this.state.useraddress) {
      formIsValid = false;
      errors["useraddress"] = "Address Cannot be empty";
    }

    if (!this.state.stateName || this.state.stateName.length === 0) {
      formIsValid = false;
      errors["stateName"] = "Please Select State ";
    }

    if (!this.state.panNo) {
      formIsValid = false;
      errors["panNo"] = "Pan No. Cannot be empty";
    }

    if (!this.state.aadharCardNo) {
      formIsValid = false;
      errors["aadharCardNo"] = "Aadhar Card Number Cannot be empty";
    } else if (typeof this.state.aadharCardNo !== NaN) {
      const numberRegEx = /^[0-9\b]+$/;
      if (!numberRegEx.test(String(this.state.aadharCardNo).toLowerCase())) {
        formIsValid = false;
        errors["aadharCardNo"] = "Aadhar Card Number must contain only numbers";
      }
    }

    if (!this.state.userDesignation) {
      formIsValid = false;
      errors["userDesignation"] = "User Designation Cannot be empty";
    }
    //  else if (typeof this.state.userDesignation !== NaN) {
    //     const numberRegEx = /^[0-9\b]+$/;
    //     if (!numberRegEx.test(String(this.state.userDesignation).toLowerCase())) {
    //         formIsValid = false;
    //         errors["userDesignation"] = "User Designation Must Be Letters";
    //     }
    // }

    if (!this.state.adcmName || this.state.adcmName.length === 0) {
      formIsValid = false;
      errors["adcmName"] = "Please Select Company ";
    } else {
      formIsValid = true;
      errors["adcmName"] = "";
    }

    if (!this.state.branchName || this.state.branchName.length === 0) {
      formIsValid = false;
      errors["branchName"] = "Please Select Branch ";
    }

    this.setState({ errors: errors });
    return formIsValid;
  };

  clear() {
    this.setState({
      username: "",
      password: "",
      confirmPassword: "",
      mPin: "",
      firstName: "",
      middleName: "",
      lastName: "",
      userMobileNo: "",
      alternateMobileNo: "",
      useraddress: "",
      panNo: "",
      aadharCardNo: "",
      userDesignation: "",
      stateName: "",
      adcmId: "",
      adcmName: "",
      branchName: "",
      branchId: "",
      Branchlistarray: [],

      textValue: "Submit",
      saveForm: "Save",
      errors: "",
    });
    if ($.fn.DataTable.isDataTable("#userTable")) {
      $("#userTable").DataTable().destroy();
    }

    UserService.getUsers().then((resp) => {
      this.setState({ usersarray: resp.data.response });
    });
  }

  saveUser = (e) => {
    e.preventDefault();

    var branchmst = [];
    var selectedbranches = [];
    var userbranchList =[];
    for (var option of document.getElementById("branchName").options) {
      if (option.selected) {
        selectedbranches.push(option.value);
      }
      if (option.selected) {
        // let subModule = {
        //   selectBranchId: option.value,
        // };
      var  branchList =
            {
              userBranchId: null,
              selectBranchId: option.value,
              status: false,
            };
        userbranchList.push(branchList);
        // branchmst.push(subModule);
      }
    }
    // alert("Branch Ids" + JSON.stringify(branchmst));

    let user = {
      //     userId: 1,
      username: this.state.username,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      mpin: this.state.mPin,
      firstName: this.state.firstName,
      middleName: this.state.middleName,
      lastName: this.state.lastName,
      userMobileNo: this.state.userMobileNo,
      alternateMobileNo: this.state.alternateMobileNo,
      userEmail: this.state.userEmail,
      alternateEmail: this.state.alternateEmail,
      useraddress: this.state.useraddress,
      panNo: this.state.panNo,
      aadharCardNo: this.state.aadharCardNo,
      userDesignation: this.state.userDesignation,
      rol: "Admin",
      stateId: this.state.stateName,
      userCompany: {
        userCompanyId: null,
        selectedCompanyId: this.state.adcmId,
        status: false,
        userbranchList: userbranchList
      },
    };
    this.setState({ saveForm: "Save" });
    console.log("USER INPUT DATA  => " + user);
    console.log("Save Data  => " + JSON.stringify(user));

    const isValid = this.handleValidation();
    // alert("Validation Msg" + isValid);
    if (isValid) {
      UserService.createUser(user).then(
        (res) => {
          let msg = res.data.message;
          let code = res.data.code;
          if (code === 100) {
            Swal.fire({
              title: "Oops...",
              text: msg,
              icon: "error",
            });
          } else if (code === 200) {
            Swal.fire({
              title: "Good job!",
              text: msg,
              icon: "success",
            });
          }
          // this.fetchData();
          this.reRenderPage();
          this.clear();
        },
        (error) => {
          console.log("Response ====>> " + error);
        }
      );
    }
  };

  editUser = (e, userId) => {
    alert("editUser");
    e.preventDefault();
    // 1) for fetching User By Id Data
    UserService.getUser(userId).then((resp) => {
      this.setState({ updateUserarr: resp.data.response });
      let updateUserArr1 = resp.data.response;

      this.setState({
        userId: updateUserArr1.userId,
        username: updateUserArr1.username,
        password: updateUserArr1.password,
        confirmPassword: updateUserArr1.confirmPassword,
        mPin: updateUserArr1.mpin,
        firstName: updateUserArr1.firstName,
        middleName: updateUserArr1.middleName,
        lastName: updateUserArr1.lastName,
        userMobileNo: updateUserArr1.userMobileNo,
        alternateMobileNo: updateUserArr1.alternateMobileNo,
        userEmail: updateUserArr1.userEmail,
        alternateEmail: updateUserArr1.alternateEmail,
        useraddress: updateUserArr1.useraddress,
        stateName: updateUserArr1.state,
        panNo: updateUserArr1.panNo,
        aadharCardNo: updateUserArr1.aadharCardNo,
        userDesignation: updateUserArr1.userDesignation,
        adcmName: updateUserArr1.adCompanyMst.adcmId,
        branchName: updateUserArr1.branchId,
      });

      alert("branchName" + JSON.stringify(updateUserArr1.branchId));

      UserService.getBranchByCompId(updateUserArr1.adCompanyMst.adcmId).then(
        (resp) => {
          this.setState({ Branchlistarray: resp.data.response });
        }
      );
      this.setState({ saveForm: "Update" });
      console.log(
        "Users Details To Be Edited => " + JSON.stringify(updateUserArr1)
      );

      console.log("userId            : " + this.state.userId);
      console.log("username          : " + this.state.username);
      console.log("password          : " + this.state.password);
      console.log("confirmPassword   : " + this.state.confirmPassword);
      console.log("mpin              : " + this.state.mPin);
      console.log("firstName         : " + this.state.firstName);
      console.log("middleName        : " + this.state.middleName);
      console.log("lastName          : " + this.state.lastName);
      console.log("userMobileNo      : " + this.state.userMobileNo);
      console.log("alternateMobileNo : " + this.state.alternateMobileNo);
      console.log("userEmail         : " + this.state.userEmail);
      console.log("alternateEmail    : " + this.state.alternateEmail);
      console.log("useraddress       : " + this.state.useraddress);
      console.log("panNo             : " + this.state.panNo);
      console.log("aadharCardNo      : " + this.state.aadharCardNo);
      console.log("userDesignation   : " + this.state.userDesignation);
      console.log("stateId           : " + this.state.stateId);
      console.log("stateName         : " + this.state.stateName);
      console.log("adcmId            : " + this.state.adcmId);
      console.log("companyName          : " + this.state.adcmName);
      console.log("branchId          : " + this.state.branchId);
      console.log("branchName        : " + this.state.branchName);
      console.log("usersarray        : " + this.state.usersarray);
      console.log("stateList         : " + this.state.stateList);
      // console.log("state         : " + this.state.state);
    });
  };

  editDeleteUser = (e, userId) => {
    alert("editDeleteUser" + userId);
    e.preventDefault();
    UserService.getUser(userId).then((resp) => {
      this.setState({ updateUserArr: resp.data.response });
      let updateUserArr1 = resp.data.response;
      this.setState({
        userId: updateUserArr1.userId,
        username: updateUserArr1.username,
        password: updateUserArr1.password,
        confirmPassword: updateUserArr1.confirmPassword,
        mPin: updateUserArr1.mpin,
        firstName: updateUserArr1.firstName,
        middleName: updateUserArr1.middleName,
        lastName: updateUserArr1.lastName,
        userMobileNo: updateUserArr1.userMobileNo,
        alternateMobileNo: updateUserArr1.alternateMobileNo,
        userEmail: updateUserArr1.userEmail,
        alternateEmail: updateUserArr1.alternateEmail,
        useraddress: updateUserArr1.useraddress,
        panNo: updateUserArr1.panNo,
        aadharCardNo: updateUserArr1.aadharCardNo,
        userDesignation: updateUserArr1.userDesignation,
        stateName: {
          stateId: updateUserArr1.stateName,
        },
        companylist: [
          {
            adcmId: updateUserArr1.adcmName,

            branchmst: [
              {
                branchId: updateUserArr1.branchName,
              },
            ],
          },
        ],
      });
      this.setState({ saveForm: "Delete" });
      console.log(
        "User Details To Be Deleted => " + JSON.stringify(updateUserArr1)
      );
      console.log("userId            : " + this.state.userId);
      console.log("username          : " + this.state.username);
      console.log("password          : " + this.state.password);
      console.log("confirmPassword   : " + this.state.confirmPassword);
      console.log("mpin              : " + this.state.mPin);
      console.log("firstName         : " + this.state.firstName);
      console.log("middleName        : " + this.state.middleName);
      console.log("lastName          : " + this.state.lastName);
      console.log("userMobileNo      : " + this.state.userMobileNo);
      console.log("alternateMobileNo : " + this.state.alternateMobileNo);
      console.log("userEmail         : " + this.state.userEmail);
      console.log("alternateEmail    : " + this.state.alternateEmail);
      console.log("useraddress       : " + this.state.useraddress);
      console.log("panNo             : " + this.state.panNo);
      console.log("aadharCardNo      : " + this.state.aadharCardNo);
      console.log("userDesignation   : " + this.state.userDesignation);
      console.log("stateId           : " + this.state.userId);
      console.log("stateName         : " + this.state.stateName);
      console.log("adcmId            : " + this.state.adcmId);
      console.log("adcmName          : " + this.state.adcmName);
      console.log("branchId          : " + this.state.branchId);
      console.log("branchName        : " + this.state.branchName);
      console.log("usersarray        : " + this.state.usersarray);
      console.log("stateList         : " + this.state.stateList);
    });
  };

  updateUser = (e) => {
    // if (this.state.username.length === 0 ||
    //     this.state.password.length === 0 ||
    //     this.state.confirmPassword.length === 0 ||
    //     this.state.mpin.length === 0 ||
    //     this.state.firstName.length === 0 ||
    //     this.state.middleName.length === 0 ||
    //     this.state.lastName.length === 0 ||
    //     this.state.userMobileNo.length === 0 ||
    //     this.state.alternateMobileNo.length === 0 ||
    //     this.state.userEmail.length === 0 ||
    //     this.state.alternateEmail.length === 0 ||
    //     this.state.useraddress.length === 0 ||
    //     this.state.panNo.length === 0 ||
    //     this.state.aadharCardNo.length === 0 ||
    //     this.state.userDesignation.length === 0 ||
    //     this.state.stateName.length === 0 ||
    //     this.state.companyName.length === 0 ||
    //     this.state.branchName.length === 0) {
    //     Swal.fire({
    //         title: "Oops...",
    //         text: 'Fill All The Fields',
    //         icon: "error",
    //     });
    // }
    // else {

    e.preventDefault();
    var branchmst = [];
    var selectedbranches = [];
    for (var option of document.getElementById("branchName").options) {
      if (option.selected) {
        selectedbranches.push(option.value);
      }
      if (option.selected) {
        let subModule = {
          branchId: option.value,
        };
        branchmst.push(subModule);
      }
    }

    let updateUser = {
      userId: this.state.userId,
      username: this.state.username,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      mPin: this.state.mPin,
      firstName: this.state.password,
      middleName: this.state.middleName,
      lastName: this.state.lastName,
      userMobileNo: this.state.userMobileNo,
      alternateMobileNo: this.state.alternateMobileNo,
      userEmail: this.state.userEmail,
      alternateEmail: this.state.userMobileNo,
      useraddress: this.state.useraddress,
      panNo: this.state.panNo,
      aadharCardNo: this.state.aadharCardNo,
      userDesignation: this.state.userDesignation,

      stateName: {
        stateId: this.state.stateName,
      },
      companylist: [
        {
          adcmId: this.state.adcmName,
          branchmst: branchmst,
        },
      ],
    };
    console.log("User Update => " + JSON.stringify(updateUser));
    UserService.updateUser(updateUser, this.state.userId).then(
      (res) => {
        console.log("User Data Updated Successfully");
        let msg = res.data.message;
        let code = res.data.code;
        if (code === 100) {
          Swal.fire({
            title: "Oops...",
            text: msg,
            icon: "error",
          });
        } else if (code === 200) {
          Swal.fire({
            title: "Good job!",
            text: msg,
            icon: "success",
          });
        }
        this.reRenderPage();
      },
      (error) => {
        console.log("Response ====>> " + error);
      }
    );
  };
  // }

  deleteUser = (e) => {
    // if (this.state.username.length === 0 ||
    //     this.state.password.length === 0 ||
    //     this.state.confirmPassword.length === 0 ||
    //     this.state.mPin.length === 0 ||
    //     this.state.firstName.length === 0 ||
    //     this.state.middleName.length === 0 ||
    //     this.state.lastName.length === 0 ||
    //     this.state.userMobileNo.length === 0 ||
    //     this.state.alternateMobileNo.length === 0 ||
    //     this.state.userEmail.length === 0 ||
    //     this.state.alternateEmail.length === 0 ||
    //     this.state.useraddress.length === 0 ||
    //     this.state.panNo.length === 0 ||
    //     this.state.aadharCardNo.length === 0 ||
    //     this.state.userDesignation.length === 0 ||
    //     this.state.stateName.length === 0 ||
    //     this.state.adcmName.length === 0 ||
    //     this.state.branchName.length === 0) {
    //     Swal.fire({
    //         title: "Oops...",
    //         text: 'Fill All The Fields',
    //         icon: "error",
    //     });
    // }
    // else {
    e.preventDefault();
    let deleteUserObj = {
      userId: this.state.userId,
      username: this.state.username,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      mPin: this.state.mPin,
      firstName: this.state.password,
      middleName: this.state.middleName,
      lastName: this.state.lastName,
      userMobileNo: this.state.userMobileNo,
      alternateMobileNo: this.state.alternateMobileNo,
      userEmail: this.state.userEmail,
      alternateEmail: this.state.userMobileNo,
      useraddress: this.state.useraddress,
      panNo: this.state.panNo,
      aadharCardNo: this.state.aadharCardNo,
      userDesignation: this.state.userDesignation,
      stateName: {
        stateId: "245",
      },
      companylist: [
        {
          adcmId: this.state.adcmName,
          branchmst: [
            {
              branchId: this.state.branchName,
            },
          ],
        },
      ],
    };
    console.log("User Update => " + JSON.stringify(deleteUserObj));
    UserService.deleteUser(this.state.userId).then(
      (res) => {
        console.log("User Data Deleted Successfully");
        let msg = res.data.message;
        let code = res.data.code;
        if (code === 100) {
          Swal.fire({
            title: "Oops...",
            text: msg,
            icon: "error",
          });
        } else if (code === 200) {
          Swal.fire({
            title: "Good job!",
            text: msg,
            icon: "success",
          });
        }
        // this.fetchData();
        this.reRenderPage();
      },
      (error) => {
        console.log("Response ====>> " + error);
      }
    );
  };
  // }

  componentDidMount() {
    UserService.getUsers().then((resp) => {
      this.setState({ usersarray: resp.data.response });
    });
    this.fetchData();
    UserService.getStateData().then((res) => {
      console.log("State List : " + res);
      this.setState({ stateList: res.data.response });
    });
  }

  selectCompany = (val) => {
    UserService.getBranchByCompId(val.value).then((resp) => {
      this.setState({ Branchlistarray: resp.data.response });
    });
    this.setState({ adcmId: val.value, adcmName: val.label }, () => {
      console.log("label : " + val.label + " value : " + val.value);
      console.log("adcmId : " + this.state.adcmId);
      console.log("adcmName : " + this.state.adcmName);
    });
  };

  fetchData() {
    UserService.getUsers().then((resp) => {
      this.setState({ usersarray: resp.data.response });
    });
    console.log("Users List" + this.state.usersarray);
    this.setState({ saveForm: "Save" });
    $(() => {
      setTimeout(function () {
        $("#userTable").DataTable({
          lengthMenu: [
            [5, 10, 25, 50, -1],
            [5, 10, 25, 50, "All"],
          ],
          pageLength: 5,
        });
      }, 1000);
    });

    UserService.getCompanyList().then((resp) => {
      this.setState({ companylistarray: resp.data.response });
    });
  }

  changeEventHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
    // console.log("adcmId : " + this.state.adcmId);
    // console.log("branchId : " + this.state.branchId);
  };

  companyCheck = (adcmId) => {
    this.setState({ checkedCompany: adcmId });
    console.log("adcmId : " + this.state.adcmId);
  };

  branchCheck = (branchId) => {
    this.setState({ checkedBranch: branchId });
    console.log("branchId : " + this.state.branchId);
  };

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
                      <div className="d-inline">
                        <h4 className="text-primary f-w-600 m-auto">
                          User Creation
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="page-body">
                <div className="row">
                  <div className="col-md-12 col-xl-12">
                    <div className="card p-4">
                      <div className="d-inline">
                        <h4>User Registration List</h4>
                      </div>
                      <div className="card-header">
                        <div className="card-header-right">
                          {" "}
                          <ul className="list-unstyled card-option">
                            {" "}
                            <li>
                              <i className="icofont icofont-simple-left "></i>
                            </li>{" "}
                            <li>
                              <i className="icofont icofont-maximize full-card"></i>
                            </li>{" "}
                            <li>
                              <i className="icofont icofont-minus minimize-card"></i>
                            </li>{" "}
                            <li>
                              <i className="icofont icofont-refresh reload-card"></i>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="card-block table-border-style">
                        <div className="table-responsive">
                          <table
                            id="userTable"
                            className="table table-hover table-bordered table-striped text-center font-weight-bold"
                          >
                            <thead>
                              <tr className="btn-grd-blue-reverse">
                                <th>User Name</th>
                                <th>User Phone No.</th>
                                <th>User Designation</th>
                                <th>Email</th>
                                <th>PAN</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {this.state.usersarray.map((users) => (
                                <tr>
                                  <td>{users.username}</td>
                                  <td>{users.userMobileNo}</td>
                                  <td>{users.userDesignation}</td>
                                  <td>{users.userEmail}</td>
                                  <td>{users.panNo}</td>
                                  <td className="text-center">
                                    <button
                                      onClick={(e) =>
                                        this.editUser(e, users.userId)
                                      }
                                      className="btn btn-xs btn-grd-primary m-1"
                                    >
                                      <i className="fas fa-edit"></i>
                                    </button>
                                    <button
                                      onClick={(e) =>
                                        this.editDeleteUser(e, users.userId)
                                      }
                                      className="btn btn-xs btn-grd-danger m-1"
                                    >
                                      {" "}
                                      <i className="fas fa-trash"></i>
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="d-inline mt-3">
                        <h4 style={{ color: "#FF0000" }}>
                          Note : * Fields are Mandatory.
                        </h4>
                      </div>
                      <div className="d-inline mt-3">
                        <h4>User Login Details</h4>
                      </div>

                      <div className="form-group">
                        <input
                          type="hidden"
                          name="userId"
                          className="form-control"
                          value={this.state.userId}
                          onChange={this.changeEventHandler}
                        />
                      </div>
                      <div className="row">
                        <div className="col-md-3">
                          <label for="exampleInputEmail1" class="form-label">
                            User Name &nbsp;
                          </label>
                          <label className="text-danger">*</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter User Name"
                            name="username"
                            value={this.state.username}
                            onChange={this.changeEventHandler}
                          />
                          <span style={{ color: "red" }}>
                            {this.state.errors["username"]}
                          </span>
                        </div>

                        <div className="col-md-3">
                          <label for="exampleInputEmail1" class="form-label">
                            Login Password &nbsp;
                          </label>
                          <label className="text-danger">*</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Login Password"
                            name="password"
                            value={this.state.password}
                            onChange={this.changeEventHandler}
                          />
                          <span style={{ color: "red" }}>
                            {this.state.errors["password"]}
                          </span>
                        </div>

                        <div className="col-md-3">
                          <label for="exampleInputEmail1" class="form-label">
                            Login Confirm Password &nbsp;
                          </label>
                          <label className="text-danger">*</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Login Confirm Password"
                            name="confirmPassword"
                            value={this.state.confirmPassword}
                            onChange={this.changeEventHandler}
                          />
                          <span style={{ color: "red" }}>
                            {this.state.errors["confirmPassword"]}
                          </span>
                        </div>
                      </div>

                      <div className="d-inline mt-3">
                        <h4>MPIN Details</h4>
                      </div>
                      <div className="row">
                        <div className="col-md-3">
                          <label for="exampleInputEmail1" class="form-label">
                            MPIN &nbsp;
                          </label>
                          <label className="text-danger">*</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter mPin"
                            name="mPin"
                            maxLength={6}
                            minLength={6}
                            value={this.state.mPin}
                            onChange={this.changeEventHandler}
                          />
                          <span style={{ color: "red" }}>
                            {this.state.errors["mPin"]}
                          </span>
                        </div>
                      </div>

                      <div className="d-inline mt-3">
                        <h4>User Basic Details</h4>
                      </div>
                      <div className="row">
                        <div className="col-md-3">
                          <label for="exampleInputEmail1" class="form-label">
                            First Name &nbsp;
                          </label>
                          <label className="text-danger">*</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter First Name"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.changeEventHandler}
                          />
                          <span style={{ color: "red" }}>
                            {this.state.errors["firstName"]}
                          </span>
                        </div>
                        <div className="col-md-3">
                          <label for="exampleInputEmail1" class="form-label">
                            Middle Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Middle Name"
                            name="middleName"
                            value={this.state.middleName}
                            onChange={this.changeEventHandler}
                          />
                          <span style={{ color: "red" }}>
                            {this.state.errors["middleName"]}
                          </span>
                        </div>
                        <div className="col-md-3">
                          <label for="exampleInputEmail1" class="form-label">
                            Last Name &nbsp;
                          </label>
                          <label className="text-danger">*</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Last Name"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.changeEventHandler}
                          />
                          <span style={{ color: "red" }}>
                            {this.state.errors["lastName"]}
                          </span>
                        </div>
                      </div>

                      <div className="d-inline mt-3">
                        <h4>User Contact Details</h4>
                      </div>
                      <div className="row">
                        <div className="col-md-3">
                          <label for="exampleInputEmail1" class="form-label">
                            Mobile No. &nbsp;
                          </label>
                          <label className="text-danger">*</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Mobile No."
                            name="userMobileNo"
                            maxLength={10}
                            minLength={10}
                            value={this.state.userMobileNo}
                            onChange={this.changeEventHandler}
                          />
                          <span style={{ color: "red" }}>
                            {this.state.errors["userMobileNo"]}
                          </span>
                        </div>
                        <div className="col-md-3">
                          <label for="exampleInputEmail1" class="form-label">
                            Mobile No. 2
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Mobile No. 2"
                            name="alternateMobileNo"
                            maxLength={10}
                            minLength={10}
                            value={this.state.alternateMobileNo}
                            onChange={this.changeEventHandler}
                          />
                          <span style={{ color: "red" }}>
                            {this.state.errors["alternateMobileNo"]}
                          </span>
                        </div>
                        <div className="col-md-3">
                          <label for="exampleInputEmail1" class="form-label">
                            Email
                          </label>

                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Email"
                            name="userEmail"
                            value={this.state.userEmail}
                            onChange={this.changeEventHandler}
                          />
                          <span style={{ color: "red" }}>
                            {this.state.errors["userEmail"]}
                          </span>
                        </div>
                        <div className="col-md-3">
                          <label for="exampleInputEmail1" class="form-label">
                            Alternate Email
                          </label>

                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Alternate Email"
                            name="alternateEmail"
                            value={this.state.alternateEmail}
                            onChange={this.changeEventHandler}
                          />
                          <span style={{ color: "red" }}>
                            {this.state.errors["alternateEmail"]}
                          </span>
                        </div>
                      </div>

                      <div className="d-inline mt-3">
                        <h4>Address</h4>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <textarea
                            class="form-control"
                            value={this.state.useraddress}
                            onChange={this.changeEventHandler}
                            name="useraddress"
                            rows="3"
                          ></textarea>
                          <span style={{ color: "red" }}>
                            {this.state.errors["useraddress"]}
                          </span>
                        </div>
                      </div>

                      <div className="row pt-3">
                        <div className="col-md-3">
                          <label for="exampleInputEmail1" class="form-label">
                            State &nbsp;
                          </label>
                          <label className="text-danger">*</label>
                          <select
                            name="stateName"
                            value={this.state.stateName}
                            className="form-control"
                            onChange={this.changeEventHandler}
                          >
                            <option value="">Select</option>
                            {this.state.stateList.map((r) => (
                              <option key={r.stateId} value={r.stateId}>
                                {r.stateName}
                              </option>
                            ))}
                          </select>
                          <span style={{ color: "red" }}>
                            {this.state.errors["stateName"]}
                          </span>
                        </div>
                        <div className="col-md-3">
                          <label for="exampleInputEmail1" class="form-label">
                            PAN &nbsp;
                          </label>
                          <label className="text-danger">*</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter PAN No."
                            maxLength={10}
                            minLength={10}
                            name="panNo"
                            value={this.state.panNo}
                            onChange={this.changeEventHandler}
                          />
                          <span style={{ color: "red" }}>
                            {this.state.errors["panNo"]}
                          </span>
                        </div>
                        <div className="col-md-3">
                          <label for="exampleInputEmail1" class="form-label">
                            Aadhaar No.
                          </label>

                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Aadhaar No."
                            maxLength={12}
                            minLength={12}
                            name="aadharCardNo"
                            value={this.state.aadharCardNo}
                            onChange={this.changeEventHandler}
                          />
                          <span style={{ color: "red" }}>
                            {this.state.errors["aadharCardNo"]}
                          </span>
                        </div>
                        <div className="col-md-3">
                          <label for="exampleInputEmail1" class="form-label">
                            User Designation
                          </label>

                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter User Designation"
                            name="userDesignation"
                            value={this.state.userDesignation}
                            onChange={this.changeEventHandler}
                          />
                          <span style={{ color: "red" }}>
                            {this.state.errors["userDesignation"]}
                          </span>
                        </div>
                      </div>

                      <div className="d-inline mt-3">
                        <label for="exampleInputEmail1" class="form-label">
                          Company List &nbsp;
                        </label>
                        <label className="text-danger">*</label>
                      </div>
                      <div className="row">
                        <div className="col-md-6 col-sm-6">
                          <Select
                            name="adcmName"
                            value={this.state.adcmName}
                            options={this.state.companylistarray.map((r) => ({
                              value: r.adcmId,
                              label: r.adcmName,
                            }))}
                            onChange={this.selectCompany}
                            placeholder={
                              this.state.adcmName
                                ? this.state.adcmName
                                : "Select Company"
                            }
                          />

                          {/* <select
                            name="adcmName"
                            className="custom-select"
                            size="4"
                            aria-label="size 6 select example"
                            onChange={this.selectCompany}
                          >
                            <option disabled>Select Company</option>
                            {this.state.companylistarray.map((r) => (
                              <option key={r.adcmId} value={r.adcmId}>
                                {r.adcmName}
                              </option>
                            ))}
                          </select> */}
                          <span style={{ color: "red" }}>
                            {this.state.errors["adcmName"]}
                          </span>
                        </div>
                      </div>

                      <div className="d-inline mt-3">
                        <label for="exampleInputEmail1" class="form-label">
                          Branch List &nbsp;
                        </label>
                        <label className="text-danger">*</label>
                      </div>
                      <div className="row">
                        <div className="col-md-6 col-sm-6">
                          {/* <Select options={this.state.Branchlistarray.map(r => ({ value: r.branchId, label: r.branchName }))}
                                                         isMulti /> */}
                          {/* <Select
                            name="adcmName"
                            value={this.state.branchName}
                            options={this.state.Branchlistarray.map((r) => ({
                              value: r.branchId,
                              label: r.branchName,
                            }))}
                            placeholder={
                              this.state.branchName
                                ? this.state.branchName
                                : "Select Branch"
                            }
                            isMulti
                          /> */}
                          <select
                            name="branchName"
                            id="branchName"
                            className="custom-select"
                            aria-label="size 6 select example"
                            onChange={this.changeEventHandler}
                            multiple
                          >
                            <option disabled>Select Branch</option>
                            {this.state.Branchlistarray.map((B) => (
                              <option key={B.branchId} value={B.branchId}>
                                {B.branchName}
                              </option>
                            ))}
                            placeholder=
                            {this.state.branchName
                              ? this.state.branchName
                              : "Select Branch"}
                          </select>
                          <span style={{ color: "red" }}>
                            {this.state.errors["branchName"]}
                          </span>
                        </div>
                      </div>
                      {/* <div className="row">
                                                <div className="col-md-6 col-sm-6"> 
                                                    <select name="branchName" id="adcmName" className="custom-select" size="4"
                                                        aria-label="size 6 select example" onChange={this.changeEventHandler} multiple>
                                                        <option disabled>Select Branch</option>
                                                        {
                                                            this.state.Branchlistarray.map(r =>
                                                                <option  value={this.state.branchName} key={r.branchId} value={r.branchId}>
                                                                            {r.branchName}
                                                                </option>
                                                            )
                                                        }
                                                    </select>
                                                </div>
                                            </div> */}

                      <div className="row pt-3">
                        <div className="col-md-1">
                          <button
                            className="btn btn-sm btn-grd-primary mx-3"
                            onClick={
                              this.state.saveForm === "Save"
                                ? this.saveUser
                                : this.state.saveForm === "Update"
                                ? (e) => this.updateUser(e)
                                : (e) => this.deleteUser(e)
                            }
                          >
                            {this.state.saveForm === "Save"
                              ? "Submit"
                              : this.state.saveForm === "Update"
                              ? "Update"
                              : "Delete"}
                          </button>
                        </div>
                        <div className="col-md-1">
                          <button
                            className="btn btn-sm btn-grd-danger px-3"
                            onClick={this.clear}
                          >
                            Cancel
                          </button>{" "}
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

export default UserMaster;
