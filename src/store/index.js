/**
 * store
 */
import reducers from "../reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const storageConfig = {
  key: 'root', // 必须有的
  storage: storage, // 缓存机制
  blacklist: []
}
const myPersistReducer = persistReducer(storageConfig, reducers);
export const store = createStore(myPersistReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
