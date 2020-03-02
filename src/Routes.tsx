import React from "react";
import { Switch, Route } from "react-router-dom";

import { Route as AppRoute } from "types";
import {
  Home,
  NoMatch,
  MasSantMarc,
  SantaMaria,
  Hotels,
  Plans,
  Wedding,
  Restaurants,
  RSVP,
  Contact,
  Presents
} from "pages";

export enum ROUTES {
  HOME = "/",
  RECOMMENDATIONS = "/#recommendations",
  WEDDING = "/wedding",
  MAS_SANT_ARC = "/wedding/mas-sant-marc",
  SANTA_MARIA_DE_TALLO = "/wedding/santa-maria-de-tallo",
  HOTELS = "/recomendations/hotels",
  PLANS = "/recommendations/plans",
  RESTAURANTS = "/recommendations/restaurants",
  CONTACT = "/contact",
  PRESENTS = "/presents",
  RSVP = "/rsvp"
}

export const ROUTE_MAPPING: AppRoute[] = [
  { path: ROUTES.HOME, label: "home" },
  { path: ROUTES.WEDDING, label: "wedding" },
  { path: ROUTES.HOTELS, label: "hotels" },
  {
    path: ROUTES.RECOMMENDATIONS,
    isAnchor: true,
    label: "recommendations",
    children: [
      { path: ROUTES.RESTAURANTS, label: "restaurants" },
      { path: ROUTES.PLANS, label: "plans" }
    ]
  },
  { path: ROUTES.PRESENTS, label: "presents" },
  { path: ROUTES.RSVP, label: "rsvp" },
  { path: ROUTES.CONTACT, label: "contact" }
];

export default function Routes() {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route exact path={ROUTES.WEDDING}>
        <Wedding />
      </Route>
      <Route path={ROUTES.MAS_SANT_ARC}>
        <MasSantMarc />
      </Route>
      <Route path={ROUTES.SANTA_MARIA_DE_TALLO}>
        <SantaMaria />
      </Route>
      <Route path={ROUTES.HOTELS}>
        <Hotels />
      </Route>
      <Route path={ROUTES.PLANS}>
        <Plans />
      </Route>
      <Route path={ROUTES.RESTAURANTS}>
        <Restaurants />
      </Route>
      <Route path={ROUTES.RSVP}>
        <RSVP />
      </Route>
      <Route path={ROUTES.CONTACT}>
        <Contact />
      </Route>
      <Route path={ROUTES.PRESENTS}>
        <Presents />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
}
