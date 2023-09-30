import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

const WishListCard = ({ product, handleRemoveWishlist }) => {
  const { product_id, _id, name, image, price, status } = product || [];

  return (
    <div className="p-5 my-4 n border w-full">
      <div className="flex flex-col md:flex-row gap-5 justify-between items-center">
        <div className="p-5 max-h-[200px] w-[200px] relative overflow-hidden">
          <Image
            className="mx-auto rounded-md"
            src={image}
            width={500}
            height={500}
            style={{ height: "150px", objectFit: "contain", width: "auto" }}
            alt={`${name} image`}
          />
        </div>
        <div className="flex justify-around gap-5 items-center md:block">
          <h2 className="font-semibold text-xl">
            {name.length > 20 ? `${name.slice(0, 15)}...` : name}
          </h2>
          <p className="font-semibold text-lg leading-none flex">
            <span className="text-xs">$</span>
            <span>{price}</span>
          </p>
        </div>
        <div>
          <div className="badge badge-secondary badge-outline">{status}</div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="space-x-3">
            {/* TODO: view details not working  */}
            <button className="my-btn-one-outline">
              <Link href={`/product/${product_id}`}>View Details</Link>
            </button>
          </div>
          <div className="space-x-3">
            {/* TODO: view details not working  */}
            <button
              onClick={() => handleRemoveWishlist(_id)}
              className="my-btn-one-outline"
            >
              <AiOutlineClose></AiOutlineClose>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListCard;
