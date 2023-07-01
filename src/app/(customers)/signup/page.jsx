'use client'
import React, { useState } from 'react';
import bgImg from '../../../../public/assets/img/signinBg.jpg'
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import Link from 'next/link';
import signupLottie from'../../../../public/assets/lottieAnimation/signup-lottie.json'
import successRegistrationLottie from'../../../../public/assets/lottieAnimation/successfully-registration-lottie.json'
import { Lottie } from 'lottie-react';

const SignUpPage = () => {

    const [isShowPass, setIsShowPass] = useState(false)
    const [isConfirmShowPass, setIsConfirmShowPass] = useState(false)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const handleSignupFunc = form => {
        const { name, photo, email, password, confirmPassword, terms } = form

        if (!terms) {
            setError('*Please check terms and condition!')
            return
        }
        if (password !== confirmPassword) {
            setError('*Your password is not match!')
            return
        }

        // password regexp
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (!passwordRegex.test(password)) {
            setError("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.")
            return
        }

    };

    return (
        <div className="bg-cover bg-center bg-slate-800 bg-blend-overlay" style={{ backgroundImage: `url(${bgImg.src})` }}>
            <div className='min-h-screen grid grid-col-1 md:grid-cols-2 gap-4 xl:gap-8 items-center my-container'>
                <form onSubmit={handleSubmit(handleSignupFunc)} className='space-y-3 p-10 bg-slate-900 bg-opacity-75 shadow rounded'>
                    <h2 className='font-bold text-3xl text-white'>Please Register</h2>
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white">Name</label>
                        <input type='text' className='my-inp' id='name' {...register("name", { required: true })} placeholder='Your name here' />
                        {errors.name && <p className='text-red-500'>This field is required</p>}
                    </div>

                    <div>
                        <label htmlFor="photo" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white">photo URL</label>
                        <input type='url' className='my-inp' id='photo' {...register("photo", { required: true })} placeholder='Your photo URL here' />
                        {errors.photo && <p className='text-red-500'>This field is required</p>}
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white">email</label>
                        <input type='email' id='email' className='my-inp' {...register("email", { required: true })} placeholder='Your email here' />
                        {errors.email && <p className='text-red-500'>This field is required</p>}
                    </div>

                    <div className='relative'>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white">Password</label>
                        <input type={`${isShowPass ? 'text' : 'password'}`} id='password' className='my-inp' {...register("password", { required: true })} placeholder='••••••••' />
                        <span className='absolute right-2 top-11 text-white cursor-pointer' onClick={() => setIsShowPass(!isShowPass)}> {isShowPass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>} </span>
                        {errors.password && <p className='text-red-500'>This field is required</p>}
                    </div>

                    <div className='relative'>
                        <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white">Confirm Password</label>
                        <input type={`${isConfirmShowPass ? 'text' : 'password'}`} id='confirmPassword' className='my-inp' {...register("confirmPassword", { required: true })} placeholder='••••••••' />
                        <span className='absolute right-2 top-11 text-white cursor-pointer' onClick={() => setIsConfirmShowPass(!isConfirmShowPass)}> {isConfirmShowPass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>} </span>
                        {errors.confirmPassword && <p className='text-red-500'>This field is required</p>}
                    </div>


                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="terms" name='terms' aria-describedby="terms" type="checkbox" {...register('terms', { required: true })} className="w-4 h-4" />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="terms" className='text-slate-300'>Accept <Link href={''} className='link-hover link-primary'>Terms and Condition</Link></label>
                            </div>
                        </div>
                    </div>
                    {errors.terms && <p className='text-red-500'>You need to checked terms & condition! </p>}
                    {error && <p className='text-red-500'>*{error}</p>}
                    {success && <p className='text-green-500'>{success}</p>}

                    <button className='my-btn-one w-full' type='submit'>Signup</button>
                    <p className="text-sm font-light text-slate-300">
                        Already have an account? <Link href='/signin' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</Link>
                    </p>

                </form>

                {/* <Lottie animationData={success ? successRegistrationLottie : signupLottie} loop={true} className='h-full w-full' /> */}
            </div>
        </div>
    );
};

export default SignUpPage;