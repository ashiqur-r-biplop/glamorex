"use client";
import { useEffect, useState } from "react";
// import CartRow from "../components/cart/CartRow";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import LoadingSpinner from "@/components/custormer/HelpingCompo/LoadingSpinner";
import CartRow from "@/components/custormer/cart/CartRow";


const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, seTax] = useState(0.2);
  const [ShippingCharge, setShippingCharge] = useState(0);
  const [buyCurrentQuantity, setCurrentQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountGift, setDiscountGift] = useState("");
  const { axiosSecure } = useAxiosSecure();

  const [control, setControl] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    // if(typeof window !== 'undefined' && window.localStorage) {
     setDiscountGift(localStorage.getItem("giftPrize"))
    // }
    axiosSecure("/carts")
      .then((data) => {
        console.log(data?.data);
        const totalSubTotalAmount = data?.data?.reduce(
          (previousPrice, currentPrice) =>
            previousPrice + parseInt(currentPrice.sub_total),
          0
        );

        const totalTax = Math.round((totalSubTotalAmount / 100) * 10);
        const ShippingAmount = Math.round((totalSubTotalAmount / 100) * 15);
        console.log(ShippingAmount);
        const totalOrdersPrice =
          totalSubTotalAmount + totalTax + ShippingAmount;

        seTax(totalTax);
        setShippingCharge(ShippingAmount);

        const discountPrice =
          discountGift !== "Free Delivery"
            ? discountGift?.split("%")[0]
            : setShippingCharge(0);
        setSubtotal(totalSubTotalAmount);
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
        setLoading(false);
      })
      .catch((e) => console.log(e.message));
  }, [discountGift, control]);

  const handlePlus = (id) => {
    const product = cart.find((pd) => pd?.product_id === id);
    const currentQuantity = product.buy_quantity + 1;
    const productTotalPrice = parseInt(product?.price) * currentQuantity;
    product.buy_quantity = currentQuantity;
    product.sub_total = productTotalPrice;
    const cart_product = {
      _id: product._id,
      sub_total: product.sub_total,
      buy_quantity: product.buy_quantity,
    };
    axiosSecure.patch("/inc-dec", cart_product).then((res) => {});
    setCurrentQuantity(currentQuantity);

    const totalSubTotalAmount = cart?.reduce(
      (previousPrice, currentPrice) =>
        previousPrice + parseInt(currentPrice.sub_total),
      0
    );
    const totalTax = Math.round((totalSubTotalAmount / 100) * 10);
    console.log(totalTax);
    const ShippingAmount = Math.round((totalSubTotalAmount / 100) * 15);
    console.log(ShippingAmount);
    const totalOrdersPrice = totalSubTotalAmount + totalTax + ShippingAmount;
    const discountPrice =
      discountGift !== "Free Delivery"
        ? discountGift?.split("%")[0]
        : setShippingCharge(0);
    setSubtotal(totalSubTotalAmount);
    setTotalPrice(
      discountPrice > 0
        ? Math.floor(
            totalOrdersPrice - (discountPrice / 100) * totalOrdersPrice
          )
        : discountGift === "Free Delivery"
        ? totalOrdersPrice - ShippingAmount
        : totalOrdersPrice
    );
    seTax(totalTax);
    setShippingCharge(ShippingAmount);
    setSubtotal(totalSubTotalAmount);
  };

  const handleMinus = (id) => {
    const product = cart.find((pd) => pd?.product_id === id);
    console.log(product);
    const previousQuantity = product.buy_quantity - 1;
    product.buy_quantity = previousQuantity;
    const productTotalPrice = parseInt(product?.price) * previousQuantity;
    product.sub_total = productTotalPrice;
    if (previousQuantity >= 0) {
      setCurrentQuantity(previousQuantity);
      // setControl(!control);
    }
    const cart_product = {
      _id: product._id,
      sub_total: product.sub_total,
      buy_quantity: product.buy_quantity,
    };
    axiosSecure.patch("/inc-dec", cart_product).then((res) => {});
    const totalSubTotalAmount = cart?.reduce(
      (previousPrice, currentPrice) =>
        previousPrice + parseInt(currentPrice.sub_total),
      0
    );

    const totalTax = Math.round((totalSubTotalAmount / 100) * 10);
    console.log(totalTax);
    const ShippingAmount = Math.round((totalSubTotalAmount / 100) * 15);
    console.log(ShippingAmount);
    const totalOrdersPrice = totalSubTotalAmount + totalTax + ShippingAmount;
    const discountPrice =
      discountGift !== "Free Delivery"
        ? discountGift?.split("%")[0]
        : setShippingCharge(0);
    setSubtotal(totalSubTotalAmount);
    setTotalPrice(
      discountPrice > 0
        ? Math.floor(
            totalOrdersPrice - (discountPrice / 100) * totalOrdersPrice
          )
        : discountGift === "Free Delivery"
        ? totalOrdersPrice - ShippingAmount
        : totalOrdersPrice
    );
    seTax(totalTax);
    setShippingCharge(ShippingAmount);
    setSubtotal(totalSubTotalAmount);

    setSubtotal(totalSubTotalAmount);
  };
  const handleDeleteProduct = (id) => {
    // console.log(id);
    axiosSecure.delete(`/delete-cart-product?id=${id}`).then((Response) => {
      console.log(Response);
      setControl(!control);
    });
  };

  if (loading){
    return <LoadingSpinner></LoadingSpinner>
  }
    return (
      <div className="my-container my-16  grid lg:grid-cols-3 gap-5 items-start lg:gap-10">
        {!cart.length ? (
          <>
            <div className="h-full flex justify-center items-center w-full lg:col-span-2">
              <h2 className="my-title">No product added in cart</h2>
            </div>
          </>
        ) : (
          <table className="w-full lg:col-span-2">
            <thead>
              <tr className="text-xl border-b-2">
                <th className="text-start px-5 py-3">Product</th>
                <th className="text-start">Quantity</th>
                <th className="text-end">Subtotal</th>
              </tr>
            </thead>
            <tbody className="">
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
        )}

        {/* Order summary */}
        <div className="bg-gray-100 rounded-md space-y-4 p-5 lg:col-span-1 h-fit lg:mt-14 sticky top-24">
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
