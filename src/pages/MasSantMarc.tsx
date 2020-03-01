import React, { useContext } from "react";

import TextContext from "../core/TextContext";
import Content from "../components/Content";
import Full from "../components/Full";
import Page from "../components/Page";

export default function MasSantMarc() {
  const texts: { [key: string]: any } = useContext(TextContext);
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
