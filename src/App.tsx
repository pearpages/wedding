import React, { Component } from "react";

import { appendScriptInTheDOM } from "./helpers";
import Navigation from "./components/Navigation";
import Title from "./components/Title";
import Slider from "./components/Slider";
import Countdown from "./components/Countdown";
import About from "./components/About";
import Carousel from "./components/Carousel";
import Blog from "./components/Blog";
import Locations from "./components/Locations";
import Footer from "./components/Footer";

class App extends Component {
  componentDidMount() {
    const done = setInterval(() => {
      try {
        appendScriptInTheDOM("js/jquery.skippr.js", () => {
          ($("#random") as any).skippr({
            navType: "bubble",
            transition: "fade",
            autoPlay: true,
            autoPlayDuration: 4000,
            speed: 1000,
            arrows: false
          });
        });
        appendScriptInTheDOM("js/owl.carousel.js", () => {
          ($("#weddingcarousel") as any).owlCarousel({
            items: 4,
            itemsScaleUp: true,
            navigationText: ["prev", "next"]
          });
        });
        appendScriptInTheDOM("js/menu.js");
        appendScriptInTheDOM("js/effects.js");
        appendScriptInTheDOM("js/jquery.arctext.js");
        appendScriptInTheDOM("js/jquery.countdown.js");
        appendScriptInTheDOM("js/init2.js");
        clearInterval(done);
        console.log("all external dependencies loaded");
      } catch (e) {
        console.log("trying to initialize before jquery lodaded");
      }
    }, 100);
  }
  render() {
    return (
      <>
        <Navigation />
        <Title />
        <Slider />
        <Countdown />
        <About />
        <Carousel />
        <Blog />
        <Locations />
        <Footer />
      </>
    );
  }
}

export default App;
