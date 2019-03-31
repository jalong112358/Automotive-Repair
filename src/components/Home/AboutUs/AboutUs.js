import React from "react";
import "./AboutUs.css";
import CustomerCounter from "./CustomerCounter";
import texture from "./texture.jpg";
function AboutUs() {
  return (
    <div
      className="about"
      style={{
        backgroundImage: "url(" + texture + ")"
      }}
    >
      <h1>
        ABOUT <span>US</span>
      </h1>

      <p>
        Lorem ipsum dolor sit amet, sit pede, accumsan amet, dictum quis. Taciti
        donec rutrum, ut rutrum. Tincidunt proin et, vitae integer. Tempus
        donec. Laoreet quis, non dignissim donec. Nec quis.
      </p>
      <CustomerCounter />
    </div>
  );
}

export default AboutUs;
