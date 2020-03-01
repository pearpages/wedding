import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import MasSantMarc from "./pages/MasSantMarc";
import SantaMaria from "./pages/SantaMaria";

export enum ROUTES {
  HOME = "/",
  MAS_SANT_ARC = "/mas-sant-marc",
  SANTA_MARIA_DE_TALLO = "/santa-maria-de-tallo"
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
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
}
