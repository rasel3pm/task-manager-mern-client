import settingsSlice from "../slice/counter/counterSlice";
import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "../slice/taskSlice/taskSlice";
import summaryReducer from "../slice/summary/summarySlice";
export default configureStore({
  reducer: {
    settings: settingsSlice,
    task: taskSlice,
    summary: summaryReducer,
  },
});
