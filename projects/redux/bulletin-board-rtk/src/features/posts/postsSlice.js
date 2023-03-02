import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "React",
    content: "I want to learn react and be good at it",
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: 2,
    title: "Redux",
    content: "I want to implement redux in some poroject",
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title, content, userId) => {
        return {
          payload: {
            title,
            content,
            id: nanoid(),
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },

    // updateReaction: (state, action) => {
    //   // action will have postId and the reaction updated
    //   const post = state.find((p) => p.id === action.payload.id);
    //   post.reactions[action.payload.reactionUpdated]++;
    // },
    updateReaction: {
      reducer: (state, { payload: { id, reactionUpdated } }) => {
        const post = state.find((p) => p.id === id);
        post.reactions[reactionUpdated]++;
      },
      prepare: (postId, reactionUpdated) => {
        return { payload: { id: postId, reactionUpdated } };
      },
    },
  },
});

export const allPostsSelector = (state) => state.posts;

export const { addPost, updateReaction } = postsSlice.actions;

export default postsSlice.reducer;
