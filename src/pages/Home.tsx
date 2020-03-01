import React, { Component } from "react";

import Title from "../components/Title";
import Slider from "../components/Slider";
import Countdown from "../components/Countdown";
// import About from "../components/About";
// import Carousel from "../components/Carousel";
// import Blog from "../components/Blog";

class Home extends Component {
  render() {
    return (
      <>
        <Title />
        <Slider />
        <Countdown />
        {/* <About /> */}
        {/* <Carousel /> */}
        {/* <Blog /> */}
      </>
    );
  }
}

export default Home;
