"use client"
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { setToken } from "@/redux-toolkit/slice/authSlice/authSlice";
import Navbar from "@/components/custormer/shared/Navbar";
import Footer from "@/components/custormer/shared/Footer";

export default function CustomerLayout({ children }) {
  const dispatch = useDispatch()
  useEffect(() => {
    if(typeof window !== 'undefined' && window.localStorage) {
      const token = localStorage.getItem("access-token")
      dispatch(setToken(token))
    }

  },[])
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
