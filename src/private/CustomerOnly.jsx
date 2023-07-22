"use client"
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import Loading from './Loading';
import useUserRole from '@/hooks/useUserRole';

const CustomerOnly = ({children}) => {
    const router = useRouter()
    const { role, loading: userRoleLoading } = useUserRole();
    const {loading, user} = useAuth()
    if(loading) {
        return <Loading/>
    }
    if(user) {
        if(role === "customer") {
        return children
        }  
        else {
            router.push("/")
            return null
        }
    }
};

export default CustomerOnly;


