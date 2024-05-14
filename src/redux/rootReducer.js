import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import appReducer from "./slices/app"
import auth from "./slices/auth"


const rootPeristConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  //whitelist:[],
  //backlist:[],
};

const rootReducer = combineReducers({
  app : appReducer,
  auth: auth
});
export { rootPeristConfig, rootReducer };
