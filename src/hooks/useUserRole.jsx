
import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useUserRole = () => {
    const {axiosSecure} = useAxiosSecure()
    const [role, setRole] = useState()
    useEffect(() => {
        axiosSecure.get("/get-user-role")
        .then(res => setRole(res.data.role))
    },[])
    return {role}
};

export default useUserRole;