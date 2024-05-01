import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import appReducer from "./slices/app"

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  //whitelist:[],
  //backlist:[],
};

const rootReducer = combineReducers({
  app: appReducer,
});
export { rootPersistConfig, rootReducer };
