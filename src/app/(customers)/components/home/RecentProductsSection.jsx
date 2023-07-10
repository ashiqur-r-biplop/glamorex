"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import moment from "moment";
import RecentProductCard from "./cards/RecentProductCard";

const RecentProductsSection = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://glamorex.vercel.app/latest-products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container mx-auto px-5 pt-[100px]">
      <div className="section-title mb-8">
        <h2 className="text-2xl font-semibold">New Collection</h2>
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => {
          return <RecentProductCard key={product?._id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default RecentProductsSection;
