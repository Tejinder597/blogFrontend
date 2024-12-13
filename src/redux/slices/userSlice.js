import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.users = action.payload;
    },
    updateUser: (state, action) => {
      if (state.users) {
        const { updatedData } = action.payload;
        state.users = { ...state.users, ...updatedData };
      }
    },
    deleteUser: (state) => {
      state.users = null;
    },
  },
});

export const { createUser, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
