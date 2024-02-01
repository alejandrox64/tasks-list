import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../reducers/tasksSlice";
import editTaskReducer from "../reducers/taskEditSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    editTask: editTaskReducer,
  },
});
