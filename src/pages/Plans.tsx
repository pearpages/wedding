import React, { useContext } from "react";

import { Texts } from "types";
import { TextContext } from "core";
import { Page, Content, MOD } from "components";

export function Plans() {
  const texts: Texts = useContext(TextContext);
  return (
    <Page title={texts.plans.title} mod={MOD.MOD6}>
      <Content></Content>
    </Page>
  );
}
