"use client"
import React, { useEffect, useState } from "react";
import developerBanner from "../../../../public/developerBanner.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import CmnSectionTitle from "@/components/custormer/HelpingCompo/CmnSectionTitle";
import MemberCard from "@/components/custormer/about/MemberCard";
import axios from "axios";


const Developers = () => {
  const [members, setDevelopers] = useState([]);

  useEffect(() => {
    axios.get("https://glamorex-server.vercel.app/developer")
      .then((data) => setDevelopers(data.data));
  }, []);
  return (
    <div>
      <div
        className="banner-section bg-slate-800 bg-blend-overlay bg-cover bg-center h-[60vh] flex justify-center items-center"
        style={{ backgroundImage: `url(${developerBanner.src})` }}
      >
        <div className="bg-black py-5 px-20 rounded-2xl bg-opacity-50 text-white space-y-3">
          <h2 className="text-center text-2xl font-semibold ">Developers</h2>
          <p className="flex gap-2 items-center">
            Home <MdKeyboardArrowRight className="text-lg" /> Developers
          </p>
        </div>
      </div>
      <div className="container mx-auto px-5 py-[100px]">
        <CmnSectionTitle
          title={"Developer Team"}
          subtitle={"Masterminds of Code: Collaborating, Innovating, Inspiring"}
        ></CmnSectionTitle>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <MemberCard key={member?.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Developers;
