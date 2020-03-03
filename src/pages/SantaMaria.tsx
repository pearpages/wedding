import React, { useContext } from "react";

import { Texts } from "types";
import { TextContext } from "core";
import { Page, Content, Full, MOD } from "components";

export function SantaMaria() {
  const texts: Texts = useContext(TextContext);
  return (
    <Page title={texts.santaMaria.title} mod={MOD.MOD3}>
      <Content>
        <Full title={texts.santaMaria.subtitle}>
          {texts.santaMaria.description}
        </Full>
      </Content>
    </Page>
  );
}
