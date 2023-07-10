import Image from "next/image";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import moment from "moment";

const RecentProductCard = ({ product }) => {
  const { name, previous_price, price, publish_date, image, discount, rating } =
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
            <button className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                Add To Cart
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProductCard;
