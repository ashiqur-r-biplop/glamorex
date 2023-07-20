"use client"
import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useUserRole = () => {
    const { axiosSecure } = useAxiosSecure()
    const [role, setRole] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const token = localStorage.getItem("access-token")
        if (token) {
            axiosSecure.get("/get-user-role")
                .then(res => { setRole(res.data.role); setLoading(false) }).catch(e=> console.log(e.message))
        }
    }, [])
    return { role, loading }
};

export default useUserRole;