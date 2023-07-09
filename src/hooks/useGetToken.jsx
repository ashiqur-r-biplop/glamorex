"use client"

const useGetToken = () => {
    const token = localStorage.getItem("access-token")
    return {token}
};

export default useGetToken;