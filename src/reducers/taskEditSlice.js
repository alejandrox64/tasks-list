import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const editTaskSlice = createSlice({
  name: "editTask",
  initialState,
  reducers: {
    idOfEdit: (state, action) => {
      return {
        id: action.payload,
      };
    },
  },
});

export const { idOfEdit } = editTaskSlice.actions;
export default editTaskSlice.reducer;
