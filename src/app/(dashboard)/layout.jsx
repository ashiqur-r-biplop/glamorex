"use client";
import { useDispatch } from "react-redux";
import { setToken } from "@/redux-toolkit/slice/authSlice/authSlice";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";

const DashboardLayout = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useAuth();
  useEffect(() => {
    // if(typeof window !== 'undefined' && window.localStorage) {

    const token = localStorage.getItem("access-token");
    dispatch(setToken(token));
    // }
  }, []);
  if(!user){
    return router.push("/")
  }
  return <>{children}</>;
};

export default DashboardLayout;
