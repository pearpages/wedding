import React, { useContext } from "react";
import { Link } from "react-router-dom";
import image1 from "./images/image1.jpeg";
import image2 from "./images/image2.jpeg";
import image3 from "./images/image3.jpeg";

import TextContext from "../core/TextContext";

export default function Recommendations() {
  const texts: { [key: string]: any } = useContext(TextContext);
  return (
    <div className="page_content">
      <div className="full_width_centered" style={{ textAlign: "center" }}>
        <div className="left_full">
          <p>{texts.recommendations.mainText}</p>
        </div>
        <div className="left13_first">
          <h3>Alojamiento</h3>
          <div className="image">
            <img src={image1} />
          </div>

          <Link className="post_read_more" to="/">
            {texts.global.readMore}
          </Link>
        </div>

        <div className="left13">
          <h3>Restaurantes</h3>
          <div className="image">
            <img src={image2} />
          </div>

          <Link className="post_read_more" to="/">
            {texts.global.readMore}
          </Link>
        </div>

        <div className="left13_last">
          <h3>Planes</h3>
          <div className="image">
            <img src={image3} />
          </div>

          <Link className="post_read_more" to="/">
            {texts.global.readMore}
          </Link>
        </div>
        <div className="clear"></div>
      </div>
    </div>
  );
}
