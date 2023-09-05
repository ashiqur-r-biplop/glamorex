"use client";
import { useWishlist } from "@/hooks/UseWishlist";
import useAddToCart from "@/hooks/useAddToCart";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaBagShopping, FaMinus, FaPlus, FaStar } from "react-icons/fa6";
import ReactImageZoom from "react-image-zoom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import useUserRole from "@/hooks/useUserRole";
import LoadingSpinner from "@/components/custormer/HelpingCompo/LoadingSpinner";

const productDetailsPage = () => {
  const { handleWishList } = useWishlist();
  const { handleAddToCart } = useAddToCart();
  const { id } = useParams();
  //// console.log(id);
  const [product, setProduct] = useState({});
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [buy_quantity, setBuyQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("Description");
  const { axiosSecure } = useAxiosSecure();
  const { role } = useUserRole();
  //// console.log(role);
  useEffect(() => {
    axiosSecure
      .get(`/product/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [id]);

  useEffect(() => {
    if (product) {
      // console.log("34", product?._id);
      axiosSecure
        .get(
          `/related-products?category=${product?.category}&id=${product?._id}`
        )
        .then((res) => {
          setSimilarProducts(res.data);
        });
    }
  }, [product]);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }

  const {
    name,
    image,
    description,
    color,
    key_features,
    product_id,
    seller_name,
    seller_email,
    ratings,
    reviews,
    previous_price,
    discount,
    price,
    quantity,
    overall_sell,
    publish_date,
    category,
    label,
    status,
    gender,
  } = product || {};
  const tabs = ["Description", "Question", "Reviews"];

  //// console.log(product);
  //// console.log(tabs);
  //// console.log(similarProducts);
  const handleMinus = () => {
    setBuyQuantity(buy_quantity - 1);
  };
  const handlePlus = () => {
    setBuyQuantity(buy_quantity + 1);
  };

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
                ({ratings})
              </span>{" "}
              | <span>{reviews} reviews</span> |{" "}
              <span>{overall_sell} sold</span> | <span>{gender} Product</span> |{" "}
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
                className={`px-4 py-2 rounded font-semibold bg-orange-500 bg-opacity-10 ${
                  status === "in stock" ? "text-orange-500" : "text-red-500"
                }`}
              >
                Status: {status}
              </button>
            </div>

            <div className="!my-5">
              <h2 className="my-subtitle">Key feature</h2>
              <ul className="space-y-2">
                {key_features &&
                  key_features.map((kf, i) => <li key={i}>{kf}</li>)}
              </ul>
            </div>

            <div className="grid grid-cols-12">
              {/* size button */}
              <div className="col-span-6">
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
              <div className="col-span-6">
                <h2 className="my-subtitle text-slate-900 mb-2">
                  Colors{" "}
                  <span className="text-slate-500">
                    ({color && color.length})
                  </span>
                </h2>
                <div className="flex flex-wrap gap-2">
                  {color &&
                    [{ red: 10 }, { black: 20 }, { blue: 20 }].map(
                      (item, i) => {
                        const color = Object.keys(item)[0];
                        //// console.log(color);
                        return (
                          <button
                            key={i}
                            className="h-5 w-5 border border-black rounded-full"
                            style={{ backgroundColor: `${color}` }}
                          ></button>
                        );
                      }
                    )}
                </div>
              </div>
            </div>
            <div>
              <h2 className="my-subtitle text-slate-900 mb-2">Quantity</h2>
              <div>
                <span className="flex">
                  <button
                    onClick={() => handleMinus()}
                    className={`border rounded-s-md p-2 ${
                      buy_quantity <= 1 && "bg-[#e7e7e7]"
                    }`}
                    disabled={buy_quantity <= 1}
                  >
                    <FaMinus />
                  </button>
                  <p className="border px-3 py-2">{buy_quantity}</p>
                  <button
                    onClick={handlePlus}
                    className={`border rounded-e-md p-2 ${
                      quantity == buy_quantity && "bg-[#e7e7e7]"
                    }`}
                  >
                    <FaPlus />
                  </button>
                </span>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              {quantity > 0 ? (
                <>
                  <button
                    disabled={role == "admin" || role == "seller"}
                    className={` ${
                      role == "admin" || role == "seller"
                        ? "my-btn-disable"
                        : "my-btn-one"
                    }`}
                  >
                    {" "}
                    <span>
                      <FaBagShopping></FaBagShopping>
                    </span>{" "}
                    Buy Now
                  </button>
                  <button
                    disabled={role == "admin" || role == "seller"}
                    onClick={() => handleAddToCart(product)}
                    className={` ${
                      role == "admin" || role == "seller"
                        ? "my-btn-disable"
                        : "my-btn-one-outline"
                    }`}
                  >
                    Add To Cart
                  </button>
                </>
              ) : (
                <button
                  disabled={role == "admin" || role == "seller"}
                  onClick={() => handleWishList(product)}
                  className={` ${
                    role == "admin" || role == "seller"
                      ? "my-btn-disable"
                      : "my-btn-one-outline"
                  }`}
                >
                  Add to WishList
                </button>
              )}
            </div>
          </div>
        </div>

        {/* description and similar products */}
        <div className="my-14 grid grid-cols-12 gap-5">
          {/* left side (description, question, reviews) */}
          <div className="col-span-12 md:col-span-6 xl:col-span-8">
            <Tabs>
              <TabList
                className={
                  "flex justify-center items-center gap-2 my-5 h-8 mb-8"
                }
              >
                {tabs &&
                  tabs.map((tab, ind) => (
                    <Tab
                      key={ind}
                      className={`${
                        activeTab === tab ? "my-btn-one" : "my-btn-one-outline"
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
            {similarProducts &&
              similarProducts.map((similarProduct, ind) => {
                const { _id, image, name, price, quantity } =
                  similarProduct || {};
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
                      <Link
                        className="my-btn-one-outline"
                        href={`/product/${_id}`}
                      >
                        View Details
                      </Link>
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
