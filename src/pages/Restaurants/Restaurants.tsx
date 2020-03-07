import React from "react";

import { Restaurant as RestaurantData } from "./data";
import { data } from "./data";
import "./Restaurants.scss";
import { t } from "helpers";
import { Page, MOD, HalfLeft, HalfRight, Address } from "components";
import { getSymbol, getImage } from "helpers";

const Restaurant = ({ restaurant }: { restaurant: RestaurantData }) => (
  <div className="restaurant">
    <div className="restaurant__image" {...getImage(restaurant.image)}></div>
    <Address
      data={{
        title: `${restaurant.name} ${getSymbol(restaurant.price, "€")}`,
        category: `${restaurant.cousine}`,
        htmlBody: restaurant.address
      }}
    />
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
