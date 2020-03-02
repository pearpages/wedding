import React, { useContext } from "react";

import { Texts } from "types";
import TextContext from "../core/TextContext";
import Content from "../components/Content";
import Full from "../components/Full";
import Page from "../components/Page";

export default function SantaMaria() {
  const texts: Texts = useContext(TextContext);
  return (
    <Page title={texts.santaMaria.title}>
      <Content>
        <Full title={texts.santaMaria.subtitle}>
          {texts.santaMaria.description}
        </Full>
      </Content>
    </Page>
  );
}
