"use client";
import useAuth from "@/hooks/useAuth";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import axios from "axios";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { FaCheck } from "react-icons/fa";
import Swal from "sweetalert2";

const PhotoUpdateForm = () => {
  const { axiosSecure } = useAxiosSecure();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    const { photo } = data;

    // upload image
    const formData = new FormData();
    formData.append("image", photo[0]);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMG_HOSTING_API_KEY}`;

    axios
      .post(url, formData)
      .then((res) => {
        const photo_url = res.data.data.url;
        const updatePhoto = {
          photo_url,
          email: user,
        };
        axiosSecure
          .patch("/update-photo", updatePhoto)
          .then((res) => {
            if (res.data) {
              console.log(res.data);
              setLoading(false);
              Swal.fire({
                position: "center",
                icon: "success",
                title: "User Profile Photo Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((error) => console.log(error));
      })
      .catch((e) => console.log(e.message));
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label
        htmlFor="photoInput"
        className="file-input file-input-bordered focus:outline-0 !p-0 cursor-pointer"
      >
        <div className="flex gap-2 items-center justify-center">
          <input
            id="photoInput"
            type="file"
            className="file-input file-input-bordered file-input-md w-full max-w-xs"
            {...register("photo", { required: true })}
          />
          <button className="btn btn-circle btn-outline" type="submit">
            <FaCheck />
          </button>
        </div>
      </label>
    </form>
  );
};

export default PhotoUpdateForm;
