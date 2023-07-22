import React from "react";

const MemberCard = ({ member }) => {
  const { id, name, img, title, social_links } = member || [];
  return (
    <div className="shadow rounded-md bg-green-50 pt-5">
      <figure>
        <img
          className="w-[200px] h-[200px] rounded-full mx-auto object-cover object-center border-2 border-green-500 p-1 bg-green-200"
          src={img}
          alt={name}
        />
      </figure>
      <div className="text-center space-y-5 pt-10">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold">{name}</h2>
          <p className="uppercase font-semibold text-xs">{title}</p>
        </div>
        <ul className="flex justify-center gap-2 mx-auto p-2 rounded bg-green-200">
          {social_links?.map((social, i) => (
            <li key={i}>
              <a href={social?.link} target="_blank">
                <img className="w-8" src={social?.icon} alt="social-link" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MemberCard;