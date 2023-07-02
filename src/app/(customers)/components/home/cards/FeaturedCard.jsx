import Image from "next/image";
import { Rating, ThinStar } from "@smastrom/react-rating";

const featuredCard = ({ product }) => {
  const { name, image, description, rating, price, overall_sell } = product;

  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: "#09AC00",
    inactiveFillColor: "#BCEDC5",
  };

  return (
    <div className="flex flex-col rounded-md max-w-xs h-full">
      <div className="w-full bg-gray-100 p-5">
        <Image
          className="mx-auto rounded-md"
          src={image}
          width={200}
          height={200}
          alt="product-image"
        />
      </div>
      <div className="flex flex-col justify-between space-y-3 h-full">
        <div className="flex justify-between items-center mt-4">
          <p className="font-semibold text-xl">{name}</p>
          <p className="font-semibold text-lg leading-none flex">
            <span className="text-xs">$</span>
            <span>{price}</span>
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
        <div>
          <button className="px-5 py-2 border border-gray-700 rounded-full hover:bg-gray-700 hover:text-white transition-all">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default featuredCard;
