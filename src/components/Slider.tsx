import React from "react";

const images = [
  "https://d16jncjlowucvw.cloudfront.net/slider/slide1_e4ddpy.jpg",
  "https://d16jncjlowucvw.cloudfront.net/slider/slide2_ma5nd6.jpg",
  "https://d16jncjlowucvw.cloudfront.net/slider/slide3_ewhgf3.jpg"
];

export function Slider() {
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
