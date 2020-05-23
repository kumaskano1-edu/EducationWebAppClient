import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import RootReducer from "./state/reducers/RootReducer";
const persistConfig = {
  key: "auth",
  storage: storage,
};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const pReducer = persistReducer(persistConfig, RootReducer);
const store = createStore(
  pReducer,
  composeEnhancer(applyMiddleware(thunk, logger))
);
const persistor = persistStore(store);
export { persistor, store };
