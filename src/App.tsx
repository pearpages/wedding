import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import translations from "./translations.json";
import Routes from "Routes";
import { TextProvider } from "core";
import { appendScriptInTheDOM } from "helpers";
import {
  Footer,
  Locations,
  Navigation,
  ScrollToTop,
  Recommendations
} from "components";

class App extends Component {
  componentDidMount() {
    const done = setInterval(() => {
      try {
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
      <TextProvider value={translations}>
        <Router>
          <ScrollToTop />
          <Navigation />
          <Routes />
          <Recommendations />
          <Locations />
          <Footer />
        </Router>
      </TextProvider>
    );
  }
}

export default App;
