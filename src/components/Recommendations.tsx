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
    <div id="recommendations" className="page_content">
      <div className="full_width_centered">
        <div className="left_full">
          <p>{texts.recommendations.mainText}</p>
        </div>
        <div className="left13_first">
          <h3>{texts.hotels.title}</h3>
          <div className="image">
            <img src={image1} alt={texts.hotels.title} />
          </div>
          <ReadMore route={ROUTES.ALLOTJAMENT} />
        </div>

        <div className="left13">
          <h3>{texts.restaurants.title}</h3>
          <div className="image">
            <img src={image2} alt={texts.restaurants.title} />
          </div>
          <ReadMore route={ROUTES.RESTAURANTS} />
        </div>

        <div className="left13_last">
          <h3>{texts.plans.title}</h3>
          <div className="image">
            <img src={image3} alt={texts.plans.title} />
          </div>
          <ReadMore route={ROUTES.PLANS} />
        </div>
        <div className="clear"></div>
      </div>
    </div>
  );
}
