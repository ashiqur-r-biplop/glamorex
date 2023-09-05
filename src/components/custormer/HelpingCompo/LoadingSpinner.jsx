"use client";
import Lottie from "lottie-react";
import loadingLottie from "../../../../public/assets/lottieAnimation/loadingLottie.json";


const LoadingSpinner = ({ loop, className }) => {
  return (
    <Lottie
      animationData={loadingLottie}
      loop={loop || true}
      className={`${className || 'h-60 w-60'} mx-auto`}
    />
  );
};

export default LoadingSpinner;
