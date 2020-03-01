import React, { Component } from "react";

import { appendScriptInTheDOM } from "../helpers";

export default class Title extends Component<{
  hasBirds: boolean;
  texts: { [key: string]: any };
}> {
  componentDidMount() {
    // TODO: prevent component of reloadind the script eternally
    const done = setInterval(() => {
      try {
        appendScriptInTheDOM("js/jquery.skippr.js", () => {
          ($("#random") as any).skippr({
            navType: "bubble",
            transition: "fade",
            autoPlay: true,
            autoPlayDuration: 4000,
            speed: 1000,
            arrows: false
          });
        });
        clearInterval(done);
        console.log("all title module dependencies loaded");
      } catch (e) {
        console.log(
          "trying to initialize title module dependencies before jquery lodaded"
        );
      }
    }, 100);
  }
  render() {
    return (
      <div className="title_container">
        <div className="title_front">{this.props.texts.title.title}</div>
        {this.props.hasBirds ? (
          <div className="love_birds" style={{ height: "40px" }}>
            <img src="images/birds_icon.png" alt="" title="" />
          </div>
        ) : null}
        <div className="title">
          {this.props.texts.global.bride} <span>&amp;</span>{" "}
          {this.props.texts.global.groom}
        </div>
        <div className="title_date">
          <span className="swirl_left">
            <span className="swirl_right">{this.props.texts.global.date}</span>
          </span>
        </div>
        <div className="title_under">{this.props.texts.title.saveTheDate}</div>
        <div className="title_quote">{this.props.texts.title.introText}</div>
      </div>
    );
  }
}
