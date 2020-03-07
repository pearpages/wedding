import React, { useContext } from "react";

import { TextContext } from "core";
import { Texts } from "types";
import {
  Title,
  // BrideNGroom,
  // Blog,
  // Carousel,
  Locations,
  Countdown,
  Slider,
  Recommendations
} from "components";

export function Home() {
  const texts: Texts = useContext(TextContext);
  return (
    <>
      <Title hasBirds={false} texts={texts} />
      <Slider />
      <Countdown />
      <Locations />
      <Recommendations />
      {/* <BrideNGroom /> */}
      {/* <Carousel texts={texts} /> */}
      {/* <Blog /> */}
    </>
  );
}
