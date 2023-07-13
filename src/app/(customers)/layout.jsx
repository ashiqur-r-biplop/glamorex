"use client"
import { useEffect } from "react";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import { useDispatch } from "react-redux";
import { setToken } from "@/redux-toolkit/slice/authSlice/authSlice";

export default function CustomerLayout({ children }) {
  const token = localStorage.getItem("access-token")
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setToken(token))

  },[])
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
