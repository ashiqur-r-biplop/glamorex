"use client"
import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";




const useAuth = () => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const {axiosSecure} = useAxiosSecure()


    useEffect(() => {
        const token = localStorage.getItem("access-token")
       if(token) {

        axiosSecure.get("/is-login")
        .then(res => {  
            setUser(res?.data?.email)          
            setLoading(false)
        })
       }
    },[])

    return {user, loading}
};

export default useAuth;