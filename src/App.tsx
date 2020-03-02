import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import translations from "./translations.json";
import Routes from "Routes";
import { TextProvider } from "core";
import { Footer, Navigation, Locations, ScrollToTop } from "components";

class App extends Component {
  render() {
    return (
      <TextProvider value={translations}>
        <Router>
          <ScrollToTop />
          <Navigation />
          <Routes />
          <Locations />
          <Footer />
        </Router>
      </TextProvider>
    );
  }
}

export default App;
