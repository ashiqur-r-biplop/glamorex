"use client"
import useAuth from '@/hooks/useAuth';
import useUserRole from '@/hooks/useUserRole';
import { useRouter } from 'next/navigation';
import Loading from './Loading';

const SellerOnly = ({children}) => {
    const router = useRouter()
    const {role, loading:roleLoading} = useUserRole()
    const {loading, user} = useAuth()
    if(loading || roleLoading) {
        return <Loading/>
    }
    if(user) {

        if(role === "seller") {
           return children
        } else {
            router.push("/")
            return null
        }
    } 
};

export default SellerOnly;