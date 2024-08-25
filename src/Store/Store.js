import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Features/authSlice";
import productSlice from "../Features/productSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productSlice,
  },
});

export default store;
