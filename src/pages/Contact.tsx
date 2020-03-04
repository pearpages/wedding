import React from "react";

import { t } from "helpers";
import { Page, MOD } from "components";

export function Contact() {
  return <Page title={t("contact.title")} mod={MOD.MOD1}></Page>;
}
