"use client"
import useAuth from '@/hooks/useAuth';
import useUserRole from '@/hooks/useUserRole';
import { useRouter } from 'next/navigation';
import Loading from './Loading';

const AdminOnly = ({children}) => {
    const router = useRouter()
    const {role, loading:roleLoading} = useUserRole()
    const {loading, user} = useAuth()
    if(loading || roleLoading) {
        return <Loading/>
    }
    if(user) {        
        if(role === "admin") {
            return children
            }  
            else {
                router.push("/")
                return null
            }
        
    }
};

export default AdminOnly;