import Swal from "sweetalert2";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useRouter } from "next/navigation";

const useAddToCart = () => {
  const { user } = useAuth();
  const { axiosSecure } = useAxiosSecure();
  const router = useRouter();
  const handleAddToCart = (product) => {
    console.log(product);
    const { category, image, name, price, seller_email, seller_name, _id } =
      product || [];

    if (user) {
      const cartItem = {
        category,
        image,
        name,
        price,
        seller_email,
        seller_name,
        product_id: _id,
        customer_email: user,
      };
      console.log(cartItem);

      axiosSecure
        .post("/add-to-cart", cartItem)
        .then((res) => {
          console.log(res);
          if (res.data) {
            //TODO: refetch here
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Product added on the cart",
              showConfirmButton: false,
              timer: 1500,
            });
            console.log(_id);
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
  return { handleAddToCart };
};

export default useAddToCart;
