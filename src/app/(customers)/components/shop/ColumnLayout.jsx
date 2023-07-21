import React from "react";
import Image from "next/image";
import Link from "next/link";

const ColumnLayout = ({ product }) => {
  const {
    quantity,
    _id,
    name,
    image,
    description,
    rating,
    price,
    overall_sell,
  } = product;

  return (
    <div className="p-5 my-4 n border w-full">
      <div className="md:flex justify-between items-center">
        <div>
          <Image
            className="mx-auto rounded-md"
            src={image}
            width={100}
            height={100}
            alt="product-image"
          />
        </div>
        <div className="flex justify-between items-center md:block">
          <h2 className="font-semibold text-xl">{name}</h2>
          <p className="font-semibold text-lg leading-none flex">
            <span className="text-xs">$</span>
            <span>{price}</span>
            {/* TODO: modify here  */}
            <span className="text-xs">.00</span>
          </p>
        </div>
        <div>
          <p className="text-gray-500">{description.slice(0, 20)}...</p>
        </div>
        <div>
          <div className="space-x-3">
            <button className="my-btn-one-outline">
              <Link href={`/product/${_id}`}>
                View Details
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColumnLayout;
