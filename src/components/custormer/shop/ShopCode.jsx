"use client";
import ShopHeader from "../../../../public/assets/lottieAnimation/shop-lotti.json";
import Lottie from "lottie-react";
import { use, useEffect, useState } from "react";

import axios from "axios";
import { currentLayout } from "@/components/custormer/shop/HandleGridSystem";
import LoadingSpinner from "@/components/custormer/HelpingCompo/LoadingSpinner";
import ShopSideBar from "@/components/custormer/shop/ShopSidebar";
import TopCard from "@/components/custormer/shop/TopCard";
const ShopPage = () => {
  const [TopSale, setTopSale] = useState([]);
  const [loading, setLoading] = useState(true);
  const [control, setControl] = useState(true);
  const [controlLayout, setControlLayout] = useState(true);
  const [layout, setLayout] = useState("");
  const [isControl, setIsControl] = useState(true);

  useEffect(() => {
    const localLayout = JSON.parse(currentLayout());
    setLayout(localLayout);
  }, [controlLayout]);

  useEffect(() => {
    fetch("https://glamorex.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setTopSale(data);
        console.log(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [isControl]);
  const shopFilter = (gander, category, subCategory) => {
    axios(
      `https://glamorex.vercel.app/products?category=${category}&gander=${gander}&subCategory=${subCategory}`
    ).then((data) => {
      setTopSale(data?.data);
    });
  };
  const ClearShopFilter = () => {
    setIsControl(!isControl);
  };

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }
  return (
    <div className="">
      <div className="bg-slate-300">
        <div className="container mx-auto flex flex-col-reverse md:flex-row py-5 justify-center md:justify-between items-center">
          <div className="text-center space-y-1 md:space-y-3  py-10 md:py-0 ">
            <h2 className={`uppercase  md:text-5xl text-2xl`}>The Biggest</h2>
            <h1 className={`uppercase  md:text-7xl font-bold text-4xl`}>
              Sale
            </h1>
            <div className="flex justify-between ps-3 items-center bg-transparent border border-[#47a369]">
              <input
                type="text"
                placeholder="Search by any product"
                style={{ outline: "none" }}
                className="bg-transparent "
              />
              <button>
                <a
                  href="#_"
                  className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#22C55E]  group"
                >
                  <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#47a369]  group-hover:-mr-4 group-hover:-mt-4">
                    <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-[#CBD5E1]"></span>
                  </span>
                  <span
                    style={{ borderRadius: "50px 0px 50px 0px" }}
                    className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#47a369]  group-hover:mb-12 group-hover:translate-x-0"
                  ></span>
                  <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                    Search
                  </span>
                </a>
              </button>
            </div>
          </div>
          <div className="relative md:h-[500px] w-[350px] h-[250px]">
            <Lottie
              animationData={ShopHeader}
              loop={true}
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
      <div className="container  my-10 mx-auto px-3 grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* TODO */}
        <div className="md:col-span-3 relative">
          <ShopSideBar
            setControl={setControl}
            shopFilter={shopFilter}
            control={control}
            setControlLayout={setControlLayout}
            controlLayout={controlLayout}
            ClearShopFilter={ClearShopFilter}
          ></ShopSideBar>
        </div>
        <div className="md:col-span-9">
          <div
            className={`${
              layout === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                : ""
            }`}
          >
            {TopSale.map((product) => (
              <TopCard
                key={product?._id}
                product={product}
                layout={layout}
              ></TopCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
