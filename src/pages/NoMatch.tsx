import React from "react";
import { useLocation } from "react-router-dom";

import Page from "../components/Page";
import Content from "../components/Content";

export default function NoMatch() {
  let location = useLocation();
  const subContent = (
    <p>
      No match for <code>{location.pathname}</code>
    </p>
  );

  return (
    <Page title="404" subContent={subContent}>
      <Content />
    </Page>
  );
}
