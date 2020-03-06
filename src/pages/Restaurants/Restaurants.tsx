import React from "react";

import { Restaurant as RestaurantData } from "./data";
import { data } from "./data";
import "./Restaurants.scss";
import { t } from "helpers";
import { Page, MOD, HalfLeft, HalfRight } from "components";
import { renderHtml } from "helpers";

const getPrice = (value: number) => {
  if (value === 1) {
    return "€";
  } else if (value === 2) {
    return "€€";
  } else if (value === 3) {
    return "€€€";
  }
};

const Restaurant = ({ restaurant }: { restaurant: RestaurantData }) => (
  <div className="restaurant">
    <div
      className="restaurant__image"
      style={{
        background: "url(" + restaurant.image + ")",
        backgroundSize: "cover"
      }}
    ></div>
    <div className="information">
      <h5 className="information__name">
        {restaurant.name} {getPrice(restaurant.price)}
      </h5>
      <p className="information__cousine">{restaurant.cousine}</p>
      <p
        className="information__address"
        {...renderHtml(restaurant.address)}
      ></p>
    </div>
  </div>
);

export function Restaurants() {
  return (
    <Page title={t("restaurants.title")} mod={MOD.MOD5}>
      <>
        {data.map((restaurant: RestaurantData, i: number) => {
          return i % 2 === 0 ? (
            <HalfLeft key={i}>
              <Restaurant restaurant={restaurant} />
            </HalfLeft>
          ) : (
            <HalfRight key={i}>
              <Restaurant restaurant={restaurant} />
            </HalfRight>
          );
        })}
      </>
    </Page>
  );
}
