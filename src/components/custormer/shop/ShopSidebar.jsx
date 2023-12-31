"use client";
import React, { useState } from "react";
import Select from "react-select";
import { BsGrid } from "react-icons/bs";
import { RxColumns } from "react-icons/rx";
import { GridSystem } from "./HandleGridSystem.js";

const ShopSideBar = ({
  setControl,
  control,
  shopFilter,
  ClearShopFilter,
  setControlLayout,
  controlLayout,
}) => {
  const [gander, setGander] = useState("");
  const [controlProductColor, setControlProductColor] = useState(false);
  const [controlProductSize, setControlProductSize] = useState(false);
  const [filterIngData, setFilteringData] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  const categories = {
    Clothing: {
      "T-Shirts": {
        sizes: ["S", "M", "L", "XL"],
        colors: ["Red", "Blue", "Green", "Black", "White"],
      },
      Jeans: {
        sizes: ["26", "28", "30", "32", "34"],
        colors: ["Blue", "Black"],
      },
      Dresses: {
        sizes: ["S", "M", "L"],
        colors: ["Red", "Blue", "Black"],
      },
      Shirts: {
        sizes: ["S", "M", "L", "XL"],
        colors: ["White", "Blue", "Black"],
      },
      Pants: {
        sizes: ["28", "30", "32", "36"],
        colors: ["Black", "Gray"],
      },
      Blouses: {
        sizes: ["S", "M", "L"],
        colors: ["White", "Pink", "Yellow"],
      },
      Skirts: {
        sizes: ["S", "M", "L"],
        colors: ["Black", "Red", "Navy"],
      },
      Jackets: {
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "Brown", "Gray"],
      },
      Coats: {
        sizes: ["S", "M", "L"],
        colors: ["Black", "Beige"],
      },
      Sweaters: {
        sizes: ["S", "M", "L", "XL"],
        colors: ["Gray", "Navy", "Burgundy"],
      },
      Hoodies: {
        sizes: ["S", "M", "L"],
        colors: ["Black", "Gray", "Blue"],
      },
      Shorts: {
        sizes: ["S", "M", "L"],
        colors: ["Blue", "Khaki"],
      },
      Leggings: {
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "Gray", "Navy"],
      },
    },
    Footwear: {
      Sneakers: {
        sizes: ["7", "8", "9", "10", "11"],
        colors: ["White", "Black", "Blue", "Red"],
      },
      Boots: {
        sizes: ["7", "8", "9", "10", "11"],
        colors: ["Brown", "Black"],
      },
      Sandals: {
        sizes: ["6", "7", "8", "9", "10"],
        colors: ["Black", "Brown", "Beige"],
      },
      Flats: {
        sizes: ["6", "7", "8", "9"],
        colors: ["Black", "Silver", "Pink"],
      },
      Heels: {
        sizes: ["6", "7", "8", "9"],
        colors: ["Black", "Red", "Nude"],
      },
    },
    Accessories: {
      Bags: {
        sizes: [],
        colors: ["Black", "Brown", "Blue", "Red"],
      },
      Belts: {
        sizes: ["S", "M", "L"],
        colors: ["Black", "Brown"],
      },
      Hats: {
        sizes: ["One Size"],
        colors: ["Black", "White", "Beige"],
      },
      Scarves: {
        sizes: ["One Size"],
        colors: ["Red", "Blue", "Gray"],
      },
      Jewelry: {
        sizes: [],
        colors: ["Gold", "Silver"],
      },
      Sunglasses: {
        sizes: ["One Size"],
        colors: ["Black", "Brown", "Gray"],
      },
      Watches: {
        sizes: ["One Size"],
        colors: ["Silver", "Gold", "Rose Gold"],
      },
    },
    Outerwear: {
      Jackets: {
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "Brown", "Gray"],
      },
      Coats: {
        sizes: ["S", "M", "L"],
        colors: ["Black", "Beige"],
      },
      Sweaters: {
        sizes: ["S", "M", "L", "XL"],
        colors: ["Gray", "Navy", "Burgundy"],
      },
      Hoodies: {
        sizes: ["S", "M", "L"],
        colors: ["Black", "Gray", "Blue"],
      },
      Raincoats: {
        sizes: ["S", "M", "L"],
        colors: ["Yellow", "Blue", "Transparent"],
      },
    },
    Swimwear: {
      Swimsuits: {
        sizes: ["S", "M", "L"],
        colors: ["Black", "Blue", "Red"],
      },
      Bikinis: {
        sizes: ["S", "M", "L"],
        colors: ["Black", "White", "Pink"],
      },
      "Board Shorts": {
        sizes: ["S", "M", "L", "XL"],
        colors: ["Blue", "Black", "Green"],
      },
    },
    Intimates: {
      Bras: {
        sizes: ["32A", "32B", "34A", "34B", "36A", "36B"],
        colors: ["Black", "White", "Pink"],
      },
      Panties: {
        sizes: ["S", "M", "L"],
        colors: ["Black", "White", "Beige", "Pink"],
      },
      Lingerie: {
        sizes: ["S", "M", "L"],
        colors: ["Red", "Black", "Purple"],
      },
    },
    Activewear: {
      "Athletic Tops": {
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "Gray", "Blue"],
      },
      Leggings: {
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "Gray", "Navy"],
      },
      "Sports Bras": {
        sizes: ["S", "M", "L"],
        colors: ["Black", "White", "Pink"],
      },
      "Athletic Shorts": {
        sizes: ["S", "M", "L"],
        colors: ["Black", "Gray", "Blue"],
      },
    },
    "Formal Wear": {
      "Evening Gowns": {
        sizes: ["S", "M", "L"],
        colors: ["Black", "Red", "Blue"],
      },
      Tuxedos: {
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "Red"],
      },
      "Formal Dresses": {
        sizes: ["S", "M", "L"],
        colors: ["Black", "Navy", "Burgundy"],
      },
      "Formal Suits": {
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "Gray", "Navy"],
      },
    },
    "Beauty and Cosmetics": {
      Makeup: {
        sizes: [],
        colors: [],
      },
      "Skincare Products": {
        sizes: [],
        colors: [],
      },
      Fragrances: {
        sizes: [],
        colors: [],
      },
      "Haircare Products": {
        sizes: [],
        colors: [],
      },
    },
    "Sale and Clearance": {
      "Discounted Items": {
        sizes: [],
        colors: [],
      },
      "Clearance Items": {
        sizes: [],
        colors: [],
      },
    },
  };
  //// console.log(selectedSizes);
  const handleLayout = (display) => {
    GridSystem(display);
    setControlLayout(!controlLayout);
  };

  const handleGander = (e) => {
    setGander(e.target.value);
  };
  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
    setCategory(selectedOption?.value);
    setSelectedSubCategory(null);
    setSelectedSizes([]);
    setSelectedColors([]);
  };
  const handleSubCategoryChange = (selectedOption) => {
    setSelectedSubCategory(selectedOption);
    setSubCategory(selectedOption);

    setSelectedSizes([]);
    setSelectedColors([]);
  };
  const renderCategories = () => {
    return Object.keys(categories).map((category) => ({
      value: category,
      label: category,
    }));
  };
  // sub Category
  const renderSubCategories = () => {
    if (selectedCategory) {
      const subCategories = categories[selectedCategory.value];
      return Object.keys(subCategories).map((subCategory) => (
        <div key={subCategory} className="py-1">
          <input
            className="me-2"
            type="radio"
            id={subCategory}
            name={selectedCategory.value}
            value={subCategory}
            checked={selectedSubCategory === subCategory}
            onChange={() => handleSubCategoryChange(subCategory)}
          />
          <label htmlFor={subCategory}>{subCategory}</label>
        </div>
      ));
    }
    return null;
  };
  //// console.log(selectedColors);

  //   if (selectedSubCategory) {
  //     const { sizes } = categories[selectedCategory.value][selectedSubCategory];
  //     return sizes.map((size) => (
  //       <div key={size} className="flex items-center py-1 space-x-2">
  //         <input
  //           type="checkbox"
  //           id={size}
  //           name={size}
  //           value={size}
  //           checked={selectedSizes.includes(size)}
  //           onChange={handleSizeChange}
  //         />
  //         <label htmlFor={size}>{size}</label>
  //       </div>
  //     ));
  //   }
  //   return null;
  // };
  // const renderColors = () => {
  //   if (selectedSubCategory) {
  //     const { colors } =
  //       categories[selectedCategory.value][selectedSubCategory];
  //     return colors.map((color) => (
  //       <div key={color} className="flex items-center py-1  space-x-2">
  //         <input
  //           type="checkbox"
  //           id={color}
  //           name={color}
  //           value={color}
  //           checked={selectedColors.includes(color)}
  //           onChange={handleColorChange}
  //         />
  //         <label htmlFor={color}>{color}</label>
  //       </div>
  //     ));
  //   }
  //   return null;
  // };
  const handleShopFilter = () => {
    shopFilter(gander, category, subCategory);
  };
  //// console.log(filterIngData);
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
                id="woman"
                name="handleGander"
                value="woman"
              />
              <label htmlFor="woman" className="ms-1 cursor-pointer">
                Woman
              </label>
            </div>
            <div className="flex items-center">
              <input
                className="me-2 cursor-pointer"
                type="radio"
                id="men"
                name="handleGander"
                value="men"
              />

              <label htmlFor="men" className="ms-1 cursor-pointer">
                Men
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
            id="category"
            options={renderCategories()}
            value={selectedCategory}
            onChange={handleCategoryChange}
          />
        </div>
        <div>{renderSubCategories()}</div>
        {gander && selectedCategory && selectedSubCategory && (
          <div className="text-center flex justify-evenly items-center">
            <button onClick={handleShopFilter} className="my-btn-one my-2">
              Filter
            </button>
            <button
              onClick={ClearShopFilter}
              className="my-btn-one-outline my-2"
            >
              Clear Filter
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopSideBar;
