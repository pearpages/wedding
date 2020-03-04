import React from "react";

import { t } from "helpers";
import { Page, MOD } from "components";

export function RSVP() {
  return <Page title={t("rsvp.title")} mod={MOD.MOD2}></Page>;
}
