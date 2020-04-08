import React from "react";
import cerdanya from "./images/cerdanya.jpg";
import japo from "./images/japo.jpg";

function Post({
  className,
  src,
  style,
}: {
  className: string;
  src: string;
  style: any;
}) {
  return (
    <div className={className}>
      <div style={{ border: "40px solid #CECECE55" }}>
        <div
          style={{
            backgroundSize: "cover",
            backgroundImage: `url('${src}')`,
            height: "440px",
            ...style,
          }}
        ></div>
      </div>
    </div>
  );
}

export function Blog() {
  return (
    <div className="full_width_centered">
      <div className="latest_posts">
        <h2>NOSOTROS</h2>
        <div
          style={{
            fontSize: "26px",
            fontWeight: 800,
            margin: "-38px 0 21px 0",
          }}
        >
          Marta{" "}
          <span className="amp" style={{ color: "#b5af47", fontSize: "62px" }}>
            &amp;
          </span>{" "}
          Pere{" "}
        </div>
        <Post
          className={"left12_first"}
          src={japo}
          style={{ backgroundPosition: "center center" }}
        />
        <Post
          className={"left12_last"}
          src={cerdanya}
          style={{ backgroundPosition: "center bottom" }}
        />
        <div className="clear"></div>
      </div>
    </div>
  );
}
