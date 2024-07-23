import { configureStore } from "@reduxjs/toolkit";
import productsReducers from "./reducers/products";

const store = configureStore({
  reducer: {
    products: productsReducers
  },
});

export default store;
