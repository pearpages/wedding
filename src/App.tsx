import React, { Component } from "react";

function appendScriptInTheDOM(path: string) {
  const script = document.createElement("script");
  script.src = path;

  document.body.appendChild(script);
}

class App extends Component {
  componentDidMount() {
    appendScriptInTheDOM("js/jquery-1.11.1.min.js");
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
