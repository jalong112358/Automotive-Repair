import React, { Component } from "react";
import ContactForm from "./ContactForm";
import texture from "./texture.jpg";
import "./ContactPage.css";

export default class ContactPage extends Component {
  render() {
    return (
      <div className="contact-wrapper">
        <ContactForm />
        <div
          className="chevron-bg"
          style={{
            backgroundImage: "url(" + texture + ")"
          }}
        />
      </div>
    );
  }
}
