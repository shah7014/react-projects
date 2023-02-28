import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "React", content: "I want to learn react and be good at it" },
  {
    id: 2,
    title: "Redux",
    content: "I want to implement redux in some poroject",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addAPost: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title, content) => {
        return {
          payload: {
            title,
            content,
            id: nanoid(),
          },
        };
      },
    },
  },
});

export const allPostsSelector = (state) => state.posts;

export const { addAPost } = postsSlice.actions;

export default postsSlice.reducer;
