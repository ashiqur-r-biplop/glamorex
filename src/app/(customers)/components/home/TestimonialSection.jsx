"use client";

import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import TestimonialCards from "../TestimonialCards/TestimonialCards";
import "../TestimonialCards/style.css";
import Link from "next/link";

const carousel = (slider) => {
  const z = 300;
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });
  slider.on("detailsChanged", rotate);
};

const TestimonialSection = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setReviews(data);
        setLoading(false);
      });
  }, []);

  // console.log(reviews);

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  if (loading) {
    return <h1>loading</h1>;
  }

  return (
    <section className="card_style_review">
      <div className="wrapper my-48 ">
        <div className="scene">
          <div className="carousel keen-slider " ref={sliderRef}>
            {reviews.slice(0, 5).map((data, index) => (
              <TestimonialCards
                key={index}
                data={data}
                handleHover={handleHover}
                handleLeave={handleLeave}
                isHovered={isHovered}
              ></TestimonialCards>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-56">
        {/* <Link href={"/reviews"}> */}
          <button className="flex mx-auto bg-[#c6c5c9] px-5 rounded-2xl font-bold py-1">
            See All
          </button>
        {/* </Link> */}
      </div>
    </section>
  );
};

export default TestimonialSection;
