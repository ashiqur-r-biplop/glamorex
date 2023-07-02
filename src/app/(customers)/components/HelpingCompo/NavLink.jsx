"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href || href.startsWith(pathname + "/");

  return (
    <Link
      href={href}
      className={`${
        isActive && "border-b border-orange-500"
      } px-3 py-2 text-slate-200 font-bold`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
