import offerBanner from "../../../../../public/offerBanner/offerbanner.png";
import { inter } from "../../layout";

const OfferBannerSection = () => {
  return (
    <div className="relative w-full">
      <div
        className="py-10"
        style={{
          backgroundImage: `url(${offerBanner})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "#3935c9",
        }}
      >
        <div className="container mx-auto flex justify-between items-center w-full ">
          <div className="w-1/2 h-full space-y-5">
            <p
              className={`uppercase ${inter.className}`}
              style={{
                fontWeight: 500,
                fontSize: "42px",
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
              className={`text-8xl uppercase ${inter.className}`}
            >
              <span>Discount Our Product</span>
            </div>
            <button className="border-2 border-[#ffc300] rounded-full py-2 px-6 te bg-[#ffc300] text-[#000]  transition-all hover:bg-transparent hover:text-[#ffc300] uppercase ">
              View All
            </button>
          </div>
          <div className="h-full">
            <div
              class={`text-center  ${inter.className} uppercase relative`}
              style={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              <span className="absolute top-10 text-4xl right-0 w-full text-[#ffc300]">
                save up to
              </span>
              <span className="text-[250px] w-full">70%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferBannerSection;
