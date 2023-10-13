"use client";
import React from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

const FbMassage = () => {
  return (
    <>
      <FacebookProvider appId="807819170938646" chatSupport>
        <CustomChat pageId="109149734066082" minimized={"true"} />
      </FacebookProvider>
    </>
  );
};

export default FbMassage;
