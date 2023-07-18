<<<<<<< HEAD
=======
"use client"
>>>>>>> f79f123534959baa5da50a4bee70fd6369c826d9
import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useUserRole = () => {
    const {axiosSecure} = useAxiosSecure()
    const [role, setRole] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const token = localStorage.getItem("access-token")
       if(token) {
        axiosSecure.get("/get-user-role")
<<<<<<< HEAD
        .then(res => {setRole(res.data.role); setLoading(false)})
    },[])
    return {role, loading}
=======
        .then(res => setRole(res.data.role))
       }
    },[])
    console.log(role)
    return {role}
>>>>>>> f79f123534959baa5da50a4bee70fd6369c826d9
};

export default useUserRole;