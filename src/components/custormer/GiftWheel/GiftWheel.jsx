"use client";
import React, { useEffect, useState } from "react";
import { Wheel } from "react-custom-roulette";
import { FaCross, FaGift, FaLeftLong, FaSpinner } from "react-icons/fa6";

const GiftWheel = () => {
  const [gift, setGift] = useState("");

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [offerPrize, setOfferPrize] = useState("");
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const isTopFunc = () => {
      const isTop = window.pageYOffset < 500;
      setIsTop(isTop);
    };
    window.addEventListener("scroll", isTopFunc);
    return () => {
      window.removeEventListener("scroll", isTopFunc);
    };
  }, []);

  const data = [
    { option: "5%", style: { backgroundColor: "green", textColor: "black" } },
    { option: "10%", style: { backgroundColor: "white" } },
    { option: "35%", style: { backgroundColor: "yellow" } },
    { option: "0%", style: { backgroundColor: "red" } },
    { option: "25%", style: { backgroundColor: "orange" } },
    {
      option: "Free Delivery",
      style: { backgroundColor: "purple", textColor: "white" },
    },
  ];

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setOfferPrize("");
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  return (
    <>
      <button
        className={` ${
          isTop || gift ? "hidden" : "block"
        } text-5xl text-orange-500 bg-slate-50 p-5 border-8 border-dashed border-orange-500 rounded-full fixed left-20 top-1/2 -translate-x-1/2 z-30`}
        onClick={() => setGift(!gift)}
      >
        <FaGift></FaGift>
      </button>

      <div
        className={`my-10 z-20 fixed -left-64 top-12 opacity-0 ${
          gift && "top-16 left-0 opacity-100"
        } transition-all ease-in-out duration-500 h-[80vh] rounded-lg shadow-lg bg-gradient-to-r from-[#141E30] to-[#243B55] p-10 gap-5`}
      >
        <div className="h-full flex flex-col items-center justify-center">
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            outerBorderColor={"orange"}
            radiusLineColor={"orange"}
            onStopSpinning={() => {
              setOfferPrize(data[prizeNumber]?.option);
              // if(typeof window !== 'undefined' && window.localStorage) {

              localStorage.setItem("giftPrize", data[prizeNumber]?.option);
              // }
              setMustSpin(false);
            }}
          />
          <button
            onClick={handleSpinClick}
            className="my-btn-one !bg-red-500 animate-pulse"
          >
            {" "}
            <FaSpinner></FaSpinner> SPIN
          </button>

          {offerPrize && (
            <h2 className="my-subtitle text-white my-2">
              You got{" "}
              <span className="text-orange-500 !font-extrabold">
                {offerPrize !== "Free Delivery"
                  ? `${offerPrize} discount`
                  : offerPrize}
              </span>
            </h2>
          )}

          {/* hide button */}
          <button
            className="text-3xl bg-red-500 text-slate-50 h-14 w-14 flex items-center justify-center rounded-full absolute bottom-2 right-2"
            onClick={() => {
              setGift(!gift);
              setOfferPrize("");
            }}
          >
            {" "}
            <FaLeftLong />{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default GiftWheel;
