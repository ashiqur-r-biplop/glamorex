"use client";

import { useEffect, useState } from "react";
import useAddToCart from "@/hooks/useAddToCart";
import CmnSectionTitle from "../HelpingCompo/CmnSectionTitle";
import ProductCard from "./cards/ProductCard";
import LoadingSpinner from "../HelpingCompo/LoadingSpinner";
import axios from "axios";

const TopRatedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { handleAddToCart } = useAddToCart();

  useEffect(() => {
    axios.get("https://glamorex-server.vercel.app/trending-products")
      .then((data) => setProducts(data.data), setLoading(false));
  }, []);
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div className="container mx-auto px-4 sm:px-5 md:px-8 py-20">
      <CmnSectionTitle
        title={"Trending Products"}
        subtitle={"Unveiling Fashion's Hottest Trends"}
      ></CmnSectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.slice(0, 8).map((product, i) => (
          <ProductCard
            key={i + 1}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default TopRatedProducts;
