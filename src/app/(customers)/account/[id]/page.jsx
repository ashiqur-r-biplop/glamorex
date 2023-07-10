"use client";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import UpdateButton from "../../components/account/UpdateButton";
import { useForm } from "react-hook-form";
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

const ProfileEdit = () => {
  const { axiosSecure } = useAxiosSecure();
  const [User, setUser] = useState([]);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      gender: User?.gender,
    },
  });

  const onSubmit = (data) => {
    const { name, email, photo, mobile, birthday, gender } = data;
    const updatedProfile = {
      name,
      email,
      photo,
      mobile,
      birthday,
      gender,
    };
    console.log(updatedProfile);
  };

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
        <h2 className="text-2xl font-semibold text-center">Update Profile</h2>
      </div>
      <div className="border-2 border-gray-100 px-5 py-10 flex flex-col xl:flex-row gap-12 xl:gap-20 md:w-fit mx-auto">
        <div>
          <img
            className="w-[200px] h-[200px] rounded-full mx-auto border"
            src={User?.photo_url}
            alt={User?.name}
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
            <div className="space-y-1">
              <label>
                <span className="font-semibold text-lg">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                defaultValue={User?.name}
                className="border p-2 rounded-sm w-full"
              />
            </div>
            <div className=" space-y-1">
              <label>
                <span className="font-semibold text-lg">Email</span>
              </label>
              <input
                type="text"
                {...register("email", { required: true })}
                defaultValue={User?.email}
                readOnly
                className="border p-2 rounded-sm w-full"
              />
            </div>
            {/* TODO: upload image here  */}
            <div className=" space-y-1">
              <label>
                <span className="font-semibold text-lg">Photo URL</span>
              </label>
              <input
                type="text"
                {...register("photo", { required: true })}
                defaultValue={User?.photo_url}
                className="border p-2 rounded-sm w-full"
              />
            </div>
            <div className=" space-y-1">
              <label>
                <span className="font-semibold text-lg">Mobile</span>
              </label>
              <input
                type="text"
                {...register("mobile", { required: true })}
                defaultValue={User?.mobile}
                placeholder="Enter Mobile Number"
                className="border p-2 rounded-sm w-full"
              />
            </div>
            <div className=" space-y-1">
              <label>
                <span className="font-semibold text-lg">Birthday</span>
              </label>
              <input
                type="date"
                {...register("birthday", { required: true })}
                defaultValue={User?.birthday}
                className="border p-2 rounded-sm w-full"
              />
            </div>
            <div className=" space-y-1">
              <label>
                <span className="font-semibold text-lg">Gender</span>
              </label>
              <div className="flex gap-2">
                <label>
                  <input
                    type="radio"
                    value="male"
                    {...register("gender", { required: true })}
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    value="female"
                    {...register("gender", { required: true })}
                  />
                  Female
                </label>
                <label>
                  <input
                    type="radio"
                    value="other"
                    {...register("gender", { required: true })}
                  />
                  Other
                </label>
              </div>
            </div>
          </div>
          <div className="mt-5 flex gap-3">
            <UpdateButton type="submit">Save Changes</UpdateButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileEdit;
