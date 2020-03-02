import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Texts } from "types";

class Countdown extends Component<{ texts: Texts }> {
  componentDidMount() {
    const done = setInterval(() => {
      try {
        if (($("#defaultCountdown") as any).countdown) {
          ($("#defaultCountdown") as any).countdown({
            until: new Date(2020, 9 - 1, 12, 12),
            format: "y-o-d-h"
          });
          clearInterval(done);
        }
      } catch (_) {}
    }, 100);
  }
  render() {
    return (
      <div className="countdown_container">
        <h2 className="centered_title">{this.props.texts.countdown.title}</h2>
        <div id="defaultCountdown"></div>
        <div className="countdown_message">
          {this.props.texts.countdown.message}
        </div>
        <div className="rsvp_button">
          <span className="swirl_left_small">
            <span className="swirl_right_small">
              <Link to="/">{this.props.texts.countdown.button}</Link>
            </span>
          </span>
        </div>
      </div>
    );
  }
}

export default Countdown;
