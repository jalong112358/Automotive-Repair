import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./ServicesPage.css";

// SubPages

import ServicesMain from "./SubPages/ServicesMain";
import ACRepair from "./SubPages/ACRepair";
import EngineRepair from "./SubPages/EngineRepair";
import Tuneup from "./SubPages/Tuneup";
import BrakeRepair from "./SubPages/BrakeRepair";
import WheelServices from "./SubPages/WheelServices";
import WheelAlignment from "./SubPages/WheelAlignment";
import AxleAndCVJoints from "./SubPages/AxleAndCVJoints";
import BeltsAndHoses from "./SubPages/BeltsAndHoses";
import ClimateControlSystem from "./SubPages/ClimateControlSystem";
import EngineDiagnostics from "./SubPages/EngineDiagnostics";
import OilAndFilterChange from "./SubPages/OilAndFilterChange";
import PreventiveMaintenance from "./SubPages/PreventiveMaintenance";
import ChargingAndBatteries from "./SubPages/ChargingAndBatteries";
import SteeringAndSuspensionSystem from "./SubPages/SteeringAndSuspensionSystem";
import TirePressureMonitoringSystem from "./SubPages/TirePressureMonitoringSystem";
import TireServices from "./SubPages/TireServices";
import TransmissionService from "./SubPages/TransmissionService";
import VehicleInspection from "./SubPages/VehicleInspection";

// Common Components

import CompOne from "./CommonComponents/CompOne";

class ServicesPage extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/services" component={ServicesMain} />
          <Route
            exact
            path="/services/ac-repair"
            render={props => (
              <div className="services-subpage">
                <ACRepair />
                <CompOne />
              </div>
            )}
          />
          <Route
            exact
            path="/services/engine-repair"
            render={props => (
              <div className="services-subpage">
                <EngineRepair />
                <CompOne />
              </div>
            )}
          />
          <Route
            exact
            path="/services/tuneup"
            render={props => (
              <div className="services-subpage">
                <Tuneup />
                <CompOne />
              </div>
            )}
          />
          <Route
            exact
            path="/services/brake-repair"
            render={props => (
              <div className="services-subpage">
                <BrakeRepair />
                <CompOne />
              </div>
            )}
          />
          <Route
            exact
            path="/services/wheel-services"
            render={props => (
              <div className="services-subpage">
                <WheelServices />
                <CompOne />
              </div>
            )}
          />
          <Route
            exact
            path="/services/wheel-alignment"
            render={props => (
              <div className="services-subpage">
                <WheelAlignment />
                <CompOne />
              </div>
            )}
          />
          <Route
            exact
            path="/services/axle-cv-joints"
            render={props => (
              <div className="services-subpage">
                <AxleAndCVJoints />
                <CompOne />
              </div>
            )}
          />
          <Route
            exact
            path="/services/belts-hoses"
            render={props => (
              <div className="services-subpage">
                <BeltsAndHoses />
                <CompOne />
              </div>
            )}
          />

          <Route
            exact
            path="/services/climate-control-system"
            render={props => (
              <div className="services-subpage">
                <ClimateControlSystem />
                <CompOne />
              </div>
            )}
          />
          <Route
            exact
            path="/services/engine-diagnostics"
            render={props => (
              <div className="services-subpage">
                <EngineDiagnostics />
                <CompOne />
              </div>
            )}
          />
          <Route
            exact
            path="/services/oil-filter-change"
            render={props => (
              <div className="services-subpage">
                <OilAndFilterChange />
                <CompOne />
              </div>
            )}
          />
          <Route
            exact
            path="/services/preventive-maintenance"
            render={props => (
              <div className="services-subpage">
                <PreventiveMaintenance />
                <CompOne />
              </div>
            )}
          />
          <Route
            exact
            path="/services/batteries"
            render={props => (
              <div className="services-subpage">
                <ChargingAndBatteries />
                <CompOne />
              </div>
            )}
          />
          <Route
            exact
            path="/services/steering-suspension-system"
            render={props => (
              <div className="services-subpage">
                <SteeringAndSuspensionSystem />
                <CompOne />
              </div>
            )}
          />
          <Route
            exact
            path="/services/tire-pressure-monitoring-system"
            render={props => (
              <div className="services-subpage">
                <TirePressureMonitoringSystem />
                <CompOne />
              </div>
            )}
          />
          <Route
            exact
            path="/services/tire-services"
            render={props => (
              <div className="services-subpage">
                <TireServices />
                <CompOne />
              </div>
            )}
          />
          <Route
            exact
            path="/services/transmission-service"
            render={props => (
              <div className="services-subpage">
                <TransmissionService />
                <CompOne />
              </div>
            )}
          />
          <Route
            exact
            path="/services/vehicle-inspection"
            render={props => (
              <div className="services-subpage">
                <VehicleInspection />
                <CompOne />
              </div>
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default ServicesPage;
