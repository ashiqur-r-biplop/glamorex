import Image from "next/image";
import { Rating, ThinStar } from "@smastrom/react-rating";
import Link from "next/link";

const TopRatedCard = ({ product }) => {
  const {
    _id,
    name,
    image,
    description,
    ratings,
    price,
    discount,
    previous_price,
    quantity,
  } = product || [];

 

  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: "#09AC00",
    inactiveFillColor: "#BCEDC5",
  };

  return (
    <Link href={`/product/${_id}`}>
      <div className="flex flex-col rounded-md md:max-w-xs w-full h-full border-2 border-gray-100 relative hover:shadow-lg transition-all duration-300 ease-in-out">
        <div className="w-full p-5">
          <Image
            className="mx-auto rounded-md hover:scale-110 transition-all duration-500 ease-in-out"
            src={image}
            width={200}
            height={200}
            alt={`${name} image`}
          />
        </div>
        {discount !== null && discount > 0 && (
          <p className="bg-green-500 rounded-2xl text-white font-semibold absolute left-0 top-0 ml-4 mt-4 px-2 text-sm">
            - {discount}%
          </p>
        )}
        {quantity == 0 && (
          <p className="bg-red-500 rounded-2xl text-white font-semibold absolute left-0 top-0 ml-4 mt-4 px-2 text-sm">
            Stock Out
          </p>
        )}
        <div className="flex flex-col justify-between space-y-3 h-full p-2">
          <div className="flex justify-between items-center mt-4">
            <p className="font-semibold text-xl">{name}</p>
            <div className="flex gap-2">
              {previous_price && (
                <p className="line-through text-red-500">${previous_price}</p>
              )}
              <p className="font-bold text-green-500">${price}</p>
            </div>
          </div>
          <p className="text-gray-500">{description}</p>
          <div className="flex items-center gap-1">
            <Rating
              style={{ maxWidth: 90 }}
              value={ratings}
              readOnly
              itemStyles={myStyles}
            />
            {/* TODO: Rating count here */}
            <p className="text-gray-500">({ratings}) Ratings</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TopRatedCard;
