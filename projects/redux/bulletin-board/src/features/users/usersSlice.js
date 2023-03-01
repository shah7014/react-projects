import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "Cid Kagenou" },
  { id: "2", name: "Rimuru Tempest" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const allUsersSelector = (state) => state.users;

export default usersSlice.reducer;
