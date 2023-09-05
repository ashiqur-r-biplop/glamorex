'use client'
import React, { useState } from 'react';

const useVariant = () => {
    // const [selectedColors, setSelectedColors] = useState([]);
    // const [selectedSizes, setSelectedSizes] = useState([]);
    const [variants, setVariants] = useState([])


    // handle color change
    // const handleColorChange = (color) => {
    //     setSelectedColors((prevSelectedColors) =>
    //         prevSelectedColors.includes(color)
    //             ? prevSelectedColors.filter((c) => c !== color)
    //             : [...prevSelectedColors, color]
    //     );
    // };


    // handle sizes change
    const handleSizesChange = (size, color) => {
        // setSelectedSizes((prevSelectedSizes) =>
        //     prevSelectedSizes.includes(size)
        //         ? prevSelectedSizes.filter((c) => c !== size)
        //         : [...prevSelectedSizes, size]
        // );

        const existVariant = variants.find(variant => variant?.color === color && Object.keys(variant.sizes).includes(size))
        const existColor = variants.find((variant => variant?.color === color))
        const restVariants = variants.filter(variant => variant?.color !== color || !Object.keys(variant?.sizes).includes(size))

        if (existColor) {
            if (existVariant) {
                delete existVariant.sizes[size]
                setVariants([...restVariants, existVariant])
                return
            } else {
                existColor.sizes[size] = 0
                setVariants([...restVariants.filter(restVariant=> restVariant.color !== color), existColor])
            }
        } else {
            const newVariant = { color: color, quantity: 0, sizes: { [size]: 0 } }
            setVariants([...restVariants, newVariant])
        }
    };

    // handle quantity change
    const handleQuantityChange = (color, size, value) => {
        const existVariant = variants.find(variant => (variant?.color === color && Object.keys(variant.sizes).includes(size)))
        const restVariants = variants.filter(variant => variant?.color !== color || !Object.keys(variant?.sizes).includes(size))
        if (existVariant) {
            existVariant.sizes[size] = value
            existVariant.quantity = Object.values(existVariant.sizes).reduce((acc, curr) => acc + curr, 0)
            setVariants([...restVariants, existVariant])
            return
        }
    };

    return {
        // selectedColors,
        // setSelectedColors,
        // selectedSizes,
        // setSelectedSizes,
        variants,
        setVariants,
        // handleColorChange,
        handleSizesChange,
        handleQuantityChange,
    };
};


export default useVariant;