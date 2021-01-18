import { combineReducers } from "redux";

import todoList from "./todoList";
import search from "./search";

export default combineReducers({
  todoList,
  search
});
