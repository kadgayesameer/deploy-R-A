import React, { Component } from "react";
import { withRouter } from "react-router";
import $ from "jquery";

class CoustomSettingComponent extends Component {
  componentDidMount() {
    "use strict";

    // Setting Color

    $(window).resize(function () {
      $(window).width();
    });

    $(".changeMainHeaderColor").on("click", function () {
      if ($(this).attr("data-color") === "default") {
        $(".main-header").removeAttr("data-background-color");
      } else {
        $(".main-header").attr(
          "data-background-color",
          $(this).attr("data-color")
        );
      }

      $(this).parent().find(".changeMainHeaderColor").removeClass("selected");
      $(this).addClass("selected");
      //layoutsColors();
    });

    $(".changeBackgroundColor").on("click", function () {
      $("body").removeAttr("data-background-color");
      $("body").attr("data-background-color", $(this).attr("data-color"));
      $(this).parent().find(".changeBackgroundColor").removeClass("selected");
      $(this).addClass("selected");
    });

    var toggle_customSidebar = false,
      custom_open = 0;

    if (!toggle_customSidebar) {
      var toggle = $(".custom-template .custom-toggle");

      toggle.on("click", function () {
        if (custom_open === 1) {
          $(".custom-template").removeClass("open");
          toggle.removeClass("toggled");
          custom_open = 0;
        } else {
          $(".custom-template").addClass("open");
          toggle.addClass("toggled");
          custom_open = 1;
        }
      });
      toggle_customSidebar = true;
    }
  }
  render() {
    return (
      <>
        {/* <!-- Custom template | don't include it in your project! --> */}
        <div className="custom-template">
          <div className="title">Settings</div>
          <div className="custom-content">
            <div className="switcher">
              <div className="switch-block">
                <h4>Topbar</h4>
                <div className="btnSwitch">
                  <button
                    type="button"
                    className="changeMainHeaderColor btn btn-grd-primary"
                    data-color="blue"
                  ></button>
                  <button
                    type="button"
                    className="selected changeMainHeaderColor btn btn-grd-purple"
                    data-color="purple"
                  ></button>
                  <button
                    type="button"
                    className="changeMainHeaderColor btn btn-grd-info"
                    data-color="light-blue"
                  ></button>
                  <button
                    type="button"
                    className="changeMainHeaderColor btn btn-grd-success"
                    data-color="green"
                  ></button>
                  <button
                    type="button"
                    className="changeMainHeaderColor btn btn-grd-warning"
                    data-color="orange"
                  ></button>
                  <button
                    type="button"
                    className="changeMainHeaderColor btn btn-grd-danger"
                    data-color="red"
                  ></button>
                  <button
                    type="button"
                    className="changeMainHeaderColor btn btn-grd-inverse"
                    data-color="default"
                  ></button>
                </div>
              </div>
              <div className="switch-block">
                <h4>Background</h4>
                <div className="btnSwitch">
                  <button
                    type="button"
                    className="changeBackgroundColor"
                    data-color="bg1"
                  ></button>
                  <button
                    type="button"
                    className="changeBackgroundColor"
                    data-color="bg2"
                  ></button>
                  <button
                    type="button"
                    className="changeBackgroundColor"
                    data-color="bg3"
                  ></button>
                  <button
                    type="button"
                    className="changeBackgroundColor selected"
                    data-color="bg4"
                  ></button>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-toggle btn-grd-purple">
            <i className="flaticon-settings"></i>
          </div>
        </div>
        {/* <!-- End Custom template --> */}
      </>
    );
  }
}
export default withRouter(CoustomSettingComponent);
