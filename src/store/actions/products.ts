import { createAction } from "@reduxjs/toolkit";

const captureText = createAction("captureText", (obj) => ({
  payload: { text: obj.text },
}));

const calculateTotal = createAction("calculateTotal", (obj) => {
  return {
    payload: { products: obj.products },
  };
});

const calculateCant = createAction("obtCantProductsOnCart", (obj) => ({
  payload: {cantProducts: obj.cantProducts },
}))

const productsActions = { captureText, calculateTotal, calculateCant };

export default productsActions;
