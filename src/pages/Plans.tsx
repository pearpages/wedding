import React from "react";

import { t } from "helpers";
import { Page, MOD } from "components";

export function Plans() {
  return <Page title={t("plans.title")} mod={MOD.MOD6}></Page>;
}
