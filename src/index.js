import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, gql } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink, createHttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";

import App from "./App";
import Authentication from "./my-pages/Authentication";

import registerServiceWorker from "./registerServiceWorker";
const link = createHttpLink({
  uri: "http://localhost:4000/",
  credentials: "same-origin",
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
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
