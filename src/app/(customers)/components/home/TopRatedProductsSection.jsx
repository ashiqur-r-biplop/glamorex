"use client";
import { useState, useEffect } from "react";
import TopRatedCard from "./cards/TopRatedCard";
import useAddToCart from "@/hooks/useAddToCart";

const TopRatedProductsSection = () => {
  const [products, setProducts] = useState([]);
  const {handleAddToCart} = useAddToCart()
  useEffect(() => {
    fetch("https://glamorex.vercel.app/top-rated-products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);


  return (
    <div className="container mx-auto px-5 py-20">
      <div className="section-title mb-8">
        <h2 className="text-2xl font-semibold">Top Rated Products</h2>
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => {
          return <TopRatedCard handleAddToCart={handleAddToCart} key={product?._id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default TopRatedProductsSection;
