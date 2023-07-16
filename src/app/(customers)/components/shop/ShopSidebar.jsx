"use client";
import React, { useState } from "react";
import Select from "react-select";
import { BsGrid } from "react-icons/bs";
import { RxColumns } from "react-icons/rx";
import { GridSystem } from "./HandleGridSystem.js";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import ColorProduct from "./ColorProduct";
import ProductSize from "./ProductSize";

const ShopSideBar = ({ setControl, control }) => {
  const [Category, setSelectedOption] = useState(null);
  const [controlProductColor, setControlProductColor] = useState(false);
  const [controlProductSize, setControlProductSize] = useState(false);
  const [filterIngData, setFilteringData] = useState(null);
  const [subCategory, setSubcategory] = useState("");
  const [gander, setGander] = useState("");
  const options = [
    { value: "Clothing", label: "Clothing" },
    { value: "Footwear", label: "Footwear" },
    { value: "Accessories", label: "Accessories" },
    { value: "Outerwear", label: "Outerwear" },
    { value: "Swimwear", label: "Swimwear" },
    { value: "Intimates", label: "Intimates" },
    { value: "Activewear", label: "Activewear" },
    { value: "Formal_Wear", label: "Formal Wear" },
    { value: "Beauty_and_Cosmetics", label: "Beauty and Cosmetics" },
    { value: "Sale_and_Clearance", label: "Sale and Clearance" },
  ];
  const handleLayout = (display) => {
    GridSystem(display);
    setControl(!control);
  };
  const handleColorProduct = () => {
    setControlProductColor(!controlProductColor);
  };
  const handleSizeProduct = () => {
    setControlProductSize(!controlProductSize);
  };
  const handleGander = (e) => {
    setGander(e.target.value);
  };
  const handleSubCategory = (e) => {
    setSubcategory(e.target.value);
  };
  const handleShopFilter = () => {
    const obj = {
      gander: gander,
      category: Category?.value,
      subCategory: subCategory,
    };

    setFilteringData(obj);
  };
  console.log(filterIngData);
  return (
    <div className="md:sticky top-24 py-3">
      <div className="font-semibold text-2xl flex items-center justify-between mb-5">
        <span className="">Filter</span>
        <div className="hidden md:block">
          <div className="flex items-center justify-between ">
            <BsGrid
              title="grid"
              onClick={() => handleLayout("grid")}
              className="cursor-pointer me-3"
            ></BsGrid>
            <RxColumns
              title="Column"
              onClick={() => handleLayout("column")}
              className="cursor-pointer"
            ></RxColumns>
          </div>
        </div>
      </div>
      <div className="md:h-[80vh] overflow-y-auto pe-2">
        <div className="border-b-2 pb-3">
          <form
            onChange={handleGander}
            className="flex justify-between items-center"
          >
            <div className="flex items-center">
              <input
                className="me-2 cursor-pointer"
                type="radio"
                id="Men"
                name="handleGander"
                value="Men"
              />
              <label htmlFor="Men" className="ms-1 cursor-pointer">
                Men
              </label>
            </div>
            <div className="flex items-center">
              <input
                className="me-2 cursor-pointer"
                type="radio"
                id="female"
                name="handleGander"
                value="female"
              />

              <label htmlFor="female" className="ms-1 cursor-pointer">
                Female
              </label>
            </div>
            <div className="flex items-center ">
              <input
                className="me-2 cursor-pointer"
                type="radio"
                id="unisex"
                name="handleGander"
                value="unisex"
              />
              <label htmlFor="unisex" className="ms-1 cursor-pointer">
                Unisex
              </label>
            </div>
          </form>
        </div>
        <div className="border-b-2 py-5">
          <Select
            defaultValue={Category}
            onChange={setSelectedOption}
            options={options}
          />
        </div>
        <form onChange={handleSubCategory}>
          {Category?.value === "Clothing" && (
            <div className="border-b-2 py-3">
              {[
                "T-Shirts",
                "Jeans",
                "Dresses",
                "Shirts",
                "Pants",
                "Blouses",
                "Skirts",
                "Jackets",
                "Coats",
                "Sweaters",
                "Hoodies",
                "Shorts",
                "Leggings",
              ].map((subCategory, i) => (
                <div key={i}>
                  <input
                    className="me-2"
                    type="radio"
                    id={subCategory}
                    name="Clothing"
                    value={subCategory}
                  />
                  <label htmlFor={subCategory}>{subCategory}</label>
                </div>
              ))}
            </div>
          )}
          {Category?.value === "Footwear" && (
            <div className="border-b-2 py-3">
              {["Sneakers", "Boots", "Sandals", "Flats", "Heels"].map(
                (subCategory, i) => (
                  <div key={i}>
                    <input
                      className="me-2"
                      type="radio"
                      id={subCategory}
                      name="Footwear"
                      value={subCategory}
                    />
                    <label htmlFor={subCategory}>{subCategory}</label>
                  </div>
                )
              )}
            </div>
          )}
          {Category?.value === "Accessories" && (
            <div className="border-b-2 py-3">
              {[
                "Bags",
                "Belts",
                "Hats",
                "Scarves",
                "Jewelry",
                "Sunglasses",
                "Watches",
              ].map((subCategory, i) => (
                <div key={i}>
                  <input
                    className="me-2"
                    type="radio"
                    id={subCategory}
                    name="Accessories"
                    value={subCategory}
                  />
                  <label htmlFor={subCategory}>{subCategory}</label>
                </div>
              ))}
            </div>
          )}
          {Category?.value === "Outerwear" && (
            <div className="border-b-2 py-3">
              {["Jackets", "Coats", "Sweaters", "Hoodies", "Raincoats"].map(
                (subCategory, i) => (
                  <div key={i}>
                    <input
                      className="me-2"
                      type="radio"
                      id={subCategory}
                      name="Outerwear"
                      value={subCategory}
                    />
                    <label htmlFor={subCategory}>{subCategory}</label>
                  </div>
                )
              )}
            </div>
          )}
          {Category?.value === "Swimwear" && (
            <div className="border-b-2 py-3">
              {["Swimsuits", "Bikinis", "Board Shorts"].map((subCategory, i) => (
                <div key={i}>
                  <input
                    className="me-2"
                    type="radio"
                    id={subCategory}
                    name="Swimwear"
                    value={subCategory}
                  />
                  <label htmlFor={subCategory}>{subCategory}</label>
                </div>
              ))}
            </div>
          )}
          {Category?.value === "Intimates" && (
            <div className="border-b-2 py-3">
              {["Bras", "Panties", "Lingerie"].map((subCategory, i) => (
                <div key={i}>
                  <input
                    className="me-2"
                    type="radio"
                    id={subCategory}
                    name="Intimates"
                    value={subCategory}
                  />
                  <label htmlFor={subCategory}>{subCategory}</label>
                </div>
              ))}
            </div>
          )}
          {Category?.value === "Activewear" && (
            <div className="border-b-2 py-3">
              {[
                "Athletic Tops",
                "Leggings",
                "Sports Bras",
                "Athletic Shorts",
              ].map((subCategory, i) => (
                <div key={i}>
                  <input
                    className="me-2"
                    type="radio"
                    id={subCategory}
                    name="Activewear"
                    value={subCategory}
                  />
                  <label htmlFor={subCategory}>{subCategory}</label>
                </div>
              ))}
            </div>
          )}
          {Category?.value === "Formal_Wear" && (
            <div className="border-b-2 py-3">
              {[
                "Evening Gowns",
                "Tuxedos",
                "Formal Dresses",
                "Formal Suits",
              ].map((subCategory, i) => (
                <div key={i}>
                  <input
                    className="me-2"
                    type="radio"
                    id={subCategory}
                    name="Formal_Wear"
                    value={subCategory}
                  />
                  <label htmlFor={subCategory}>{subCategory}</label>
                </div>
              ))}
            </div>
          )}
          {Category?.value === "Beauty_and_Cosmetics" && (
            <div className="border-b-2 py-3">
              {[
                "Makeup",
                "Skincare Products",
                "Fragrances",
                "Haircare Products",
              ].map((subCategory, key) => (
                <div key={i}>
                  <input
                    className="me-2"
                    type="radio"
                    id={subCategory}
                    name="Beauty_and_Cosmetics"
                    value={subCategory}
                  />
                  <label htmlFor={subCategory}>{subCategory}</label>
                </div>
              ))}
            </div>
          )}
          {Category?.value === "Sale_and_Clearance" && (
            <div className="border-b-2 py-3">
              {["Discounted Items", "Clearance Items"].map((subCategory, i) => (
                <div key={i}>
                  <input
                    className="me-2"
                    type="radio"
                    id={subCategory}
                    name="Sale_and_Clearance"
                    value={subCategory}
                  />
                  <label htmlFor={subCategory}>{subCategory}</label>
                </div>
              ))}
            </div>
          )}
        </form>
        {gander && Category && subCategory && (
          <div className="text-center">
            <button
              onClick={handleShopFilter}
              className="my-btn-one-outline my-2"
            >
              Filter
            </button>
          </div>
        )}
        <div className="border-b-2 pb-3">
          <div className="flex justify-between items-center pt-3 text-2xl">
            <h4 className="">Color</h4>
            <div className="cursor-pointer" onClick={handleColorProduct}>
              {controlProductColor == false ? (
                <AiOutlinePlus></AiOutlinePlus>
              ) : (
                <AiOutlineMinus></AiOutlineMinus>
              )}
            </div>
          </div>
          {controlProductColor == true && <ColorProduct></ColorProduct>}
        </div>
        <div className="border-b-2 pb-3">
          <div className="flex justify-between items-center pt-3 text-2xl">
            <h4 className="">Size</h4>
            <div className="cursor-pointer" onClick={handleSizeProduct}>
              {controlProductSize == false ? (
                <AiOutlinePlus></AiOutlinePlus>
              ) : (
                <AiOutlineMinus></AiOutlineMinus>
              )}
            </div>
          </div>
          {controlProductSize == true && <ProductSize></ProductSize>}
        </div>
      </div>
    </div>
  );
};

export default ShopSideBar;
