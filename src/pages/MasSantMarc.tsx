import React, { useContext } from "react";

import { Texts } from "types";
import { TextContext } from "core";
import { Content, Full, Page } from "components";

export default function MasSantMarc() {
  const texts: Texts = useContext(TextContext);
  return (
    <Page title={texts.santMarc.title}>
      <Content>
        <Full title={texts.santMarc.subtitle}>
          {texts.santMarc.description}
        </Full>
      </Content>
    </Page>
  );
}
