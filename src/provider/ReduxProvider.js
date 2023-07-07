'use client'

import useAuth from "@/hooks/useAuth";
import store from "@/redux-toolkit/store";
import { Provider } from "react-redux";


const ReduxProvider = ({children}) => {
    useAuth()
    return (
        <Provider store={store}>{children}</Provider>
    )
};

export default ReduxProvider;