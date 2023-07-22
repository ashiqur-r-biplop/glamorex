"use client"
import { useDispatch } from "react-redux";
import { setToken } from "@/redux-toolkit/slice/authSlice/authSlice";
import { useEffect } from "react";


const DashboardLayout = ({ children }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    if(typeof window !== 'undefined' && window.localStorage) {

      const token = localStorage.getItem("access-token")
      dispatch(setToken(token))  
    }
    },[])
    return (
        <>
         {children}
        </>
    );
};


export default DashboardLayout;