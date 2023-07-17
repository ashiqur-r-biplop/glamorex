"use client";
import { useEffect, useState } from "react";
import CartRow from "../components/cart/CartRow";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import useAxiosSecure from "@/hooks/useAxiosSecure";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, seTax] = useState(0.2);
  const [ShippingCharge, setShippingCharge] = useState(20);
  const [buyCurrentQuantity, setCurrentQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountGift, setDiscountGift] = useState("");
  const { axiosSecure } = useAxiosSecure();

  const [control, setControl] = useState(false);

  useEffect(() => {
    setDiscountGift(localStorage.getItem("giftPrize"));
    axiosSecure("/carts")
      .then((data) => {
        console.log(data?.data);
        const totalAmount = data?.data?.reduce((previousPrice, currentPrice) =>previousPrice + parseInt(currentPrice.price),
          0
        );

        const totalTax = Math.round((totalAmount / 100) * tax);
        const ShippingAmount = Math.round(
          (totalAmount / 1000) * ShippingCharge
        );
        console.log(ShippingAmount);
        const totalOrdersPrice = totalAmount + totalTax + ShippingAmount;

        seTax(totalTax);
        setShippingCharge(ShippingAmount);

        const discountPrice =
          discountGift !== "Free Delivery"
            ? discountGift?.split("%")[0]
            : setShippingCharge(0);
        setSubtotal(totalAmount);
        setTotalPrice(
          discountPrice > 0
            ? Math.floor(
                totalOrdersPrice - (discountPrice / 100) * totalOrdersPrice
              )
            : discountGift === "Free Delivery"
            ? totalOrdersPrice - ShippingAmount
            : totalOrdersPrice
        );

        setCart(data?.data);
      })
      .catch((e) => console.log(e.message));
  }, [discountGift, control]);

  const handlePlus = (id) => {
    const product = cart.find((pd) => pd?.product_id === id);
    const currentQuantity = product.buy_quantity + 1;
    const productTotalPrice = parseInt(product?.price) * currentQuantity;
    product.buy_quantity = currentQuantity;
    product.productTotal = productTotalPrice;
    setCurrentQuantity(currentQuantity);
    // setControl(!control);
  };

  const handleMinus = (id) => {
    const product = cart.find((pd) => pd?.product_id === id);
    const previousQuantity = product.buy_quantity - 1;
    product.buy_quantity = previousQuantity;
    const productTotalPrice = parseInt(product?.price) * previousQuantity;
    product.productTotal = productTotalPrice;
    if (previousQuantity >= 0) {
      setCurrentQuantity(previousQuantity);
      // setControl(!control);
    }
    // setControl(!control)
  };
  const handleDeleteProduct = (id) => {
    console.log(id);
    axiosSecure.delete(`/delete-cart-product?id=${id}`).then((Response) => {
      console.log(Response);
      setControl(!control);
    });
  };

  return (
    <div className="max-w-screen-2xl mx-auto my-16 sm:px-6 md:px-8 px-4 grid lg:grid-cols-[2fr,1fr] gap-5 lg:gap-10">
      <table className="w-full">
        <thead>
          <tr className="text-xl border-b-2">
            <th className="text-start px-5 py-3">Product</th>
            <th className="text-start">Quantity</th>
            <th className="text-end">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, i) => (
            <CartRow
              key={i}
              item={item}
              handlePlus={handlePlus}
              handleMinus={handleMinus}
              buyCurrentQuantity={buyCurrentQuantity}
              handleDeleteProduct={handleDeleteProduct}
            />
          ))}
        </tbody>
      </table>

      {/* Order summary */}
      <div className="bg-gray-100 rounded-md space-y-4 p-5 h-fit lg:mt-14 sticky top-24">
        <p className="text-3xl font-bold text-center py-5">Order Summary</p>
        <div className="flex justify-between w-full">
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span>Tax</span>
          <span>${tax}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping Charge</span>
          <span>${ShippingCharge}</span>
        </div>

        {discountGift && (
          <div className="flex justify-between">
            <span className="font-bold">Discount</span>
            <span className="font-bold">{discountGift}</span>
          </div>
        )}

        <div className="flex justify-between">
          <span className="font-bold">Total</span>
          <span className="font-bold">${totalPrice}</span>
        </div>

        <div className="flex justify-end pt-4">
          <Link href={"/checkout"}>
            <button className="my-btn-one">
              <p className="flex items-center gap-3">
                <span>Proceed to Checkout</span> <FaArrowRight />
              </p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
