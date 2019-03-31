import React from "react";
import "./ContactForm.css";

export default function ContactForm() {
  return (
    <div className="contact-page-form">
      <h1>Contact Us</h1>
      <form>
        <div className="contact-page-form-row">
          <div>
            <h3>Your Name:</h3>
            <input type="text" placeholder="John Doe" />
          </div>
          <div>
            <h3>Your Email:</h3>
            <input type="text" placeholder="example@gmail.com" />
          </div>
          <div>
            <h3>Your Phone:</h3>
            <input type="phone" placeholder="(555) 555-5555" />
          </div>
        </div>

        <h3>Subject:</h3>
        <input
          className="contact-page-subject"
          type="text"
          placeholder="Enter Message Subject"
        />
        <h3>Your Message:</h3>
        <textarea placeholder="Enter your message here..." />
        <input className="submit-btn" type="submit" />
      </form>
    </div>
  );
}
