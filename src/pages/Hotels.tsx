import React from "react";

import { t } from "helpers";
import { Page, MOD } from "components";

export function Hotels() {
  return <Page title={t("hotels.title")} mod={MOD.MOD4}></Page>;
}
