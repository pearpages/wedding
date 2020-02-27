import React, { Component } from "react";

class Carousel extends Component {
  render() {
    return (
      <div className="carousel_container">
        <div className="carousel_container_image">
          <div className="full_width_carousel">
            <h2>OUR BRIDESMAIDS AND GROOMSMEN'S</h2>
            <span className="carousel_titles">
              BEST MAN &amp; MAID OF HONOR
            </span>
            <div id="weddingcarousel" className="owl-carousel">
              <div className="left14">
                <div className="bestman">
                  <span>BEST MAN</span>
                  <img src="images/bestman.png" alt="" title="" />
                </div>
                <img src="images/image_14.jpg" alt="" title="" />
                <h3>MIKE STEPHANSON</h3>
              </div>
              <div className="left14">
                <div className="bestman">
                  <span>MAID OF HONOR</span>
                  <img src="images/maidofhonor.png" alt="" title="" />
                </div>
                <img src="images/image_14_3.jpg" alt="" title="" />
                <h3>LINDSEY REMY</h3>
              </div>
              <div className="left14">
                <img src="images/image_14_2.jpg" alt="" title="" />
                <h3>ELIZABETH LYN</h3>
              </div>
              <div className="left14_last">
                <img src="images/image_14_6.jpg" alt="" title="" />
                <h3>STEVE KAY</h3>
              </div>
              <div className="left14">
                <img src="images/image_14_5.jpg" alt="" title="" />
                <h3>JOHN DOE</h3>
              </div>
              <div className="left14">
                <img src="images/image_14_3.jpg" alt="" title="" />
                <h3>MAYA ELIOT</h3>
              </div>
              <div className="left14">
                <img src="images/image_14_7.jpg" alt="" title="" />
                <h3>JOHANNA PASCAL</h3>
              </div>
              <div className="left14_last">
                <img src="images/image_14_8.jpg" alt="" title="" />
                <h3>JOHN DOE</h3>
              </div>
            </div>
            <div className="view_all_carousel">
              <a href="bridesmaids.html">
                VIEW ALL BRIDESMAIDS AND GROOMSMEN'S
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
