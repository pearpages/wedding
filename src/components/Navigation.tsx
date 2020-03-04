import React from "react";
import { NavLink } from "react-router-dom";

import { appendScriptInTheDOM } from "helpers";
import { Route } from "types";
import { ROUTE_MAPPING } from "Routes";

export function Navigation() {
  const done = setInterval(() => {
    try {
      appendScriptInTheDOM("/js/menu.js");
      appendScriptInTheDOM("/js/init2.js");
      $(".show_menu").click(function() {
        $(".menu").fadeIn();
        $(".show_menu").fadeOut();
        $(".hide_menu").fadeIn();
      });
      $(".hide_menu").click(function() {
        $(".menu").fadeOut();
        $(".show_menu").fadeIn();
        $(".hide_menu").fadeOut();
      });

      clearInterval(done);
    } catch (_) {}
  }, 100);
  return (
    <>
      <span className="show_menu">
        <img src="images/mobile_menu_open.png" alt="open" />
      </span>
      <span className="hide_menu">
        <img src="images/mobile_menu_close.png" alt="close" />
      </span>

      <nav className="menu">
        <ul id="main_menu">
          {ROUTE_MAPPING.map((route: Route) => {
            return (
              <li key={route.label}>
                <NavLink
                  exact
                  activeClassName={route.isAnchor ? "none" : "selected"}
                  to={route.path}
                >
                  {route.label}
                </NavLink>
                {route.children ? (
                  <ul>
                    {route.children.map((route: Route) => (
                      <li key={route.label}>
                        <NavLink exact activeClassName="none" to={route.path}>
                          {route.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
