import React from "react";

import { BigHeader } from "components/BigHeader";

export function Page({
  title,
  children,
  subContent
}: {
  title: string;
  subContent?: JSX.Element;
  children?: JSX.Element;
}) {
  return (
    <>
      <BigHeader title={title.toUpperCase()}>{subContent}</BigHeader>
      {children}
    </>
  );
}
