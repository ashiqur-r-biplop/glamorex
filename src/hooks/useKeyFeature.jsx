'use client'
import React, { useState } from 'react';

const useKeyFeature = (initialState) => {
  const [keyFeatures, setKeyFeatures] = useState(initialState);

  const addEmptyField = () => {
    setKeyFeatures([...keyFeatures, '']);
  };

  const removeField = (index) => {
    const updatedKeyFeatures = [...keyFeatures];
    updatedKeyFeatures.splice(index, 1);
    setKeyFeatures(updatedKeyFeatures);
  };

  const handleChange = (index, value) => {
    const updatedKeyFeatures = [...keyFeatures];
    updatedKeyFeatures[index] = value;
    setKeyFeatures(updatedKeyFeatures);
  };

  return { keyFeatures, setKeyFeatures, addEmptyField, removeField, handleChange };
};

export default useKeyFeature;