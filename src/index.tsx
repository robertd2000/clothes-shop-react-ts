import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";

import setUpStore from "./store/store";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);
const store = setUpStore();

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
