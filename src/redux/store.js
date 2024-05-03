import { configureStore } from "@reduxjs/toolkit";
import {
  useDispatch as useAppDispatch,
  useSelector as useAppselector,
} from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import { rootPeristConfig, rootReducer } from "./rootReducer";


const store = configureStore({
  reducer: persistReducer(rootPeristConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

const persistor = persistStore(store);

const { dispatch } = store;

const useSelector = useAppselector;

const useDispatch = () => useAppDispatch();

export { store, persistor, dispatch, useSelector, useDispatch };
