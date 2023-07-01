'use client'
import store from "@/redux-toolkit/store";
import { Provider } from "react-redux";


const ReduxProvider = ({children}) => {
    return (
        <Provider store={store}>{children}</Provider>
    )
};

export default ReduxProvider;