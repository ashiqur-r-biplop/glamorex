import Image from "next/image";
import { Rating, ThinStar } from "@smastrom/react-rating";
import Link from "next/link";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import useAuth from "@/hooks/useAuth";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ProductCard = ({ product, handleAddToCart }) => {
  const { user } = useAuth();
  const {
    _id,
    product_id,
    name,
    image,
    description,
    rating,
    price,
    discount,
    previous_price,
  } = product || [];
  const [isFavorite, setIsFavorite] = useState(false);
  const { axiosSecure } = useAxiosSecure();

  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: "#09AC00",
    inactiveFillColor: "#BCEDC5",
  };

  const handleFavoriteControl = () => {
    setIsFavorite(!isFavorite);
  };

  const handleFavorite = (product) => {
    console.log({ ...product, user, is_favorite: true });
    const favoriteCard = { ...product, user, is_favorite: true };

    axiosSecure
      .post("/add-favorite", favoriteCard)
      .then((response) => {
        console.log(response.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Product added to favorite",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleUnfavorite = (product) => {
    product.is_favorite = false;
    const favoriteCard = {...product}
    console.log(favoriteCard)

    axiosSecure
      .delete("/remove-favorite", favoriteCard)
      .then((response) => {
        console.log(response.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Product remove from favorite",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error(error);
      });

  };

  return (
    <div className="flex flex-col rounded-md md:max-w-xs w-full h-full border-2 border-gray-100 relative">
      <div className="w-full p-5">
        <Image
          className="mx-auto rounded-md hover:scale-110 transition-all duration-500 ease-in-out"
          src={image}
          width={200}
          height={200}
          alt={`${name} image`}
        />
      </div>
      {discount !== null && (
        <p className="bg-green-500 rounded-2xl text-white font-semibold absolute left-0 top-0 ml-4 mt-4 px-2 text-sm">
          - {discount}%
        </p>
      )}
      {user && (
        <div onClick={handleFavoriteControl}>
          {isFavorite === false ? (
            <button
              onClick={() => handleFavorite(product)}
              className="favorite-btn"
            >
              <FaRegHeart />
            </button>
          ) : (
            <button
              onClick={() => handleUnfavorite(product)}
              className="favorite-btn"
            >
              <FaHeart />
            </button>
          )}
        </div>
      )}

      <div className="flex flex-col justify-between space-y-3 h-full p-2">
        <div className="flex justify-between items-center mt-4">
          <p className="font-semibold text-xl">{name}</p>
          <div className="flex gap-2">
            {previous_price !== null && (
              <p className="line-through text-red-500">${previous_price}</p>
            )}
            <p className="font-bold text-green-500">${price}</p>
          </div>
        </div>
        <p className="text-gray-500">{description}</p>
        <div className="flex items-center gap-1">
          <Rating
            style={{ maxWidth: 90 }}
            value={rating}
            readOnly
            itemStyles={myStyles}
          />
          {/* TODO: Rating count here */}
          <p className="text-gray-500">{rating}</p>
        </div>
        <div className="space-x-3 mx-auto">
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
  );
};

export default ProductCard;
