import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useUserRole = () => {
    const {axiosSecure} = useAxiosSecure()
    const [role, setRole] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axiosSecure.get("/get-user-role")
        .then(res => {setRole(res.data.role); setLoading(false)})
    },[])
    return {role, loading}
};

export default useUserRole;