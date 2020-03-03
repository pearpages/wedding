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
    <div className="page_header_photo general_header">
      <div className={"page_header_trans " + className}>
        <div className="page_header_title">
          <h1>{title}</h1>
          {children}
        </div>
      </div>
    </div>
  );
}
