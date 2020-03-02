import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";

import { TextContext } from "core";
import { Texts, Route } from "types";
import { ROUTE_MAPPING } from "Routes";

export function Footer() {
  const texts: Texts = useContext(TextContext);
  const done = setInterval(() => {
    try {
      const $footernames = $(".footer_names");
      ($footernames.show() as any).arctext({ radius: 120, dir: -1 });
      clearInterval(done);
    } catch (_) {}
  });
  return (
    <div className="footer">
      <div className="full_width_centered">
        <div className="footer_sign">
          <span className="swirl_left_transparent">
            <span className="swirl_right_transparent">
              <img src="/images/birds_icon.png" alt="" title="" />{" "}
            </span>
          </span>
        </div>
        <div className="footer_names" style={{ display: "none" }}>
          {texts.global.bride} &amp; {texts.global.groom}
        </div>
        <div className="footer_socials">
          <ul>
            <li>
              <Link to="/">
                <img src="/images/social/twitter.png" alt="" title="" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src="/images/social/facebook.png" alt="" title="" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src="/images/social/pinterest.png" alt="" title="" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src="/images/social/vimeo.png" alt="" title="" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src="/images/social/google.png" alt="" title="" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src="/images/social/instagram.png" alt="" title="" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src="/images/social/youtube.png" alt="" title="" />
              </Link>
            </li>
          </ul>
        </div>
        <nav className="footer_menu">
          <ul>
            {ROUTE_MAPPING.map((route: Route) => (
              <li key={route.label}>
                <NavLink
                  exact
                  to={route.path}
                  activeClassName={route.isAnchor ? "" : "selected"}
                >
                  {texts.navigation[route.label]}
                </NavLink>
              </li>
            ))}
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
