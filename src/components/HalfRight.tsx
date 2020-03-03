import React from "react";

export function HalfRight({
  title,
  children
}: {
  title?: string;
  children?: JSX.Element;
}) {
  return (
    <div className="left12_last">
      {title ? <h2>{title}</h2> : null}
      {children}
    </div>
  );
}
