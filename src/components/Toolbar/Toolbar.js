import React, { Component } from "react";
import DrawerToggle from "../SideDrawer/DrawerToggle";
import "./Toolbar.css";

import logo from "./logo.png";

class Toolbar extends Component {
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
    return (
      <header className="toolbar">
        <nav className="toolbar_nav">
          <div>
            <DrawerToggle click={this.props.drawerClickHandler} />
          </div>
          <div className="toolbar_nav-logo">
            <a href="/">
              <img src={logo} />
            </a>
          </div>
          <div className="spacer" />
          <div className="toolbar_nav-items">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a onClick={this.toggleServicesDropdown} href="#">
                  Services
                </a>
              </li>

              <li>
                <a href="/quote">Get A Quote</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
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
              <a href="/services/transmission-service">Transmission Service</a>
            </li>
            <li>
              <a href="/services/vehicle-inspection">Vehicle Inspection</a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Toolbar;
