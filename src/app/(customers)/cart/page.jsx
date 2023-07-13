"use client";
import { useEffect, useState } from "react";
import CartRow from "../components/cart/CartRow";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, seTax] = useState(.2);
  const [ShippingCharge, setShippingCharge] = useState(20);
  const [buyCurrentQuantity, setCurrentQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountGift, setDiscountGift] = useState('')

  const [control, setControl] = useState(false);

  useEffect(() => {

    setDiscountGift(localStorage.getItem('giftPrize'))

    fetch("/cart.json")
      .then((res) => res.json())
      .then((data) => {
        const totalAmount = data?.reduce(
          (previousPrice, currentPrice) =>
            previousPrice + currentPrice.productTotal,
          0
        );
        const totalTax = Math.round((totalAmount / 100) * tax);// per 100 dollar purchase , tax is 2 cent
        const ShippingAmount = Math.round((totalAmount / 1000) * ShippingCharge); // per 1000 dollar purchase , shipping charge is 20 dollar
        const totalOrdersPrice = totalAmount + totalTax + ShippingAmount;

        seTax(totalTax);
        setShippingCharge(ShippingAmount);

        const discountPrice = discountGift !== 'Free Delivery' ? discountGift?.split('%')[0] : setShippingCharge(0);
        setSubtotal(totalAmount); //subtotal of all product
        setTotalPrice(discountPrice > 0 ? Math.floor(totalOrdersPrice - ((discountPrice / 100) * totalOrdersPrice)) : discountGift === 'Free Delivery' ? (totalOrdersPrice - ShippingAmount) : totalOrdersPrice); //total price with delivery charge,tax and reduce discount

        setCart(data);
      }).catch(e => console.log(e.message))
  }, [discountGift]);



  const handlePlus = (id) => {
    const product = cart.find((pd) => pd?.product_id === id);
    const currentQuantity = product.buyQuantity + 1;
    const productTotalPrice = product?.price * currentQuantity;
    product.buyQuantity = currentQuantity;
    product.productTotal = productTotalPrice;
    setCurrentQuantity(currentQuantity);
    // setControl(!control);
  };

  const handleMinus = (id) => {
    const product = cart.find((pd) => pd?.product_id === id);
    const previousQuantity = product.buyQuantity - 1;
    product.buyQuantity = previousQuantity;
    const productTotalPrice = product?.price * previousQuantity;
    product.productTotal = productTotalPrice;
    if (previousQuantity >= 0) {
      setCurrentQuantity(previousQuantity);
      // setControl(!control);
    }
    // setControl(!control)
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

        {discountGift && <div className="flex justify-between">
          <span className="font-bold">Discount</span>
          <span className="font-bold">{discountGift}</span>
        </div>}

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
