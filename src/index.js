// import "react-app-polyfill/ie9";
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import "./styles.css"; // compiled tailwind css
// import "./neumorphic.css";
// import * as serviceWorker from "./service-worker";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import { isMobile } from "react-device-detect";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import App from "./App";
import "./animations-sushi.css";
import "./styles-sushi.css"; // compiled, compact, prefixed css
import "./styles.css"; // remaining css
import "./assets/neumorphic-sushi.css";
import "./assets/sushiBelt.css";
import * as serviceWorker from "./service-worker";

// initialize GA
const GOOGLE_ANALYTICS_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID;
if (typeof GOOGLE_ANALYTICS_ID === "string") {
  ReactGA.initialize(GOOGLE_ANALYTICS_ID);
  ReactGA.set({
    customBrowserType: !isMobile
      ? "desktop"
      : "web3" in window || "ethereum" in window
      ? "mobileWeb3"
      : "mobileRegular",
  });
} else {
  ReactGA.initialize("test", { testMode: true, debug: true });
}

function noop() {}
if (process.env.NODE_ENV !== "development") {
  console.log = noop;
  console.warn = noop;
  console.error = noop;
}

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2",
  }),
  fetchOptions: {
    mode: "no-cors",
  },
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
