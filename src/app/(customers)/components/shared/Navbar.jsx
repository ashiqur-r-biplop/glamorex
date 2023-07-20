"use client";
import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import NavLink from "../HelpingCompo/NavLink";
import logo from "../../../../../public/assets/img/logo.png";
import Image from "next/image";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { FiLogOut } from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import useUserRole from "@/hooks/useUserRole";
import {  FaUserCheck } from "react-icons/fa6";
import Loading from "@/private/Loading";
import { MdDashboard } from "react-icons/md";


function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, loading:authLoading } = useAuth();
  const { axiosSecure } = useAxiosSecure();
  const [User, setUser] = useState(null);
  const { role, loading:userRoleLoading } = useUserRole()

  useEffect(() => {
    axiosSecure
      .get("/profile")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const logOut = () => {
    localStorage.removeItem("access-token");
  };
  const menu = (
    <>
      <NavLink href={"/"}>Home</NavLink>
      <NavLink href={"/about"}>About</NavLink>
      <NavLink href={"/blog"}>Blogs</NavLink>
      <NavLink href={"/shop"}>Shop</NavLink>
      <NavLink href={"/contact"}>Contact</NavLink>
      <NavLink href={"/cart"}><AiOutlineShoppingCart /></NavLink>
      {userRoleLoading || authLoading? <Loading></Loading>:user ? (
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={User?.photo_url} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className=" dropdown-content mt-3 z-[1] p-2 shadow bg-gray-800 text-white rounded-box w-52 font-semibold"
          >
            <li>
              <Link href={"/account"} className="p-2 flex gap-2 items-center">
                Profile <FaUserCheck />
              </Link>
            </li>
            {
              (role === 'seller' || role === 'admin') &&
              <li> <Link href={`${role === 'seller' ? '/seller-dashboard' : role === 'admin' ? 'g-admin' : '#'}`} className="p-2 flex gap-2 items-center">Dashboard <MdDashboard /> </Link></li>
            }
            <li>
              <button onClick={logOut} className="p-2 flex gap-2 items-center">
                Logout <FiLogOut />
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <NavLink href={"/signin"}>Signin</NavLink>
      )}
    </>
  );

  return (
    <nav className="bg-gray-800 sticky left-0 top-0 right-0 px-3 z-50">
      <div className="con mx-auto px-1 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* logo */}
          <div className="flex-shrink-0">
            <Link href={"/"}>
              <Image height={45} width={45} src={logo} alt="glamorex" />
            </Link>
          </div>

          <div className="flex items-center">
            {/* desktop nav */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">{menu}</div>
            </div>
          </div>

          {/* mobile menu toggle button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* mobile nav */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div
              ref={ref}
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col"
            >
              {menu}
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Nav;
