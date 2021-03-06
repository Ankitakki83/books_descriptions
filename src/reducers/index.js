import { combineReducers } from "redux";
import BooksReducer from "./reducer_book";
import ActiveBook from "./reducer_active_book";

const RootReducer = combineReducers({
  books: BooksReducer,
  activebook: ActiveBook
});

export default RootReducer;
