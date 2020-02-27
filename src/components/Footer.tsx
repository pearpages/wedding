import React, { Component } from "react";

class Footer extends Component {
  render() {
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
          <div className="footer_names">Marta &amp; Pere</div>
          <div className="footer_socials">
            <ul>
              <li>
                <a href="#">
                  <img src="images/social/twitter.png" alt="" title="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="images/social/facebook.png" alt="" title="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="images/social/pinterest.png" alt="" title="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="images/social/vimeo.png" alt="" title="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="images/social/google.png" alt="" title="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="images/social/instagram.png" alt="" title="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="images/social/youtube.png" alt="" title="" />
                </a>
              </li>
            </ul>
          </div>
          <nav className="footer_menu">
            <ul>
              <li>
                <a href="index.html" className="selected">
                  HOME
                </a>
              </li>
              <li>
                <a href="page.html">THE WEDDING</a>
              </li>
              <li>
                <a href="rsvp.html">RSVP</a>
              </li>
              <li>
                <a href="contact.html">GET IN TOUCH</a>
              </li>
              <li>
                <a
                  onClick={() =>
                    jQuery("html, body").animate({ scrollTop: 0 }, "slow")
                  }
                  className="gotop"
                  title="Go on top"
                >
                  TOP
                </a>
              </li>
            </ul>
          </nav>
          <div className="footer_copyright">Made with love.</div>
        </div>
      </div>
    );
  }
}

export default Footer;
