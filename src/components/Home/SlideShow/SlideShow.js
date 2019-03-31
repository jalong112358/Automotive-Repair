import React, { Component } from "react";

import "./SlideShow.css";

import bgImage1 from "./bgImages/bgImage1.jpg";
import bgImage2 from "./bgImages/bgImage2.jpg";
import bgImage3 from "./bgImages/bgImage3.jpg";

class SlideShow extends Component {
  state = {
    slides: [
      {
        heading: "SERVICE YOU CAN TRUST",
        subheading:
          "We pride ourselves on only offering the best quality work for your vehicle.",
        buttonText: "Our Services",
        buttonLink: "/services",
        image: bgImage2
      },
      {
        heading: "PROFESSIONAL STAFF",
        subheading:
          "Our highest priority is customer satisfaction, which is why we only hire the most skilled technicians in the industry.",
        buttonText: "Meet Our Team",
        buttonLink: "/about",
        image: bgImage3
      },
      {
        heading: "NEED A QUOTE?",
        subheading:
          "Call us today or click the button below for a free estimate on your next repair.",
        buttonText: "Get A Quote",
        buttonLink: "/quote",
        image: bgImage1
      }
    ],
    currentIndex: 0,
    slideshowClasses: "slideshow"
  };

  startSlides = () => {
    setInterval(() => {
      this.setState({ slideshowClasses: "slideshow fade-out" });
      setTimeout(() => {
        if (this.state.currentIndex < this.state.slides.length - 1) {
          this.setState({
            currentIndex: this.state.currentIndex + 1,
            slideshowClasses: "slideshow fade-in"
          });
        } else {
          this.setState({
            currentIndex: 0,
            slideshowClasses: "slideshow fade-in"
          });
        }
      }, 700);
    }, 8000);
  };

  componentDidMount() {
    this.startSlides();
  }

  nextSlide = () => {
    this.setState({ slideshowClasses: "slideshow fade-out" });
    setTimeout(() => {
      if (this.state.currentIndex < this.state.slides.length - 1) {
        this.setState({
          currentIndex: this.state.currentIndex + 1,
          slideshowClasses: "slideshow fade-in"
        });
      } else {
        this.setState({
          currentIndex: 0,
          slideshowClasses: "slideshow fade-in"
        });
      }
    }, 500);
  };

  prevSlide = () => {
    this.setState({ slideshowClasses: "slideshow fade-out" });
    setTimeout(() => {
      if (this.state.currentIndex > 0) {
        this.setState({
          currentIndex: this.state.currentIndex - 1,
          slideshowClasses: "slideshow fade-in"
        });
      } else {
        this.setState({
          currentIndex: this.state.slides.length - 1,
          slideshowClasses: "slideshow fade-in"
        });
      }
    }, 500);
  };

  render() {
    return (
      <div className="slideshow-background">
        <div
          className={this.state.slideshowClasses}
          style={{
            backgroundImage:
              "url(" + this.state.slides[this.state.currentIndex].image + ")"
          }}
        >
          <div className="slide-controller">
            <div className="arrow-left-wrapper" onClick={this.prevSlide}>
              <div className="arrow left" />
            </div>
            <div className="arrow-right-wrapper" onClick={this.nextSlide}>
              <div className="arrow right" />
            </div>
          </div>
          <div className="slideshow-content">
            <h1>{this.state.slides[this.state.currentIndex].heading}</h1>
            <h2>{this.state.slides[this.state.currentIndex].subheading}</h2>
            <button>
              <a href={this.state.slides[this.state.currentIndex].buttonLink}>
                {this.state.slides[this.state.currentIndex].buttonText}
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SlideShow;
