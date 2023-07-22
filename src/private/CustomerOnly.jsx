"use client"
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import Loading from './Loading';
import useUserRole from '@/hooks/useUserRole';
import LoadingSpinner from '@/app/(customers)/components/HelpingCompo/LoadingSpinner';

const CustomerOnly = ({ children }) => {
    const router = useRouter()
    const { loading, user } = useAuth()
    const { role, loading: roleLoading } = useUserRole()
    if (loading || roleLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    if (user) {
        if (role === "customer") {
            return children
        }
        else {
            router.push("/")
            return null
        }
    } else {
        router.push("/")
        return null
    }
};

export default CustomerOnly;


