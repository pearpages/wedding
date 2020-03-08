// TODO: Improvement, right now it is only working the *hover* for *Recommendations* menu option. Do it for any other root element.

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Desktop.scss";
import { Route } from "types";
import { ROUTE_MAPPING } from "Routes";

function getShowMenu(
  route: Route,
  setRecommendationsVisible: (value: boolean) => void
): { onMouseOver: (event: any) => void } | null {
  return route.children
    ? { onMouseOver: (e: any) => setRecommendationsVisible(true) }
    : null;
}

export function Desktop() {
  const [isRecommendationsVisible, setRecommendationsVisible] = useState(false);
  return (
    <>
      <nav className="menu menu--desktop">
        <ul id="main_menu">
          {ROUTE_MAPPING.map((route: Route) => {
            return (
              <li
                key={route.label}
                onMouseEnter={() => setRecommendationsVisible(false)}
              >
                <NavLink
                  exact
                  activeClassName={route.isAnchor ? "none" : "selected"}
                  to={route.path}
                  {...getShowMenu(route, setRecommendationsVisible)}
                >
                  {route.label}
                </NavLink>
                {route.children ? (
                  <ul
                    className={isRecommendationsVisible ? "visible" : ""}
                    onMouseLeave={() => setRecommendationsVisible(false)}
                  >
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
