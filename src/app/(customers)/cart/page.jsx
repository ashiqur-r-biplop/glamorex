"use client";

import { useEffect, useState } from "react";
import CartRow from "../components/cart/CartRow";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);

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
            <CartRow key={i} item={item} />
          ))}
        </tbody>
      </table>
      <div className="bg-gray-100 rounded-md space-y-4 p-5 h-fit lg:mt-14 sticky top-24">
        <p className="text-3xl font-bold text-center py-5">Order Summary</p>
        <div className="flex justify-between w-full">
          <span>Subtotal</span>
          <span>$1000</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>$100</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping Charge</span>
          <span>$100</span>
        </div>
        <div className="flex justify-between">
          <span className="font-bold">Total</span>
          <span className="font-bold">$1200</span>
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
