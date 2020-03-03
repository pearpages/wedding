import React, { useContext } from "react";

import { Texts } from "types";
import { TextContext } from "core";
import { Page, Content, MOD } from "components";

export function Contact() {
  const texts: Texts = useContext(TextContext);
  return (
    <Page title={texts.contact.title} mod={MOD.MOD1}>
      <Content></Content>
    </Page>
  );
}
