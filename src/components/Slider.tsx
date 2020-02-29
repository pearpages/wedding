import React from "react";

const images = [
  "https://res.cloudinary.com/pearpages/image/upload/v1582936177/slide1_e4ddpy.jpg",
  "https://res.cloudinary.com/pearpages/image/upload/v1582936176/slide2_ma5nd6.jpg",
  "https://res.cloudinary.com/pearpages/image/upload/v1582936177/slide3_ewhgf3.jpg"
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
