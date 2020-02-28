import React from "react";
import { useLocation } from "react-router-dom";

import BigHeader from "../components/BigHeader";
import Content from "../components/Content";

export default function NoMatch() {
  let location = useLocation();

  return (
    <>
      <BigHeader title="404">
        <p>
          No match for <code>{location.pathname}</code>
        </p>
      </BigHeader>
      <Content />
    </>
  );
}
