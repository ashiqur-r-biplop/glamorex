"use client";
import moment from "moment";
import Image from "next/image";
import React from "react";
import { Rating, ThinStar } from "@smastrom/react-rating";
import { BsCartPlus } from "react-icons/bs";
import Link from "next/link";

const TopCard = ({ product, layout, handleAddToCart }) => {
  return (
    <div
      className={`border-2 border-gray-100 transition duration-200 cursor-pointer rounded-2xl relative ${
        layout === "grid" ? "" : "md:w-1/3 w-full mx-auto"
      }`}
    >
      <figure className="w-[90%] mx-auto h-[250px] relative ">
        <Image
          src={product.image}
          fill={true}
          className="p-5"
          alt={product?.name}
        />
      </figure>
      {product?.discount !== null && (
        <p className="bg-green-500 absolute -top-2 right-0 transform -translate-y-[100%]  inline-block rounded-2xl text-white font-semibold ml-4 mt-8 px-4">
          - {product?.discount}%
        </p>
      )}
      <div className="absolute inline-block top-0 transform w-full h-full md:translate-y-[10%] lg:translate-x-[0%] lg:translate-y-[0%]  text-center">
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
          <div className="space-x-3">
            <button
              onClick={() => handleAddToCart(product)}
              className="my-btn-one"
            >
              Add to Cart
            </button>
            <button className="my-btn-one-outline">
              <Link href={`/product/${product?.product_id}`}>View Details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCard;
