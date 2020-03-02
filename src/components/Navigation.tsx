import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { Route, Texts } from "types";
import { ROUTE_MAPPING } from "Routes";
import { TextContext } from "core";

export function Navigation() {
  const texts: Texts = useContext(TextContext);
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
                  {texts.navigation[route.label]}
                </NavLink>
                {route.children ? (
                  <ul>
                    {route.children.map((route: Route) => (
                      <li key={route.label}>
                        <NavLink
                          exact
                          activeClassName="selected"
                          to={route.path}
                        >
                          {texts.navigation[route.label]}
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
