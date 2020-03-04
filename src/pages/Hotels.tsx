import React from "react";

import { t } from "helpers";
import { Full, Page, MOD } from "components";

export function Hotels() {
  return (
    <Page title={t("hotels.title")} mod={MOD.MOD4}>
      <>
        <Full>
          <>
            <p>{t("hotels.left")}</p>
            <p>{t("hotels.right")}</p>
          </>
        </Full>
      </>
    </Page>
  );
}
