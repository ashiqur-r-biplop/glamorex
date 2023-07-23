"use client";

import { useEffect } from "react";

export const GridSystem = (display) => {
useEffect(() => {
  // if(typeof window !== 'undefined' && window.localStorage) {
    let currentLayoutGrid = JSON.parse(localStorage.getItem("layout"));
  if (currentLayoutGrid) {
    currentLayoutGrid = display;
    if (currentLayoutGrid == display) {
      const grid = display;
      localStorage.setItem("layout", JSON.stringify(grid));
    } else {
      localStorage.clear();
    }
  } else {
    const grid = display;
    localStorage.setItem("layout", JSON.stringify(grid));
  }
  // }
},[])
  
};

export const currentLayout = () => {
  return localStorage.getItem("layout") || JSON.stringify("grid");
  // useEffect(() => {
  //   // if(typeof window !== 'undefined' && window.localStorage) {

  //   // }
  // },[])
};
