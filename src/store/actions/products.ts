import { createAction } from "@reduxjs/toolkit";

const captureText = createAction("captureText", (obj) => ({
  payload: { text: obj.text },
}));

const calculateTotal = createAction("calculateTotal", (obj) => {
  return {
    payload: { products: obj.products },
  };
});

const productsActions = { captureText, calculateTotal };

export default productsActions;
