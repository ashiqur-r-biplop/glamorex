import Image from "next/image";
import offerBanner from "../../../../../public/offerBanner/offerbanner.png";
import { inter } from "@/app/layout";

const OfferBannerSection = () => {
  return (
    <div className="relative w-full my-12">
      <div className="relative md:h-[500px] h-[500px] bg-[#3935c9]">
        <Image src={offerBanner} alt="offer banner" fill={true}></Image>
      </div>
      <div className="absolute px-3 top-0 md:left-1/2 md:transform md:-translate-x-[50%] container mx-auto md:flex justify-center items-center w-full">
        <div className="md:flex justify-between items-center">
          <div className="md:w-1/2 md:h-[500px] h-[350px]  space-y-5 flex flex-col justify-center items-start">
            <p
              className={`uppercase ${inter.className} md:text-4xl text-2xl`}
              style={{
                fontWeight: 500,
                color: "white",
              }}
            >
              This Weekend Only
            </p>{" "}
            <div
              style={{
                fontWeight: "800",
                color: "#ffc300",
              }}
              className={`lg:text-8xl md:text-5xl text-4xl uppercase ${inter.className}`}
            >
              <span>Discount Our Product</span>
            </div>
            <button className="border-2 border-[#ffc300] rounded-full py-2 px-6 te bg-[#ffc300] text-[#000]  transition-all hover:bg-transparent hover:text-[#ffc300] uppercase ">
              View All
            </button>
          </div>
          <div className="h-full">
            <div
              className={`text-center  ${inter.className} uppercase relative`}
              style={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              <span className="absolute lg:top-10 -top-2 lg:text-4xl md:2xl right-0 w-full text-[#ffc300]">
                save up to
              </span>
              <span className="lg:text-[250px] md:text-[120px] text-[80px] w-full">
                70%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferBannerSection;
