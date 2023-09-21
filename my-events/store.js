import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./src/features/auth";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
