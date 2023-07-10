import visionImg from "../../../../../public/assets/img/our-vission.jpg";
import { FiTruck } from "react-icons/fi";
import { FaShoppingCart, FaTrophy } from "react-icons/fa";
import { MdSpeed } from "react-icons/md";
import { BiSolidCheckShield } from "react-icons/bi";

const featureData = [
  {
    icon: <FaShoppingCart />,
    title: "Biggest Varlety",
    content: "We offer million of products at a great value for our customers",
  },
  {
    icon: <FaTrophy />,
    title: "Best Prices",
    content:
      "We provide great value by offering competitive price on all our products",
  },
  {
    icon: <MdSpeed />,
    title: "Ease Speed",
    content: "Faster and smooth shopping experience",
  },
  {
    icon: <FiTruck />,
    title: "Fast Delivery",
    content:
      "We aim to please our customer with fast delivery and easy tracking system",
  },
  {
    icon: <BiSolidCheckShield />,
    title: "100% Protected",
    content:
      "We provide 100% protection for your purchase from click to delivery",
  },
];

const OurPromise = () => {
  return (
    <div className="pt-[100px]">
      <div className="section-title mb-8 text-right">
        <h2 className="text-2xl font-semibold">Our Vision</h2>
      </div>
      <div className="card lg:card-side bg-base-100 shadow">
        <figure>
          <img className="h-full w-full" src={visionImg.src} alt="Vision" />
        </figure>
        <div className="card-body bg-green-100">
          <div className="flex flex-col justify-center gap-5 lg:gap-10 ">
            {featureData.map((card, index) => (
              <div key={index} className={`flex gap-4 items-center px-5 py-3`}>
                <div className="text-5xl hover:scale-125 transition-all duration-500">
                  {card.icon}
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold">{card.title}</h4>
                  <p>{card.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPromise;

{
  /* <div className="grid grid-cols-2">
  <div>
    <img src={visionImg.src} alt="Vision" />
  </div>
  <div className="flex flex-col justify-center gap-5 lg:gap-10">
    {featureData.map((card, index) => (
      <div key={index} className={`flex gap-4 items-center px-5 py-3`}>
        <div className="text-5xl hover:scale-125 transition-all duration-500">
          {card.icon}
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">{card.title}</h4>
          <p>{card.content}</p>
        </div>
      </div>
    ))}
  </div>
</div>; */
}
