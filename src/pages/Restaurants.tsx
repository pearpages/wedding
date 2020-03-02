import React, { useContext } from "react";

import { Texts } from "types";
import { TextContext } from "core";
import { Page, Content } from "components";

export function Restaurants() {
  const texts: Texts = useContext(TextContext);
  return (
    <Page title={texts.restaurants.title}>
      <Content></Content>
    </Page>
  );
}
