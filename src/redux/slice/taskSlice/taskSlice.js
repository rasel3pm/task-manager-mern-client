import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    new: [],
    progress: [],
    completed: [],
    canceled: [],
  },

  reducers: {
    newTask: (state, action) => {
      state.new = action.payload;
    },
    progressTask: (state, action) => {
      state.progress = action.payload;
    },
    completedTask: (state, action) => {
      state.completed = action.payload;
    },
    canceledTask: (state, action) => {
      state.canceled = action.payload;
    },
  },
});
export const { newTask, progressTask, completedTask, canceledTask } =
  taskSlice.actions;
export default taskSlice.reducer;
