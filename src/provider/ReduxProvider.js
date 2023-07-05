'use client'
import useSetToken from "@/hooks/useSetToken";
import store from "@/redux-toolkit/store";
import { useEffect } from "react";
import { Provider } from "react-redux";


const ReduxProvider = ({children}) => {
    useSetToken()
    return (
        <Provider store={store}>{children}</Provider>
    )
};

export default ReduxProvider;