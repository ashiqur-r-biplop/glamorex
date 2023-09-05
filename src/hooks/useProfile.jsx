'use client'
import React, { useEffect, useState } from 'react';
import useAxiosSecure from './useAxiosSecure';

const useProfile = () => {
    const { axiosSecure } = useAxiosSecure();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // To get user info
    useEffect(() => {
        axiosSecure
            .get("/profile")
            .then((response) => {
                setUser(response.data);
                setLoading(false)
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return {user, loading}
};

export default useProfile;