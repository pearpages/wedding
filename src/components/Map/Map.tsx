import React from "react";

import "./Map.scss";
import { getImage } from "helpers";

export function Map({ image }: { image: string }) {
  return (
    <div className="map">
      <div className="map__image" {...getImage(image)}></div>
    </div>
  );
}
