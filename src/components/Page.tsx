import React from "react";

import { BigHeader } from "components/BigHeader";

export enum MOD {
  MOD1 = "page_header_trans page_header_trans--mod1",
  MOD2 = "page_header_trans page_header_trans--mod2",
  MOD3 = "page_header_trans page_header_trans--mod3",
  MOD4 = "page_header_trans page_header_trans--mod4",
  MOD5 = "page_header_trans page_header_trans--mod5",
  MOD6 = "page_header_trans page_header_trans--mod6"
}

export function Page({
  title,
  children,
  subContent,
  mod
}: {
  title: string;
  mod: MOD;
  subContent?: JSX.Element;
  children?: JSX.Element;
}) {
  return (
    <>
      <BigHeader className={mod} title={title.toUpperCase()}>
        {subContent}
      </BigHeader>
      {children}
    </>
  );
}
