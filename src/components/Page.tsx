import React from "react";

import BigHeader from "../components/BigHeader";

export default function Page({
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
      <BigHeader title={title}>{subContent}</BigHeader>
      {children}
    </>
  );
}
