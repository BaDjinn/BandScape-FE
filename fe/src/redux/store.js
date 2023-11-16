import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from "redux-persist/lib/storage";
const configurePersist = {
  key: "root",
  storage,
  whitelist: [""],
  // whitelist: ["checkout", "cart", "configurator"],
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_REDUX_SECRET,
      onError: (error) => {
        // console.log(error);
      },
    }),
  ],
};
const allReducer = combineReducers({});
const persistRed = persistReducer(configurePersist, allReducer);
const store = configureStore({
  reducer: persistRed,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
