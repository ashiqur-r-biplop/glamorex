"use client";
import moment from "moment";
import Image from "next/image";
import React from "react";
import { Rating, ThinStar } from "@smastrom/react-rating";
import { BsCartPlus } from "react-icons/bs";

const TopCard = ({ product }) => {
  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: "#09AC00",
    inactiveFillColor: "#BCEDC5",
  };
  return (
    <div className="border-2 p-5 border-gray-100 transition duration-200 cursor-pointer rounded-2xl relative">
      <figure className="w-[90%] mx-auto h-[250px] relative">
        <Image src={product.image} fill={true} alt={product?.name} />
      </figure>
      {product?.discount !== null && (
        <p className="bg-green-500 absolute -top-2 right-0 transform -translate-y-[100%]  inline-block rounded-2xl text-white font-semibold ml-4 mt-8 px-4">
          - {product?.discount}%
        </p>
      )}
      <div className="absolute inline-block top-0 transform translate-x-[20%] translate-y-[10%]  text-center">
        <div className="p-5 space-y-2 font-semibold">
          <h2 className="text-xl font-medium">{product?.name}</h2>
          <div className="flex justify-center items-center gap-2">
            {product?.previous_price !== null && (
              <p className="line-through">${product?.previous_price}</p>
            )}
            <p className="font-bold text-red-500">${product?.price}</p>
          </div>
          <div>
            Release Date: {moment(product?.publish_date).format("DD MMMM YYYY")}
          </div>
          {/* Todo */}
          <div className="">
            {/* <Rating
              style={{ maxWidth: 110 }}
              value={product?.rating}
              readOnly
              itemStyles={myStyles}
            /> */}
            <p className="text-gray-500 inline-block">
              (Ratting {product?.rating})
            </p>
          </div>
          <div className="flex justify-evenly items-center">
            <button>
              <a href="#_" className="relative inline-block text-lg group">
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span className="relative">Details</span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </a>
            </button>
            <button>
              <a href="#_" className="relative inline-block text-lg group">
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span className="relative">
                    <BsCartPlus></BsCartPlus>
                  </span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </a>
            </button>
          </div>
        </div>
        <div className="bg-green-400 rounded-2xl bg-opacity-75 opacity-0 hover:opacity-30 text-green-400 font-medium p-2 flex justify-center items-center absolute inset-0 transition duration-500 ease-in-out"></div>
      </div>
    </div>
  );
};

export default TopCard;
