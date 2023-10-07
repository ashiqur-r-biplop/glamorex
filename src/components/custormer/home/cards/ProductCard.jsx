import Image from "next/image";
import { Rating, ThinStar } from "@smastrom/react-rating";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const {
    _id,
    name,
    image,
    description,
    ratings: rating,
    reviews,
    price,
    discount,
    quantity,
  } = product || {};
  const Old_price =
    (parseInt(price) / 100) *
    parseInt(typeof discount === "string" ? discount?.split("%")[0] : discount);
  const previous_price = Old_price + parseInt(price);
  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: "#09AC00",
    inactiveFillColor: "#BCEDC5",
  };
  // console.log(price, previous_price);
  return (
    <Link href={`/product/${_id}`}>
      <div className="rounded-md w-full h-full border-2 border-gray-100 p-5 hover:shadow-lg transition-all duration-300 ease-in-out relative">
        <div className="mx-auto p-5 max-h-[350px] w-full relative overflow-hidden">
          <Image
            className="mx-auto rounded-md hover:scale-110 transition-all duration-500 ease-in-out"
            src={image}
            width={300}
            height={350}
            style={{ height: "350px", objectFit: "contain", width: "auto" }}
            alt={`${name} image`}
          />
        </div>
        {discount !== null &&
          (typeof discount === "string" ? discount?.split("%")[0] : discount) >
            0 && (
            <p className="bg-green-500 rounded-2xl text-white font-semibold absolute left-0 top-0 ml-4 mt-4 px-2 text-sm">
              - {discount}
            </p>
          )}
        {parseInt(quantity) == 0 && (
          <p className="bg-red-500 rounded-2xl text-white font-semibold absolute left-0 top-0 ml-4 mt-4 px-2 text-sm">
            Stock Out
          </p>
        )}

        <div className="flex flex-col justify-between space-y-3 p-2">
          <div className="flex justify-between items-center mt-4">
            <p className="font-semibold text-xl" name={name}>
              {name.length > 25 ? `${name.slice(0, 30)}...` : name}
            </p>
            <div className="flex justify-start items-start gap-2">
              {!(parseInt(price) === previous_price) && (
                <p className="line-through text-red-500">${previous_price}</p>
              )}

              <p className="font-bold text-green-500">${parseInt(price)}</p>
            </div>
          </div>
          <p className="text-gray-500 pb-4">{description.slice(0, 180)}...</p>
          <div className="flex items-center gap-1  absolute -bottom-0 ">
            <Rating
              style={{ maxWidth: 90 }}
              value={rating}
              readOnly
              itemStyles={myStyles}
            />
            {/*reviews count here */}
            <p className="text-gray-500">({reviews}) Reviews</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
