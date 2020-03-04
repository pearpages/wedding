import React from "react";

import { t } from "helpers";
import { Full, Page, MOD } from "components";

export function MasSantMarc() {
  return (
    <Page title={t("santMarc.title")} mod={MOD.MOD3}>
      <Full title={t("santMarc.subtitle")}>
        <>{t("santMarc.description")}</>
      </Full>
    </Page>
  );
}
