"use client";
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FiTruck, FiLock, FiHeadphones } from "react-icons/fi";
import { GiTakeMyMoney } from "react-icons/gi";
import contactBanner from "../../../../public/contact-banner.jpg";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import NewsletterCard from "@/components/custormer/home/cards/NewsletterCard";

const addressData = [
  {
    icon: <HiOutlineMailOpen />,
    title: "Mail address",
    content: ["info@example.com", "glamorex@example.com"],
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Office Location",
    content: ["Digital Agency Network 2021", "Eastbourne Terrace"],
  },
  {
    icon: <HiOutlineMailOpen />,
    title: "Phone Number",
    content: ["+205-555-0100-34", "+405-555-0128-45"],
  },
];

const featureData = [
  {
    icon: <FiTruck />,
    title: "Free Shipping",
    content: "Free shipping over $100",
  },
  {
    icon: <FiLock />,
    title: "Payment Secure",
    content: "Got 100% Payment Safe",
  },
  {
    icon: <FiHeadphones />,
    title: "Support 24/7",
    content: "Top quality 24/7 Support",
  },
  {
    icon: <GiTakeMyMoney />,
    title: "100% Money Back",
    content: "Customers Money Backs",
  },
];

const ContactPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div
        className="banner-section bg-slate-800 bg-blend-overlay bg-cover bg-center h-[60vh] flex justify-center items-center"
        style={{ backgroundImage: `url(${contactBanner.src})` }}
      >
        <div className="bg-black py-5 px-20 rounded-2xl bg-opacity-50 text-white space-y-3">
          <h2 className="text-center text-2xl font-semibold ">Contact Us</h2>
          <p className="flex gap-2 items-center">
            Home <MdKeyboardArrowRight className="text-lg" /> Contact
          </p>
        </div>
      </div>
      <div className="contact-body container mx-auto px-5 py-[100px]">
        <div className="flex flex-col lg:flex-row justify-center gap-5 lg:gap-10">
          {addressData.map((card, index) => (
            <div key={index} className={`flex gap-4 items-center px-5 py-3`}>
              <div className="text-5xl hover:scale-125 transition-all duration-500">
                {card.icon}
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-semibold">{card.title}</h4>
                <div>
                  {card.content.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="contact-form p-5 sm:p-10 bg-slate-50 shadow mt-12">
          <div className="text-center space-y-3 mb-12">
            <h2 className="font-semibold text-3xl">Send us Messege</h2>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Enter Your Name*"
                className="border p-5 rounded-sm w-full"
              />
              <input
                type="text"
                {...register("email", { required: true })}
                placeholder="Enter Your Email Address*"
                className="border p-5 rounded-sm w-full"
              />
              <input
                type="text"
                {...register("subject")}
                placeholder="Enter Your subject"
                className="border p-5 rounded-sm w-full"
              />
              <input
                type="text"
                {...register("phone")}
                placeholder="Enter Your Phone Number"
                className="border p-5 rounded-sm w-full"
              />
            </div>
            <div className="mt-5">
              <textarea
                {...register("message", { required: true })}
                placeholder="Enter Your Message Here*"
                className="w-full h-40 border p-5 rounded-sm"
              />
            </div>
            <div className="mt-5">
              <button className="my-btn-one" type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-5 lg:gap-10 mt-12 md:mt-20">
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
      <NewsletterCard />
    </div>
  );
};

export default ContactPage;
