import React from "react";
import ReactDOM from "react-dom";

// Importing Foundation CSS and JS as well as personal styles.
import "foundation-sites/dist/css/foundation.min.css";
import "foundation-sites/dist/js/foundation.min.js";
import "./index.css";

// Importing App for the rendering of each page and component.
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
