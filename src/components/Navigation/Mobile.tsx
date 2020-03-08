import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Mobile.scss";
import { Route } from "types";
import { ROUTE_MAPPING } from "Routes";

export function Mobile() {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isRecommendationsVisible, setRecommendationsVisible] = useState(false);
  const hideMenu = () => setMenuVisible(false);
  const showMenu = () => setMenuVisible(true);

  function getOnclickEvent(route: Route): (event: any) => void {
    if (route.children) {
      return () => setRecommendationsVisible(!isRecommendationsVisible);
    }
    return () => setMenuVisible(false);
  }

  return (
    <>
      {isMenuVisible ? (
        <span className="hide_menu" onClick={hideMenu}>
          <img src="/images/mobile_menu_close.png" alt="close" />
        </span>
      ) : (
        <span className="show_menu" onClick={showMenu}>
          <img src="/images/mobile_menu_open.png" alt="open" />
        </span>
      )}

      <nav
        className={
          isMenuVisible
            ? "menu menu--mobile menu--visible"
            : "menu menu--mobile"
        }
      >
        <ul id="main_menu">
          {ROUTE_MAPPING.map((route: Route) => {
            return (
              <li key={route.label} onClick={getOnclickEvent(route)}>
                {!route.children ? (
                  <NavLink
                    exact
                    activeClassName={route.isAnchor ? "none" : "selected"}
                    to={route.path}
                  >
                    {route.label}
                  </NavLink>
                ) : (
                  <span
                    style={{
                      cursor: "pointer",
                      lineHeight: "35px",
                      color: "white"
                    }}
                  >
                    {route.label}
                  </span>
                )}
                {route.children && isRecommendationsVisible ? (
                  <ul style={{ display: "block" }}>
                    {route.children.map((route: Route) => (
                      <li key={route.label} onClick={hideMenu}>
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
