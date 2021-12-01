import { createSlice } from "@reduxjs/toolkit";

const initialPostState = { postArray: [] };

const postSlice = createSlice({
  name: "post",
  initialState: initialPostState,
  reducers: {
    addPost(state, action) {
      state.postArray = [...state.postArray, action.payload];
    },
  },
});

export const postActions = postSlice.actions;

export default postSlice.reducer;
