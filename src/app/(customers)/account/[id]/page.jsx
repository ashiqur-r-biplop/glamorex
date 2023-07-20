"use client";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import UpdateButton from "../../components/account/UpdateButton";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import axios from "axios";
import CustomerOnly from "@/private/CustomerOnly";

const ProfileEdit = () => {
  const router = useRouter()
  const { axiosSecure } = useAxiosSecure();
  const [User, setUser] = useState([]);
  // const [loading, setLoading] = useState(false)
  const { register, handleSubmit } = useForm({
    defaultValues: {
      gender: User?.gender,
    },
  });

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
    // setLoading(true)
    const { name, email, photo, mobile, birthday, gender } = data;

    // upload image
    const formData = new FormData();
    formData.append("image", photo[0]);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMG_HOSTING_API_KEY}`;

    axios
      .post(url, formData)
      .then((res) => {
        const photo_url = res.data.data.url;
        const updatedProfile = {
          name,
          email,
          mobile,
          birthday,
          gender,
          photo_url,
        };
        axiosSecure
          .patch("/update-profile", updatedProfile)
          .then((res) => {
            if (res.data) {
              // setLoading(false);

              // navigate to profile page after 3 seconds
              router.push('/account')
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
      })
      .catch((e) => console.log(e.message));
  };

  // if (loading) {
  //   return <h2>Loading...</h2>
  // }

  return (
    <CustomerOnly >
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
            <div className="space-y-1">
              <label>
                <span className="font-semibold text-lg">Photo</span>
              </label>
              <input
                type="file"
                className="file-input block w-full file-input-bordered focus:outline-0 !p-0"
                {...register("photo", { required: true })}
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
    </CustomerOnly>
  );
};

export default  ProfileEdit
