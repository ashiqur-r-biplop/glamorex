import {configureStore} from "@reduxjs/toolkit";
import blogReducer from "./slice/blogReducer/blogSlice";
import productReducer from "./slice/featureReducer/productSlice";
import SingleBlogReducer from "./slice/blogReducer/SingleBlogSlice";
import {adminGetApies} from "./slice/adminApis/adminGetApies";
import authReducer from "./slice/authSlice/authSlice";


const store = configureStore({
    reducer: {
        auth: authReducer,
        featureProduct: productReducer,
        blogs: blogReducer,
        blog: SingleBlogReducer,
        [adminGetApies.reducerPath]: adminGetApies.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(adminGetApies.middleware)
})

export default store