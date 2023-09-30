"use client";
import { useState, useEffect } from "react";
import TopRatedCard from "./cards/TopRatedCard";
import CmnSectionTitle from "../HelpingCompo/CmnSectionTitle";
import LoadingSpinner from "../HelpingCompo/LoadingSpinner";
import axios from "axios";
import ProductCard from "./cards/ProductCard";

const TopRatedProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://glamorex-server.vercel.app/top-rated-products")
      .then((data) => setProducts(data.data), setLoading(false));
  }, []);
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div className="container mx-auto px-4 sm:px-5 md:px-8 py-20">
      <CmnSectionTitle
        title={"Top Rated Products"}
        subtitle={"Best of the Best: Top-Rated Product Showcase"}
      ></CmnSectionTitle>
      {loading ? (
        <div className="h-[50vh] flex items-center justify-center">
          <LoadingSpinner></LoadingSpinner>
        </div>
      ) : (
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => {
            return <ProductCard key={product?._id} product={product}></ProductCard>
          })}
        </div>
      )}
    </div>
  );
};

export default TopRatedProductsSection;
