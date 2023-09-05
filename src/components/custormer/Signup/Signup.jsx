"use client";
import React, { useContext, useEffect, useState } from "react";
import bgImg from "/public/assets/img/signinBg.jpg";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import Link from "next/link";
import signupLottie from "/public/assets/lottieAnimation/signup-lottie.json";
import registrationLoadingLottie from "/public/assets/lottieAnimation/registration_loading";
import successRegistrationLottie from "/public/assets/lottieAnimation/successfully-registration-lottie.json";
import Lottie from "lottie-react";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "@/hooks/useAuth";
import axios from "axios";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/provider/AuthProvider";

const SignUpPage = () => {
  const router = useRouter();
  const { user, signUp, setLoading, loading, logout, ProfileUpdate } =
    useAuth();
  useEffect(() => {
    if (user) {
      return router.push("/");
    }
  }, [user]);
  const { axiosSecure } = useAxiosSecure();
  const [isShowPass, setIsShowPass] = useState(false);
  const [isConfirmShowPass, setIsConfirmShowPass] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // signup func
  const handleSignupFunc = (form) => {
    setLoading(true);
    const { name, photo, email, password, confirmPassword, terms, phone } =
      form;
    const formData = new FormData();
    formData.append("image", photo[0]);

    if (!terms) {
      setError("*Please check terms and condition!");
      setLoading(false)
      return;
    }
    if (password !== confirmPassword) {
      setError("*Your password is not match!");
      setLoading(false)
      return;
    }
    
    // password regexp
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit."
        );
        setLoading(false)
      return;
    }

    // After hosting photo then post register info
    const url = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMG_HOSTING_API_KEY}`;
    axios
      .post(url, formData)
      .then((res) => {
        const photo_url = res.data.data.url;
        const user = {
          name,
          photo_url,
          email,
          phone,
          userRole: "customer",
        };
        signUp(email, password)
          .then((res) => {
            setSuccess("Registration successful");
            setLoading(false);
            // console.log("succefully register, 75");
            // TODO: Store user in database
            // navigate to signin page after 3 seconds
            ProfileUpdate(user?.name, user?.photo_url)
              .then((res) => {
                setLoading(false);
                fetch("https://glamorex-server.vercel.app/users", {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(user),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    console.log(data, "88");
                    if (data.insertedId) {
                      console.log("post user in data successfully 91");
                      setLoading(false);
                      Swal.fire({
                        title: "Navigate to signin page!",
                        html: "I will land signin page after <b></b> milliseconds.",
                        timer: 1000,
                        timerProgressBar: true,
                      })
                        .then((result) => {
                          /* Read more about handling dismissals below */
                          if (result.dismiss === Swal.DismissReason.timer) {
                            router.push("/signin");
                            // console.log("I was closed by the timer 112"a);
                          }
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((error) => console.log(error));
      })
      .catch((e) => console.log(e.message));
  };

  return (
    <div
      className="bg-cover bg-center bg-slate-800 bg-blend-overlay"
      style={{ backgroundImage: `url(${bgImg.src})` }}
    >
      <div className="min-h-screen grid grid-col-1 md:grid-cols-2 gap-4 xl:gap-8 items-center my-container">
        <form
          onSubmit={handleSubmit(handleSignupFunc)}
          className="space-y-3 p-10 bg-slate-900 bg-opacity-75 shadow rounded"
        >
          <h2 className="font-bold text-3xl text-white">Please Register</h2>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-slate-300 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              className="my-inp"
              id="name"
              {...register("name", { required: true })}
              placeholder="Your name here"
            />
            {errors.name && (
              <p className="text-red-500">This field is required</p>
            )}
          </div>

          <div>
            <label
              htmlFor="photo"
              className="block mb-2 text-sm font-medium text-slate-300 dark:text-white"
            >
              Photo
            </label>
            <input
              type="file"
              className="file-input file-input-bordered focus:outline-0 file-input-error my-inp !p-0"
              {...register("photo", { required: true })}
            />
            {errors.photo && (
              <p className="text-red-500">This field is required</p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-slate-300 dark:text-white"
            >
              Phone
            </label>
            <input
              type="number"
              className="my-inp"
              id="phone"
              {...register("phone", { required: true })}
              placeholder="Your phone number here..."
            />
            {errors.phone && (
              <p className="text-red-500">This field is required</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-slate-300 dark:text-white"
            >
              email
            </label>
            <input
              type="email"
              id="email"
              className="my-inp"
              {...register("email", { required: true })}
              placeholder="Your email here"
            />
            {errors.email && (
              <p className="text-red-500">This field is required</p>
            )}
          </div>

          <div className="relative">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-slate-300 dark:text-white"
            >
              Password
            </label>
            <input
              type={`${isShowPass ? "text" : "password"}`}
              id="password"
              className="my-inp"
              {...register("password", { required: true })}
              placeholder="••••••••"
            />
            <span
              className="absolute right-2 top-11 text-white cursor-pointer"
              onClick={() => setIsShowPass(!isShowPass)}
            >
              {" "}
              {isShowPass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}{" "}
            </span>
            {errors.password && (
              <p className="text-red-500">This field is required</p>
            )}
          </div>

          <div className="relative">
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm font-medium text-slate-300 dark:text-white"
            >
              Confirm Password
            </label>
            <input
              type={`${isConfirmShowPass ? "text" : "password"}`}
              id="confirmPassword"
              className="my-inp"
              {...register("confirmPassword", { required: true })}
              placeholder="••••••••"
            />
            <span
              className="absolute right-2 top-11 text-white cursor-pointer"
              onClick={() => setIsConfirmShowPass(!isConfirmShowPass)}
            >
              {" "}
              {isConfirmShowPass ? (
                <FaEye></FaEye>
              ) : (
                <FaEyeSlash></FaEyeSlash>
              )}{" "}
            </span>
            {errors.confirmPassword && (
              <p className="text-red-500">This field is required</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  name="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  {...register("terms", { required: true })}
                  className="w-4 h-4"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="text-slate-300">
                  Accept{" "}
                  <Link href={"/terms"} className="link-hover link-primary">
                    Terms and Condition
                  </Link>
                </label>
              </div>
            </div>
          </div>
          {errors.terms && (
            <p className="text-red-500">
              You need to checked terms & condition!{" "}
            </p>
          )}
          {error && <p className="text-red-500">*{error}</p>}
          {success && <p className="text-green-500">{success}</p>}

          <button
            className={`my-btn-one w-full ${loading && "!bg-opacity-10"}`}
            type="submit"
            disabled={loading}
          >
            Signup
          </button>
          <p className="text-sm font-light text-slate-300">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Sign in
            </Link>
          </p>
        </form>

        <Lottie
          animationData={
            success
              ? successRegistrationLottie
              : loading
                ? registrationLoadingLottie
                : signupLottie
          }
          loop={true}
          className="h-full w-full"
        />
      </div>
    </div>
  );
};

export default SignUpPage;
