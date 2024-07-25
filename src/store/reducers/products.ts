import { createReducer } from "@reduxjs/toolkit";
import productsActions from "../actions/products";

const { captureText } = productsActions;
const { calculateTotal } = productsActions;

const initialState = { text: "", total: 0 };

const productsReducers = createReducer(initialState, (build) =>
  build.addCase(captureText, (state, action) => {
    const newState = {
      ...state,
      text: action.payload.text,
    };
    return newState;
  })
  .addCase(calculateTotal, (state, action) => {
    const products = action.payload.products;
    const subtotales = products.map((each) => each.price * each.quantity);
    const total = subtotales.reduce((acc: number, each: number) => acc + each, 0);
    const newState = {
      ...state,
      total
    };
    return newState;
  })
);

export default productsReducers;
