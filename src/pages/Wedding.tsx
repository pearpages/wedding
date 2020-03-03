import React, { useContext } from "react";

import { Texts } from "types";
import { TextContext } from "core";
import { Page, Content, MOD } from "components";

export function Wedding() {
  const texts: Texts = useContext(TextContext);
  return (
    <Page title={texts.wedding.title} mod={MOD.MOD1}>
      <Content></Content>
    </Page>
  );
}
