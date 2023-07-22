import { useRouter } from "next/navigation";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";

export const useWishlist = () => {
  const { user } = useAuth();
  const { axiosSecure } = useAxiosSecure();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  
  const handleWishList = (product) => {
    console.log(product);
    const {
      category,
      image,
      name,
      price,
      seller_email,
      seller_name,
      status,
      _id,
    } = product || [];
    console.log(product?._id);
    if (user) {
      const cartItem = {
        category,
        image,
        name,
        price,
        seller_email,
        seller_name,
        status,
        product_id: _id,
        customer_email: user,
      };
      console.log(cartItem);
      axiosSecure
        .post("/add-to-wishlist", cartItem)
        .then((res) => {
          console.log(res);
          if (res.data.insertedId) {
            //TODO: refetch here
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Product added on the WishList",
              showConfirmButton: false,
              timer: 1500,
            });
            setLoading(false);
          } else {
            Swal.fire({
              position: "center",
              icon: "error",
              title: `${res?.data?.message}`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => console.log(error));
    } else {
      Swal.fire({
        title: "Please login to order Product",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now",
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("/signin");
        }
      });
    }
  };
  return { handleWishList, loading };
};
