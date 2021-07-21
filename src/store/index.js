/**
 * store
 */
import reducers from "../reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Storage from "Utils/storage";
// const store = () => {
//   return createStore(reducers, applyMiddleware(thunk));
// }
export const store = createStore(reducers, applyMiddleware(thunk));

