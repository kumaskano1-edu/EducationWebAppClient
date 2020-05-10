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

import App from "./App";

import registerServiceWorker from "./registerServiceWorker";
const link = createHttpLink({
  uri: "http://localhost:4000/",
  credentials: "same-origin",
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
  credentials: "include",
  onError: (e) => {
    console.log(e);
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
