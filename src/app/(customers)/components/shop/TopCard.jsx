"use client";
import { useEffect } from "react";
import GridLayout from "./GridLayout";
import ColumnLayout from "./ColumnLayout";
import { GridSystem } from "./HandleGridSystem";

const TopCard = ({ product, handleAddToCart, layout }) => {
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
        {layout === "grid" && (
          <GridLayout
            product={product}
            handleAddToCart={handleAddToCart}
          ></GridLayout>
        )}
        <div className={`${layout === "column" ? "block" : "hidden"}`}>
          {layout === "column" && (
            <div className="flex">
              <ColumnLayout
                product={product}
                handleAddToCart={handleAddToCart}
              ></ColumnLayout>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TopCard;
