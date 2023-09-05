"use client";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "@/provider/AuthProvider";
const useAuth = () => {
  const {
    user,
    signUp,
    setUser,
    signInGoogle,
    signInGithub,
    login,
    logout,
    loading,
    ProfileUpdate,
    auth,
    setLoading,
  } = useContext(AuthContext);
  return {
    user,
    signUp,
    setUser,
    signInGoogle,
    signInGithub,
    login,
    logout,
    loading,
    ProfileUpdate,
    auth,
    setLoading,
  };
};

export default useAuth;
