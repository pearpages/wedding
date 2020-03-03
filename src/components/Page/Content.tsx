import React from "react";

export function Content({ children }: { children?: JSX.Element }) {
  return (
    <div className="page_content">
      <div className="full_width_centered">
        {children}
        <div className="clear"></div>
      </div>
    </div>
  );
}
