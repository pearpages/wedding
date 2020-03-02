import React, { useContext } from "react";

import { Texts } from "types";
import { TextContext } from "core";
import { Page, Content } from "components";

export function Presents() {
  const texts: Texts = useContext(TextContext);
  return (
    <Page title={texts.wedding.title}>
      <Content></Content>
    </Page>
  );
}
