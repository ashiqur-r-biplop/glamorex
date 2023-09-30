'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({href, children, exact}) => {
    const pathName = usePathname() 
    const isActive = exact ? href === pathName : pathName.includes(href)
    return (
        <Link href={href} exact={true} className={`flex items-center justify-center lg:justify-between gap-2 text-slate-10 p-3 font-bold my-2 ${isActive ? 'bg-gradient-to-tr from-[#081229] to-slate-800 border-l-4 border-orange-500 ' : 'border-l-4 border-[#081229]'}`}>{children}</Link>
    );
};

export default Navlink;