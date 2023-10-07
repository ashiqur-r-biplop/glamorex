"use client";
import wishlistBanner from "../../../../public/terms-banner.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import CmnSectionTitle from "@/components/custormer/HelpingCompo/CmnSectionTitle";
import { useEffect, useState } from "react";
import LoadingSpinner from "@/components/custormer/HelpingCompo/LoadingSpinner";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import WishListCard from "@/components/custormer/wishlist/card";
import useAuth from "@/hooks/useAuth";
import Swal from "sweetalert2";

const WishListPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [control, setControl] = useState(true);
  const { axiosSecure } = useAxiosSecure();
  const { user } = useAuth();
  console.log(user?.email);
  useEffect(() => {
    axiosSecure
      .get(`/wishlists/${user?.email}`)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [control, user]);
  const handleRemoveWishlist = (id) => {
    axiosSecure
      .delete(`/delete-wish-list/${id}`)
      .then((res) => {
        if(res.data.deletedCount > 0){
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product remove on the WishList successful",
            showConfirmButton: false,
            timer: 1500,
          });
          setControl(!control);
        };
      })
      .catch((err) => console.log(err));
  };

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
        style={{ backgroundImage: `url(${wishlistBanner.src})` }}
      >
        <div className="bg-black py-5 px-20 rounded-2xl bg-opacity-50 text-white space-y-3">
          <h2 className="text-center text-2xl font-semibold ">WishList</h2>
          <p className="flex gap-2 items-center">
            Home <MdKeyboardArrowRight className="text-lg" /> WishList
          </p>
        </div>
      </div>
      <div className="container mx-auto px-5 py-[100px]">
        <CmnSectionTitle
          title={"WishList"}
          subtitle={"Chic Aspirations: Fashion Wonders on My Wishlist"}
        ></CmnSectionTitle>
        <div className="grid gap-5 grid-cols-1">
          {products.map((product) => {
            return (
              <WishListCard
                handleRemoveWishlist={handleRemoveWishlist}
                key={product?._id}
                product={product}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WishListPage;
