import React, { useContext } from "react";
import { Link } from "react-router-dom";

import TextContext from "../core/TextContext";

function Countdown() {
  const translations: { [key: string]: any } = useContext(TextContext);
  const texts = translations.countdown;
  return (
    <div className="countdown_container">
      <h2 className="centered_title">{texts.title}</h2>
      <div id="defaultCountdown"></div>
      <div className="rsvp_button">
        <span className="swirl_left_small">
          <span className="swirl_right_small">
            <Link to="/">{texts.button}</Link>
          </span>
        </span>
      </div>
    </div>
  );
}

export default Countdown;
