import React, { useContext } from "react";
import TextContext from "../core/TextContext";

import { Texts } from "types";
import Title from "../components/Title";
import Slider from "../components/Slider";
import Countdown from "../components/Countdown";
import About from "../components/About";
import Carousel from "../components/Carousel";
import Blog from "../components/Blog";

function Home() {
  const texts: Texts = useContext(TextContext);
  return (
    <>
      <Title hasBirds={false} texts={texts} />
      <Slider />
      <Countdown texts={texts} />
      <About />
      <Carousel />
      <Blog />
    </>
  );
}

export default Home;
