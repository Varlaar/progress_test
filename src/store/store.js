import { legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
