import {configureStore} from "@reduxjs/toolkit";
import blogReducer from "./slice/blogReducer/blogSlice";
import productReducer from "./slice/featureReducer/productSlice";
import SingleBlogReducer from "./slice/blogReducer/SingleBlogSlice";

const store = configureStore({
    reducer: {
        featureProduct: productReducer,
        blogs: blogReducer,
        blog: SingleBlogReducer
    }
})

export default store