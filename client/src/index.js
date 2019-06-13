import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
//redux imports
import reducer from "./store/reducers";
import middleware from "./store/middleware";
import { Provider } from "react-redux";
import { createStore } from "redux";
//  router import
import { BrowserRouter } from "react-router-dom";

const store = createStore(reducer, middleware);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
