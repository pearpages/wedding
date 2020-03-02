import React from "react";
import { Switch, Route } from "react-router-dom";

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
  MAS_SANT_ARC = "/mas-sant-marc",
  SANTA_MARIA_DE_TALLO = "/santa-maria-de-tallo",
  ALLOTJAMENT = "/allotjament",
  PLANS = "/plans",
  RESTAURANTS = "/restaurants"
}

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
