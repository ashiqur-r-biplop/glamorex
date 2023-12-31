import Link from "next/link";
import errorImg1 from "../../../../public/assets/errorImg/error-1.png";
import errorImg2 from "../../../../public/assets/errorImg/error-2.png";
import errorImg3 from "../../../../public/assets/errorImg/error-3.png";
import errorImg4 from "../../../../public/assets/errorImg/error-4.png";
import errorImg5 from "../../../../public/assets/errorImg/error-5.png";
import errorImg6 from "../../../../public/assets/errorImg/error-6.png";
import errorImg7 from "../../../../public/assets/errorImg/error-7.png";
import errorImg8 from "../../../../public/assets/errorImg/error-8.png";
import errorImg9 from "../../../../public/assets/errorImg/error-9.png";
import errorImg10 from "../../../../public/assets/errorImg/error-10.png";
import errorImg11 from "../../../../public/assets/errorImg/error-11.png";
import errorImg12 from "../../../../public/assets/errorImg/error-12.png";
import errorImg13 from "../../../../public/assets/errorImg/error-13.png";
import errorImg14 from "../../../../public/assets/errorImg/error-14.png";
import errorImg15 from "../../../../public/assets/errorImg/error-15.png";

const animationFiles = [
  errorImg1,
  errorImg2,
  errorImg3,
  errorImg4,
  errorImg5,
  errorImg6,
  errorImg7,
  errorImg8,
  errorImg9,
  errorImg10,
  errorImg11,
  errorImg12,
  errorImg13,
  errorImg14,
  errorImg15,
];

const ErrorDemo = () => {
  const randomAnimationIndex = Math.floor(
    Math.random() * animationFiles.length
  );
  const randomAnimation = animationFiles[randomAnimationIndex];

  return (
    <div className="container mx-auto px-5 flex flex-col justify-center items-center h-screen">
      <div className="space-y-3">
        <h2 className="text-5xl md:text-6xl lg:text-8xl">Sorry</h2>
        <p className="text-3xl lg:text-5xl">We couldn't find that page</p>
        <p className="text-xl md:text-2xl lg:text-3xl">
          Please go to{" "}
          <Link className="text-blue-600" href="/">
            Glamorex's Home Page
          </Link>
        </p>
      </div>
      <div className="mx-auto mt-6">
        <img src={randomAnimation.src} alt="" />
      </div>
    </div>
  );
};

export default ErrorDemo;
