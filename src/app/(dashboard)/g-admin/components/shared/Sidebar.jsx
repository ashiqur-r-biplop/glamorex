import logo from "../.../../../../../../../public/assets/img/logo.png";
import Image from "next/image";
import { FaHome, FaSignOutAlt } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { GiEntryDoor } from "react-icons/gi";
import Navlink from "../navlink/Navlink";

const Sidebar = () => {
  return (
    <aside className="bg-[#081229] h-full p-3 text-slate-50 relative">
      <div className="flex gap-2 items-center justify-center lg:justify-normal">
        <Image src={logo} width={50} height={50} alt="logo"></Image>
        <h2 className="font-bold text-xl xl:text-3xl hidden lg:block">
          Glamorex
        </h2>
      </div>

      <ul className="py-10">
        <li>
          <Navlink exact={true} href={"/g-admin"}>
            {" "}
            <span className="flex gap-2 items-center">
              <FaHome></FaHome>{" "}
              <span className="hidden lg:inline-block whitespace-nowrap">
                Dashboard
              </span>
            </span>
          </Navlink>
        </li>

        <li>
          <Navlink href={"/g-admin/user-management"}>
            {" "}
            <span className="flex gap-2 items-center">
              <BsFillPeopleFill />{" "}
              <span className="hidden lg:inline-block whitespace-nowrap">
                User management
              </span>
            </span>
          </Navlink>
        </li>

        <li>
          <Navlink href={"/g-admin/product-management/all_products"}>
            {" "}
            <span className="flex items-center gap-2">
              <FaProductHunt />
              <span className="hidden lg:inline-block whitespace-nowrap">
                Product management
              </span>
            </span>
          </Navlink>
        </li>
        <li>
          <Navlink href={"/g-admin/seller-requests"}>
            {" "}
            <span className="flex items-center gap-2">
              <GiEntryDoor />
              <span className="hidden lg:inline-block whitespace-nowrap">
                Seller Requests
              </span>
            </span>
          </Navlink>
        </li>

        <li>
          <Navlink href={"/g-admin/support"}>
            {" "}
            <span className="flex items-center gap-2">
              {" "}
              <BiSupport />{" "}
              <span className="hidden lg:inline-block whitespace-nowrap">
                Support
              </span>
            </span>{" "}
          </Navlink>{" "}
        </li>
      </ul>

      {/* signout button */}
      <p className="absolute left-2 bottom-2 flex items-center gap-2 cursor-pointer">
        {" "}
        <span className="p-3 rounded-full text-lg bg-slate-50 text-[#081229]">
          <FaSignOutAlt></FaSignOutAlt>
        </span>{" "}
        Logout
      </p>
    </aside>
  );
};

export default Sidebar;
