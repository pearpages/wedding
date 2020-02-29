import React, { Component } from "react";

class Slider extends Component {
  render() {
    return (
      <div className="slider_container">
        <div className="slider_trans_black"></div>
        <div id="random">
          <div
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/pearpages/image/upload/v1582936177/slide1_e4ddpy.jpg)"
            }}
          ></div>
          <div
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/pearpages/image/upload/v1582936176/slide2_ma5nd6.jpg)"
            }}
          ></div>
          <div
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/pearpages/image/upload/v1582936177/slide3_ewhgf3.jpg)"
            }}
          ></div>
        </div>
      </div>
    );
  }
}

export default Slider;
