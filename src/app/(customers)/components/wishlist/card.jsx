import React from "react";
import Image from "next/image";
import Link from "next/link";

const WishListCard = ({ product }) => {
  const { _id, name, image, price, status } = product || [];

  return (
    <div className="p-5 my-4 n border w-full">
      <div className="flex flex-col md:flex-row gap-5 justify-between items-center">
        <div>
          <Image
            className="mx-auto rounded-md"
            src={image}
            width={100}
            height={100}
            alt="product-image"
          />
        </div>
        <div className="flex justify-between gap-5 items-center md:block">
          <h2 className="font-semibold text-xl">{name}</h2>
          <p className="font-semibold text-lg leading-none flex">
            <span className="text-xs">$</span>
            <span>{price}</span>
          </p>
        </div>
        <div>
        <div className="badge badge-secondary badge-outline">{status}</div>
        </div>
        <div>
          <div className="space-x-3">
            {/* TODO: view details not working  */}
            <button className="my-btn-one-outline">
              <Link href={`/product/${_id}`}>View Details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListCard;
