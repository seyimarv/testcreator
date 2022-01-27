import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";




let middlewares: any [];

if (process.env.NODE_ENV === 'development') {
    middlewares = [logger];
  } else {
    middlewares = [];
  }

const store = createStore(rootReducer, applyMiddleware(...middlewares))

const persistor  = persistStore(store)

export { store, persistor};