import React, { useContext } from "react";
import TextContext from "../core/TextContext";

export default function Title(
  { hasBirds }: { hasBirds?: boolean } = { hasBirds: false }
) {
  const texts: { [key: string]: any } = useContext(TextContext);
  const title = texts.title;
  return (
    <div className="title_container">
      <div className="title_front">{title.title}</div>
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
      <div className="title_under">{title.saveTheDate}</div>
      <div className="title_quote">{title.introText}</div>
    </div>
  );
}
