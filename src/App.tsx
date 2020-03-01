import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ROUTES } from "./routes";

import translations from "./translations.json";
import { TextProvider } from "./core/TextContext";
import { appendScriptInTheDOM } from "./helpers";
import Navigation from "./components/Navigation";
import Locations from "./components/Locations";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import MasSantMarc from "./pages/MasSantMarc";
import SantaMaria from "./pages/SantaMaria";

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
          <Navigation />
          <Switch>
            <Route exact path={ROUTES.HOME}>
              <Home />
            </Route>
            <Route path={ROUTES.MAS_SANT_ARC}>
              <MasSantMarc />
            </Route>
            <Route path={ROUTES.SANTA_MARIA_DE_TALLO}>
              <SantaMaria />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
          <Locations />
          <Footer />
        </Router>
      </TextProvider>
    );
  }
}

export default App;
