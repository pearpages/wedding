import React, { useContext } from "react";

import { TextContext } from "core";
import { Texts } from "types";

import cerdanya from "./images/cerdanya.jpg";
import japo from "./images/japo.jpg";

function Persona({
  subtitle,
  title,
  readMore,
  text,
  quote,
  image
}: {
  subtitle: string;
  title: string;
  readMore: string;
  text: string;
  quote: string;
  image: string;
}) {
  const social = [
    { link: "mailto:hello@martapere.com", img: "images/social/google.png" }
  ];
  return (
    <>
      <span className="names_titles">{subtitle}</span>
      <h2>{title}</h2>
      <div className="about_pic_container">
        <span className="about_picframe"></span>
        <div className="about_social">
          {social.map((s, key) => (
            <a key={key} href={s.link}>
              <img src={s.img} alt="" title="" />
            </a>
          ))}
        </div>
        <div className="about_pic">
          <div
            style={{
              backgroundImage: `url(${image})`,
              width: "100%",
              backgroundSize: "cover",
              backgroundPosition: "bottom center",
              minHeight: "400px"
            }}
          ></div>
        </div>
      </div>
      {/* <Link to="/" className="thumb_read_more">
        {readMore}
      </Link> */}
      {/* <p dangerouslySetInnerHTML={{ __html: text }} />
      <span className="love_quote">{quote}</span> */}
    </>
  );
}

export function BrideNGroom() {
  const texts: Texts = useContext(TextContext);
  return (
    <div className="about_content">
      <div className="about_topsign">&amp;</div>
      <div className="full_width_centered">
        <div className="left12_first">
          <Persona
            subtitle={texts.about.theBride}
            title={texts.global.bride}
            readMore={`${
              texts.about.moreAbout
            } ${texts.global.bride.toUpperCase()}`}
            text={texts.about.brideText}
            quote={texts.about.brideQuote}
            image={cerdanya}
          />
        </div>
        <div className="left12_last">
          <Persona
            subtitle={texts.about.theGroom}
            title={texts.global.groom}
            readMore={`${
              texts.about.moreAbout
            } ${texts.global.groom.toUpperCase()}`}
            text={texts.about.groomText}
            quote={texts.about.groomQuote}
            image={japo}
          />
        </div>

        <div className="clear"></div>
      </div>
    </div>
  );
}
