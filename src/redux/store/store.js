import settingsSlice from "../slice/settings/settingsSlice";
import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "../slice/taskSlice/taskSlice";
import summaryReducer from "../slice/summary/summarySlice";
import profileSlice from "../slice/profile/profileSlice";
export default configureStore({
  reducer: {
    settings: settingsSlice,
    task: taskSlice,
    summary: summaryReducer,
    profile: profileSlice,
  },
});
