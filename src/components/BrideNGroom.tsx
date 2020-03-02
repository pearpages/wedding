import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { TextContext } from "core";
import { Texts } from "types";

function Persona({
  subtitle,
  title,
  readMore,
  text,
  quote
}: {
  subtitle: string;
  title: string;
  readMore: string;
  text: string;
  quote: string;
}) {
  const social = [
    { link: "/", img: "images/social/twitter.png" },
    { link: "/", img: "images/social/facebook.png" },
    { link: "/", img: "images/social/pinterest.png" }
  ];
  return (
    <>
      <span className="names_titles">{subtitle}</span>
      <h2>{title}</h2>
      <div className="about_pic_container">
        <span className="about_picframe"></span>
        <div className="about_social">
          {social.map((s, key) => (
            <Link key={key} to={s.link}>
              <img src={s.img} alt="" title="" />
            </Link>
          ))}
        </div>
        <div className="about_pic">
          <img src="images/image12.jpg" alt="" title="" />
        </div>
      </div>
      <Link to="/" className="thumb_read_more">
        {readMore}
      </Link>
      <p dangerouslySetInnerHTML={{ __html: text }} />
      <span className="love_quote">{quote}</span>
    </>
  );
}

function Bride({ texts }: { texts: Texts }) {
  const subtitle = texts.about.theBride;
  const title = texts.global.bride;
  const readMore = `${
    texts.about.moreAbout
  } ${texts.global.bride.toUpperCase()}`;
  const text = texts.about.brideText;
  const quote = texts.about.brideQuote;

  return (
    <Persona
      subtitle={subtitle}
      title={title}
      readMore={readMore}
      text={text}
      quote={quote}
    />
  );
}

function Groom({ texts }: { texts: Texts }) {
  const subtitle = texts.about.theGroom;
  const title = texts.global.groom;
  const readMore = `${
    texts.about.moreAbout
  } ${texts.global.groom.toUpperCase()}`;
  const text = texts.about.groomText;
  const quote = texts.about.groomQuote;

  return (
    <Persona
      subtitle={subtitle}
      title={title}
      readMore={readMore}
      text={text}
      quote={quote}
    />
  );
}

export function BrideNGroom() {
  const texts: Texts = useContext(TextContext);
  return (
    <div className="about_content">
      <div className="about_topsign">&amp;</div>
      <div className="full_width_centered">
        <div className="left12_first">
          <Bride texts={texts} />
        </div>
        <div className="left12_last">
          <Groom texts={texts} />
        </div>

        <div className="clear"></div>
      </div>
    </div>
  );
}
