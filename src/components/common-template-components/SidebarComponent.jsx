import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import SidebarService from "../../Services/commonModuleService/SidebarService";

class SidebarComponent extends Component {
  constructor() {
    super();
    this.state = {
      getMenusArr: [],
      getSubMenusArr: [],
      menus: [
        {
          id: "base",
          name: "Masters",
          icon: "fas fa-layer-group",
        },
        {
          id: "forms",
          name: "Forms",
          icon: "fas fa-pen-square",
        },
        {
          id: "tables",
          name: "Tables",
          icon: "fas fa-table",
        },
        {
          id: "accountOpening",
          name: "Account Opening",
          icon: "fas fa-user",
        },
        {
          id: "charts",
          name: "Charts",
          icon: "fas fa-chart-bar",
        },
      ],
      /* menus: [
        {
          id: "base",
          name: "Masters",
          icon: "fas fa-layer-group",
          subMenu: [
            { id: "101", name: "Module Master", path: "/moduleMaster" },
            { id: "102", name: "PinCode Master", path: "/pinCodeMaster" },
            { id: "103", name: "District Master", path: "/districtMaster" },
            { id: "104", name: "State Master", path: "/stateMaster" },
            { id: "105", name: "Taluka Master", path: "/talukaMaster" },
            { id: "106", name: "Company Master", path: "/companyMaster" },
            { id: "107", name: "Menu Master", path: "/menuMaster" },
            { id: "108", name: "Branch Master", path: "/listOfBranchMaster" },
            { id: "109", name: "User Master", path: "/userMaster" },
            { id: "110", name: "User Role Master", path: "/userRoleMaster" },
          ],
        },
        {
          id: "forms",
          name: "Forms",
          icon: "fas fa-pen-square",
          subMenu: [{ id: "201", name: "Basic Form" }],
        },
        {
          id: "tables",
          name: "Tables",
          icon: "fas fa-table",
          subMenu: [
            { id: "301", name: "Basic Tables" },
            { id: "302", name: "Datatables" },
          ],
        },
        {
          id: "maps",
          name: "Maps",
          icon: "fas fa-map-marker-alt",
          subMenu: [
            { id: "401", name: "Google Maps" },
            { id: "402", name: "Full Screen Maps" },
            { id: "403", name: "JQVMap" },
          ],
        },
        {
          id: "charts",
          name: "Charts",
          icon: "fas fa-chart-bar",
          subMenu: [
            { id: "501", name: "Charts JS" },
            { id: "502", name: "Sparkline" },
          ],
        },
      ], */
    };
  }

  componentDidMount() {
    SidebarService.getMenus().then((resp) => {
      this.setState({ getMenusArr: resp.data.response });
    });
    console.log("Menus Fetched => " + this.state.getMenusArr);
    SidebarService.getSubMenus().then((resp) => {
      this.setState({ getSubMenusArr: resp.data.response });
    });
    console.log("SubMenus Fetched => " + this.state.getSubMenusArr);
  }

