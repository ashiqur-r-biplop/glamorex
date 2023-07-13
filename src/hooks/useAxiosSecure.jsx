"use client"
// import SignInPage from "@/app/(customers)/signin/page";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
// import { Route } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: "https://glamorex.vercel.app"
})

const useAxiosSecure = () => {
  const router = useRouter()
    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem("access-token")
            if(token) {
                config.headers.authorization = `Bearer ${token}`;
            }
            return config
        })
        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
              if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                localStorage.removeItem("access-token");
              //  return window.location.href = "/signin"
              // <Route path="/signin" component={SignInPage} />
              router.push('/signin')
              }
              return Promise.reject(error);
            }
          );
    },[])
    return {axiosSecure}
};

export default useAxiosSecure;