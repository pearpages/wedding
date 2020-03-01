import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "../Routes";
import TextContext from "../core/TextContext";
import { renderHtml } from "../helpers";

function Location({
  title,
  subtitle,
  address,
  iframe,
  route,
  icon
}: {
  title: string;
  subtitle: string;
  address: string;
  iframe: string;
  route: string;
  icon: string;
}) {
  const texts: { [key: string]: any } = useContext(TextContext);
  const global = texts.global;
  return (
    <>
      <div className="bottom_icon">
        <img src={icon} alt="" title="" />
      </div>
      <h2>{title}</h2>
      <span className="subtitle">{subtitle}</span>
      <p style={{ textAlign: "left" }} {...renderHtml(address)}></p>
      <iframe
        title={title}
        style={{ border: "1px double white", marginBottom: "10px" }}
        src={iframe}
        width="280"
        height="300"
      ></iframe>
      <Link className="post_read_more" to={route}>
        {global.readMore}
      </Link>
    </>
  );
}

function Locations() {
  const texts: { [key: string]: any } = useContext(TextContext);
  return (
    <div className="home_bottom">
      <div className="full_width_centered">
        <div className="left12_first">
          <Location
            title={texts["santaMaria"].title}
            subtitle={texts["santaMaria"].subtitle}
            address={texts["santaMaria"].location}
            iframe={texts["santaMaria"].iframe}
            route={ROUTES.SANTA_MARIA_DE_TALLO}
            icon={"images/icon_location.png"}
          />
        </div>
        <div className="left12_last">
          <Location
            title={texts["santMarc"].title}
            subtitle={texts["santMarc"].subtitle}
            address={texts["santMarc"].location}
            iframe={texts["santMarc"].iframe}
            route={ROUTES.MAS_SANT_ARC}
            icon={"images/icon_music.png"}
          />
        </div>
        {/* <div className="left13_last">
          <div className="bottom_icon">
            <img src="images/icon_gifts.png" alt="" title="" />
          </div>
          <h2>GIFT REGISTRY</h2>
          <span className="subtitle">GIVEN FREELY AND OUT OF PURE LOVE</span>
          <p>
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit
              <a href="https://google.es"> esse quam nihil</a> aspernatur aut
              odit aut fugit molestiae consequatur, vel illum{" "}
              <strong>qui dolorem</strong> eum fugiat quo voluptas nulla
              pariatur aspernatur.
            </p>
          <a href="page.html" className="post_read_more">
            READ MORE
          </a>
        </div> */}

        <div className="clear"></div>
      </div>
    </div>
  );
}

export default Locations;
