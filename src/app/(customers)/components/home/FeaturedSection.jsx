"use client";

import { useEffect, useState } from "react";
import FeaturedCard from "./cards/FeaturedCard";
import CmnSectionTitle from "../HelpingCompo/CmnSectionTitle";

const FeaturedSection = () => {
  const [products, setProducts] = useState([]);
  const [loading,setLoading]= useState(true)
  
// TODO: api no data 
  useEffect(() => {
    fetch("https://glamorex.vercel.app/featured-products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
      });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <div className="max-w-screen-2xl mx-auto sm:px-6 md:px-8 px-4 py-12">
      <CmnSectionTitle title={'Featured Products'} subtitle={'Explore our Unique Selection and Exclusive Offers'}></CmnSectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.slice(0, 8).map((product, i) => (
          <FeaturedCard key={i + 1} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
