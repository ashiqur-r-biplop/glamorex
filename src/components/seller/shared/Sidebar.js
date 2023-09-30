"use client";
import logo from "/public/assets/img/logo.png";
import SDNavLink from "../HelpingCompo/SDNavLink";
import Image from "next/image";
import { FaHome, FaSignOutAlt } from "react-icons/fa";
import { LuEdit } from "react-icons/lu";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { FaAngleDown, FaBasketShopping, FaProductHunt } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const [productManagementDropdown, setProductManagementDropdown] =
    useState(false);
  const { setUser, logout } = useAuth();
  const router = useRouter();

  // logOutFunc
  const logOutFunc = () => {
    logout()
      .then((res) => {
        router.push("/")
        setUser(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <aside className="bg-[#081229] h-full p-3 text-slate-50 relative">
      <Link href={"/"}>
        <div className="flex gap-2 items-center justify-center lg:justify-normal">
          <Image src={logo} width={50} height={50} alt="logo"></Image>
          <h2 className="font-bold text-xl xl:text-3xl hidden lg:block">
            Glamorex
          </h2>
        </div>
      </Link>

      <ul className="py-10">
        <li>
          <SDNavLink href={"/seller-dashboard"}>
            {" "}
            <span className="flex gap-2 items-center">
              <FaHome></FaHome>{" "}
              <span className="hidden lg:inline-block whitespace-nowrap">
                Dashboard
              </span>
            </span>
          </SDNavLink>
        </li>

        <li>
          <SDNavLink href={"/seller-dashboard/order-management"}>
            {" "}
            <span className="flex gap-2 items-center">
              <FaBasketShopping></FaBasketShopping>{" "}
              <span className="hidden lg:inline-block whitespace-nowrap">
                Order management
              </span>
            </span>
          </SDNavLink>
        </li>

        <li>
          <SDNavLink>
            {" "}
            <span
              className={`flex items-center gap-2`}
              onClick={() =>
                setProductManagementDropdown(!productManagementDropdown)
              }
            >
              <FaProductHunt></FaProductHunt>{" "}
              <span className="hidden lg:inline-block whitespace-nowrap">
                Product management
              </span>{" "}
              <FaAngleDown></FaAngleDown>
            </span>
          </SDNavLink>

          {/* Product management dropdown */}
          <ul
            className={`pl-3 py-3 bg-gradient-to-tr from-slate-800 to-[#081229] transition-all duration-500 ${
              productManagementDropdown
                ? "visible opacity-100 block"
                : "invisible opacity-0 hidden"
            }`}
          >
            <SDNavLink href={"/seller-dashboard/add-product"}>
              {" "}
              <span className="flex items-center gap-2">
                <AiOutlineAppstoreAdd></AiOutlineAppstoreAdd>{" "}
                <span className="hidden lg:inline-block whitespace-nowrap">
                  Add product
                </span>
              </span>
            </SDNavLink>
            <SDNavLink href={"/seller-dashboard/products"}>
              {" "}
              <span className="flex items-center gap-2">
                <LuEdit></LuEdit>{" "}
                <span className="hidden lg:inline-block whitespace-nowrap">
                  Products
                </span>
              </span>
            </SDNavLink>
          </ul>
        </li>

        <li>
          <SDNavLink href={"/seller-dashboard/invoices"}>
            {" "}
            <span className="flex items-center gap-2">
              {" "}
              <FaProductHunt></FaProductHunt>{" "}
              <span className="hidden lg:inline-block whitespace-nowrap">
                Invoices
              </span>
            </span>{" "}
            <span className="bg-orange-500 rounded-full h-7 w-7 hidden lg:flex items-center justify-center">
              7
            </span>{" "}
          </SDNavLink>{" "}
        </li>
      </ul>

      {/* signout button */}
      <p
        className="absolute left-2 bottom-2 flex items-center gap-2 cursor-pointer"
        onClick={logOutFunc}
      >
        <span className="p-3 rounded-full text-lg bg-slate-50 text-[#081229]">
          <FaSignOutAlt></FaSignOutAlt>
        </span>
        Logout
      </p>
    </aside>
  );
};

export default Sidebar;
