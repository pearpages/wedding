import React, { useContext } from "react";

import { Texts } from "types";
import { TextContext } from "core";
import { Page, MOD } from "components";

export function Restaurants() {
  const texts: Texts = useContext(TextContext);
  return <Page title={texts.restaurants.title} mod={MOD.MOD5}></Page>;
}
