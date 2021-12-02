import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import DashboardComponent from "../common-modules-components/DashboardComponent";
import HeaderComponent from "../common-template-components/HeaderComponent";
import ScrollToTopComponent from "../common-template-components/ScrollToTopComponent";
import SidebarComponent from "../common-template-components/SidebarComponent";
import TestComponent from "../sample-components/TestComponent";
import CoustomSettingComponent from "../common-template-components/CoustomSettingComponent";
import CompanyMaster from "../views/masters-components/CompanyMaster";
import DistrictMaster from "../views/masters-components/DistrictMaster";
import ModuleMaster from "../views/masters-components/ModuleMaster";
import PinCodeMaster from "../views/masters-components/PinCodeMaster";
import StateMaster from "../views/masters-components/StateMaster";
import TalukaMaster from "../views/masters-components/TalukaMaster";
import MenuMaster from "../views/masters-components/MenuMaster";
import BranchMaster from "../views/masters-components/BranchMaster";
import ListOfBranchMaster from "../views/masters-components/ListOfBranchMaster";
import UserMaster from "../views/masters-components/UserMaster";
import UserRoleMaster from "../views/masters-components/UserRoleMaster";
import CustomerMaster from "../views/masters-components/CustomerMaster";
import DocumentMaster from "../views/masters-components/DocumentMaster";
import DepositAcOpenComponent from "../views/account-opening/DepositAcOpenComponent";
import LoanAcOpenComponent from "../views/account-opening/LoanAcOpenComponent";

import CaseApproval from "../views/Loan/CaseApproval"

import GLMaster from "../views/masters-components/GLMaster";
import ListOfGlMaster from "../views/masters-components/ListOfGlMaster";



class MainLayoutRouterComponent extends Component {
  constructor() {
    super();
    this.state = {
      reload: localStorage.getItem("reload"),
    };
  }

  componentDidMount() {
    console.log("ComponentDidMount : " + this.state.reload);
    if (this.state.reload === "true") {
        console.log("ComponentDidMount If : " + this.state.reload);
        window.location.reload(false);
        localStorage.setItem("reload", false);
    }
  }

  componentWillMount() {
    console.log("ComponentWillMount : " + this.state.reload);
    if (this.state.reload === "true") {
      console.log("ComponentWillMount If : " + this.state.reload);
      window.location.reload(false);
      localStorage.setItem("reload", false);
    }
  }
  /* constructor(props) {
    super(props);
    this.state = {
      iproVal: "",
    };
  }
  componentDidMount() {
    this.setState({ iproVal: this.props.i });
    if (this.state.iproVal === 1) {
      window.location.reload(false);
      this.setState({ iproVal: 0 });
    }
  } */
  render() {
    const { match } = this.props;

    //const {iproVal} = this.props.i;
    //alert(match);
    return (
      <>
        {/* <!-- wrapper Div Starts--> */}
        <div className="wrapper">
          {/* <!--
			Tip 1: You can change the background color of the main header using: data-background-color="blue | purple | light-blue | green | orange | red"
		--> */}

          {/* <!-- main-header Div Starts--> */}
          <HeaderComponent />
          {/* <!-- main-header Div Ends--> */}

          {/* <!-- Sidebar --> */}
          <SidebarComponent />
          {/* <!-- End Sidebar --> */}

          {/* <!-- Dynamic Content Starts --> */}
          <ScrollToTopComponent>
            {/* <!-- Dynamic Content Starts --> */}
            <Switch>
              <Route
                exact
                path={`${match.path}/dashboard`}
                component={DashboardComponent}
              />
              <Route path={`${match.path}/test`} component={TestComponent} />
              {/* <Route path={`${match.path}/forms`}  component={FormSampleComponent} /> */}
              <Route
                path={`${match.path}/moduleMaster`}
                component={ModuleMaster}
              />
              <Route
                path={`${match.path}/pinCodeMaster`}
                component={PinCodeMaster}
              />
              <Route
                path={`${match.path}/districtMaster`}
                component={DistrictMaster}
              />
              <Route
                path={`${match.path}/stateMaster`}
                component={StateMaster}
              />
              <Route
                path={`${match.path}/talukaMaster`}
                component={TalukaMaster}
              />
              <Route
                path={`${match.path}/companyMaster`}
                component={CompanyMaster}
              />
              <Route path={`${match.path}/menuMaster`} component={MenuMaster} />
              <Route
                path={`${match.path}/branchMaster`}
                component={BranchMaster}
              />
              <Route
                path={`${match.path}/listOfBranchMaster`}
                component={ListOfBranchMaster}
              />
              <Route
                path={`${match.path}/updateBranchMaster/:branchId/:flag`}
                component={BranchMaster}
              />
              <Route path={`${match.path}/userMaster`} component={UserMaster} />
              <Route path={`${match.path}/userMaster`} component={UserMaster} />
              <Route
                path={`${match.path}/userRoleMaster`}
                component={UserRoleMaster}
              />
              <Route
                path={`${match.path}/customerMaster`}
                component={CustomerMaster}
              />

              <Route
                path={`${match.path}/documentMaster`}
                component={DocumentMaster}></Route>


              <Route
                path={`${match.path}/depositAcOpening`}
                component={DepositAcOpenComponent}
              />
              <Route
                path={`${match.path}/loanAcOpening`}
                component={LoanAcOpenComponent}

              />
              

              <Route

                path={`${match.path}/caseApproval`}
                component={CaseApproval}

              />
               <Route
                path={`${match.path}/listOfGlMaster`}
                component={ListOfGlMaster} />

              <Route
                path={`${match.path}/glMaster`}
                component={GLMaster}></Route>

              <Route
                path={`${match.path}/updateGlMaster/:glId/:flag`}
                component={GLMaster}
              />
            </Switch>
            {/* <!-- Dynamic Content Ends --> */}
          </ScrollToTopComponent>

          {/* <!-- Dynamic Content Ends --> */}

          {/* <!-- Custom template | don't include it in your project! --> */}
          <CoustomSettingComponent />
          {/* <!-- End Custom template --> */}
        </div>
        {/* <!-- wrapper Div Ends--> */}
      </>
    );
  }
}
export default withRouter(MainLayoutRouterComponent);
