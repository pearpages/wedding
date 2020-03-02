import React, { useContext } from "react";

import { Texts } from "types";
import { TextContext } from "core";
import { Page, Content } from "components";

export function RSVP() {
  const texts: Texts = useContext(TextContext);
  return (
    <Page title={texts.rsvp.title}>
      <Content></Content>
    </Page>
  );
}
