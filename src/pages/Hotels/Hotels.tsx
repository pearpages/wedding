import React from "react";
import { Link } from "react-router-dom";

import "./Hotels.scss";
import { t, getSymbol, getImage } from "helpers";
import { Full, Page, MOD } from "components";
import { hotels, Hotel as HotelData } from "./data";

const Hotel = ({ data }: { data: HotelData }) => (
  <div className="hotel">
    <div className="hotel__image" {...getImage(data.image)}></div>
    <div className="information">
      <h5 className="information__name">
        {data.name} {getSymbol(data.stars, "*")}
      </h5>
      <div className="information__cousine">
        Precio {getSymbol(data.price, "€")}
      </div>
      <div className="information__address">{data.address}</div>
      <a className="small-button" target="_blank" href={data.booking}>
        RESERVA
      </a>
    </div>
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
          <Full>
            <Hotel key={i} data={hotel} />
          </Full>
        ))}
      </>
    </Page>
  );
}
