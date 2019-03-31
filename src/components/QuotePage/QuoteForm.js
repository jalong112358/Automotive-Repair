import React, { Component } from "react";
import "./QuoteForm.css";

class QuoteForm extends Component {
  state = {
    selectedYear: null,
    selectedMake: "",
    selectedModel: "",
    vehicleYears: [
      1985,
      1986,
      1987,
      1988,
      1989,
      1990,
      1991,
      1992,
      1993,
      1994,
      1995,
      1996,
      1997,
      1998,
      1999,
      2000,
      2001,
      2002,
      2003,
      2004,
      2005,
      2006,
      2007,
      2008,
      2009,
      2010,
      2011,
      2012,
      2013,
      2014,
      2015,
      2016,
      2017,
      2018,
      2019
    ],
    vehicleMakes: [],
    vehicleModels: [],
    outputModels: []
  };

  componentDidMount() {
    fetch(
      "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"
    )
      .then(response => response.json())
      .then(data => this.setState({ vehicleMakes: data.Results }));
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(this.state.selectedMake);
    if (this.state.selectedMake !== prevState.selectedMake) {
      fetch(
        "https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/" +
          this.state.selectedMake +
          "?format=json"
      )
        .then(response => response.json())
        .then(data => this.setState({ vehicleModels: data.Results }));
    }
  }

  changeSelectedMake = event => {
    this.setState({ selectedMake: event.target.value });
    console.log(this.state.selectedMake);
  };

  changeSelectedModel = event => {
    this.setState({ selectedModel: event.target.value });
  };

  render() {
    const years = this.state.vehicleYears.map((item, key) => (
      <option key={item}>{item}</option>
    ));

    const makes = this.state.vehicleMakes.map((item, key) => (
      <option value={item.MakeName} key={item.MakeId}>
        {item.MakeName}
      </option>
    ));

    const models = this.state.vehicleModels.map((item, key) => (
      <option value={item.Model_Name} key={item.Model_ID}>
        {item.Model_Name}
      </option>
    ));

    return (
      <div className="quote-form">
        <h1>Get A Free Quote</h1>
        <form>
          <div className="user-info">
            <div className="user-info-input">
              <h3>Your Name:</h3>
              <input type="text" placeholder="First & Last Name" />
            </div>
            <div className="user-info-input">
              <h3>Your Email:</h3>
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="user-info-input">
              <h3>Your Phone:</h3>
              <input type="phone" placeholder="(555) 555-5555" />
            </div>
          </div>
          <h2>Select Your Vehicle</h2>
          <div className="car-select">
            <div className="car-select-input">
              <h3>Year:</h3>
              <select>
                <option value="" disabled selected>
                  Select Year
                </option>
                {years}
              </select>
            </div>
            <div className="car-select-input">
              <h3>Make:</h3>
              <select
                onChange={this.changeSelectedMake}
                value={this.state.selectedMake}
              >
                <option value="" disabled defaultValue>
                  Select Make
                </option>
                {makes}
              </select>
            </div>
            <div className="car-select-input">
              <h3>Model:</h3>
              <select
                onChange={this.changeSelectedModel}
                value={this.state.selectedModel}
              >
                <option value="" disabled defaultValue>
                  Select Model
                </option>
                {models}
              </select>
            </div>
          </div>

          <h4>
            In the box below, write a description of the services or repairs
            needed.
          </h4>
          <textarea />
          <input className="submit-btn" type="submit" />
        </form>
      </div>
    );
  }
}

export default QuoteForm;
