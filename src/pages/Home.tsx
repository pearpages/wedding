import React, { useContext } from "react";

import { TextContext } from "core";
import { Texts } from "types";
import {
  Title,
  BrideNGroom,
  Blog,
  Carousel,
  Countdown,
  Slider
} from "components";

function Home() {
  const texts: Texts = useContext(TextContext);
  return (
    <>
      <Title hasBirds={false} texts={texts} />
      <Slider />
      <Countdown texts={texts} />
      <BrideNGroom />
      <Carousel />
      <Blog />
    </>
  );
}

export default Home;
