import Swal from "sweetalert2";
import axios from "axios";
import useIpApi from "./useIpApi";

const useAddToCart = () => {
  const {ipAddress} = useIpApi()
  console.log(ipAddress)

  const handleAddToCart = (product) => {
    const { category, image, name, price, seller_email, seller_name, _id } =
      product || [];

      const cartItem = {
        category,
        image,
        name,
        price,
        seller_email,
        seller_name,
        product_id: _id,
        current_ip_address: ipAddress
      }

      axios
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
          }
        })
        .catch((error) => console.log(error));
    }
    return { handleAddToCart };
  };
  


export default useAddToCart;
