import React from "react";
import { Switch, Route } from "react-router-dom";

import { Route as AppRoute } from "types";
import {
  Home,
  NoMatch,
  MasSantMarc,
  SantaMaria,
  Allotjament,
  Plans,
  Restaurants
} from "pages";

export enum ROUTES {
  HOME = "/",
  RECOMMENDATIONS = "/#recommendations",
  MAS_SANT_ARC = "/mas-sant-marc",
  SANTA_MARIA_DE_TALLO = "/santa-maria-de-tallo",
  ALLOTJAMENT = "/recomendations/hotels",
  PLANS = "/plans",
  RESTAURANTS = "/recommendations/restaurants"
}

export const ROUTE_MAPPING: AppRoute[] = [
  { path: ROUTES.HOME, label: "home" },
  { path: ROUTES.SANTA_MARIA_DE_TALLO, label: "wedding" },
  { path: ROUTES.ALLOTJAMENT, label: "hotels" },
  {
    path: ROUTES.RECOMMENDATIONS,
    isAnchor: true,
    label: "recommendations",
    children: [
      { path: ROUTES.RESTAURANTS, label: "restaurants" },
      { path: ROUTES.PLANS, label: "plans" }
    ]
  },
  { path: "abc", label: "presents" },
  { path: "cde", label: "rsvp" },
  { path: "fgh", label: "contact" }
];

export default function Routes() {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route path={ROUTES.MAS_SANT_ARC}>
        <MasSantMarc />
      </Route>
      <Route path={ROUTES.SANTA_MARIA_DE_TALLO}>
        <SantaMaria />
      </Route>
      <Route path={ROUTES.ALLOTJAMENT}>
        <Allotjament />
      </Route>
      <Route path={ROUTES.PLANS}>
        <Plans />
      </Route>
      <Route path={ROUTES.RESTAURANTS}>
        <Restaurants />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
}
