import { createAction } from "@reduxjs/toolkit";

const captureText = createAction(
    "captureText", 
    (obj) => ({payload: { text: obj.text } })
);

const productsActions = {captureText};

export default productsActions;
