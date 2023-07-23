'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const TapLink = ({href, children}) => {
    const pathName = usePathname() 
    const isActive = href === pathName
    return (
        <Link href={href} className={`py-2 uppercase cursor-pointer ${isActive ? 'border-b-2 border-[#0621bb] text-[#0621bb]' : ''}`}>{children}</Link>
    );
};

export default TapLink;