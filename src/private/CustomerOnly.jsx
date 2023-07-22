"use client"
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import Loading from './Loading';
import useUserRole from '@/hooks/useUserRole';
<<<<<<< HEAD
=======
import LoadingSpinner from '@/app/(customers)/components/HelpingCompo/LoadingSpinner';
>>>>>>> 36734b78bd4000ad5b7d095eadf239ad9d680eb7

const CustomerOnly = ({ children }) => {
    const router = useRouter()
<<<<<<< HEAD
    const { role, loading: userRoleLoading } = useUserRole();
    const {loading, user} = useAuth()
    if(loading) {
        return <Loading/>
=======
    const { loading, user } = useAuth()
    const { role, loading: roleLoading } = useUserRole()
    if (loading || roleLoading) {
        return <LoadingSpinner></LoadingSpinner>
>>>>>>> 36734b78bd4000ad5b7d095eadf239ad9d680eb7
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


