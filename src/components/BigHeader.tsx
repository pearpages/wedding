import React from "react";

export function BigHeader({
  title,
  children,
  className
}: {
  title: string;
  className: string;
  children?: JSX.Element;
}) {
  return (
    <div className={"general_header " + className}>
      <div className="page_header_trans">
        <div className="page_header_title">
          <h1>{title}</h1>
          {children}
        </div>
      </div>
    </div>
  );
}
