import { Fade } from "react-awesome-reveal";
import "keen-slider/keen-slider.min.css";
import "./style.css";
import Image from "next/image";

const TestimonialCards = ({ isHovered, handleLeave, handleHover, data }) => {
  return (
    <div className="carousel__cell cursor-pointer card_style_review ">
      <div
        className="card hover:w-80 h-44 md:hover:h-[356px] mx-7 bg-[url('https://img.freepik.com/free-vector/white-minimal-hexagons-background_79603-1452.jpg')] opacity-75 hover:opacity-100 shadow-xl rounded-2xl"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <div className="avatar">
          <div className="w-32 h-26 rounded-xl flex">
            <Image
              src={data.image}
              className="rounded-2xl m-5"
              width={90}
              height={90}
              alt="user images"
            />
          </div>
        </div>

        <div
          className={`card-body md:h-48 mx-5  ${
            isHovered ? "opacity-100 overflow-hidden" : "opacity-0"
          }`}
        >
          <Fade delay={1e3} cascade damping={1e-1}>
            <h2 className="card-title justify-center mb-3 font-bold">
              {data.name}
            </h2>
          </Fade>

          <Fade delay={1e3} cascade damping={1e-1}>
            <p className="text-justify">{data.review}</p>{" "}
          </Fade>
          <Fade delay={1e3} cascade damping={1e-1}>
            <h2 className="card-title justify-center font-bold mt-3">
              Ratings : {data.rating}
            </h2>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
