import React, { useContext } from "react";

import { Texts } from "types";
import { TextContext } from "core";
import { Page, Content } from "components";

export function Hotels() {
  const texts: Texts = useContext(TextContext);
  return (
    <Page title={texts.hotels.title}>
      <Content></Content>
    </Page>
  );
}
