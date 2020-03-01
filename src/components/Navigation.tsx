import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <>
        <span className="show_menu">
          <img src="images/mobile_menu_open.png" alt="" title="" />
        </span>
        <span className="hide_menu">
          <img src="images/mobile_menu_close.png" alt="" title="" />
        </span>

        <nav className="menu">
          <ul id="main_menu">
            <li>
              <NavLink exact activeClassName="selected" to="/">
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/">THE WEDDING</NavLink>
              <ul>
                <li>
                  <NavLink to="/">LOVELY DROP DOWN</NavLink>
                </li>
                <li>
                  <NavLink to="/">LOVELY DROP DOWN</NavLink>
                </li>
                <li>
                  <NavLink to="/">LOVELY DROP DOWN</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/">BLOG</NavLink>
            </li>
            <li>
              <NavLink to="/">PHOTOS</NavLink>
            </li>
            <li>
              <NavLink to="/">RSVP</NavLink>
            </li>
            <li>
              <NavLink to="/">GET IN TOUCH</NavLink>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Navigation;
