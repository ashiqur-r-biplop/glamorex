"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaQuoteLeft } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import CmnSectionTitle from "../HelpingCompo/CmnSectionTitle";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  // TODO: previous button not working
  return (
    <section className="py-[100px]">
      <CmnSectionTitle
        title={"Testimonial"}
        subtitle={"Words of Delight: Happy Customers Share Experiences"}
      ></CmnSectionTitle>
      <div className="bg-green-50 py-10">
        <Swiper

          modules={[ Autoplay]}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper container mx-auto"
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i}>
              <div className="mx-14 md:mx-24 flex flex-col gap-5 items-center">
                <FaQuoteLeft className="text-3xl sm:text-4xl lg:text-6xl" />
                <p className="mt-10 text-xl text-center md:w-2/3">
                  {review?.review}
                </p>
                <div className="flex items-center gap-2">
                  <Rating
                    style={{ maxWidth: 120 }}
                    value={review?.rating}
                    readOnly
                  />{" "}
                  <span className="text-lg">{review?.rating}</span>
                </div>
                <div className="space-y-3">
                  <img
                    className="w-[50px] h-[50px] rounded-full mt-2 mx-auto"
                    src={review?.image}
                    alt={review?.name}
                  />
                  <h3 className="text-lg font-medium  mt-2">
                    - {review?.name}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
