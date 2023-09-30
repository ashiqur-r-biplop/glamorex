"use client";
import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import axios from "axios";

const useUserRole = () => {
  const { axiosSecure } = useAxiosSecure();
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    // if(typeof window !== 'undefined' && window.localStorage) {
    const token = localStorage.getItem("access-token");
    if (user) {
      axiosSecure
        .get(`/get-user-role?email=${user?.email}`)
        .then((res) => {
          setRole(res.data.role);
          console.log(res.data.role, "21");
          setLoading(false);
        })
        .catch((e) => {
          console.log(e.message);
        });
    }
    // }
  }, [user]);
  return { role, loading };
};

export default useUserRole;
