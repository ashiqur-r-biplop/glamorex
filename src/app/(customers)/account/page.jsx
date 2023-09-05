"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import CustomerOnly from "@/private/CustomerOnly";
import EditButton from "@/components/custormer/account/EditButton";
import useAuth from "@/hooks/useAuth";
import axios from "axios";

const AccountPage = () => {
  const { user } = useAuth();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    axios
      .get(`https://glamorex-server.vercel.app/account/${user?.email}`)
      .then((response) => {
        setCurrentUser(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user]);
  return (
    <div className="container mx-auto px-5 py-[100px] min-h-[70vh]">
      <div className="section-title mb-8">
        <h2 className="text-2xl font-semibold text-center">My Profile</h2>
      </div>
      <div className="border-2 border-gray-100 px-5 py-10 flex flex-col xl:flex-row gap-12 xl:gap-20 md:w-fit mx-auto">
        <div>
          <img
            className="w-[200px] h-[200px] rounded-full mx-auto"
            src={currentUser?.photo_url}
            alt={currentUser?.name}
          />
        </div>
        <div className="my-profile">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
            <div>
              <p className="font-semibold text-lg mb-1">Name</p>
              <h4>{currentUser?.name}</h4>
            </div>
            <div>
              <p className="font-semibold text-lg mb-1">Email</p>
              <h4>{currentUser?.email}</h4>
            </div>
            <div>
              <p className="font-semibold text-lg mb-1">Mobile</p>
              <h4>
                {currentUser?.phone
                  ? currentUser?.phone
                  : "mobile not available"}
              </h4>
            </div>
            <div>
              <p className="font-semibold text-lg mb-1">Birthday</p>
              <h4>
                {currentUser?.birthday
                  ? currentUser?.birthday
                  : "birthday not available"}
              </h4>
            </div>
            <div>
              <p className="font-semibold text-lg mb-1">Gender</p>
              <h4>
                {currentUser?.gender
                  ? currentUser?.gender
                  : "gender not available"}
              </h4>
            </div>
          </div>
          <div className="mt-5">
            <Link href={`/account/${currentUser?._id}`}>
              <EditButton>Edit Profile</EditButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