  render() {
    const { match } = this.props;
    return (
      <>
        {/* <!-- SideBar Component Starts --> */}
        <div className="sidebar">
          <div className="sidebar-background"></div>
          <div className="sidebar-wrapper scrollbar-inner">
            <div className="sidebar-content">
              <div className="user">
                <div className="avatar-sm float-left mr-2">
                  <img
                    src="/assets/img/vgipl_logo.svg"
                    alt="..."
                    className="avatar-img rounded-circle"
                  />
                </div>
                <div className="info">
                  <a
                    data-toggle="collapse"
                    href="#collapseExample"
                    aria-expanded="true"
                  >
                    <span>
                      VGIPL
                      <span className="user-level">Administrator</span>
                      <span className="caret"></span>
                    </span>
                  </a>
                  <div className="clearfix"></div>

                  <div className="collapse in" id="collapseExample">
                    <ul className="nav">
                      <li>
                        <a href="#profile">
                          <span className="link-collapse">My Profile</span>
                        </a>
                      </li>
                      <li>
                        <a href="#edit">
                          <span className="link-collapse">Edit Profile</span>
                        </a>
                      </li>
                      <li>
                        <a href="#settings">
                          <span className="link-collapse">Settings</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <ul className="nav">
                <li className="nav-item active">
                  <Link to={`${match.path}/dashboard`}>
                    <i className="fas fa-home"></i>
                    <p>Dashboard</p>
                    <span className="badge badge-count">5</span>
                  </Link>
                </li>
                {/* <hr />
                <hr />
                {this.state.getMenusArr.map((menu) => (
                  <li className="text-success">
                    <i className="fa fa-ellipsis-h"></i>
                    {menu.admmModuleName}
                  </li>
                ))}
                {this.state.getSubMenusArr.map((subMenu) => (
                  <li className="text-info">
                    <i className="fa fa-ellipsis-h"></i>
                    {subMenu.menuName}
                  </li>
                ))}
                <hr />
                <hr /> */}
                <li className="nav-section">
                  <span className="sidebar-mini-icon">
                    <i className="fa fa-ellipsis-h"></i>
                  </span>
                  <h4 className="text-section">Components</h4>
                </li>
                {this.state.menus.map((menu) => (
                  <li className="nav-item">
                    <a data-toggle="collapse" href={"#" + menu.id}>
                      <i className={menu.icon}></i>
                      <p>{menu.name}</p>
                      <span className="caret"></span>
                    </a>
                    <div className="collapse" id={menu.id}>
                      <ul className="nav nav-collapse">
                        <li>
                          {this.state.getSubMenusArr.map((subMenu) => (
                            <Link to={`${match.path + "/" + subMenu.path}`}>
                              <span className="sub-item">
                                {subMenu.menuName}
                              </span>
                            </Link>
                          ))}
                          {/* {menu.subMenu.map((subMenu) => (
                            <Link to={`${match.path}` + subMenu.path}>
                              <span className="sub-item">{subMenu.name}</span>
                            </Link>
                          ))} */}
                        </li>
                      </ul>
                    </div>
                  </li>
                ))}

                {/* <li className="nav-item">
                  <a data-toggle="collapse" href="#base">
                    <i className="fas fa-layer-group"></i>
                    <p>Masters</p>
                    <span className="caret"></span>
                  </a>
                  <div className="collapse" id="base">
                    <ul className="nav nav-collapse">
                      <li>
                        <Link to={`${match.path}/moduleMaster`}>
                          <span className="sub-item">ModuleMaster</span>
                        </Link>
                      </li>
                      <li>
                        <Link to={`${match.path}/pinCodeMaster`}>
                          <span className="sub-item">PinCodeMaster</span>
                        </Link>
                      </li>
                      <li>
                        <Link to={`${match.path}/districtMaster`}>
                          <span className="sub-item">DistrictMaster</span>
                        </Link>
                      </li>
                      <li>
                        <Link to={`${match.path}/stateMaster`}>
                          <span className="sub-item">StateMaster</span>
                        </Link>
                      </li>
                      <li>
                        <Link to={`${match.path}/talukaMaster`}>
                          <span className="sub-item">TalukaMaster</span>
                        </Link>
                      </li>
                      <li>
                        <Link to={`${match.path}/companyMaster`}>
                          <span className="sub-item">CompanyMaster</span>
                        </Link>
                      </li>
                      <li>
                        <Link to={`${match.path}/menuMaster`}>
                          <span className="sub-item">MenuMaster</span>
                        </Link>
                      </li>
                      <li>
                        <Link to={`${match.path}/listOfBranchMaster`}>
                          <span className="sub-item">ListOfBranchMaster</span>
                        </Link>
                      </li>
                      <li>
                        <Link to={`${match.path}/userMaster`}>
                          <span className="sub-item">UserMaster</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li> */}

                {/* <li className="nav-item">
                  <a data-toggle="collapse" href="#base">
                    <i className="fas fa-layer-group"></i>
                    <p>Base</p>
                    <span className="caret"></span>
                  </a>
                  <div className="collapse" id="base">
                    <ul className="nav nav-collapse">
                      <li>
                        <a href="components/avatars.html">
                          <span className="sub-item">Avatars</span>
                        </a>
                      </li>
                      <li>
                        <a href="components/buttons.html">
                          <span className="sub-item">Buttons</span>
                        </a>
                      </li>
                      <li>
                        <a href="components/gridsystem.html">
                          <span className="sub-item">Grid System</span>
                        </a>
                      </li>
                      <li>
                        <a href="components/panels.html">
                          <span className="sub-item">Panels</span>
                        </a>
                      </li>
                      <li>
                        <a href="components/notifications.html">
                          <span className="sub-item">Notifications</span>
                        </a>
                      </li>
                      <li>
                        <a href="components/sweetalert.html">
                          <span className="sub-item">Sweet Alert</span>
                        </a>
                      </li>
                      <li>
                        <a href="components/font-awesome-icons.html">
                          <span className="sub-item">Font Awesome Icons</span>
                        </a>
                      </li>
                      <li>
                        <a href="components/flaticons.html">
                          <span className="sub-item">Flaticons</span>
                        </a>
                      </li>
                      <li>
                        <a href="components/typography.html">
                          <span className="sub-item">Typography</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a data-toggle="collapse" href="#forms">
                    <i className="fas fa-pen-square"></i>
                    <p>Forms</p>
                    <span className="caret"></span>
                  </a>
                  <div className="collapse" id="forms">
                    <ul className="nav nav-collapse">
                      <li>
                        <a href="forms/forms.html">
                          <span className="sub-item">Basic Form</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a data-toggle="collapse" href="#tables">
                    <i className="fas fa-table"></i>
                    <p>Tables</p>
                    <span className="caret"></span>
                  </a>
                  <div className="collapse" id="tables">
                    <ul className="nav nav-collapse">
                      <li>
                        <a href="tables/tables.html">
                          <span className="sub-item">Basic Table</span>
                        </a>
                      </li>
                      <li>
                        <a href="tables/datatables.html">
                          <span className="sub-item">Datatables</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a data-toggle="collapse" href="#maps">
                    <i className="fas fa-map-marker-alt"></i>
                    <p>Maps</p>
                    <span className="caret"></span>
                  </a>
                  <div className="collapse" id="maps">
                    <ul className="nav nav-collapse">
                      <li>
                        <a href="maps/googlemaps.html">
                          <span className="sub-item">Google Maps</span>
                        </a>
                      </li>
                      <li>
                        <a href="maps/fullscreenmaps.html">
                          <span className="sub-item">Full Screen Maps</span>
                        </a>
                      </li>
                      <li>
                        <a href="maps/jqvmap.html">
                          <span className="sub-item">JQVMap</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a data-toggle="collapse" href="#charts">
                    <i className="far fa-chart-bar"></i>
                    <p>Charts</p>
                    <span className="caret"></span>
                  </a>
                  <div className="collapse" id="charts">
                    <ul className="nav nav-collapse">
                      <li>
                        <a href="charts/charts.html">
                          <span className="sub-item">Chart Js</span>
                        </a>
                      </li>
                      <li>
                        <a href="charts/sparkline.html">
                          <span className="sub-item">Sparkline</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item">
                  <a href="widgets.html">
                    <i className="fas fa-desktop"></i>
                    <p>Widgets</p>
                    <span className="badge badge-count badge-success">4</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a data-toggle="collapse" href="#custompages">
                    <i className="fas fa-paint-roller"></i>
                    <p>Custom Pages</p>
                    <span className="caret"></span>
                  </a>
                  <div className="collapse" id="custompages">
                    <ul className="nav nav-collapse">
                      <li>
                        <a href="login.html">
                          <span className="sub-item">Login & Register 1</span>
                        </a>
                      </li>
                      <li>
                        <a href="login2.html">
                          <span className="sub-item">Login & Register 2</span>
                        </a>
                      </li>
                      <li>
                        <a href="userprofile.html">
                          <span className="sub-item">User Profile</span>
                        </a>
                      </li>
                      <li>
                        <a href="404.html">
                          <span className="sub-item">404</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a data-toggle="collapse" href="#submenu">
                    <i className="fas fa-bars"></i>
                    <p>Menu Levels</p>
                    <span className="caret"></span>
                  </a>
                  <div className="collapse" id="submenu">
                    <ul className="nav nav-collapse">
                      <li>
                        <a data-toggle="collapse" href="#subnav1">
                          <span className="sub-item">Level 1</span>
                          <span className="caret"></span>
                        </a>
                        <div className="collapse" id="subnav1">
                          <ul className="nav nav-collapse subnav">
                            <li>
                              <Link to={`${match.path}/test`}>
                                <span className="sub-item">Level 2</span>
                              </Link>
                            </li>
                            <li>
                              <a href="#">
                                <span className="sub-item">Level 2</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a data-toggle="collapse" href="#subnav2">
                          <span className="sub-item">Level 1</span>
                          <span className="caret"></span>
                        </a>
                        <div className="collapse" id="subnav2">
                          <ul className="nav nav-collapse subnav">
                            <li>
                              <a href="#">
                                <span className="sub-item">Level 2</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#">
                          <span className="sub-item">Level 1</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- SideBar Component Ends --> */}
      </>
    );
  }
}
export default withRouter(SidebarComponent);
