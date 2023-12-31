"use client";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import featuredImage from "../../../../../public/featured.png";
import MakeFeaturedImage from "../../../../../public/make-featured.png";

import LoadingSpinner from "@/components/custormer/HelpingCompo/LoadingSpinner";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const ProductManagementPage = () => {
  // const { status } = useParams();
  const { axiosSecure } = useAxiosSecure();
  const [productCategory, setProductCategory] = useState("All Product");
  const [control, setControl] = useState(true);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const { data: allProducts, isLoading } = useGetProductsQuery(status);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axiosSecure.get("/all-products").then((data) => {
      setProducts(data.data);
      console.log(data);
      setIsLoading(false);
    });
    console.log("admin all data");
  }, [productCategory, control]);
  const updateOrderStatus = (status, productId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are Update Product Status",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const data = {
          status,
          productId,
        };
        // console.log(data);
        axiosSecure.patch("/admin/update-product-status", data).then((res) => {
          console.log(res, 51);
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Product Status has Changed",
              showConfirmButton: false,
              timer: 1500,
            });
          }
          setControl(!control);
        });
      }
    });
  };

  const deleteProduct = (status, id) => {
    Swal.fire({
      title: "Are you sure?",
      text: `${
        status === "featured"
          ? "You are Remove From Feature"
          : "You are Delete Product"
      }`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `${
        status === "featured" ? "Yes Remove" : "Yes, Delete it!"
      }`,
    }).then((result) => {
      if (result.isConfirmed) {
        if (status === "featured") {
          axiosSecure.patch(`/admin/remove-featured?id=${id}`).then((res) => {
            if (res.data.modifiedCount > 0) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Product remove from Featured",
                showConfirmButton: false,
                timer: 1500,
              });
              setControl(!control);
            }
          });
        } else {
          axiosSecure.delete(`/admin/delete-product?id=${id}`).then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Product deleted Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              setControl(!control);
            }
          });
        }
      }
    });
  };

  const makeFeaured = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are This Product Added in Featured",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Featured!",
    }).then((result) => {
      if (result.isConfirmed) {
        const data = {
          productId: id,
        };
        axiosSecure.patch("/admin/make-featured", data).then((res) => {
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Product has Featured",
              showConfirmButton: false,
              timer: 1500,
            });
            setControl(!control);
          } else if (res.data.message) {
            Swal.fire({
              position: "center",
              icon: "error",
              title: `${res.data.message}`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    axiosSecure
      .get(`/admin/search-products/${search}`)
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false)
      })
      .catch((error) => console.log(error))
  }, [search]);

  const options = [
    { value: "pending", label: "Pending" },
    { value: "approved", label: "Approved" },
    { value: "rejected", label: "Rejected" },
  ];

  if (isLoading)
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );

  return (
    <div className="p-3">
      <div className="my-8 bg-slate-50 shadow rounded p-5">
        <div className="flex gap-3 justify-between items-center mb-3">
          <h2 className="my-subtitle text-slate-600">All Products Requests</h2>
        </div>

        <Tabs>
          <TabList
            className={
              "flex gap-5 items-stretch my-5 border-b border-[#0621bb6b]"
            }
          >
            {["All Product", "pending", "approved", "rejected", "featured"].map(
              (elem, ind) => {
                return (
                  <Tab
                    key={ind}
                    onClick={() => setProductCategory(elem)}
                    className={`py-2 first-letter:uppercase !bg-transparent cursor-pointer outline-none ${
                      productCategory === elem
                        ? "!border-b-2 !border-[#0621bb] !text-[#0621bb]"
                        : "border-none"
                    }`}
                  >
                    {elem}
                  </Tab>
                );
              }
            )}
          </TabList>

          {["All Product", "pending", "approved", "rejected", "featured"].map(
            (elem, ind) => {
              return (
                <TabPanel key={ind}>
                  {/* search inp */}
                  <div className="relative mx-auto w-[80%] flex justify-center my-8">
                    <input
                      type="text"
                      onChange={handleSearch}
                      name="search_text"
                      placeholder="search here..."
                      className="bg-white py-3 w-full pl-14 border-2 rounded-full outline-none border-stone-300 text-black"
                    />
                    <button
                      type="submit"
                      className="absolute top-1/2 -translate-y-1/2 left-5 text-stone-300"
                    >
                      <FaSearch></FaSearch>
                    </button>
                  </div>
                  {/* Table */}
                  <div className="overflow-x-auto mt-10">
                    <table className="table">
                      {/* head */}
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Image</th>
                          <th>Name</th>
                          <th>Seller Email</th>
                          <th>Seller Name</th>
                          <th>Status</th>
                          <th>Make Feature</th>
                          <th>
                            Delete{" "}
                            {productCategory === "featured"
                              ? "Featured"
                              : "Product"}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {!isLoading &&
                          products
                            .filter((product) =>
                              productCategory === "All Product"
                                ? true
                                : productCategory === "featured"
                                ? product.is_featured
                                : product.product_status === productCategory
                            )
                            .map((product, i) => {
                              const {
                                _id,
                                name,
                                image,
                                seller_name,
                                is_featured,
                                product_status,
                                seller_email,
                              } = product || {};
                              return (
                                <tr key={_id}>
                                  <th>{i + 1}</th>
                                  <td>
                                    <span className="border block  w-[60px] h-[60px] relative rounded overflow-hidden">
                                      <Image
                                        style={{ objectFit: "cover" }}
                                        src={image}
                                        fill={true}
                                        alt="user Phone"
                                      />
                                    </span>
                                  </td>
                                  <td>{name}</td>
                                  <td>{seller_email}</td>
                                  <td>{seller_name}</td>
                                  <td>
                                    <select
                                      defaultValue={product_status}
                                      onChange={(e) =>
                                        updateOrderStatus(e.target.value, _id)
                                      }
                                      className="px-4 py-2 border bg-none"
                                      name=""
                                      id=""
                                    >
                                      {options.map((option, i) => (
                                        <option key={i} value={option.value}>
                                          {option.label}
                                        </option>
                                      ))}
                                    </select>
                                  </td>
                                  <td>
                                    <span
                                      onClick={() => makeFeaured(_id)}
                                      className="flex justify-center items-center cursor-default"
                                    >
                                      {is_featured ? (
                                        <Image
                                          className="cursor-pointer"
                                          src={featuredImage}
                                          width={28}
                                          height={28}
                                          alt="featured icon"
                                        />
                                      ) : (
                                        <Image
                                          className="cursor-pointer"
                                          src={MakeFeaturedImage}
                                          width={28}
                                          height={28}
                                          alt="featured icon"
                                        />
                                      )}
                                    </span>
                                  </td>
                                  <td>
                                    <span
                                      onClick={() =>
                                        deleteProduct(productCategory, _id)
                                      }
                                      className="p-3 rounded border border-[#a61414] cursor-pointer text-[#a61414] bg-[#a6141922] inline-block mx-2"
                                    >
                                      <IoCloseOutline />
                                    </span>
                                  </td>
                                </tr>
                              );
                            })}
                      </tbody>
                    </table>
                  </div>
                </TabPanel>
              );
            }
          )}
        </Tabs>
      </div>
    </div>
  );
};

export default ProductManagementPage;
