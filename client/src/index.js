import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./styl/main.styl";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
