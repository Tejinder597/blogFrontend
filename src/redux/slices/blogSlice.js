import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    createBlog: (state, action) => {
      state.blogs.push(action.payload);
    },
    updateBlog: (state, action) => {
      const { id, data } = action.payload;
      const index = state.blogs.findIndex((blog) => blog.id === id);
      if (index) {
        state.blogs[index] = { ...state.blogs[index], ...data };
      }
    },
    deleteBlog: (state, action) => {
      state.blogs = state.blogs.filter((blog) => blog.id !== action.payload.id);
    },
  },
});

export const { createBlog, updateBlog, deleteBlog } = blogSlice.actions;

export default blogSlice.reducer;
