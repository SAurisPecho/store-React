import { createReducer } from "@reduxjs/toolkit";
import productsActions from "../actions/products";

const {captureText}= productsActions;

const initialState = { text: "" };

const productsReducers = createReducer(initialState, (build) =>
  build.addCase(captureText, (state, action) => {
    const newState = {
      ...state,
      text: action.payload.text,
    };
    return newState;
  })
);

export default productsReducers;
