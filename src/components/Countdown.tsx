import React, { Component } from "react";

class Countdown extends Component {
  render() {
    return (
      <div className="countdown_container">
        <h2 className="centered_title">Countdown to Wedding Ceremony</h2>
        <div id="defaultCountdown"></div>
        <div className="rsvp_button">
          <span className="swirl_left_small">
            <span className="swirl_right_small">
              <a href="rsvp.html">RSVP</a>
            </span>
          </span>
        </div>
      </div>
    );
  }
}

export default Countdown;
