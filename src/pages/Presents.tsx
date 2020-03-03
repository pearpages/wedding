import React, { useContext } from "react";

import { Texts } from "types";
import { TextContext } from "core";
import { Page, Content, MOD } from "components";

export function Presents() {
  const texts: Texts = useContext(TextContext);
  return (
    <Page title={texts.presents.title} mod={MOD.MOD3}>
      <Content></Content>
    </Page>
  );
}
