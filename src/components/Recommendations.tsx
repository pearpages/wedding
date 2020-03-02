import React, { useContext } from "react";
import image1 from "./images/image1.jpeg";
import image2 from "./images/image2.jpeg";
import image3 from "./images/image3.jpeg";

import { TextContext } from "core";
import { Texts } from "types";
import { ReadMore } from "components";
import { ROUTES } from "Routes";

export function Recommendations() {
  const texts: Texts = useContext(TextContext);
  return (
    <div className="page_content">
      <div className="full_width_centered">
        <div className="left_full">
          <p>{texts.recommendations.mainText}</p>
        </div>
        <div className="left13_first">
          <h3>{texts.global.hotels}</h3>
          <div className="image">
            <img src={image1} alt={texts.global.hotels} />
          </div>
          <ReadMore route={ROUTES.ALLOTJAMENT} />
        </div>

        <div className="left13">
          <h3>{texts.global.restaurants}</h3>
          <div className="image">
            <img src={image2} alt={texts.global.restaurants} />
          </div>
          <ReadMore route={ROUTES.RESTAURANTS} />
        </div>

        <div className="left13_last">
          <h3>{texts.global.plans}</h3>
          <div className="image">
            <img src={image3} alt={texts.global.plans} />
          </div>
          <ReadMore route={ROUTES.PLANS} />
        </div>
        <div className="clear"></div>
      </div>
    </div>
  );
}
