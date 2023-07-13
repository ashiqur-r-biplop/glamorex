import Image from "next/image";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import moment from "moment";
import Link from "next/link";

const RecentProductCard = ({ product ,handleAddToCart}) => {
  const {product_id, name, previous_price, price, publish_date, image, discount, rating } =
    product || [];





  return (
    <div className="border-2 border-gray-100 transition duration-200 cursor-pointer rounded-2xl relative">
      <figure className="w-[90%] mx-auto h-[300px] relative">
        <Image src={image} fill={true} alt={name} />
      </figure>
      {discount !== null && (
        <p className="bg-green-500 rounded-2xl text-white font-semibold absolute left-0 top-0 ml-4 mt-4 px-4">
          - {discount}%
        </p>
      )}
      <div className="p-5 space-y-2">
        <h2 className="text-xl font-medium">{name}</h2>
        <div className="flex gap-2">
          {previous_price !== null && (
            <p className="line-through">${previous_price}</p>
          )}
          <p className="font-bold text-red-500">${price}</p>
        </div>
        <div>Release Date: {moment(publish_date).format("DD MMMM YYYY")}</div>
        <div className="flex items-center gap-2">
          <Rating style={{ maxWidth: 80 }} value={rating} readOnly />{" "}
          <span>{rating}</span>
          <div className="bg-black rounded-2xl bg-opacity-75 opacity-0 hover:opacity-100 text-blue-100 font-medium p-2 flex justify-center items-center absolute inset-0 transition duration-300 ease-in-out">
          <div className="space-x-3">
              <button
                onClick={() => handleAddToCart(product)}
                className="my-btn-one"
              >
                Add to Cart
              </button>
              <button className="my-btn-one-outline">
                <Link href={`/product/${product_id}`}>View Details</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProductCard;
