"use client";
import { useState, useEffect } from "react";
import TopRatedCard from "./cards/TopRatedCard";
import useAddToCart from "@/hooks/useAddToCart";
import CmnSectionTitle from "../HelpingCompo/CmnSectionTitle";
import LoadingSpinner from "../HelpingCompo/LoadingSpinner";

const TopRatedProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { handleAddToCart } = useAddToCart();
  useEffect(() => {
    fetch("https://glamorex.vercel.app/top-rated-products")
      .then((res) => res.json())
      .then((data) => setProducts(data), setLoading(false));
  }, []);
  if(loading){
    return <LoadingSpinner></LoadingSpinner>
  }
  return (
    <div className="container mx-auto px-4 sm:px-5 md:px-8 py-20">
      <CmnSectionTitle
        title={"Top Rated Products"}
        subtitle={"Best of the Best: Top-Rated Product Showcase"}
      ></CmnSectionTitle>
      {
        loading? <div className="h-[50vh] flex items-center justify-center"><LoadingSpinner></LoadingSpinner></div>:
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => {
          return (
            <TopRatedCard
              handleAddToCart={handleAddToCart}
              key={product?._id}
              product={product}
            />
          );
        })}
      </div>
      }
    </div>
  );
};

export default TopRatedProductsSection;
