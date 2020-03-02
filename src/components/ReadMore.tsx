import React, { useContext } from "react";
import { Link } from "react-router-dom";

import TextContext from "core/TextContext";
import { Texts } from "types";

export default function ReadMore({ route = "/" }: { route?: string }) {
  const texts: Texts = useContext(TextContext);
  return (
    <div style={{ margin: "20px", textAlign: "center" }}>
      <Link className="post_read_more" to={route}>
        {texts.global.readMore}
      </Link>
    </div>
  );
}
