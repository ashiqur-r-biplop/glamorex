"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaBagShopping, FaStar } from "react-icons/fa6";
import ReactImageZoom from "react-image-zoom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const productDetailsPage = ({ params }) => {
  const { id } = params;
  const [product, setProduct] = useState({});
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Description");

  useEffect(() => {
    axios("/products.json")
      .then((res) => {
        const extractProduct = res.data.find((p) => p.product_id === id);
        const similarProducts = res.data.filter(
          (p) => p.category === extractProduct.category
        );
        setProduct(extractProduct);
        setSimilarProducts(similarProducts);
        setLoading(false);
      })
      .catch((e) => console.log(e.message));
  }, []);

  if (loading) {
    return (
      <h2 className="my-title h-screen flex items-center justify-center bg-emerald-300">
        Loading...
      </h2>
    );
  }

  const {
    name,
    image,
    description,
    colors,
    keyFeatures,
    product_id,
    seller_name,
    seller_email,
    rating,
    review,
    previous_price,
    discount,
    price,
    quantity,
    overall_sell,
    publish_date,
    category,
    label,
    status,
  } = product || {};
  const tabs = ["Description", "Question", "Reviews"];

  console.log(product);
  console.log(similarProducts);

  return (
    <div className="bg-slate-100 py-6">
      <div className="my-container">
        <h2 className="flex items-center gap-2 text-lg">
          {" "}
          <Link href={"/"}>
            <FaHome></FaHome>
          </Link>{" "}
          / <Link href={`/`}>{category}</Link> / <Link href={`/`}>{name}</Link>{" "}
        </h2>

        {/* product details */}
        <div className="grid grid-cols-12 gap-8 p-5 py-14">
          {/* product image */}
          <div className="col-span-12 lg:col-span-5 bg-[#ffffff] flex items-center">
            <figure className="rounded-lg w-full h-[450px] relative z-10 cursor-zoom-in">
              {/* <Image
                                src={image}
                                fill
                            /> */}
              <ReactImageZoom
                width={500}
                height={500}
                zoomWidth={300}
                img={image}
              />
            </figure>
          </div>

          {/* product info */}
          <div className="col-span-12 lg:col-span-7 bg-slate-50 rounded p-5 space-y-5">
            <h2 className="my-subtitle text-slate-900">{name}</h2>
            <h2 className="flex gap-2 font-semibold text-slate-600">
              <span className="flex items-center gap-2">
                {" "}
                <span className="text-orange-500">
                  <FaStar></FaStar>
                </span>{" "}
                {rating}
              </span>{" "}
              | <span>{review} reviews</span> | <span>{overall_sell} sold</span>
            </h2>

            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 rounded font-semibold bg-orange-500 bg-opacity-10 text-orange-500">
                Price: ${price}
              </button>
              <button className="px-4 py-2 rounded font-semibold bg-orange-500 bg-opacity-10 text-orange-500">
                Regular Price: $
                <span className="line-through">{previous_price}</span>
              </button>
              <button className="px-4 py-2 rounded font-semibold bg-orange-500 bg-opacity-10 text-orange-500">
                Product available: {quantity}
              </button>
              <button
                className={`px-4 py-2 rounded font-semibold bg-orange-500 bg-opacity-10 ${status === "in stock" ? "text-orange-500" : "text-red-500"
                  }`}
              >
                Status: {status}
              </button>
            </div>

            <div className="!my-5">
              <h2 className="my-subtitle">Key feature</h2>
              <ul className="space-y-2">
                {keyFeatures.map((kf) => (
                  <li>{kf}</li>
                ))}
              </ul>
            </div>

            {/* size button */}
            <div>
              <h2 className="my-subtitle text-slate-900 mb-2">Size</h2>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 rounded font-semibold bg-orange-500 bg-opacity-10 text-orange-500">
                  S
                </button>
                <button className="px-4 py-2 rounded font-semibold bg-orange-500 bg-opacity-10 text-orange-500">
                  M
                </button>
                <button className="px-4 py-2 rounded font-semibold bg-orange-500 bg-opacity-10 text-orange-500">
                  L
                </button>
                <button className="px-4 py-2 rounded font-semibold bg-orange-500 bg-opacity-10 text-orange-500">
                  XL
                </button>
              </div>
            </div>

            {/* color button */}
            <div>
              <h2 className="my-subtitle text-slate-900 mb-2">
                Colors <span className="text-slate-500">({colors.length})</span>
              </h2>
              <div className="flex flex-wrap gap-2">
                {colors.map((color) => (
                  <button
                    className={`h-5 w-5 border border-black rounded-full`}
                    style={{ backgroundColor: color }}
                  ></button>
                ))}
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <button className="my-btn-one">
                {" "}
                <span>
                  <FaBagShopping></FaBagShopping>
                </span>{" "}
                Add to bag
              </button>
              <button className="my-btn-one-outline">Add to wishlist</button>
            </div>
          </div>
        </div>

        {/* description and similar products */}
        <div className="my-14 grid grid-cols-12 gap-5">
          {/* left side (description, question, reviews) */}
          <div className="col-span-12 md:col-span-6 xl:col-span-8">
            <Tabs>
              <TabList
                className={"flex justify-center items-center gap-2 my-5 h-8 mb-8"}
              >
                {tabs.map((tab, ind) => (
                  <Tab
                    key={ind}
                    className={`${activeTab === tab ? "my-btn-one" : "my-btn-one-outline"
                      }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </Tab>
                ))}
              </TabList>

              <TabPanel>
                <h2>{description}</h2>
              </TabPanel>
              <TabPanel>
                <h2>Question</h2>
              </TabPanel>
              <TabPanel>
                <h2>Reviews</h2>
              </TabPanel>
            </Tabs>
          </div>

          {/* similar product */}
          <div className="col-span-12 md:col-span-6 xl:col-span-4">
            <h2 className="my-title mb-3">Related Products</h2>
            {similarProducts.map((similarProduct, ind) => {
              const { image, name, price, quantity } = similarProduct || {};
              return (
                <div
                  key={ind}
                  className="grid grid-cols-12 gap-3 items-center my-4 p-5 border rounded bg-slate-50"
                >
                  <div className="col-span-4">
                    <figure className="rounded-lg w-full h-[150px] relative z-10 cursor-zoom-in">
                      <Image src={image} fill />
                    </figure>
                  </div>
                  <div className="col-span-8 space-y-3">
                    <h2 className="my-subtitle">{name}</h2>
                    <p>${price}</p>
                    <p>{quantity} product left</p>
                    <button className="my-btn-one">Add to Bag</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default productDetailsPage;
