"use client";
import React, { useEffect, useState } from "react";
import termsBanner from "../../../../public/terms-banner.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import CmnSectionTitle from "@/components/custormer/HelpingCompo/CmnSectionTitle";


const TermsCondition = () => {
  return (
    <div>
      <div
        className="banner-section bg-slate-800 bg-blend-overlay bg-cover bg-center h-[60vh] flex justify-center items-center"
        style={{ backgroundImage: `url(${termsBanner.src})` }}
      >
        <div className="bg-black py-5 px-20 rounded-2xl bg-opacity-50 text-white space-y-3">
          <h2 className="text-center text-2xl font-semibold ">
            Terms & Conditions
          </h2>
          <p className="flex gap-2 items-center">
            Home <MdKeyboardArrowRight className="text-lg" /> Terms & Conditions
          </p>
        </div>
      </div>
      <div className="container mx-auto px-5 py-[100px]">
        <CmnSectionTitle
          title={"Terms & Conditions"}
          subtitle={"Terms: Guidelines for Using Our Services."}
        ></CmnSectionTitle>
        <div className="space-y-3">
          <div className="border p-3 w-[90%] mx-auto">
            <span className="font-semibold">Introduction:</span> Welcome to
            Glamorex! By using this website, you agree to comply with the
            following terms and conditions.
          </div>
          <div className="border p-3 w-[90%] mx-auto">
            <span className="font-semibold">Use of Website:</span> The Glamorex
            website and its content are intended for personal, non-commercial
            use only.
          </div>
          <div className="border p-3 w-[90%] mx-auto">
            <span className="font-semibold">User Accounts:</span> To access
            certain features, you may be required to create a user account. You
            are responsible for maintaining the confidentiality of your account
            information and agree to notify us immediately of any unauthorized
            use.
          </div>
          <div className="border p-3 w-[90%] mx-auto">
            <span className="font-semibold">Product Descriptions:</span>We strive to provide accurate product descriptions and
            images on our website, but we do not guarantee that colors and
            details will be displayed accurately on all devices.
          </div>
          <div className="border p-3 w-[90%] mx-auto">
            <span className="font-semibold">Ordering and Payments:</span> By
            placing an order, you agree to provide accurate billing and shipping
            information. All payments are processed securely, and you agree to
            pay the total amount stated, including any applicable taxes and
            shipping fees.
          </div>
          <div className="border p-3 w-[90%] mx-auto">
            <span className="font-semibold">Shipping and Delivery:</span> We
            will make every effort to deliver your order within the specified
            timeframe, but we are not responsible for any delays or issues
            caused by the shipping carrier or unforeseen circumstances.
          </div>
          <div className="border p-3 w-[90%] mx-auto">
            <span className="font-semibold">Returns and Refunds:</span> Our
            return policy allows you to return eligible items within 30 days of
            receipt for a refund or exchange, subject to our return guidelines.
          </div>
          <div className="border p-3 w-[90%] mx-auto">
            <span className="font-semibold">Intellectual Property:</span> All
            content, logos, and trademarks on this website are the property of
            Glamorex and protected by applicable intellectual property laws. You
            may not use, copy, or distribute any content without our express
            written permission.
          </div>
          <div className="border p-3 w-[90%] mx-auto">
            <span className="font-semibold">User-Generated Content:</span> By
            submitting content to our website, such as product reviews or
            testimonials, you grant Glamorex a non-exclusive, royalty-free, and
            perpetual license to use, modify, and display the content.
          </div>
          <div className="border p-3 w-[90%] mx-auto">
            <span className="font-semibold">Privacy Policy:</span> Our Privacy
            Policy outlines how we collect, use, and protect your personal
            information. By using this website, you consent to the practices
            described in the Privacy Policy.
          </div>
          <div className="border p-3 w-[90%] mx-auto">
            <span className="font-semibold">Liability Limitation:</span>{" "}
            Glamorex shall not be liable for any direct, indirect, incidental,
            or consequential damages resulting from the use of our website or
            products.
          </div>
          <div className="border p-3 w-[90%] mx-auto">
            <span className="font-semibold">Termination of Use:</span> Glamorex
            reserves the right to terminate or suspend your access to the
            website at any time, for any reason, without prior notice.
          </div>
          <div className="border p-3 w-[90%] mx-auto">
            <span className="font-semibold">Modifications to Terms:</span> We
            may update or modify these terms and conditions from time to time.
            Any changes will be effective upon posting, and your continued use
            of the website constitutes acceptance of the revised terms.
          </div>
          <div className="border p-3 w-[90%] mx-auto">
            <span className="font-semibold">Governing Law:</span> These terms
            and conditions are governed by the laws of Bangladesh, and any
            disputes shall be resolved in the courts of [your preferred
            jurisdiction].
          </div>
          <div className="border p-3 w-[90%] mx-auto">
            <span className="font-semibold">Contact Information:</span> If you
            have any questions or concerns about these terms and conditions,
            please contact us at{" "}
            <Link className="link text-blue-500" href={"/contact"}>
              Here
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsCondition;
