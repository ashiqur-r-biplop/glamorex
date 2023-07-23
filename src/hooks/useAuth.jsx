"use client"
import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
const useAuth = () => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const {axiosSecure} = useAxiosSecure()
    useEffect(() => {
        // if(typeof window !== 'undefined' && window.localStorage) {
            const token = localStorage.getItem("access-token")
            
                if(token) {
                 axiosSecure.get("/is-login")
                 .then(res => {  
                     setUser(res?.data?.email)          
                     setLoading(false)
                 })
                }
             
        // }
    },[])
   
    return {user, loading, setUser, setLoading}
};


export default useAuth;