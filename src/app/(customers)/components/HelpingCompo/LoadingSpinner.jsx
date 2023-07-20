'use client'
import Lottie from 'lottie-react';
import loadingLottie from '../../../../../public/assets/lottieAnimation/loadingLottie.json'
import React from 'react';

const LoadingSpinner = ({ loop, height, width }) => {
    return (
        <Lottie
            animationData={loadingLottie}
            loop={loop || true}
            className={`${height || 'h-60'} ${width || 'w-60'}`}
        />
    );
};

export default LoadingSpinner;