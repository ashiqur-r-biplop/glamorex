"use client";

import { useEffect, useState } from "react";
import FeaturedCard from "./cards/FeaturedCard";
import useAddToCart from "@/hooks/useAddToCart";

const TopRatedProducts = () => {
  const [products, setProducts] = useState([]);
  const {handleAddToCart}= useAddToCart()

  useEffect(() => {
    fetch("https://glamorex.vercel.app/trending-products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto sm:px-6 md:px-8 px-4 py-20">
      <h2 className="font-bold text-3xl mb-8">Trending Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.slice(0, 8).map((product, i) => (
          <FeaturedCard handleAddToCart={handleAddToCart} key={i + 1} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TopRatedProducts;
