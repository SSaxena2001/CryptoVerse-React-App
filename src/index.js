import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

// import "antd/dist/antd.css";
import "antd/dist/antd.min.css";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
