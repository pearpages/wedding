import React, { Component } from "react";

class Slider extends Component {
  render() {
    return (
      <div className="slider_container">
        <div className="slider_trans_black"></div>
        <div id="random">
          <div
            style={{ backgroundImage: "url(images/slider/slide1.jpg)" }}
          ></div>
          <div
            style={{ backgroundImage: "url(images/slider/slide2.jpg)" }}
          ></div>
          <div
            style={{ backgroundImage: "url(images/slider/slide3.jpg)" }}
          ></div>
        </div>
      </div>
    );
  }
}

export default Slider;
