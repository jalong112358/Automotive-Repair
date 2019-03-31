import React from "react";
import "./CompOne.css";

export default function CompOne() {
  return (
    <div className="comp-one">
      <div className="btn btn-one">
        <div className="circle">
          <i class="fas fa-phone fa-2x" />
        </div>
        <a href="/contact">Contact Us</a>
      </div>
      <div className="btn btn-two">
        <div className="circle">
          <i class="fas fa-dollar-sign fa-2x" />
        </div>
        <a href="/quote">Get A Quote</a>
      </div>
      <div className="btn btn-three">
        <div className="circle">
          <i class="far fa-calendar-alt fa-2x" />
        </div>
        <a href="/schedule-appointment">Schedule Appointment</a>
      </div>
    </div>
  );
}
