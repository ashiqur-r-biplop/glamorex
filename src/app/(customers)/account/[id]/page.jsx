"use client";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import PhotoUpdateForm from "@/components/custormer/account/PhotoUpdateForm";



const ProfileEdit = () => {
  const { axiosSecure } = useAxiosSecure();
  const [User, setUser] = useState({});
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit } = useForm();

  console.log(User)

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

  const onSubmit = (data) => {
    setLoading(true)
    const { name, email, mobile, birthday, gender } = data;
    const updatedProfile = {
      name,
      email,
      mobile,
      birthday,
      gender,
    };

    axiosSecure
      .patch("/update-profile", updatedProfile)
      .then((res) => {
        if (res.data) {
          setLoading(false);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "User Profile Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => console.log(error));
  };

  if (loading) {
    return <h2>Loading...</h2>
  }

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
            <PhotoUpdateForm />
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
                      defaultChecked={User?.gender === "male"}
                      className="mr-1"
                    />
                    Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="female"
                      {...register("gender", { required: true })}
                      defaultChecked={User?.gender === "female"}
                      className="mr-1"
                    />
                    Female
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="other"
                      {...register("gender", { required: true })}
                      defaultChecked={User?.gender === "other"}
                      className="mr-1"
                    />
                    Other
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-5 space-x-3">
              <button className="my-btn-one" type="submit">
                Save Changes
              </button>
              <button className="my-btn-one-outline">
                <Link href={`/account`}>Back</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default ProfileEdit;
