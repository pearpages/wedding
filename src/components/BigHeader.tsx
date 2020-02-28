import React, { Component } from "react";

export default class BigHeader extends Component<{
  title: string;
}> {
  render() {
    const { title, children } = this.props;
    return (
      <div className="page_header_photo general_header">
        <div className="page_header_trans">
          <div className="page_header_title">
            <h1>{title}</h1>
            {children}
          </div>
        </div>
      </div>
    );
  }
}
