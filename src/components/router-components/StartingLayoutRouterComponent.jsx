import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import LoginComponent from "../common-modules-components/LoginComponent";
import MainLayoutRouterComponent from "./MainLayoutRouterComponent";
import ErrorPage from "../common-template-components/ErrorPage";
import ProtectedRoute from "../router-components/ProtectedRoute";
import { AuthenticatedKey } from "../../Constants/AuthenticatedKey";
import AuthenticationService from "../../Services/authService/AuthenticationService";

export default class StartingLayoutRouterComponent extends Component {
  render() {
     //Below If is Only Responsible for Axios Request Bind Before Requesting any Backend Request.
     if (AuthenticationService.isUserLoggedIn()) {
      console.log("get token return ================>>>   ", sessionStorage.getItem(`${AuthenticatedKey}`));   
      AuthenticationService.requestHeaderBinderOnRefresh();
    }
    return (
      <Router>
        {/* <LoginComponent/> */}
        <Switch>
          <Route exact path="/login">
            <LoginComponent />
          </Route>
          <ProtectedRoute path="/rna">
            <MainLayoutRouterComponent /* i={1} */ />
          </ProtectedRoute>
          <Route path="/">
            <Redirect from="/" to="rna/dashboard" />
          </Route>
          <Route path="*">
            {/* <Redirect from="/" to="dashboard" /> */}
            <Route component={ErrorPage} />
          </Route>
        </Switch>
      </Router>
    );
  }
}
