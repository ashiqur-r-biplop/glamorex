"use client";
import React, { useState } from "react";
import FemaleItem from "./FemaleItem";
import Select from "react-select";
import MaleItems from "./MaleItems";
import AccessoriesItems from "./AccessoriesItems";
import TopSeller from "./TopSeller";
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

  const options = [
    { value: "CATEGORIES", label: "CATEGORIES" },
    { value: "WOMAN", label: "WOMAN" },
    { value: "MAN", label: "MAN" },
    { value: "FeMale", label: "FeMale" },
    { value: "TOP_SELLERS", label: "TOP SELLERS" },
    { value: "ACCESSORIES", label: "ACCESSORIES" },
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

  return (
    <div className="md:sticky top-24 py-3">
      <div className="font-semibold text-2xl flex items-center justify-between mb-5">
        <span className="">Filter</span>
        <div className="flex items-center justify-between">
          <BsGrid
            title="grid"
            onClick={() => handleLayout("grid")}
            className="cursor-pointer me-3 hidden md:block"
          ></BsGrid>
          <RxColumns
            title="Column"
            onClick={() => handleLayout("column")}
            className="cursor-pointer"
          ></RxColumns>
        </div>
      </div>
      <div className="md:h-[80vh] overflow-y-auto pe-2">
        <Select
          defaultValue={Category}
          onChange={setSelectedOption}
          options={options}
        />
        <div className="border-b-2 py-3">
          {(Category?.value === "FeMale" || Category?.value === "WOMAN") && (
            <FemaleItem></FemaleItem>
          )}
          {Category?.value === "MAN" && <MaleItems></MaleItems>}
          {Category?.value === "ACCESSORIES" && (
            <AccessoriesItems></AccessoriesItems>
          )}
          {Category?.value === "TOP_SELLERS" && <TopSeller></TopSeller>}
        </div>
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
