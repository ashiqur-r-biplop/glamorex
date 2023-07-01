const { configureStore } = require("@reduxjs/toolkit");
import productReducer from "./slice/featureProduct/productSlice";

const store = configureStore({
    reducer: {
        featureProduct: productReducer,
    }
})

export default store