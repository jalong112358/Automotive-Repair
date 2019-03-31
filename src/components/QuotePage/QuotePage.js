import React, { Component } from "react";
import QuoteForm from "./QuoteForm";
import texture from "./texture.jpg";
import "./QuotePage.css";

export default class QuotePage extends Component {
  render() {
    return (
      <div className="quote-wrapper">
        <QuoteForm />
        <div
          className="content-wrapper"
          style={{
            backgroundImage: "url(" + texture + ")"
          }}
        />
      </div>
    );
  }
}
