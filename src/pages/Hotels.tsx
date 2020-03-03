import React, { useContext } from "react";

import { Texts } from "types";
import { TextContext } from "core";
import { Page, MOD } from "components";

export function Hotels() {
  const texts: Texts = useContext(TextContext);
  return <Page title={texts.hotels.title} mod={MOD.MOD4}></Page>;
}
