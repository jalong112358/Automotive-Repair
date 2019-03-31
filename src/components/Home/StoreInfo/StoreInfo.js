import React from "react";
import "./StoreInfo.css";

import bgImage from "./bgImage4.jpg";

function StoreInfo() {
  return (
    <div className="store-info">
      <h1 className="banner-text">
        Store <span>Info</span>
      </h1>
      <img className="store-info-bgImage" src={bgImage} />
      <div className="store-info-block-wrapper">
        <div className="store-info-block" id="store-hours">
          <div className="circle">
            <i className="far fa-clock fa-2x" />
          </div>
          <div className="store-info-content">
            <h3>Hours</h3>
            <h4>
              Monday-Friday: 9am-5pm
              <br />
              Saturday-Sunday: Closed
            </h4>
          </div>
        </div>

        <div className="store-info-block" id="store-location">
          <div className="circle">
            <i className="fas fa-map-marker-alt fa-2x" />
          </div>
          <div className="store-info-content">
            <h3>Location</h3>
            <h4>
              3995 Lighthouse Drive
              <br />
              Springfield, MO 65806
            </h4>
          </div>
        </div>

        <div className="store-info-block" id="store-contact">
          <div className="circle">
            <i className="fas fa-phone fa-2x" />
          </div>
          <div className="store-info-content">
            <h3>Contact</h3>
            <h4>
              Phone: 555-555-5555
              <br />
              Email: support@example.com
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreInfo;
