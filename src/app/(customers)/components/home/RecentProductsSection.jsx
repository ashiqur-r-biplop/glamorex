"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import moment from "moment";
import productImage from "../../../../../public/product-1.jpg";

const RecentProductsSection = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // console.log(products);

  return (
    <div className="container mx-auto px-5 py-20">
      <div className="section-title mb-8">
        <h2 className="text-2xl font-semibold">New Collection</h2>
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product, i) => {
          return (
            <div
              key={i}
              className="border-2 border-gray-100 transition duration-200 cursor-pointer rounded-2xl relative"
            >
              <figure className="w-full h-[300px] relative">
                <Image src={productImage} fill={true} alt={product?.name} />
              </figure>
              {product?.discount !== null && (
                <p className="bg-green-500 rounded-2xl text-white font-semibold absolute left-0 top-0 ml-4 mt-4 px-4">
                  - {product?.discount}%
                </p>
              )}
              <div className="p-5 space-y-2">
                <h2 className="text-xl font-medium">{product?.name}</h2>
                <div className="flex gap-2">
                  {product?.previous_price !== null && (
                    <p className="line-through">${product?.previous_price}</p>
                  )}
                  <p className="font-bold text-red-500">${product?.price}</p>
                </div>
                <div>
                  Release Date:{" "}
                  {moment(product?.publish_date).format("DD MMMM YYYY")}
                </div>
                <div className="flex items-center gap-2">
                  <Rating
                    style={{ maxWidth: 80 }}
                    value={product?.rating}
                    readOnly
                  />{" "}
                  <span>{product?.rating}</span>
                  <div className="bg-black rounded-2xl bg-opacity-75 opacity-0 hover:opacity-100 text-blue-100 font-medium p-2 flex justify-center items-center absolute inset-0 transition duration-300 ease-in-out">
                    <button className="my-btn-one">Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentProductsSection;
