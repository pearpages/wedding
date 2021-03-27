import React from "react";
import { Link } from "react-router-dom";

import { t } from "helpers";
import { ROUTES } from "Routes";
import { appendScriptInTheDOM } from "helpers";

export function Countdown() {
  const done = setInterval(() => {
    try {
      appendScriptInTheDOM("/js/jquery.countdown.js");
      if (($("#defaultCountdown") as any).countdown) {
        ($("#defaultCountdown") as any).countdown({
          until: new Date(2021, 6 - 1, 12, 12),
          format: "y-o-d-h"
        });
        clearInterval(done);
      }
    } catch (_) {}
  }, 100);

  return (
    <div className="countdown_container">
      <h2 className="centered_title">{t("countdown.title")}</h2>
      <div id="defaultCountdown"></div>
      <div className="countdown_message">{t("countdown.message")}</div>
      <div className="rsvp_button">
        <span className="swirl_left_small">
          <span className="swirl_right_small">
            <Link to={ROUTES.RSVP}>{t("countdown.button")}</Link>
          </span>
        </span>
      </div>
    </div>
  );
}
