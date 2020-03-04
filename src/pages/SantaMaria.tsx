import React from "react";

import { t } from "helpers";
import { Page, Full, MOD } from "components";

export function SantaMaria() {
  return (
    <Page title={t("santaMaria.title")} mod={MOD.MOD3}>
      <Full title={t("santaMaria.subtitle")}>
        <p>{t("santaMaria.description")}</p>
      </Full>
    </Page>
  );
}
