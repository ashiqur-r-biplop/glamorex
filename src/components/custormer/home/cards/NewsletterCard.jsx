"use client";
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const NewsletterCard = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const { email } = data;

    const subscriber = {
      subscriber_email: email,
    };

    axios
      .post("https://glamorex.vercel.app/subscribe", subscriber)
      .then((res) => {
        if (res.data) {
          reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Subscribe Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((e) => console.log(e.message));
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
        <span className="font-bold">+21k </span>customers have already
        subscribed!
      </p>
    </div>
  );
};

export default NewsletterCard;
