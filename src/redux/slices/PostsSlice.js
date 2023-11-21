import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  blogs: [],
  status: "idle",
  error: null,
};

export const fetchPost = createAsyncThunk("fetch Posts", async (thunkAPI) => {
  try {
    const response = await axios.get(process.env.REACT_APP_URL_API + "/posts");
    console.log(response);
    return response;
  } catch (err) {
    return thunkAPI.rejectWithValue({ errore: err.response.data });
  }
});

const PostsSlice = createSlice({
  name: "blogs slice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.status = "idle";
        state.blogs = action.payload;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export const {} = PostsSlice.actions;
export default PostsSlice.reducer;
