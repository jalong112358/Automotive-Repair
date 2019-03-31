import React, { Component } from "react";
import "./CustomerCounter.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

class CustomerCounter extends Component {
  state = {
    didViewCountUp: false
  };
  onVisibilityChange = isVisible => {
    if (isVisible) {
      this.setState({ didViewCountUp: true });
    }
  };

  render() {
    return (
      <div className="counter-wrapper">
        <div className="counter">
          <VisibilitySensor
            onChange={this.onVisibilityChange}
            offset={{
              top: 10
            }}
            delayedCall
          >
            <CountUp
              className="countup"
              start={0}
              end={this.state.didViewCountUp ? 9 : 0}
              duration={3}
            />
          </VisibilitySensor>
          <h2>Years Of Operation</h2>
        </div>
        <div className="counter">
          <VisibilitySensor
            onChange={this.onVisibilityChange}
            offset={{
              top: 10
            }}
            delayedCall
          >
            <CountUp
              className="countup"
              start={0}
              end={this.state.didViewCountUp ? 13 : 0}
              duration={3}
            />
          </VisibilitySensor>
          <h2>Qualified Mechanics</h2>
        </div>
        <div className="counter">
          <VisibilitySensor
            onChange={this.onVisibilityChange}
            offset={{
              top: 10
            }}
            delayedCall
          >
            <CountUp
              className="countup"
              separator=","
              start={0}
              end={this.state.didViewCountUp ? 23576 : 0}
              duration={3}
            />
          </VisibilitySensor>
          <h2>Satisfied Customers</h2>
        </div>
      </div>
    );
  }
}

export default CustomerCounter;
