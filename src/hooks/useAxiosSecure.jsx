"use client"
import axios from "axios";
import { useEffect } from "react";

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000"
})

const useAxiosSecure = () => {
        
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
                window.location.href = "/signin"
              }
              return Promise.reject(error);
            }
          );
    },[])
    return {axiosSecure}
};

export default useAxiosSecure;