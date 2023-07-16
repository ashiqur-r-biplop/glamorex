"use client";

import { useEffect, useState } from "react";
import CmnSectionTitle from "../HelpingCompo/CmnSectionTitle";
import useAddToCart from "@/hooks/useAddToCart";
import ProductCard from "./cards/ProductCard";

const FeaturedSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { handleAddToCart } = useAddToCart();

  // TODO: api no data
  useEffect(() => {
    fetch("https://glamorex.vercel.app/featured-products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-5 md:px-8 py-20">
      <CmnSectionTitle
        title={"Featured Products"}
        subtitle={"Explore our Unique Selection and Exclusive Offers"}
      ></CmnSectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.slice(0, 8).map((product, i) => (
          <ProductCard
            key={i + 1}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
