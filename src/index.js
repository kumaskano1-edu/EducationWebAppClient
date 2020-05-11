import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { withClientState } from "apollo-link-state";
import App from "./App";

import registerServiceWorker from "./registerServiceWorker";
const cache = new InMemoryCache();
const link = createHttpLink({
  uri: "http://localhost:4000/",
  headers: {
    authorization: localStorage.getItem("token"),
  },
  credentials: "same-origin",
});

const stateLink = withClientState({
  cache,
  defaults: {
    isAuthenticated: false,
    subjects: [],
  },
});
const client = new ApolloClient({
  cache,
  stateLink,
  link,
});
cache.writeData({
  data: {
    isAuthenticated: !!localStorage.getItem("token"),
  },
});
ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);

registerServiceWorker();
