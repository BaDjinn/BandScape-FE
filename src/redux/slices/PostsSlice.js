import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  status: "idle",
  error: null,
  currentPage: 1,

  totalPages: 2,
  totalPosts: 4,
};

export const fetchPost = createAsyncThunk(
  "fetch Posts",
  async ({ page, size }, thunkAPI) => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_URL_API + "/posts?page=" + page
      );
      console.log(response);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue({ errore: err.response.data });
    }
  }
);
export const createPost = createAsyncThunk(
  "create Posts",
  async ({ data }, thunkAPI) => {
    console.log(data);
    try {
      const response = await axios.post(
        process.env.REACT_APP_URL_API + "/posts/create",
        data
      );
      console.log(response);
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue({ errore: err.response.data });
    }
  }
);
export const DeletePost = createAsyncThunk(
  "delt Posts",
  async ({ id }, thunkAPI) => {
    try {
      const response = await axios.delete(
        process.env.REACT_APP_URL_API + "/posts/delete/" + id
      );
      console.log(response);
      // return response;
    } catch (err) {
      return thunkAPI.rejectWithValue({ errore: err.response.data });
    }
  }
);
export const upDatePost = createAsyncThunk(
  "update Posts",
  async ({ data, id }, thunkAPI) => {
    try {
      const response = await axios.patch(
        process.env.REACT_APP_URL_API + "/posts/update/" + id,
        data
      );
      console.log(response);
      // return response;
    } catch (err) {
      return thunkAPI.rejectWithValue({ errore: err.response.data });
    }
  }
);

const PostsSlice = createSlice({
  name: "blogs slice",
  initialState,
  reducers: { userLis(state, action) {} },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.status = "idle";
        state.posts = action.payload.posts;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export const {} = PostsSlice.actions;
export default PostsSlice.reducer;
