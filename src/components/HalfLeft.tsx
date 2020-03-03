import React from "react";

export function HalfLeft({
  title,
  children
}: {
  title?: string;
  children?: JSX.Element;
}) {
  return (
    <div className="left12_first">
      {title ? <h2>{title}</h2> : null}
      {children}
    </div>
  );
}
