import React from "react";

import { appendScriptInTheDOM } from "helpers";
import { Texts } from "types";

const effect = () => {
  const $titlefront = $(".title_front").show();
  const $titleunder = $(".title_under").show();

  ($titlefront.show() as any).arctext({ radius: 250 });
  ($titleunder.show() as any).arctext({ radius: 180, dir: -1 });

  appendScriptInTheDOM("/js/jquery.skippr.js");
  ($("#random") as any).skippr({
    navType: "bubble",
    transition: "fade",
    autoPlay: true,
    autoPlayDuration: 4000,
    speed: 1000,
    arrows: false
  });
};

export function Title({
  hasBirds,
  texts
}: {
  hasBirds: boolean;
  texts: Texts;
}) {
  const done = setInterval(() => {
    try {
      effect();
      clearInterval(done);
    } catch (_) {}
  }, 100);

  return (
    <div className="title_container">
      <div className="title_front" style={{ display: "none" }}>
        {texts.title.title}
      </div>
      {hasBirds ? (
        <div className="love_birds" style={{ height: "40px" }}>
          <img src="images/birds_icon.png" alt="" title="" />
        </div>
      ) : null}
      <div className="title">
        {texts.global.bride} <span>&amp;</span> {texts.global.groom}
      </div>
      <div className="title_date">
        <span className="swirl_left">
          <span className="swirl_right">{texts.global.date}</span>
        </span>
      </div>
      <div className="title_under" style={{ display: "none" }}>
        {texts.title.saveTheDate}
      </div>
      <div className="title_quote">{texts.title.introText}</div>
    </div>
  );
}
