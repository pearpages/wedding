import React from "react";

import "./Hotels.scss";
import { t, getSymbol, getImage } from "helpers";
import { Full, Page, MOD, Address } from "components";
import { hotels, Hotel as HotelData } from "./data";

const Hotel = ({ data }: { data: HotelData }) => (
  <div className="hotel">
    <div className="hotel__image" {...getImage(data.image)}></div>
    <Address
      data={{
        title: `${data.name} ${getSymbol(data.stars, "*")}`,
        category: `Precio ${getSymbol(data.price, "€")}`,
        htmlBody: data.address,
        link: data.booking
      }}
    />
  </div>
);

export function Hotels() {
  return (
    <Page title={t("hotels.title")} mod={MOD.MOD4}>
      <>
        <Full>
          <>
            <p>{t("hotels.left")}</p>
            <p>{t("hotels.right")}</p>
          </>
        </Full>
        {hotels.map((hotel: HotelData, i: number) => (
          <Full key={i}>
            <Hotel key={i} data={hotel} />
          </Full>
        ))}
      </>
    </Page>
  );
}
