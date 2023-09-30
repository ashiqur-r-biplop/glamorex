"use client";
import useAuth from "@/hooks/useAuth";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const NewsletterCard = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const [currentUser, setCurrentUser] = useState([]);
  const [totalSubscriber, setSubscriber] = useState([]);
  const [control, setControl] = useState(true);
  const router = useRouter();
  const { axiosSecure } = useAxiosSecure();
  useEffect(() => {
    axios
      .get("https://glamorex-server.vercel.app/subscribe-length")
      .then((response) => {
        setSubscriber(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [control]);
  useEffect(() => {
    if (user) {
      axiosSecure
        .get(`/current-user/${user?.email}`)
        .then((response) => {
          setCurrentUser(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [user]);
  const onSubmit = (data) => {
    const { email } = data;

    const subscriber = {
      UserId: currentUser?._id,
      subscriber_email: email,
      login_email: user?.email,
      name: currentUser?.name,
      photo_url: currentUser?.photo_url,
      phone: currentUser?.phone,
    };
    if (user) {
      axiosSecure
        .post("/subscribe", subscriber)
        .then((res) => {
          if (res.data?.insertedId) {
            reset();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Subscribe Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            setControl(!control);
          } else if (res.data.message) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `${res.data.message}`,
            });
          }
        })
        .catch((e) => {
          // console.log(e.message)
        });
    } else {
      Swal.fire({
        title: "Please login to Subscribe",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now",
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("/signin");
        }
      });
    }
  };

  return (
    <div className="p-8 lg:p-16 bg-gray-50 rounded-md">
      <p className="text-2xl font-semibold text-center">
        Subscribe to our newsletter
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col lg:flex-row justify-center items-center mt-5">
          <input
            type="email"
            placeholder="Enter you email."
            className="h-12 w-full border border-gray-700 lg:w-1/3 rounded-full px-5 lg:mr-2"
            {...register("email", { required: true })}
          />
          <div>
            <button
              type="submit"
              className="border border-gray-700 h-12 px-5 rounded-full mt-3 lg:mt-0 hover:bg-gray-700 hover:text-white transition-all"
            >
              Subscribe
            </button>
          </div>
        </div>
      </form>
      <p className="text-center text-lg mt-5">
        <span className="font-bold">
          {totalSubscriber?.length > 100
            ? `+${totalSubscriber?.length}`
            : totalSubscriber?.length}{" "}
        </span>
        customers have already subscribed!
      </p>
    </div>
  );
};

export default NewsletterCard;
