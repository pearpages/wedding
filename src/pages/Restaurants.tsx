import React from "react";

import { t } from "helpers";
import { Page, MOD } from "components";

export function Restaurants() {
  return <Page title={t("restaurants.title")} mod={MOD.MOD5}></Page>;
}
