import React, { Component } from "react";

import { appendScriptInTheDOM } from "./helpers";

class App extends Component {
  componentDidMount() {
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
  }
  render() {
    return <div id="main_container"></div>;
  }
}

export default App;
