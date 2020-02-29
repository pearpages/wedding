import React, { useContext } from "react";
import TextContext from "../core/TextContext";

export default function Title(
  { hasBirds }: { hasBirds?: boolean } = { hasBirds: false }
) {
  const texts: { [key: string]: string } = useContext(TextContext);
  return (
    <div className="title_container">
      <div className="title_front">WE ARE GETTING MARRIED</div>
      {hasBirds ? (
        <div className="love_birds" style={{ height: "40px" }}>
          <img src="images/birds_icon.png" alt="" title="" />
        </div>
      ) : null}
      <div className="title">
        {texts.bride} <span>&amp;</span> {texts.groom}
      </div>
      <div className="title_date">
        <span className="swirl_left">
          <span className="swirl_right">12.09.2020</span>
        </span>
      </div>
      <div className="title_under">SAVE THE DATE</div>
    </div>
  );
}
