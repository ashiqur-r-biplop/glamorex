"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaInfoCircle } from "react-icons/fa";
import {
  FaArrowRight,
  FaCheck,
  FaCircle,
  FaCircleCheck,
  FaFile,
  FaFileArrowUp,
  FaXmark,
} from "react-icons/fa6";
import "./add-product.css";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddProductPage = () => {
  const [currentPageStatus, setCurrentPageStatus] = useState("Product Image");
  const [productImg, setProductImg] = useState("");

  //  Hold form field via react hook form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(productImg);

  // for get image via react dropzone
  const onDrop = useCallback(
    (acceptedFiles) => {
      setProductImg(acceptedFiles.map((file) => URL.createObjectURL(file)));
    },
    [setProductImg]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="add-product-main">
      {/* title nav */}
      <div className="flex justify-between items-center py-3 px-4 lg:px-8 xl:px-16 border">
        <h1 className="my-subtitle">Adding new product</h1>
        <div className="space-x-2">
          <button className="my-btn-one-outline">
            {" "}
            <FaXmark></FaXmark> Cancel
          </button>
          <button className="my-btn-one">
            {" "}
            <FaCheck></FaCheck> Save product
          </button>
        </div>
      </div>

      <div className="px-8 py-4">
        {/* current status of field*/}
        <div className="flex items-center gap-5 mb-8 h-10">
          <button
            className={`${
              currentPageStatus === "Product Image"
                ? "status-btn-active"
                : "status-btn"
            }`}
          >
            {" "}
            <span>
              {currentPageStatus === "Product Image" ? (
                <FaCircleCheck></FaCircleCheck>
              ) : (
                <FaCircle></FaCircle>
              )}
            </span>
            Product Image
          </button>
          <span>
            <FaArrowRight></FaArrowRight>
          </span>
          <button
            className={`${
              currentPageStatus === "General Information"
                ? "status-btn-active"
                : "status-btn"
            }`}
          >
            {" "}
            <span>
              {currentPageStatus === "General Information" ? (
                <FaCircleCheck></FaCircleCheck>
              ) : (
                <FaCircle></FaCircle>
              )}
            </span>
            General Information
          </button>
          <span>
            <FaArrowRight></FaArrowRight>
          </span>
          <button
            className={`${
              currentPageStatus === "Pricing"
                ? "status-btn-active"
                : "status-btn"
            }`}
          >
            {" "}
            <span>
              {currentPageStatus === "Pricing" ? (
                <FaCircleCheck></FaCircleCheck>
              ) : (
                <FaCircle></FaCircle>
              )}
            </span>{" "}
            Pricing
          </button>
          <span>
            <FaArrowRight></FaArrowRight>
          </span>
          <button
            className={`${
              currentPageStatus === "Description"
                ? "status-btn-active"
                : "status-btn"
            }`}
          >
            {" "}
            <span>
              {currentPageStatus === "Description" ? (
                <FaCircleCheck></FaCircleCheck>
              ) : (
                <FaCircle></FaCircle>
              )}
            </span>{" "}
            Description
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Product Image */}
          {currentPageStatus === "Product Image" && (
            <div className="relative">
              <h2 className="flex gap-3 items-center my-subtitle mb-5">
                {" "}
                <span className="text-slate-500">
                  <FaInfoCircle></FaInfoCircle>
                </span>{" "}
                Product Image
              </h2>

              <div
                {...getRootProps()}
                className="border-2 border-dashed bg-green-500 bg-opacity-20 border-green-500 p-8 w-3/6 h-[500px] mx-auto cursor-pointer"
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
                    {" "}
                    <span className="text-xl">
                      <FaFileArrowUp></FaFileArrowUp>
                    </span>{" "}
                    Drag 'n' drop some files here, or click to select files
                  </p>
                )}
              </div>

              <div className="flex justify-center my-8">
                <button
                  className="my-btn-one"
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
                {" "}
                <span className="text-slate-500">
                  <FaInfoCircle></FaInfoCircle>
                </span>{" "}
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
                    <input
                      type="text"
                      className="my-inp"
                      id="productName"
                      placeholder="Your name here"
                      {...register("productName", { required: true })}
                    />
                    {errors.productName && <span>This field is required</span>}
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="quantity"
                      className="block mb-2 text-sm font-medium text-slate-600 dark:text-slate-200 my-subtitle"
                    >
                      Quantity
                    </label>
                    <input
                      type="number"
                      className="my-inp"
                      id="quantity"
                      placeholder="Quantity"
                      {...register("productQuantity", { required: true })}
                    />
                    {errors.productQuantity && (
                      <span>This field is required</span>
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
                    {errors.publishDate && <span>This field is required</span>}
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
                      <span>This field is required</span>
                    )}
                  </div>
                </div>

                {/* category & Sub category */}
                <div className="md:flex space-y-6 md:space-y-0 gap-6 lg:gap-14 justify-between">
                  <div className="flex-1">
                    <label
                      htmlFor="productCategory"
                      className="block mb-2 text-sm font-medium text-slate-600 dark:text-slate-200 my-subtitle"
                    >
                      Product Category
                    </label>
                    <select
                      id="productCategory"
                      className="my-inp"
                      {...register("productCategory", { required: true })}
                    >
                      <option disabled selected>
                        Your category here
                      </option>
                      <option>Clothing</option>
                      <option>Footwear</option>
                      <option>Accessories</option>
                      <option>Outerwear</option>
                      <option>Swimwear</option>
                      <option>Intimates</option>
                      <option>Activewear</option>
                      <option>Formal Wear</option>
                      <option>Beauty and Cosmetics</option>
                      <option>Sale and Clearance</option>{" "}
                      {/* where customers can find discounted item */}
                    </select>
                    {errors.productCategory && (
                      <span>This field is required</span>
                    )}
                  </div>

                  <div className="flex-1">
                    <label
                      htmlFor="productSubCategory"
                      className="block mb-2 text-sm font-medium text-slate-600 dark:text-slate-200 my-subtitle"
                    >
                      Product Sub category
                    </label>
                    <select
                      id="productSubCategory"
                      className="my-inp"
                      onChange={(e) => console.log(e.target.value)}
                      {...register("productSubCategory", { required: true })}
                    >
                      <option disabled selected>
                        Your Sub category here
                      </option>
                      {["shirt", "pant"].map((subcat, ind) => {
                        return <option key={ind}>{subcat}</option>;
                      })}
                    </select>
                    {errors.productSubCategory && (
                      <span>This field is required</span>
                    )}
                  </div>
                </div>

                {/* Color & Size */}
                <div className="md:flex space-y-6 md:space-y-0 gap-6 lg:gap-14 justify-between">
                  <div className="flex-1">
                    <label
                      htmlFor="color"
                      className="block mb-2 text-sm font-medium text-slate-600 dark:text-slate-200 my-subtitle"
                    >
                      Color
                    </label>

                    <div className="grid grid-cols-3 gap-6 items-center justify-between">
                      {["Black", "White", "Red", "Blue", "Yellow", "Green"].map(
                        (gender, ind) => {
                          return (
                            <span className="flex gap-1 items-center" key={ind}>
                              <input
                                type="radio"
                                name="color"
                                id={gender}
                                className="radio radio-success"
                              />
                              <label htmlFor={gender}>{gender}</label>
                            </span>
                          );
                        }
                      )}
                    </div>
                  </div>

                  <div className="flex-1">
                    <label
                      htmlFor="size"
                      className="block mb-2 text-sm font-medium text-slate-600 dark:text-slate-200 my-subtitle"
                    >
                      Size
                    </label>

                    <div className="grid grid-cols-3 gap-6 items-center justify-between">
                      {["XS", "S", "M", "L", "XL", "XXL"].map((size, ind) => {
                        return (
                          <span className="flex gap-1 items-center">
                            <input
                              type="radio"
                              name="size"
                              id={size}
                              className="radio radio-success"
                            />
                            <label htmlFor={size}>{size}</label>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Gender & Status */}
                <div className="md:flex space-y-6 md:space-y-0 gap-6 lg:gap-14 justify-between">
                  <div className="flex-1">
                    <label
                      htmlFor="gender"
                      className="block mb-2 text-sm font-medium text-slate-600 dark:text-slate-200 my-subtitle"
                    >
                      Gender
                    </label>

                    <div className="flex items-center justify-between">
                      {["Woman", "Men", "Unisex"].map((gender, ind) => {
                        return (
                          <span className="flex gap-1 items-center">
                            <input
                              type="radio"
                              name="gender"
                              id={gender}
                              className="radio radio-success"
                            />
                            <label htmlFor={gender}>{gender}</label>
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex-1">
                    <label
                      htmlFor="gender"
                      className="block mb-2 text-sm font-medium text-slate-600 dark:text-slate-200 my-subtitle"
                    >
                      Status
                    </label>

                    <div className="flex items-center justify-between">
                      {["In stock", "Out of stock", "Pre order"].map(
                        (productStatus, ind) => {
                          return (
                            <span className="flex gap-1 items-center">
                              <input
                                type="radio"
                                name="productStatus"
                                id={productStatus}
                                className="radio radio-success"
                              />
                              <label htmlFor={productStatus}>
                                {productStatus}
                              </label>
                            </span>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-2 my-8">
                <button
                  className="my-btn-one"
                  onClick={() => setCurrentPageStatus("Product Image")}
                >
                  Previous
                </button>
                <button
                  className="my-btn-one"
                  onClick={() => setCurrentPageStatus("Pricing")}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Pricing */}
          {currentPageStatus === "Pricing" && (
            <div className="relative">
              <h2 className="flex gap-3 items-center my-subtitle mb-5">
                {" "}
                <span className="text-slate-500">
                  <FaInfoCircle></FaInfoCircle>
                </span>{" "}
                Pricing
              </h2>

              <div className="bg-slate-200 p-8 space-y-4 lg:space-y-8">
                {/* Old price and new price */}
                <div className="md:flex space-y-6 md:space-y-0 gap-6 lg:gap-14 justify-between">
                  <div className="flex-1">
                    <label
                      htmlFor="priceOld"
                      className="block mb-2 text-sm font-medium text-slate-600 dark:text-slate-200 my-subtitle"
                    >
                      Old Price
                    </label>
                    <input
                      type="number"
                      className="my-inp"
                      id="priceOld"
                      placeholder="Old price"
                      {...register("productPriceOld", { required: true })}
                    />
                    {errors.productPriceOld && (
                      <span>This field is required</span>
                    )}
                  </div>

                  <div className="flex-1">
                    <label
                      htmlFor="priceNew"
                      className="block mb-2 text-sm font-medium text-slate-600 dark:text-slate-200 my-subtitle"
                    >
                      New price
                    </label>
                    <input
                      type="number"
                      className="my-inp"
                      id="priceNew"
                      placeholder="New price"
                      {...register("productPriceNew", { required: true })}
                    />
                    {errors.productPriceNew && (
                      <span>This field is required</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-2 my-8">
                <button
                  className="my-btn-one"
                  onClick={() => setCurrentPageStatus("General Information")}
                >
                  Previous
                </button>
                <button
                  className="my-btn-one"
                  onClick={() => setCurrentPageStatus("Description")}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Description */}
          {currentPageStatus === "Description" && (
            <div className="relative">
              <h2 className="flex gap-3 items-center my-subtitle mb-5">
                {" "}
                <span className="text-slate-500">
                  <FaInfoCircle></FaInfoCircle>
                </span>{" "}
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
                      {...register("productDetails", { required: true })}
                    />
                    {errors.productDetails && (
                      <span>This field is required</span>
                    )}
                  </div>
                </div>

                <div className="flex justify-center gap-2 my-8">
                  <button
                    className="my-btn-one"
                    onClick={() => setCurrentPageStatus("Pricing")}
                  >
                    Previous
                  </button>
                  <button type="submit" className="my-btn-one">
                    Done
                  </button>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddProductPage;