import React from "react";
import { render } from "react-dom";

import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./App";
import reducers from "./reducers";

const store = createStore(
  reducers,
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const application = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

const rootElement = document.getElementById("root");
render(application, rootElement);
