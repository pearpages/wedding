import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import translations from "./translations.json";
import Routes from "Routes";
import { TextProvider } from "core";
import { appendScriptInTheDOM } from "helpers";
import { Footer, Navigation, ScrollToTop } from "components";

class App extends Component {
  componentDidMount() {
    const done = setInterval(() => {
      try {
        appendScriptInTheDOM("/js/effects.js");
        appendScriptInTheDOM("/js/jquery.arctext.js");
        appendScriptInTheDOM("/js/jquery.countdown.js");
        clearInterval(done);
      } catch (_) {}
    }, 100);
  }
  render() {
    return (
      <TextProvider value={translations}>
        <Router>
          <ScrollToTop />
          <Navigation />
          <Routes />
          {/* <Locations /> */}
          <Footer />
        </Router>
      </TextProvider>
    );
  }
}

export default App;
