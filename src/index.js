import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { initialAppLoadingAction } from "./store/InitialAppLoadingAction/initialAppLoadingAction";
// import { fetchVideos } from "./store/Explore/videolisting-actions";
// Call make Server
makeServer();
store.dispatch(initialAppLoadingAction());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
