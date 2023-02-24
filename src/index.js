import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { fetchAuthUser } from "./redux/auth-slice";
import { fetchGameInfo } from "./redux/game-slice";
import { getAccessToken } from "./utils/local-storage";

if (getAccessToken()) {
  store.dispatch(fetchAuthUser());
}
store.dispatch(fetchGameInfo());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>
);
