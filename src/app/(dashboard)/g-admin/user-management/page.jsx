"use client"

import { useRouter } from "next/navigation";

const UserHome = () => {
    const router = useRouter()
    return router.push("/g-admin/user-management/all_users")
    
};

export default UserHome;