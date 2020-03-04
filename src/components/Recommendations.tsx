import React from "react";

import { t } from "helpers";
import { ReadMore } from "components";
import { ROUTES } from "Routes";

export function Recommendations() {
  return (
    <div id="recommendations" className="page_content">
      <div className="full_width_centered">
        <div className="left_full">
          <p>{t("recommendations.mainText")}</p>
        </div>
        <div className="left13_first">
          <h3>{t("hotels.title")}</h3>
          <div className="image">
            <img
              src="/images/recommendations/alojamiento.jpeg"
              alt={t("hotels.title")}
            />
          </div>
          <ReadMore route={ROUTES.HOTELS} />
        </div>

        <div className="left13">
          <h3>{t("restaurants.title")}</h3>
          <div className="image">
            <img
              src="/images/recommendations/restaurantes.jpeg"
              alt={t("restaurants.title")}
            />
          </div>
          <ReadMore route={ROUTES.RESTAURANTS} />
        </div>

        <div className="left13_last">
          <h3>{t("plans.title")}</h3>
          <div className="image">
            <img
              src="/images/recommendations/planes.jpeg"
              alt={t("plans.title")}
            />
          </div>
          <ReadMore route={ROUTES.PLANS} />
        </div>
        <div className="clear"></div>
      </div>
    </div>
  );
}
