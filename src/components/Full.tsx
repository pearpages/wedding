import React from "react";

export function Full({
  title,
  children
}: {
  title: string;
  children?: JSX.Element;
}) {
  return (
    <div className="left_full">
      <h2>{title}</h2>

      {children}
    </div>
  );
}
