import React from "react";
import moment from "moment";
import Image from "next/image";
import { Rating, ThinStar } from "@smastrom/react-rating";
import { BsCartPlus } from "react-icons/bs";
import Link from "next/link";

const GridLayout = ({ product }) => {
  const {
    _id,
    name,
    quantity,
    image,
    description,
    rating,
    price,
    overall_sell,
  } = product;
  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: "#09AC00",
    inactiveFillColor: "#BCEDC5",
  };
  return (
    <Link href={`/product/${_id}`}>
      {" "}
      <div className="relative flex flex-col rounded-md md:max-w-xs w-full h-full">
        <div className="w-full bg-gray-100 p-5">
          <Image
            className="mx-auto rounded-md"
            src={image}
            width={200}
            height={200}
            alt="product-image"
          />
        </div>
        {quantity == 0 && (
          <p className="bg-red-500 rounded-2xl text-white font-semibold absolute left-0 top-0 ml-4 mt-4 px-2 text-sm">
            Stock Out
          </p>
        )}
        <div className="flex flex-col justify-between space-y-3 h-full">
          <div className="flex justify-between items-center mt-4">
            <p className="font-semibold text-xl">{name}</p>
            <p className="font-semibold text-lg leading-none flex">
              <span className="text-xs">$</span>
              <span>{price}</span>
              {/* TODO: modify here  */}
              <span className="text-xs">.00</span>
            </p>
          </div>
          <p className="text-gray-500">{description}</p>
          <div className="flex items-center gap-1">
            <Rating
              style={{ maxWidth: 110 }}
              value={rating}
              readOnly
              itemStyles={myStyles}
            />
            <p className="text-gray-500">({overall_sell})</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GridLayout;
