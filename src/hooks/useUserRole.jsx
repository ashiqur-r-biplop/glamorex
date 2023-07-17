"use client"
import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useUserRole = () => {
    const {axiosSecure} = useAxiosSecure()
    const [role, setRole] = useState()
    useEffect(() => {
        const token = localStorage.getItem("access-token")
       if(token) {
        axiosSecure.get("/get-user-role")
        .then(res => setRole(res.data.role))
       }
    },[])
    console.log(role)
    return {role}
};

export default useUserRole;