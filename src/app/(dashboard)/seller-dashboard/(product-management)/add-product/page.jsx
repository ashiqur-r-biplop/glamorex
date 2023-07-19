"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaFileUpload, FaInfoCircle } from "react-icons/fa";
import {
    FaArrowRight,
    FaCheck,
    FaCircle,
    FaCircleCheck,
    FaCircleDot,
    FaFileArrowUp,
    FaXmark,
} from "react-icons/fa6";
import "./add-product.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import AddProductStatusBtn from "@/app/(dashboard)/components/HelpingCompo/addProductStatusBtn";
import addProductSuccessfulLottie from "../../../../../../public/assets/lottieAnimation/addProductSuccessfulLottie.json";
import loadingLottie from "../../../../../../public/assets/lottieAnimation/loadingLottie.json";
import CommonLottie from "@/app/(dashboard)/components/HelpingCompo/CommonLottie";


const AddProductPage = () => {
    const [currentPageStatus, setCurrentPageStatus] = useState("Product Image");
    const [productImg, setProductImg] = useState("");
    const [imageLink, setImageLink] = useState('')
    const [productAddedSuccess, setProductAddedSuccess] = useState('')
    const [loading, setLoading] = useState(false)
    const formData = new FormData()

    //  Hold form field via react hook form
    const { register, handleSubmit, watch, resetField, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        setLoading(true)
        setProductAddedSuccess(true)
        // setLoading(false)

        const { name, quantity, category, sub_category, productGender, productStatus, sizes, colors, price, discount, description } = data
        const product = { name, image: imageLink, quantity, category, sub_category, productGender, sizes, productStatus,colors, price, discount, description };
        console.log(product);
    }


    // for get image via react dropzone and hosting image
    const onDrop = useCallback((acceptedFiles) => {
        setProductImg(acceptedFiles.map((file) => URL.createObjectURL(file)));

        // img hosting 
        formData.append("image", acceptedFiles[0]);
        const url = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMG_HOSTING_API_KEY}`;
        axios.post(url, formData).then((res) => {
            const photo_url = res.data.data.url;
            setImageLink(photo_url)
        }).catch(e => console.log(e.message))
    }, [setProductImg]);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });


    // Category and product for dropdown
    const categories = {
        Clothing: {
            "T-Shirts": {
                sizes: ["S", "M", "L", "XL"],
                colors: ["Red", "Blue", "Green", "Black", "White"]
            },
            "Jeans": {
                sizes: ["26", "28", "30", "32", "34"],
                colors: ["Blue", "Black"]
            },
            "Dresses": {
                sizes: ["S", "M", "L"],
                colors: ["Red", "Blue", "Black"]
            },
            "Shirts": {
                sizes: ["S", "M", "L", "XL"],
                colors: ["White", "Blue", "Black"]
            },
            "Pants": {
                sizes: ["S", "M", "L", "XL"],
                colors: ["Black", "Gray"]
            },
            "Blouses": {
                sizes: ["S", "M", "L"],
                colors: ["White", "Pink", "Yellow"]
            },
            "Skirts": {
                sizes: ["S", "M", "L"],
                colors: ["Black", "Red", "Navy"]
            },
            "Jackets": {
                sizes: ["S", "M", "L", "XL"],
                colors: ["Black", "Brown", "Gray"]
            },
            "Coats": {
                sizes: ["S", "M", "L"],
                colors: ["Black", "Beige"]
            },
            "Sweaters": {
                sizes: ["S", "M", "L", "XL"],
                colors: ["Gray", "Navy", "Burgundy"]
            },
            "Hoodies": {
                sizes: ["S", "M", "L"],
                colors: ["Black", "Gray", "Blue"]
            },
            "Shorts": {
                sizes: ["S", "M", "L"],
                colors: ["Blue", "Khaki"]
            },
            "Leggings": {
                sizes: ["S", "M", "L", "XL"],
                colors: ["Black", "Gray", "Navy"]
            }
        },
        Footwear: {
            "Sneakers": {
                sizes: ["7", "8", "9", "10", "11"],
                colors: ["White", "Black", "Blue", "Red"]
            },
            "Boots": {
                sizes: ["7", "8", "9", "10", "11"],
                colors: ["Brown", "Black"]
            },
            "Sandals": {
                sizes: ["6", "7", "8", "9", "10"],
                colors: ["Black", "Brown", "Beige"]
            },
            "Flats": {
                sizes: ["6", "7", "8", "9"],
                colors: ["Black", "Silver", "Pink"]
            },
            "Heels": {
                sizes: ["6", "7", "8", "9"],
                colors: ["Black", "Red", "Nude"]
            }
        },
        Accessories: {
            "Bags": {
                sizes: [],
                colors: ["Black", "Brown", "Blue", "Red"]
            },
            "Belts": {
                sizes: ["S", "M", "L"],
                colors: ["Black", "Brown"]
            },
            "Hats": {
                sizes: ["One Size"],
                colors: ["Black", "White", "Beige"]
            },
            "Scarves": {
                sizes: ["One Size"],
                colors: ["Red", "Blue", "Gray"]
            },
            "Jewelry": {
                sizes: [],
                colors: ["Gold", "Silver"]
            },
            "Sunglasses": {
                sizes: ["One Size"],
                colors: ["Black", "Brown", "Gray"]
            },
            "Watches": {
                sizes: ["One Size"],
                colors: ["Silver", "Gold", "Rose Gold"]
            }
        },
        Outerwear: {
            "Jackets": {
                sizes: ["S", "M", "L", "XL"],
                colors: ["Black", "Brown", "Gray"]
            },
            "Coats": {
                sizes: ["S", "M", "L"],
                colors: ["Black", "Beige"]
            },
            "Sweaters": {
                sizes: ["S", "M", "L", "XL"],
                colors: ["Gray", "Navy", "Burgundy"]
            },
            "Hoodies": {
                sizes: ["S", "M", "L"],
                colors: ["Black", "Gray", "Blue"]
            },
            "Raincoats": {
                sizes: ["S", "M", "L"],
                colors: ["Yellow", "Blue", "Transparent"]
            }
        },
        Swimwear: {
            "Swimsuits": {
                sizes: ["S", "M", "L"],
                colors: ["Black", "Blue", "Red"]
            },
            "Bikinis": {
                sizes: ["S", "M", "L"],
                colors: ["Black", "White", "Pink"]
            },
            "Board Shorts": {
                sizes: ["S", "M", "L", "XL"],
                colors: ["Blue", "Black", "Green"]
            }
        },
        Intimates: {
            "Bras": {
                sizes: ["32A", "32B", "34A", "34B", "36A", "36B"],
                colors: ["Black", "White", "Pink"]
            },
            "Panties": {
                sizes: ["S", "M", "L"],
                colors: ["Black", "White", "Beige", "Pink"]
            },
            "Lingerie": {
                sizes: ["S", "M", "L"],
                colors: ["Red", "Black", "Purple"]
            }
        },
        Activewear: {
            "Athletic Tops": {
                sizes: ["S", "M", "L", "XL"],
                colors: ["Black", "Gray", "Blue"]
            },
            "Leggings": {
                sizes: ["S", "M", "L", "XL"],
                colors: ["Black", "Gray", "Navy"]
            },
            "Sports Bras": {
                sizes: ["S", "M", "L"],
                colors: ["Black", "White", "Pink"]
            },
            "Athletic Shorts": {
                sizes: ["S", "M", "L"],
                colors: ["Black", "Gray", "Blue"]
            }
        },
        "Formal Wear": {
            "Evening Gowns": {
                sizes: ["S", "M", "L"],
                colors: ["Black", "Red", "Blue"]
            },
            "Tuxedos": {
                sizes: ["S", "M", "L", "XL"],
                colors: ["Black", "Red"],
            },
            "Formal Dresses": {
                sizes: ["S", "M", "L"],
                colors: ["Black", "Navy", "Burgundy"]
            },
            "Formal Suits": {
                sizes: ["S", "M", "L", "XL"],
                colors: ["Black", "Gray", "Navy"]
            }
        },
        "Beauty and Cosmetics": {
            "Makeup": {
                sizes: [],
                colors: []
            },
            "Skincare Products": {
                sizes: [],
                colors: []
            },
            "Fragrances": {
                sizes: [],
                colors: []
            },
            "Haircare Products": {
                sizes: [],
                colors: []
            }
        },
        "Sale and Clearance": {
            "Discounted Items": {
                sizes: [],
                colors: []
            },
            "Clearance Items": {
                sizes: [],
                colors: []
            }
        }
    };


    // Condition to pass
    const isColorsPass = (categories[watch('category')]?.[watch('sub_category')]?.colors?.length > 0)
    const isSizePass = (categories[watch('category')]?.[watch('sub_category')]?.sizes?.length > 0)

    const isGeneralInfoDone = watch('name') && watch('quantity') && watch('category') && watch('sub_category') && watch('productCoupon') && watch('productGender') && watch('productStatus') && (isColorsPass ? watch('colors') : true) && (isSizePass ? watch('sizes') : true)
    const isPricingDone = watch('price') && watch('discount')
    const productDetailsDone = watch('description')



    // clear color and sized field when category and subCategory file is changing
    const productCategoryField = register("category", { required: true });
    const productSubCategoryField = register("sub_category", { required: true });
    const clearColorsSizesField = () => {
        resetField('colors')
        resetField('sizes')
    }

    if (loading) {
        return <div className="h-screen flex flex-col gap-3 justify-center items-center">
            <CommonLottie animationData={loadingLottie} loop={true} className='h-72 w-80'></CommonLottie>
            <h2 className="my-title text-green-500">Please wait...</h2>
        </div>
    }
    else if (productAddedSuccess) {
        return <div className="h-screen flex flex-col gap-3 justify-center items-center">
            <CommonLottie animationData={addProductSuccessfulLottie} loop={false} className='h-72 w-80'></CommonLottie>
            <h2 className="my-title text-green-500">Product added successfully</h2>
        </div>
    }

    return (
        <div className="add-product-main">
            {/* title nav */}
            <div className="flex justify-between items-center py-3 px-4 lg:px-8 xl:px-16 border">
                <h1 className="my-subtitle">Adding new product</h1>
                <div className="space-x-2">
                    <button className="my-btn-one-outline">
                        <FaXmark></FaXmark> Cancel
                    </button>
                    <button className="my-btn-one">
                        <FaCheck></FaCheck> Save product
                    </button>
                </div>
            </div>

            <div className="px-8 py-4">

                {/* current status of field*/}
                <div className="flex items-center gap-5 mb-8 h-10">
                    <AddProductStatusBtn isActive={productImg} isCurrPage={currentPageStatus === 'Product Image'}>Product Image</AddProductStatusBtn>
                    <span><FaArrowRight></FaArrowRight></span>
                    <AddProductStatusBtn isActive={isGeneralInfoDone} isCurrPage={currentPageStatus === 'General Information'}>General Information</AddProductStatusBtn>
                    <span><FaArrowRight></FaArrowRight></span>
                    <AddProductStatusBtn isActive={isPricingDone} isCurrPage={currentPageStatus === 'Pricing'}>Pricing</AddProductStatusBtn>
                    <span><FaArrowRight></FaArrowRight></span>
                    <AddProductStatusBtn isActive={productDetailsDone} isCurrPage={currentPageStatus === 'Description'}>Description</AddProductStatusBtn>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Product Image */}
                    {currentPageStatus === "Product Image" && (
                        <div className="relative">
                            <h2 className="flex gap-3 items-center my-subtitle mb-5">

                                <span className="text-slate-500">
                                    <FaInfoCircle></FaInfoCircle>
                                </span>
                                Product Image
                            </h2>
                            <div
                                {...getRootProps()}
                                className="border-2 border-dashed bg-green-500 bg-opacity-20 border-green-500 w-3/6 h-[500px] mx-auto cursor-pointer relative"
                            >
                                <input {...getInputProps()} />

                                {isDragActive ? (
                                    <p>Drop the files here ...</p>
                                ) : productImg ? (
                                    productImg.map((img) => (
                                        <figure key={img} className="relative w-full h-full">
                                            <Image alt="Product" src={img} fill></Image>
                                        </figure>
                                    ))
                                ) : (
                                    <p className="flex flex-col h-full gap-3 justify-center items-center py-12">

                                        <span className="text-xl">
                                            <FaFileUpload></FaFileUpload>
                                        </span>
                                        Drag and drop your product image
                                    </p>
                                )}
                            </div>

                            <div className="flex justify-center my-8">
                                <button
                                    className={` ${productImg ? 'my-btn-one' : 'nxt-prv-btn-disable'}`}
                                    disabled={productImg ? false : true}
                                    onClick={() => setCurrentPageStatus("General Information")}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    )}

                    {/* General Information */}
                    {currentPageStatus === "General Information" && (
                        <div className="relative">
                            <h2 className="flex gap-3 items-center my-subtitle mb-5">
                                <span className="text-slate-500">
                                    <FaInfoCircle></FaInfoCircle>
                                </span>
                                General Information
                            </h2>

                            <div className="bg-slate-200 p-8 space-y-4 lg:space-y-8">
                                {/* Product name and Quantity */}
                                <div className="md:flex space-y-6 md:space-y-0 gap-6 lg:gap-14 justify-between">
                                    <div className="flex-1">
                                        <label
                                            htmlFor="productName"
                                            className="block mb-2 text-sm font-medium text-slate-600 dark:text-slate-200 my-subtitle"
                                        >
                                            Product Name
                                        </label>
                                        <input type="text" className="my-inp" id="productName" placeholder="Your name here" {...register("name", { required: true })}
                                        />
                                        {errors.name && <span className="text-red-500">This field is required</span>}
                                    </div>

                                    <div className="flex-1">
                                        <label
                                            htmlFor="quantity"
                                            className="block mb-2 text-sm font-medium text-slate-600 dark:text-slate-200 my-subtitle"
                                        >
                                            Quantity
                                        </label>
                                        <input type="number" className="my-inp" id="quantity" placeholder="Quantity" {...register("quantity", {required: true })}
                                        />
                                        {errors.quantity && (
                                            <span className="text-red-500">This field is required</span>
                                        )}
                                    </div>
                                </div>

                                {/* Date & Coupon */}
                                <div className="md:flex space-y-6 md:space-y-0 gap-6 lg:gap-14 justify-between">
                                    <div className="flex-1">
                                        <label
                                            htmlFor="date"
                                            className="block mb-2 text-sm font-medium text-slate-600 dark:text-slate-200 my-subtitle"
                                        >
                                            Date
                                        </label>
                                        <input
                                            type="text"
                                            className="my-inp"
                                            id="date"
                                            value={new Date().toLocaleDateString()}
                                            {...register("publishDate", { required: true })}
                                        />
                                        {errors.publishDate && <span className="text-red-500">This field is required</span>}
                                    </div>
                                    <div className="flex-1">
                                        <label
                                            htmlFor="productCoupon"
                                            className="block mb-2 text-sm font-medium text-slate-600 dark:text-slate-200 my-subtitle"
                                        >
                                            Product Coupon
                                        </label>
                                        <input
                                            type="text"
                                            className="my-inp"
                                            id="productCoupon"
                                            placeholder="Product Coupon..."
                                            {...register("productCoupon", { required: true })}
                                        />
                                        {errors.productCoupon && (
                                            <span className="text-red-500">This field is required</span>
                                        )}
                                    </div>
                                </div>

                                {/* categories & Sub category */}
                                <div className="md:flex space-y-6 md:space-y-0 gap-6 lg:gap-14 justify-between">
                                    {/* categories */}
                                    <div className="flex-1">
                                        <label className="block mb-2 text-sm font-medium text-slate-600 dark:text-slate-200 my-subtitle">
                                            Product Category
                                        </label>
                                        <select className="my-inp" defaultValue={'default'} {...productCategoryField}
                                            onChange={(e) => { clearColorsSizesField(); resetField('sub_category'); productCategoryField.onChange(e) }}>
                                            <option disabled value={'default'}>Your category here </option>
                                            {Object.keys(categories).map((category, ind) => <option key={ind}>{category}</option>)}
                                        </select>
                                        {errors.category && (
                                            <span className="text-red-500">This field is required</span>
                                        )}
                                    </div>

                                    {/* sub-categories */}
                                    <div className="flex-1">
                                        <label className="block mb-2 text-sm font-medium text-slate-600 dark:text-slate-200 my-subtitle"> Product Sub category </label>
                                        <select className="my-inp" {...productSubCategoryField}
                                            onChange={(e) => { clearColorsSizesField(); productSubCategoryField.onChange(e) }}>
                                            <option disabled value={''} selected> Your Sub category here </option>
                                            {
                                                Object.keys(categories?.[watch('category')] || {})?.map((subcat, ind) => {
                                                    return <option key={ind}>{subcat}</option>;
                                                })
                                            }
                                        </select>
                                        {errors.sub_category && (
                                            <span className="text-red-500">This field is required</span>
                                        )}
                                    </div>
                                </div>

                                {/* Color & Size */}
                                {(isColorsPass || isSizePass) && <div className="md:flex space-y-6 md:space-y-0 gap-6 lg:gap-14 justify-between">
                                    {/* Color */}
                                    {isColorsPass && <div className="flex-1">
                                        <label className="block mb-2 text-sm font-medium text-slate-600 dark:text-slate-200 my-subtitle">Color</label>

                                        <div className="grid grid-cols-3 gap-6 items-center justify-between">
                                            {categories[watch('category')]?.[watch('sub_category')]?.colors?.map((color, ind) => {
                                                return <span className="flex items-center gap-2" key={ind}>
                                                    <input type="radio" id={color} className="radio radio-success" value={color} {...register("colors", { required: true })} />
                                                    <label htmlFor={color}>{color}</label>
                                                </span>
                                            })}
                                        </div>
                                        {errors.colors && (
                                            <span className="text-red-500">This field is required</span>
                                        )}
                                    </div>}

                                    {/* Size */}
                                    {isSizePass && <div className="flex-1">
                                        <label className="block mb-2 text-sm font-medium text-slate-600 dark:text-slate-200 my-subtitle">Size</label>

                                        <div className="grid grid-cols-3 gap-6 items-center justify-between">
                                            {categories[watch('category')]?.[watch('sub_category')]?.sizes?.map((size, ind) => {
                                                return <span className="flex items-center gap-2" key={ind}>
                                                    <input type="radio" id={size} className="radio radio-success" value={size} {...register("sizes", { required: true })} />
                                                    <label htmlFor={size}>{size}</label>
                                                </span>
                                            })}
                                        </div>
                                        {errors.sizes && (
                                            <span className="text-red-500">This field is required</span>
                                        )}
                                    </div>}
                                </div>}

                                {/* Gender & Status */}
                                <div className="md:flex space-y-6 md:space-y-0 gap-6 lg:gap-14 justify-between">
                                    {/* Gender */}
                                    <div className="flex-1">
                                        <label htmlFor="gender" className="block mb-2 text-sm font-medium text-slate-600 dark:text-slate-200 my-subtitle">Gender</label>

                                        <div className="flex items-center justify-between">
                                            {["Woman", "Men", "Unisex"].map((gender, ind) => {
                                                return (
                                                    <span className="flex gap-1 items-center" key={ind}>
                                                        <input type="radio" name="gender" id={gender} className="radio radio-success" value={gender} {...register("productGender", { required: true })} />
                                                        <label htmlFor={gender}>{gender}</label>
                                                    </span>
                                                );
                                            })}
                                        </div>
                                        {errors.productGender && (
                                            <span className="text-red-500">This field is required</span>
                                        )}
                                    </div>

                                    {/* Status */}
                                    <div className="flex-1">
                                        <label htmlFor="status" className="block mb-2 text-sm font-medium text-slate-600 dark:text-slate-200 my-subtitle">Status</label>

                                        <div className="flex items-center justify-between">
                                            {["In stock", "Out of stock", "Pre order"].map((status, ind) => {
                                                return (
                                                    <span className="flex gap-1 items-center" key={ind}>
                                                        <input type="radio" id={status} className="radio radio-success" value={status} {...register("productStatus", { required: true })} />
                                                        <label htmlFor={status}>{status}</label>
                                                    </span>
                                                );
                                            })}
                                        </div>
                                        {errors.productGender && (
                                            <span className="text-red-500">This field is required</span>
                                        )}
                                    </div>

                                </div>
                            </div>

                            <div className="flex justify-center gap-2 my-8">
                                <button
                                    className="my-btn-one" onClick={() => setCurrentPageStatus("Product Image")}>Previous </button>
                                <button className={` ${isGeneralInfoDone ? 'my-btn-one' : 'nxt-prv-btn-disable'}`} disabled={isGeneralInfoDone ? false : true} onClick={() => setCurrentPageStatus("Pricing")} >  Next </button>
                            </div>
                        </div>
                    )}

                    {/* Pricing */}
                    {currentPageStatus === "Pricing" && (
                        <div className="relative">
                            <h2 className="flex gap-3 items-center my-subtitle mb-5"> <span className="text-slate-500">
                                <FaInfoCircle></FaInfoCircle></span>Pricing</h2>

                            <div className="bg-slate-200 p-8 space-y-4 lg:space-y-8">
                                {/* price and discount */}
                                <div className="md:flex space-y-6 md:space-y-0 gap-6 lg:gap-14 justify-between">
                                    <div className="flex-1">
                                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-slate-600 dark:text-slate-200 my-subtitle"> Price </label>
                                        <input type="number" className="my-inp" id="price" placeholder="Price" {...register("price", { required: true })} />
                                        {errors.price && (
                                            <span className="text-red-500">This field is required</span>
                                        )}
                                    </div>

                                    <div className="flex-1">
                                        <label htmlFor="discount" className="block mb-2 text-sm font-medium text-slate-600 dark:text-slate-200 my-subtitle">Discount</label>
                                        <select className="my-inp" {...register("discount", { required: true })}>
                                            <option disabled value={''} selected>Your category here</option>
                                            {['0%', '5%', '10%', '15%', '20%', '25%', '30%', '35%', '40%', '45%', '50%', '55%', '60%', '65%', '70%', '75%', '80%'].map((discount, ind) => <option key={ind}>{discount}</option>)}
                                        </select>
                                        {errors.discount && (<span className="text-red-500">This field is required</span>)}
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center gap-2 my-8">
                                <button className="my-btn-one" onClick={() => setCurrentPageStatus("General Information")} > Previous </button>
                                <button className={` ${isPricingDone ? 'my-btn-one' : 'nxt-prv-btn-disable'}`} disabled={isPricingDone ? false : true} onClick={() => setCurrentPageStatus("Description")} >  Next </button>
                            </div>
                        </div>
                    )}

                    {/* Description */}
                    {currentPageStatus === "Description" && (
                        <div className="relative">
                            <h2 className="flex gap-3 items-center my-subtitle mb-5">

                                <span className="text-slate-500">
                                    <FaInfoCircle></FaInfoCircle>
                                </span>
                                Description
                            </h2>

                            <div className="bg-slate-200 p-8">
                                <div className="md:flex space-y-6 md:space-y-0 gap-6 lg:gap-14 justify-between">
                                    <div className="flex-1">
                                        <label
                                            htmlFor="description"
                                            className="block mb-2 text-sm font-medium text-slate-600 dark:text-slate-200 my-subtitle"
                                        >
                                            Description
                                        </label>
                                        <textarea
                                            type="number"
                                            className="my-inp h-[300px]"
                                            id="description"
                                            placeholder="Description"
                                            {...register("description", { required: true })}
                                        />
                                        {errors.description && (
                                            <span className="text-red-500">This field is required</span>
                                        )}
                                    </div>
                                </div>

                                <div className="flex justify-center gap-2 my-8">
                                    <button className="my-btn-one" onClick={() => setCurrentPageStatus("Pricing")}>  Previous</button>
                                    <button type="submit" className={` ${productDetailsDone ? 'my-btn-one' : 'nxt-prv-btn-disable'}`} disabled={productDetailsDone ? false : true} >  Done </button>
                                </div>
                            </div>
                        </div>
                    )}

                </form>
            </div>
        </div >
    );
};

export default AddProductPage;