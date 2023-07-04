import logo from '/public/assets/img/logo.png'
import SDNavLink from "../HelpingCompo/SDNavLink";
import Image from 'next/image';
import { FaHome, FaSignOutAlt } from "react-icons/fa";
import { FaBasketShopping, FaProductHunt } from 'react-icons/fa6';

const Sidebar = () => {
    return (
        <aside className="bg-[#081229] h-full p-3 text-slate-50 relative">
            <div className='flex gap-2 items-center'>
                <Image src={logo} width={50} height={50}></Image>
                <h2 className='font-bold text-3xl'>Glamorex</h2>
            </div>

            <ul className="py-10">
                <li><SDNavLink href={'/seller-dashboard'}> <FaHome></FaHome> Dashboard</SDNavLink></li>
                <li><SDNavLink href={'/seller-dashboard/order-management'}> <FaBasketShopping></FaBasketShopping> Order management</SDNavLink></li>
                <li><SDNavLink href={'/seller-dashboard/product-management'}> <FaProductHunt></FaProductHunt> Product management</SDNavLink></li>
            </ul>

            {/* signout button */}
            <p className='absolute left-2 bottom-2 flex items-center gap-2 cursor-pointer'> <span className='p-3 rounded-full text-lg bg-slate-50 text-[#081229]'><FaSignOutAlt ></FaSignOutAlt></span> Logout</p>
        </aside>
    );
};

export default Sidebar;