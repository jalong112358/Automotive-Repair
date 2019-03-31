import React, { Component } from "react";
import engineIcon from "./ServiceIcons/engine.png";
import "./Services.css";

class Services extends Component {
  state = {
    services: [
      {
        id: 1,
        image: engineIcon,
        title: "Engines",
        body: "Lorem ipsum dolor sit amet, sit pede, accumsan ame."
      },
      {
        id: 2,
        image: engineIcon,
        title: "Engines",
        body: "Lorem ipsum dolor sit amet, sit pede, accumsan ame."
      },
      {
        id: 3,
        image: engineIcon,
        title: "Engines",
        body: "Lorem ipsum dolor sit amet, sit pede, accumsan ame."
      },
      {
        id: 4,
        image: engineIcon,
        title: "Engines",
        body: "Lorem ipsum dolor sit amet, sit pede, accumsan ame."
      },
      {
        id: 5,
        image: engineIcon,
        title: "Engines",
        body: "Lorem ipsum dolor sit amet, sit pede, accumsan ame."
      }
    ]
  };
  render() {
    const items = this.state.services.map((item, key) => (
      <div className="services-cards" key={item.id}>
        <div className="service-icon-wrapper">
          <img src={item.image} />
        </div>
        <h3>{item.title}</h3>
        <h4>{item.body}</h4>
      </div>
    ));
    return (
      <div className="services">
        <h1>
          QUALITY <span>SERVICES</span>
        </h1>

        <div className="services-card-wrapper">{items}</div>
      </div>
    );
  }
}

export default Services;
