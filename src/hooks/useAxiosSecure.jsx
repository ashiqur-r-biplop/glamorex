"use client"
// import SignInPage from "@/app/(customers)/signin/page";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
// import { Route } from "react-router-dom";

const axiosSecure = axios.create({
    // baseURL: "https://glamorex.vercel.app"
    // baseURL: "http://localhost:5000"
    baseURL: "https://glamorex-server.vercel.app"
})

// http://lacalhost:5000
const useAxiosSecure = () => {
    const router = useRouter()
    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            // if(typeof window !== 'undefined' && window.localStorage) {

                const token = localStorage.getItem("access-token")
                if(token) {
                    config.headers.authorization = `Bearer ${token}`;
                }
                return config
            // }
            
        })
        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
              if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                localStorage.removeItem("access-token");
              router.push('/signin')
              }
              return Promise.reject(error);
            }
          );
    },[])
    return {axiosSecure}
};

export default useAxiosSecure;