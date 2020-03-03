import React, { useContext } from "react";

import { Texts } from "types";
import { TextContext } from "core";
import { Content, Full, Page, MOD } from "components";

export function MasSantMarc() {
  const texts: Texts = useContext(TextContext);
  return (
    <Page title={texts.santMarc.title} mod={MOD.MOD3}>
      <Content>
        <Full title={texts.santMarc.subtitle}>
          {texts.santMarc.description}
        </Full>
      </Content>
    </Page>
  );
}
