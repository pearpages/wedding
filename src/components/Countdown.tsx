import React from "react";
import { Link } from "react-router-dom";

import { Texts } from "types";

export function Countdown({ texts }: { texts: Texts }) {
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

  return (
    <div className="countdown_container">
      <h2 className="centered_title">{texts.countdown.title}</h2>
      <div id="defaultCountdown"></div>
      <div className="countdown_message">{texts.countdown.message}</div>
      <div className="rsvp_button">
        <span className="swirl_left_small">
          <span className="swirl_right_small">
            <Link to="/">{texts.countdown.button}</Link>
          </span>
        </span>
      </div>
    </div>
  );
}
