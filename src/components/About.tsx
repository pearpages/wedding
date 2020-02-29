import React, { useContext } from "react";
import TextContext from "../core/TextContext";

function About() {
  const texts: { [key: string]: any } = useContext(TextContext);
  return (
    <div className="about_content">
      <div className="about_topsign">&amp;</div>
      <div className="full_width_centered">
        <div className="left12_first">
          <span className="names_titles">{texts.about.theBride}</span>
          <h2>{texts.global.bride}</h2>
          <div className="about_pic_container">
            <span className="about_picframe"></span>
            <div className="about_social">
              <a href="#">
                <img src="images/social/twitter.png" alt="" title="" />
              </a>
              <a href="#">
                <img src="images/social/facebook.png" alt="" title="" />
              </a>
              <a href="#">
                <img src="images/social/pinterest.png" alt="" title="" />
              </a>
            </div>
            <div className="about_pic">
              <img src="images/image12.jpg" alt="" title="" />
            </div>
          </div>
          <a href="#" className="thumb_read_more">
            {texts.about.moreAbout} {texts.global.bride.toUpperCase()}
          </a>
          <p dangerouslySetInnerHTML={{ __html: texts.about.brideText }} />
          <span className="love_quote">{texts.about.brideQuote}</span>
        </div>
        <div className="left12_last">
          <span className="names_titles">{texts.about.theGroom}</span>
          <h2>{texts.global.groom}</h2>
          <div className="about_pic_container">
            <span className="about_picframe"></span>
            <div className="about_social">
              <a href="#">
                <img src="images/social/twitter.png" alt="" title="" />
              </a>
              <a href="#">
                <img src="images/social/facebook.png" alt="" title="" />
              </a>
              <a href="#">
                <img src="images/social/pinterest.png" alt="" title="" />
              </a>
            </div>
            <div className="about_pic">
              <img src="images/image12_2.jpg" alt="" title="" />
            </div>
          </div>
          <a href="#" className="thumb_read_more">
            {texts.about.moreAbout} {texts.global.groom.toUpperCase()}
          </a>
          <p dangerouslySetInnerHTML={{ __html: texts.about.groomText }} />
          <span className="love_quote">{texts.about.groomQuote}</span>
        </div>

        <div className="clear"></div>
      </div>
    </div>
  );
}

export default About;
