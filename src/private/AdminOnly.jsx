"use client"
import useAuth from '@/hooks/useAuth';
import useUserRole from '@/hooks/useUserRole';
import { useRouter } from 'next/navigation';
import Loading from './Loading';

const AdminOnly = ({children}) => {
    const router = useRouter()
    const {role} = useUserRole()
    const {loading, user} = useAuth()
    if(loading) {
        return <Loading/>
    }
    if(user) {
        if(role === "admin") {
        return children
        }  
        else {
            router.push("/")
        }
    }
};

export default AdminOnly;