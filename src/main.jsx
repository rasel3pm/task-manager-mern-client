import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/css/bootstrap.css";
import "./assets/css/animate.min.css";
import "./assets/css/style.css";
import "./assets/css/sidebar.css";
import "./assets/css/progress.css";
import "./assets/css/dropdownmenu.css";

import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
