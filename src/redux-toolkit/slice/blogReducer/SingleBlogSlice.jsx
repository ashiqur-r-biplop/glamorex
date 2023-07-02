import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBlog = createAsyncThunk("blogs/fetchBlogs", async (id) => {
    const res = await axios.get("/blogs.json")
    const blog = res.data.find(blog => blog._id === id)
    return blog
})

const SingleBlogSlice = createSlice({
    name: 'blog',
    initialState: {
        isLoading: false,
        blog: {},
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBlog.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(fetchBlog.fulfilled, (state, action) => {
            state.isLoading = false;
            state.blog = action.payload
        });
        builder.addCase(fetchBlog.rejected, (state) => {
            state.isLoading = false;
            state.error = action.error.message
        });
    }

})

export default SingleBlogSlice.reducer
