import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";

import TextContext from "../core/TextContext";
import { Texts } from "types";

function Footer() {
  const texts: Texts = useContext(TextContext);
  return (
    <div className="footer">
      <div className="full_width_centered">
        <div className="footer_sign">
          <span className="swirl_left_transparent">
            <span className="swirl_right_transparent">
              <img src="images/birds_icon.png" alt="" title="" />{" "}
            </span>
          </span>
        </div>
        <div className="footer_names">
          {texts.global.bride} &amp; {texts.global.groom}
        </div>
        <div className="footer_socials">
          <ul>
            <li>
              <Link to="/">
                <img src="images/social/twitter.png" alt="" title="" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src="images/social/facebook.png" alt="" title="" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src="images/social/pinterest.png" alt="" title="" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src="images/social/vimeo.png" alt="" title="" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src="images/social/google.png" alt="" title="" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src="images/social/instagram.png" alt="" title="" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src="images/social/youtube.png" alt="" title="" />
              </Link>
            </li>
          </ul>
        </div>
        <nav className="footer_menu">
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="selected">
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/asfdaf" activeClassName="selected">
                THE WEDDING
              </NavLink>
            </li>
            <li>
              <NavLink to="/afsdafa" activeClassName="selected">
                RSVP
              </NavLink>
            </li>
            <li>
              <NavLink to="/afdfafs" activeClassName="selected">
                GET IN TOUCH
              </NavLink>
            </li>
            <li>
              <span
                onClick={() =>
                  jQuery("html, body").animate({ scrollTop: 0 }, "slow")
                }
                className="gotop link"
                title="Go on top"
              >
                TOP
              </span>
            </li>
          </ul>
        </nav>
        <div className="footer_copyright">Made with love.</div>
      </div>
    </div>
  );
}

export default Footer;
