import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Common Components
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import Footer from "./components/Footer/Footer";

//Homepage Components
import SlideShow from "./components/Home/SlideShow/SlideShow";
import SlideShowToolbar from "./components/Home/SlideShow/SlideShowToolbar";
import StoreInfo from "./components/Home/StoreInfo/StoreInfo";
import AboutUs from "./components/Home/AboutUs/AboutUs";
import Services from "./components/Home/Services/Services";

//Services Page
import ServicesPage from "./components/ServicesPage/ServicesPage";

//Quote Page
import QuotePage from "./components/QuotePage/QuotePage";

//About Page
import AboutPage from "./components/AboutPage/AboutPage";

//Contact Page
import ContactPage from "./components/ContactPage/ContactPage";

import "./App.css";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDraweropen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Toolbar drawerClickHandler={this.drawerToggleHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          <Backdrop
            click={this.backdropClickHandler}
            show={this.state.sideDrawerOpen}
          />
          <main style={{ marginTop: "65px" }}>
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <div>
                    <SlideShow />
                    <SlideShowToolbar />
                    <StoreInfo />
                    <AboutUs />
                    <Services />
                  </div>
                )}
              />
              <Route
                path="/services"
                render={props => (
                  <div>
                    <ServicesPage />
                  </div>
                )}
              />
              <Route
                exact
                path="/quote"
                render={props => (
                  <div>
                    <QuotePage />
                  </div>
                )}
              />
              <Route
                exact
                path="/about"
                render={props => (
                  <div>
                    <AboutPage />
                  </div>
                )}
              />
              <Route
                exact
                path="/contact"
                render={props => (
                  <div>
                    <ContactPage />
                  </div>
                )}
              />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
