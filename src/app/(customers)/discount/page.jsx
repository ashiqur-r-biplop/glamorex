"use client"
import { MdKeyboardArrowRight } from "react-icons/md";
import discountBanner from "../../../../public/discountBanner.jpg";
import { useEffect, useState } from "react";
import LoadingSpinner from "@/components/custormer/HelpingCompo/LoadingSpinner";
import CmnSectionTitle from "@/components/custormer/HelpingCompo/CmnSectionTitle";
import ProductCard from "@/components/custormer/home/cards/ProductCard";
import axios from "axios";


const DiscountPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://glamorex-server.vercel.app/discount-products")
      .then((data) => {
        setProducts(data?.data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }
  return (
    <div>
      <div
        className="banner-section bg-slate-800 bg-blend-overlay bg-cover bg-center h-[60vh] flex justify-center items-center"
        style={{ backgroundImage: `url(${discountBanner.src})` }}
      >
        <div className="bg-black py-5 px-20 rounded-2xl bg-opacity-50 text-white space-y-3">
          <h2 className="text-center text-2xl font-semibold ">
            Discount Products
          </h2>
          <p className="flex gap-2 items-center">
            Home <MdKeyboardArrowRight className="text-lg" /> Discount
          </p>
        </div>
      </div>
      <div className="container mx-auto px-5 py-[100px]">
        <CmnSectionTitle
          title={"Discount Products"}
          subtitle={"Unbeatable Deals: Save Big, Shop Now!"}
        ></CmnSectionTitle>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => {
            return <ProductCard key={product?._id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default DiscountPage;
