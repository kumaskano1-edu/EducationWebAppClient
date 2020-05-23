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
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import RootReducer from "./state/authentication/reducers/RootReducer";
import registerServiceWorker from "./registerServiceWorker";
/*APOLLO CLIENT */
const cache = new InMemoryCache();
const link = createHttpLink({
  uri: "https://go-study-backend.herokuapp.com/",
  headers: {
    authorization: localStorage.getItem("token"),
  },
  credentials: "same-origin",
});
const client = new ApolloClient({
  cache,
  link,
});
/* REDUX CLIENT */
const initStore = {};
const store = createStore(
  RootReducer,
  initStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);

registerServiceWorker();
