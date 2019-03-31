import React, { Component } from "react";

import "./SideDrawer.css";

import logo from "../Toolbar/logo.png";

import facebookIcon from "./social-icons/facebook.png";
import twitterIcon from "./social-icons/twitter.png";
import instagramIcon from "./social-icons/instagram.png";

class SideDrawer extends Component {
  state = {
    servicesDropdownClasses: "services-dropdown"
  };

  toggleServicesDropdown = () => {
    if (this.state.servicesDropdownClasses === "services-dropdown") {
      this.setState({
        servicesDropdownClasses: "services-dropdown open"
      });
    } else {
      this.setState({
        servicesDropdownClasses: "services-dropdown"
      });
    }
  };
  render() {
    let drawerClasses = "side-drawer";
    if (this.props.show) {
      drawerClasses = "side-drawer open";
    }
    return (
      <nav className={drawerClasses}>
        <div className="logo">
          <img src={logo} />
        </div>

        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li onClick={this.toggleServicesDropdown}>
            <a href="#">Services</a>
          </li>
          <div className={this.state.servicesDropdownClasses}>
            <ul>
              <li>
                <a href="/services/ac-repair">AC Repair</a>
              </li>
              <li>
                <a href="/services/engine-repair">Engine Repair</a>
              </li>

              <li>
                <a href="/services/tuneup">Car Tuneup</a>
              </li>
              <li>
                <a href="/services/brake-repair">Brake Repair</a>
              </li>
              <li>
                <a href="/services/wheel-services">Wheel Services</a>
              </li>
              <li>
                <a href="/services/wheel-alignment">Wheel Alignment</a>
              </li>
              <li>
                <a href="/services/axle-cv-joints">Axle and CV Joints</a>
              </li>
              <li>
                <a href="/services/belts-hoses">Belts and Hoses</a>
              </li>
              <li>
                <a href="/services/climate-control-system">
                  Climate Control System
                </a>
              </li>
              <li>
                <a href="/services/engine-diagnostics">Engine Diagnostics</a>
              </li>
              <li>
                <a href="/services/oil-filter-change">
                  Lube Oil and Filter Change
                </a>
              </li>
              <li>
                <a href="/services/preventive-maintenance">
                  Preventive Maintenance
                </a>
              </li>
              <li>
                <a href="/services/batteries">Charging and Batteries</a>
              </li>
              <li>
                <a href="/services/steering-suspension-system">
                  Steering and Suspension System
                </a>
              </li>
              <li>
                <a href="/services/tire-pressure-monitoring-system">
                  Tire Pressure Monitoring System
                </a>
              </li>
              <li>
                <a href="/services/tire-services">Tire Services</a>
              </li>
              <li>
                <a href="/services/transmission-service">
                  Transmission Service
                </a>
              </li>
              <li>
                <a href="/services/vehicle-inspection">Vehicle Inspection</a>
              </li>
            </ul>
          </div>
          <li>
            <a href="/quote">Get A Quote</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <div className="social-icons">
            <img src={facebookIcon} />
            <img src={twitterIcon} />
            <img src={instagramIcon} />
          </div>
        </ul>
      </nav>
    );
  }
}

export default SideDrawer;
