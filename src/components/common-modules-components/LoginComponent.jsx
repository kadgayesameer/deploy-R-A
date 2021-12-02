import React, { Component, createRef } from "react";
import { Redirect } from "react-router-dom";
import AuthenticationService from "../../Services/authService/AuthenticationService";
import "../../Assets-Components/LoginCss/Login.css";
import BackgroundImage from "../../Assets-Components/images/officeLoginBackground.jpg";
import { AuthenticatedKey } from "../../Constants/AuthenticatedKey";
import LoginService from "../../Services/common-services/LoginService";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogged: false,
      username: "",
      password: "",
      mPin: "",
      mpinPass: true,
      hasLoginFailed: false,
      showSuccessMessage: false,
    };

    this.username = createRef();
    // this.password = createRef();
    this.usernameSignIn = createRef();

    this.mpin1 = createRef();
    this.mpin2 = createRef();
    this.mpin3 = createRef();
    this.mpin4 = createRef();
    this.mpin5 = createRef();
    this.mpin6 = createRef();
    this.mpinSignIn = createRef();
  }

  getMessage = () => {
    LoginService.welcomeMsg(); // Authorized Request is Not Called B'coz We Did'nt have Access Of Token.
    // &
    // UnAuthorized Request is Called B'coz We Did'nt need Access Of Token.(Free Request)
  };

  changeEventHandler = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  login = (event) => {
    AuthenticationService.executeJwtAuthenticationService(
      this.state.username,
      this.state.password,
      this.state.mPin
    )
      .then((response) => {
        AuthenticationService.registerSuccessfulLoginForJwt(
          this.state.username,
          response.data.token
        );
        this.setState({
          islogged: true,
        });
      })
      .catch(() => {
        this.setState({ showSuccessMessage: false });
        this.setState({ hasLoginFailed: true });
      });
    event.preventDefault();
  };

  componentDidMount() {
    this.inputFocus();
    //     const script = document.createElement("script");
    //     // <script src="js/main.js"></script>
    //     script.src = "./Assets-Components/js/main.js";
    //     script.async = true;
    //     document.body.appendChild(script);
  }

  componentDidUpdate() {
    this.inputFocus();
  }

  inputFocus = () => {
    if (this.state.mpinPass === false) {
      this.mpin1.current.focus();
      this.mpin1.current.classList.add("border", "border-danger");
    } else {
      if (this.state.username.length === 0) this.username.current.focus();
    }
  };

  toggleLogin = () => {
    this.setState({ mpinPass: !this.state.mpinPass });

    /* this.state.mpinPass === false
      ? alert(this.state.mpinPass)
      : alert(this.state.mpinPass); */

    /* this.state.mpinPass === false
      ? this.mpin1.current.focus()
      : this.username.current.focus(); */
  };

  focusField = (e) => {
    const id = e.target.id;
    // const value = e.target.value;
    if (id === "mpin1") {
      this.mpin1.current.classList.add("border", "border-danger");
      this.mpin2.current.classList.remove("border", "border-danger");
      this.mpin3.current.classList.remove("border", "border-danger");
      this.mpin4.current.classList.remove("border", "border-danger");
      this.mpin5.current.classList.remove("border", "border-danger");
      this.mpin6.current.classList.remove("border", "border-danger");
    } else if (id === "mpin2") {
      this.mpin1.current.classList.remove("border", "border-danger");
      this.mpin2.current.classList.add("border", "border-danger");
      this.mpin3.current.classList.remove("border", "border-danger");
      this.mpin4.current.classList.remove("border", "border-danger");
      this.mpin5.current.classList.remove("border", "border-danger");
      this.mpin6.current.classList.remove("border", "border-danger");
    } else if (id === "mpin3") {
      this.mpin1.current.classList.remove("border", "border-danger");
      this.mpin2.current.classList.remove("border", "border-danger");
      this.mpin3.current.classList.add("border", "border-danger");
      this.mpin4.current.classList.remove("border", "border-danger");
      this.mpin5.current.classList.remove("border", "border-danger");
      this.mpin6.current.classList.remove("border", "border-danger");
    } else if (id === "mpin4") {
      this.mpin1.current.classList.remove("border", "border-danger");
      this.mpin2.current.classList.remove("border", "border-danger");
      this.mpin3.current.classList.remove("border", "border-danger");
      this.mpin4.current.classList.add("border", "border-danger");
      this.mpin5.current.classList.remove("border", "border-danger");
      this.mpin6.current.classList.remove("border", "border-danger");
    } else if (id === "mpin5") {
      this.mpin1.current.classList.remove("border", "border-danger");
      this.mpin2.current.classList.remove("border", "border-danger");
      this.mpin3.current.classList.remove("border", "border-danger");
      this.mpin4.current.classList.remove("border", "border-danger");
      this.mpin5.current.classList.add("border", "border-danger");
      this.mpin6.current.classList.remove("border", "border-danger");
    } else if (id === "mpin6") {
      this.mpin1.current.classList.remove("border", "border-danger");
      this.mpin2.current.classList.remove("border", "border-danger");
      this.mpin3.current.classList.remove("border", "border-danger");
      this.mpin4.current.classList.remove("border", "border-danger");
      this.mpin5.current.classList.remove("border", "border-danger");
      this.mpin6.current.classList.add("border", "border-danger");
    }
  };

  nextMPin = (e) => {
    // alert(e.target.id);
    const id = e.target.id;
    const value = e.target.value;
    // alert(value.length);
    if (this.state.mpinPass === false) {
      if (!Number(value)) {
      } else if (Number(value) && value.length === 1) {
        if (id === "mpin1") {
          this.mpin1.current.classList.remove("border", "border-danger");
          this.mpin2.current.focus();
          this.mpin2.current.classList.add("border", "border-danger");
        } else if (id === "mpin2") {
          this.mpin2.current.classList.remove("border", "border-danger");
          this.mpin3.current.focus();
          this.mpin3.current.classList.add("border", "border-danger");
        } else if (id === "mpin3") {
          this.mpin3.current.classList.remove("border", "border-danger");
          this.mpin4.current.focus();
          this.mpin4.current.classList.add("border", "border-danger");
        } else if (id === "mpin4") {
          this.mpin4.current.classList.remove("border", "border-danger");
          this.mpin5.current.focus();
          this.mpin5.current.classList.add("border", "border-danger");
        } else if (id === "mpin5") {
          this.mpin5.current.classList.remove("border", "border-danger");
          this.mpin6.current.focus();
          this.mpin6.current.classList.add("border", "border-danger");
        } else if (id === "mpin6") {
          this.mpin6.current.classList.remove("border", "border-danger");
          this.mpinSignIn.current.focus();
        }
      } else if (value.length === 0) {
        if (id === "mpin6") {
          this.mpin6.current.classList.remove("border", "border-danger");
          this.mpin5.current.focus();
          this.mpin5.current.classList.add("border", "border-danger");
        } else if (id === "mpin5") {
          this.mpin5.current.classList.remove("border", "border-danger");
          this.mpin4.current.focus();
          this.mpin4.current.classList.add("border", "border-danger");
        } else if (id === "mpin4") {
          this.mpin4.current.classList.remove("border", "border-danger");
          this.mpin3.current.focus();
          this.mpin3.current.classList.add("border", "border-danger");
        } else if (id === "mpin3") {
          this.mpin3.current.classList.remove("border", "border-danger");
          this.mpin2.current.focus();
          this.mpin2.current.classList.add("border", "border-danger");
        } else if (id === "mpin2") {
          this.mpin2.current.classList.remove("border", "border-danger");
          this.mpin1.current.focus();
          this.mpin1.current.classList.add("border", "border-danger");
        }
      }
    }
  };

  render() {
    if (sessionStorage.getItem(`${AuthenticatedKey}`)) {
      // console.log("get token return ================>>>   ", localStorage.getItem("authenticatedUser"));
      localStorage.setItem("reload", true);
      return <Redirect to="/" />;
    }
    return (
      <>
        <div
          className="login"
          style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
          {/* <div className="login"> */}
          <div className="wrapper wrapper-login">
            {/* <div className="container container-login animated fadeIn" style={{ background: '#82A6FD' }}> */}
            <div
              className="container container-login animated fadeIn"
              style={{
                background: "linear-gradient(45deg, black, transparent)",
              }}
            >
              <div className="text-right my-3">
                <div className="toggle-switch">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="Login"
                    id="Login"
                    onClick={() => this.toggleLogin()}
                  />
                  <label className="label" htmlFor="Login">
                    <span className="inner" />
                    <span className="switch" />
                  </label>
                </div>
              </div>

              <h3 className="text-center text-white">LOGIN</h3>
              {this.state.hasLoginFailed && (
                <div
                  className="alert alert-danger text-center font-weight-bold"
                  role="alert"
                >
                  Invalid Credentials
                </div>
              )}
              {this.state.showSuccessMessage && (
                <div className="alert alert-success text-center font-weight-bold">
                  Login Sucessful
                </div>
              )}
              {this.state.mpinPass ? (
                <div className="login-form">
                  <form onSubmit={this.login}>
                    <div className="form-group">
                      <label htmlFor="username" className="placeholder">
                        <b className="text-white">Username</b>
                      </label>
                      <input
                        id="username"
                        name="username"
                        type="text"
                        className="form-control"
                        ref={this.username}
                        value={this.state.username}
                        onChange={this.changeEventHandler}
                        required
                      />
                      {/* <input id="username" name="username" type="text" className="form-control" value={this.state.username} onChange={this.changeEventHandler} required /> */}
                    </div>
                    <div className="form-group">
                      <label htmlFor="password" className="placeholder">
                        <b className="text-white">Password</b>
                      </label>
                      <a href="#" className="link float-right text-white">
                        Forget Password ?
                      </a>
                      <div className="position-relative">
                        {/* ref={this.password} */}
                        <input
                          id="password"
                          name="password"
                          type="password"
                          className="form-control"
                          value={this.state.password}
                          onChange={this.changeEventHandler}
                          required
                        />
                        {/* <input id="password" name="password" type="password" className="form-control" value={this.state.password} onChange={this.changeEventHandler} required /> */}
                        <div className="show-password">
                          <i className="flaticon-interface"></i>
                        </div>
                      </div>
                    </div>
                    <div className="form-group form-action-d-flex mb-3">
                      {/* <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="rememberme" />
                      <label className="custom-control-label m-0" htmlFor="rememberme">Remember Me</label>
                    </div> */}
                      {/* <button type="submit" className="btn btn-small btn-primary col-md-5 float-right mt-3 mt-sm-0 fw-bold">Sign In</button> */}
                      <div className="form-action m-auto">
                        <button
                          type="submit"
                          className="btn btn-primary btn-rounded btn-login"
                          ref={this.usernameSignIn}
                        >
                          Sign In
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="login-account">
                    <span className="msg text-white">
                      Don't have an account yet &nbsp; ? &nbsp;
                    </span>
                    <a
                      href="#"
                      id="show-signup"
                      className="link text-white"
                      onClick={this.getMessage}
                    >
                      Sign Up
                    </a>
                  </div>
                </div>
              ) : (
                <div className="login-form">
                  <form onSubmit={this.login}>
                    <div className="form-group">
                      <label className="placeholder">
                        <b className="text-white">MPIN</b>
                      </label>
                    </div>
                    <div className="row px-3">
                      <div className="col-2">
                        <input
                          id="mpin1"
                          name="mpin1"
                          type="password"
                          pattern="[0-9\b]*"
                          className="form-control text-center"
                          ref={this.mpin1}
                          onClick={(e) => this.focusField(e)}
                          onChange={(e) => this.nextMPin(e)}
                          maxlength={1}
                          required
                        />
                      </div>
                      <div className="col-2">
                        <input
                          id="mpin2"
                          name="mpin2"
                          type="password"
                          pattern="[0-9\b]*"
                          className="form-control text-center"
                          ref={this.mpin2}
                          onClick={(e) => this.focusField(e)}
                          onChange={(e) => this.nextMPin(e)}
                          maxlength={1}
                          required
                        />
                      </div>
                      <div className="col-2">
                        <input
                          id="mpin3"
                          name="mpin3"
                          type="password"
                          pattern="[0-9\b]*"
                          className="form-control text-center"
                          ref={this.mpin3}
                          onClick={(e) => this.focusField(e)}
                          onChange={(e) => this.nextMPin(e)}
                          maxlength={1}
                          required
                        />
                      </div>
                      <div className="col-2">
                        <input
                          id="mpin4"
                          name="mpin4"
                          type="password"
                          pattern="[0-9\b]*"
                          className="form-control text-center"
                          ref={this.mpin4}
                          onClick={(e) => this.focusField(e)}
                          onChange={(e) => this.nextMPin(e)}
                          maxlength={1}
                          required
                        />
                      </div>
                      <div className="col-2">
                        <input
                          id="mpin5"
                          name="mpin5"
                          type="password"
                          pattern="[0-9\b]*"
                          className="form-control text-center"
                          ref={this.mpin5}
                          onClick={(e) => this.focusField(e)}
                          onChange={(e) => this.nextMPin(e)}
                          maxlength={1}
                          required
                        />
                      </div>
                      <div className="col-2">
                        <input
                          id="mpin6"
                          name="mpin6"
                          type="password"
                          pattern="[0-9\b]*"
                          className="form-control text-center"
                          ref={this.mpin6}
                          onClick={(e) => this.focusField(e)}
                          onChange={(e) => this.nextMPin(e)}
                          maxlength={1}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group form-action-d-flex mb-3">
                      {/* <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="rememberme" />
                      <label className="custom-control-label m-0" htmlFor="rememberme">Remember Me</label>
                    </div> */}
                      {/* <button type="submit" className="btn btn-small btn-primary col-md-5 float-right mt-3 mt-sm-0 fw-bold">Sign In</button> */}
                      <div className="form-action m-auto">
                        <button
                          type="submit"
                          className="btn btn-primary btn-rounded btn-login"
                          ref={this.mpinSignIn}
                        >
                          Sign In
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="login-account">
                    <span className="msg text-white">
                      Don't have an account yet &nbsp; ? &nbsp;
                    </span>
                    <a
                      href="#"
                      id="show-signup"
                      className="link text-white"
                      onClick={this.getMessage}
                    >
                      Sign Up
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}
