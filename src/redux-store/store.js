import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./index";

const Store = configureStore({
  reducer: appReducer,
});

export default Store;
