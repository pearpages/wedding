import React from "react";

const images = [
  "https://pearpages-wedding2.s3.eu-west-2.amazonaws.com/slider/slide1_e4ddpy.jpg",
  "https://pearpages-wedding2.s3.eu-west-2.amazonaws.com/slider/slide2_ma5nd6.jpg",
  "https://pearpages-wedding2.s3.eu-west-2.amazonaws.com/slider/slide3_ewhgf3.jpg"
];

function Slider() {
  return (
    <div className="slider_container">
      <div className="slider_trans_black"></div>
      <div id="random">
        {images.map((url, key) => (
          <div
            key={key}
            style={{
              backgroundImage: `url(${url})`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
