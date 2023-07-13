"use client";
import Link from "next/link";
import EditButton from "../components/account/EditButton";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useEffect, useState } from "react";

// const User = {
//   id: "123",
//   displayName: "Agun",
//   email: "test@gmail.com",
//   photoURL: "https://i.ibb.co/37cdWvc/images.jpg",
//   mobile: "+8801700000000",
//   birthday: "2002-01-15",
//   gender: "female",
// };

const AccountPage = () => {
  const { axiosSecure } = useAxiosSecure();
  const [User, setUser] = useState(null);

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

  return (
    <div className="container mx-auto px-5 py-[100px] min-h-[70vh]">
      <div className="section-title mb-8">
        <h2 className="text-2xl font-semibold text-center">My Profile</h2>
      </div>
      <div className="border-2 border-gray-100 px-5 py-10 flex flex-col xl:flex-row gap-12 xl:gap-20 md:w-fit mx-auto">
        <div>
          <img
            className="w-[200px] h-[200px] rounded-full mx-auto"
            src={User?.photo_url}
            alt={User?.name}
          />
        </div>
        <div className="my-profile">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
            <div>
              <p className="font-semibold text-lg mb-1">Name</p>
              <h4>{User?.name}</h4>
            </div>
            <div>
              <p className="font-semibold text-lg mb-1">Email</p>
              <h4>{User?.email}</h4>
            </div>
            <div>
              <p className="font-semibold text-lg mb-1">Mobile</p>
              <h4>
                {User?.birthday ? User?.birthday : "mobile not available"}
              </h4>
            </div>
            <div>
              <p className="font-semibold text-lg mb-1">Birthday</p>
              <h4>{User?.mobile ? User?.mobile : "birthday not available"}</h4>
            </div>
            <div>
              <p className="font-semibold text-lg mb-1">Gender</p>
              <h4>{User?.gender ? User?.gender : "gender not available"}</h4>
            </div>
          </div>
          <div className="mt-5">
            <Link href={`/account/${User?._id}`}>
              <EditButton>Edit Profile</EditButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
