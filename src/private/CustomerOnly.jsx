"use client"
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import Loading from './Loading';

const CustomerOnly = ({children}) => {
    const router = useRouter()
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


