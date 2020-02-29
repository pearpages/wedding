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
              <a href="page.html">THE WEDDING</a>
              <ul>
                <li>
                  <a href="page.html">LOVELY DROP DOWN</a>
                </li>
                <li>
                  <a href="page.html">LOVELY DROP DOWN</a>
                </li>
                <li>
                  <a href="page.html">LOVELY DROP DOWN</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="blog.html">BLOG</a>
            </li>
            <li>
              <a href="photos.html">PHOTOS</a>
            </li>
            <li>
              <a href="rsvp.html">RSVP</a>
            </li>
            <li>
              <a href="contact.html">GET IN TOUCH</a>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Navigation;
