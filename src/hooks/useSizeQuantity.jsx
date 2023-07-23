'use client'
import React, { useState } from 'react';

const useSizeQuantity = () => {
    const [selectedSizes, setSelectedSizes] = useState([]);

    const handleSizesChange = (size) => {
        if (selectedSizes.some(uSize => uSize.hasOwnProperty(size))) {
            const updatedSelectedColors = selectedSizes.filter(uSize => !uSize.hasOwnProperty(size))
            setSelectedSizes(updatedSelectedColors)
        } else {
            let newSize = {}
            newSize[size] = 0
            setSelectedSizes([...selectedSizes, newSize]);
        }
    };

    const handleSizeQuantityChange = (size, value) => {
        setSelectedSizes(selectedSizes.map(sizeObj => {
            if (sizeObj.hasOwnProperty(size)) {
                return { [size]: value }
            }
            return sizeObj
        }))
    };

    return {
        selectedSizes,
        setSelectedSizes,
        handleSizesChange,
        handleSizeQuantityChange,
    };
};

export default useSizeQuantity;