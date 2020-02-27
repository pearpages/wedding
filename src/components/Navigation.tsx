import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <>
        <a className="show_menu" href="#">
          <img src="images/mobile_menu_open.png" alt="" title="" />
        </a>
        <a className="hide_menu" href="#">
          <img src="images/mobile_menu_close.png" alt="" title="" />
        </a>

        <nav className="menu">
          <ul id="main_menu">
            <li>
              <NavLink activeClassName="selected" to="/">
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
