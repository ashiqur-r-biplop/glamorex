"use client";
import React, { useEffect, useState } from "react";
import MemberCard from "./MemberCard";


const OurTeam = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("/ourteam.json")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);

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