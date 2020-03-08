import React from "react";

import "./Navigation.scss";
import { Desktop } from "./Desktop";
import { Mobile } from "./Mobile";

export function Navigation() {
  return (
    <>
      <Mobile />
      <Desktop />
    </>
  );
}
