import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import User from "./User";

const store = configureStore({
  reducer: {
    user: User,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
