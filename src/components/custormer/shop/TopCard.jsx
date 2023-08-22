"use client";
import { useEffect } from "react";
import GridLayout from "./GridLayout";
import ColumnLayout from "./ColumnLayout";
import { GridSystem } from "./HandleGridSystem";
import ProductCard from "../home/cards/ProductCard";

const TopCard = ({ product, layout }) => {
  //// console.log(layout);
  const isMobileScreen = () => {
    return window.innerWidth <= 768;
  };
  const clearLayoutOnMobile = () => {
    if (isMobileScreen()) {
      GridSystem("grid");
    }
  };
  useEffect(() => {
    clearLayoutOnMobile();
    const handleResize = () => {
      clearLayoutOnMobile();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div>
        {/* {layout === "grid" && <GridLayout product={product}></GridLayout>} */}
        {layout === "grid" && <ProductCard product={product} />}
        <div className={`${layout === "column" ? "block" : "hidden"}`}>
          {layout === "column" && (
            <div className="flex">
              <ColumnLayout product={product}></ColumnLayout>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TopCard;
