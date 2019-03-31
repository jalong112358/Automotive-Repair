import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-row">
        <div className="contact-info">
          <h1>Contact Information</h1>
          <div className="contact-info-row">
            <div>
              <h2>Shop Location</h2>
              <p>
                3995 Lighthouse Drive
                <br />
                Springfield, MO 65806
              </p>
            </div>
            <div>
              <p>
                Phone: (555) 555-5555
                <br />
                Email: <span className="orange-text">support@example.com</span>
              </p>
            </div>
          </div>
          <h1>Work For Us</h1>
          <p>
            <span className="orange-text">Download</span> the application and
            send to support@example.com
          </p>
        </div>
        <div className="contact-form">
          <h1>Send Us A Message</h1>
          <form>
            <div className="form-row">
              <input type="text" placeholder="First & Last Name" />
              <input type="email" placeholder="Email Address" />
            </div>
            <input className="subject" type="text" placeholder="Subject" />

            <textarea placeholder="Your Message Here..." />
            <input className="submit-btn" type="submit" />
          </form>
        </div>
      </div>
      <div className="footer-nav">
        <p>Navigation</p>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/services">Services</a>
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
    </footer>
  );
}

export default Footer;
