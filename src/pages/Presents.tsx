import React from "react";

import { t } from "helpers";
import { Page, MOD } from "components";

export function Presents() {
  return <Page title={t("presents.title")} mod={MOD.MOD3}></Page>;
}
