import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link, Redirect } from "react-router-dom";
import { AuthenticatedKey } from "../../Constants/AuthenticatedKey";
import AuthenticationService from "../../Services/authService/AuthenticationService";
class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogout: false,
    };
  }
  signOut = () => {
    this.setState({
      islogout: AuthenticationService.logout(),
    });
  };
  render() {
    if (this.state.islogout) {
      return <Redirect to="/login" />;
    }
    //const { match } = this.props;
    return (
      <>
        {/* <!-- Tip 1: You can change the background color of the main header using: data-background-color="blue | purple | light-blue | green | orange | red" --> */}
        {/* <!-- Header Starts --> */}
        <div className="main-header">
          {/* <!-- Logo Header --> */}
          <div className="logo-header bg-dark">
            {/* <a href="#" className="logo"><img
                            src="/assets/img/vgipl/vg-w.svg"
                            alt="navbar brand" className="navbar-brand" style="height: 30px; width: 157px; margin-bottom: 6px;">
                        </a> */}
            {/* <!-- Style without mis Haeding with comment mis span --> */}

            <Link className="logo">
              {" "}
              <span className="navbar-brand" style={{ fontSize: "16px" }}>
                <b className="text-white">RNA </b> &nbsp;{" "}
                <b className="text-white">{/*KATSSSKL*/}</b>
              </span>
              {/* <img
                            src="/assets/img/vgipl/vg-w.svg"
                            alt="navbar brand" className="navbar-brand" style="height: 30px;width: 112px;margin-bottom: 15px;margin-left: 10px;"> */}
            </Link>
            {/* <!-- Style with MIS Heading --> */}

            <button
              className="navbar-toggler sidenav-toggler ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="collapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                {" "}
                <small>
                  <i className="fa fa-bars text-white"></i>
                </small>
              </span>
            </button>
            <button className="topbar-toggler more">
              <small>
                <i className="fa fa-ellipsis-v text-white"></i>
              </small>
            </button>
            <div className="navbar-minimize">
              <button
                className="btn btn-minimize btn-rounded border border-white"
                style={{
                  paddingTop: 2,
                  paddingBottom: 2,
                  paddingRight: 9,
                  paddingLeft: 9,
                }}
              >
                <small>
                  <i className="fa fa-bars text-white"></i>
                </small>
              </button>
            </div>
          </div>
          {/* <!-- End Logo Header --> */}

          {/* <!-- Navbar Header --> */}
          <nav className="navbar navbar-header navbar-expand-lg">
            <div className="container-fluid">
              {/* <div className="navbar-header">
			      <a className="navbar-brand text-white" href="#">KARMAYOGI ANKUSHRAO TOPE SAMARTH SAHAKARI SAKHAR KARKHANA <span>UNIT-1 SAMARTH</span></a>
			    </div> */}
              <div className="navHeading text-white">
                {/* Karmayogi Ankushrao Tope Samarth Sahakari Sakhar Karkhana <span className="">[&nbsp; ${loginUserUnit}</span> &nbsp; <span id="financialYear">${loginFinYear}</span>&nbsp;]*/}
              </div>
              <div className="collapse ml-auto" id="search-nav">
                <form className="navbar-left navbar-form nav-search">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <button type="button" className="btn btn-search pr-1">
                        <i className="fas fa-calendar-alt search-icon">
                          {/* <!-- Dashboard On Date :  --> */}
                        </i>
                      </button>
                    </div>
                    <input
                      type="text"
                      placeholder="Dashboard On Date"
                      className="form-control text-center text-primary font-weight-bold"
                      name=""
                      id="chartDate"
                      value={
                        new Date().getDate() +
                        "/" +
                        (new Date().getMonth() + 1) +
                        "/" +
                        new Date().getFullYear()
                      }
                    />
                  </div>
                </form>
              </div>
              <ul className="navbar-nav topbar-nav ml-2 align-items-center">
                <li className="nav-item toggle-nav-search hidden-caret">
                  <a
                    className="nav-link"
                    data-toggle="collapse"
                    href="#search-nav"
                    role="button"
                    aria-expanded="false"
                    aria-controls="search-nav"
                  >
                    <i className="fas fa-calendar-alt"></i>
                  </a>
                </li>

                <li className="nav-item dropdown hidden-caret">
                  <a
                    className="dropdown-toggle profile-pic"
                    data-toggle="dropdown"
                    href="#"
                    aria-expanded="false"
                  >
                    <div className="avatar-sm">
                      {/* <img src="/assets/img/profile.jpg"
								            	alt="..." className="avatar-img rounded-circle"> */}

                      <img
                        src="http://placehold.it/100x100"
                        alt="..."
                        className="avatar-img rounded-circle"
                        id="userDynamicImageClass1"
                      />
                    </div>
                  </a>
                  <ul className="dropdown-menu dropdown-user animated fadeIn">
                    <li>
                      <div className="user-box">
                        <div className="avatar-lg">
                          {/* <%-- <img src="/assets/img/profile.jpg"
											alt="image profile" className="avatar-img rounded"> --%> */}

                          <img
                            src="http://placehold.it/100x100"
                            alt="image profile"
                            className="avatar-img rounded"
                            id="userDynamicImageClass2"
                          />
                        </div>
                        <div className="u-text">
                          <h4 id="username">
                            {/* <%-- ${loginUserName} --%> */}
                          </h4>
                          <p className="text-muted" id="userEmailIdDynamic"></p>
                          {/* <%-- <a href="/userProfile"
											className="btn btn-rounded btn-danger btn-sm">Edit Profile</a> --%> */}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-divider"></div>{" "}
                      <a className="dropdown-item" href="#">
                        Edit Profile
                      </a>
                      {/* <%-- <div className="dropdown-divider"></div> <a className="dropdown-item"
                                                href="/userProfile">Account
                                                    Setting</a> --%> */}
                      <div className="dropdown-divider"></div>
                      {/* <a className="dropdown-item"
                                                href="#" id="logOut">Logout</a> */}
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={this.signOut}
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
          {/* <!-- End Navbar --> */}
        </div>
        {/* <!-- Header sampla -->  */}
      </>
    );
  }
}
export default withRouter(HeaderComponent);
