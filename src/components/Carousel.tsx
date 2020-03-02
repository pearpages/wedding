import React, { useContext } from "react";
import { Link } from "react-router-dom";

import TextContext from "../core/TextContext";
import { Texts } from "types";

const people = [
  {
    src: "images/image_14_2.jpg",
    name: "ELIZABETH LYN"
  },
  { className: "left14_last", src: "images/image_14_6.jpg", name: "STEVE KAY" },
  {
    src: "images/image_14_5.jpg",
    name: "JOHN DOE"
  },
  {
    src: "images/image_14_3.jpg",
    name: "MAYA ELIOT"
  },
  {
    src: "images/image_14_7.jpg",
    name: "JOHANNA PASCAL"
  },
  { className: "left14_last", src: "images/image_14_8.jpg", name: "JOHN DOE" }
];

function Profile({
  src = "images/image_14_2.jpg",
  className = "left14",
  name
}: {
  src: string;
  className?: string;
  name: string;
}) {
  return (
    <div className={className}>
      <img src={src} alt="" title="" />
      <h3>{name}</h3>
    </div>
  );
}

function Carousel() {
  const translations: Texts = useContext(TextContext);
  const texts: Texts = translations.carousel;
  return (
    <div className="carousel_container">
      <div className="carousel_container_image">
        <div className="full_width_carousel">
          <h2>{texts.title}</h2>
          <span className="carousel_titles">{texts.subtitle}</span>
          <div id="weddingcarousel" className="owl-carousel">
            <div className="left14">
              <div className="bestman">
                <span>{texts.bestMan}</span>
                <img src="images/bestman.png" alt="" title="" />
              </div>
              <img src="images/image_14.jpg" alt="" title="" />
              <h3>MIKE STEPHANSON</h3>
            </div>
            <div className="left14">
              <div className="bestman">
                <span>{texts.maidOfHonor}</span>
                <img src="images/maidofhonor.png" alt="" title="" />
              </div>
              <img src="images/image_14_3.jpg" alt="" title="" />
              <h3>LINDSEY REMY</h3>
            </div>
            {people.map((person, key) => (
              <Profile key={key} {...person} />
            ))}
          </div>
          <div className="view_all_carousel">
            <Link to="/">{texts.button}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
