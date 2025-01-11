/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "request",
  initialState: null,
  reducers: {
    addReqeust: (state, action) => action.payload,
    removeRequest: (state, action) => {
      const modifiedReqArr = state.filter((r) => r._id !== action.payload);
      return modifiedReqArr;
    },
  },
});

export const { addReqeust, removeRequest } = requestSlice.actions;
export default requestSlice.reducer;
