import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { appendScriptInTheDOM } from "./helpers";

appendScriptInTheDOM("js/jquery-1.11.1.min.js", () => {
  $(document).ready(function() {
    $(".footer").load("./partials/footer.html");
    $(".home_bottom").load("./partials/locations.html");
  });
});

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
