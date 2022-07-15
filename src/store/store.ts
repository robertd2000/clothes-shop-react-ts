import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import productsReducer from "./reducers/productsReducer";
import categoryReducer from "./reducers/categoryReducer";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
  product: productsReducer,
  category: categoryReducer,
  cart: cartReducer
});

const setupStore = () =>
  configureStore({
    reducer: rootReducer
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
export default setupStore;
