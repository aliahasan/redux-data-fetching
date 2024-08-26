import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
});

const postSlice = createSlice({
  name: "posts",
  initialState: {
    loading: false,
    posts: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
        state.error = null;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.posts = [];
        state.error = action.error.message || action.error;
      });
  },
});
export default postSlice.reducer;
