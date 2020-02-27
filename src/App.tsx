import React, { Component } from "react";

import { appendScriptInTheDOM } from "./helpers";

class App extends Component {
  componentDidMount() {
    appendScriptInTheDOM("js/jquery.skippr.js");
    appendScriptInTheDOM("js/init.js");

    appendScriptInTheDOM("js/owl.carousel.js");
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
