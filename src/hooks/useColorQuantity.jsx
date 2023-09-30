'use client'
import React, { useState } from 'react';

const useColorQuantity = () => {
    const [selectedColors, setSelectedColors] = useState([]);

    const handleColorChange = (color) => {
        if (selectedColors.some(uColor => uColor.hasOwnProperty(color))) {
            const updatedSelectedColors = selectedColors.filter(uColor => !uColor.hasOwnProperty(color))
            setSelectedColors(updatedSelectedColors)
        } else {
            let newColor = {}
            newColor[color] = 0
            setSelectedColors([...selectedColors, newColor]);
        }
    };

    const handleQuantityChange = (color, value) => {
        setSelectedColors(selectedColors.map(colorObj => {
            if (colorObj.hasOwnProperty(color)) {
                return { [color]: value }
            }
            return colorObj
        }))
    };

    return {
        selectedColors,
        setSelectedColors,
        handleColorChange,
        handleQuantityChange,
    };
};


export default useColorQuantity;