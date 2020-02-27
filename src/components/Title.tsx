import React from "react";

export default function Title(
  { hasBirds }: { hasBirds?: boolean } = { hasBirds: false }
) {
  return (
    <div className="title_container">
      <div className="title_front">WE ARE GETTING MARRIED</div>
      {hasBirds ? (
        <div className="love_birds" style={{ height: "40px" }}>
          <img src="images/birds_icon.png" alt="" title="" />
        </div>
      ) : null}
      <div className="title">
        Marta <span>&amp;</span> Pere
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
