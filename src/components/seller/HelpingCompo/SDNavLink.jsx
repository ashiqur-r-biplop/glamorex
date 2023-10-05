'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const SDNavLink = ({href, children}) => {
    const pathName = usePathname() 
    const isActive = href === pathName
    console.log(pathName, href, 'isActive', isActive);
    return (
        <Link href={href || '#'} className={`flex items-center justify-center lg:justify-between gap-2 text-slate-10 p-3 font-bold my-2 ${isActive ? 'bg-gradient-to-tr from-[#081229] to-slate-800 border-l-4 border-orange-500 ' : ''}`}>{children}</Link>
    );
};

export default SDNavLink;