import { combineReducers } from "redux";
import { user } from "./user/reducer";
import { bonus } from "./bonus/reducer";

export const rootReducer = combineReducers({
  user,
  bonus,
});
