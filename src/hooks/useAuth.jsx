"use client"
import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
const useAuth = () => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const {axiosSecure} = useAxiosSecure()
    const token = localStorage.getItem("access-token")
    useEffect(() => {
       if(token) {
        axiosSecure.get("/is-login")
        .then(res => {  
            setUser(res?.data?.email)          
            setLoading(false)
        })
       }
    },[token])
    return {user, loading, setUser}
};

export default useAuth;