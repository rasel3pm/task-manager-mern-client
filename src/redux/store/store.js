import settingsSlice from "../slice/counter/counterSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    settings: settingsSlice,
  },
});
