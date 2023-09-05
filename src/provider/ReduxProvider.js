'use client'

import useAuth from "@/hooks/useAuth";
import useUserRole from "@/hooks/useUserRole";
import store from "@/redux-toolkit/store";
import { Provider } from "react-redux";


const ReduxProvider = ({children}) => {
    useAuth()
    useUserRole()
    return (
        <Provider store={store}>
                {children}
        </Provider>
    )
};

export default ReduxProvider;