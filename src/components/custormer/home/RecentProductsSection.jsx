"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import moment from "moment";
import RecentProductCard from "./cards/RecentProductCard";
import useAddToCart from "@/hooks/useAddToCart";
import CmnSectionTitle from "../HelpingCompo/CmnSectionTitle";
import { retry } from "@reduxjs/toolkit/dist/query";
import LoadingSpinner from "../HelpingCompo/LoadingSpinner";

const RecentProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { handleAddToCart } = useAddToCart();
  useEffect(() => {
    fetch("https://glamorex.vercel.app/latest-products")
      .then((res) => res.json())
      .then((data) => setProducts(data), setLoading(false));
  }, []);
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div className="container mx-auto px-4 sm:px-5 md:px-8 py-200">
      <CmnSectionTitle
        title={"New Collection"}
        subtitle={"Fresh Arrivals: Explore our Latest Collection"}
      ></CmnSectionTitle>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => {
          return (
            <RecentProductCard
              handleAddToCart={handleAddToCart}
              key={product?._id}
              product={product}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RecentProductsSection;
