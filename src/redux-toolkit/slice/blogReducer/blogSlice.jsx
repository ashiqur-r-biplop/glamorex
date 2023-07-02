import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
    const res = await axios.get("/blogs.json")
    return res.data
})

const blogSlice = createSlice({
    name: 'blogs',
    initialState: {
        isLoading: false,
        blogs: [],
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBlogs.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(fetchBlogs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.blogs = action.payload
        });
        builder.addCase(fetchBlogs.rejected, (state) => {
            state.isLoading = false;
            state.error = action.error.message,
            state.blogs = []
        });
    }

})

export default blogSlice.reducer
