"use client";
import React, { useEffect, useState } from "react";
import MemberCard from "./MemberCard";
import LoadingSpinner from "../HelpingCompo/LoadingSpinner";
import axios from "axios";

const OurTeam = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://glamorex-server.vercel.app/our_team")
      .then((data) => setMembers(data.data), setLoading(false));
  }, []);
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div className="pt-[100px]">
      <div className="section-title mb-8 text-right">
        <h2 className="text-2xl font-semibold">Our Team</h2>
      </div>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <MemberCard key={member?.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
