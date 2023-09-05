'use client'
import  Lottie  from 'lottie-react';
import React from 'react';

const CommonLottie = ({animationData, loop, className}) => {
    return (
        <Lottie
            animationData={animationData}
            loop={loop}
            className={`${className||'h-96 w-96'}`}
        />
    );
};

export default CommonLottie;