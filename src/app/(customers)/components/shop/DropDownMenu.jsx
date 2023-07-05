import React, { useState } from "react";
import FemaleItem from "./FemaleItem";
import Select from "react-select";
import MaleItems from "./MaleItems";

const DropDownMenu = () => {
  const [Category, setSelectedOption] = useState(null);
  console.log(Category?.value);
  const options = [
    { value: "CATEGORIES", label: "CATEGORIES" },
    { value: "WOMAN", label: "WOMAN" },
    { value: "MAN", label: "MAN" },
    { value: "FeMale", label: "FeMale" },
    { value: "TOP_SELLERS", label: "TOP SELLERS" },
    { value: "ACCESSORIES", label: "ACCESSORIES" },
  ];

  return (
    <div className="my-10">
      <Select
        defaultValue={Category}
        onChange={setSelectedOption}
        options={options}
      />
      {(Category?.value === "FeMale" || Category?.value === "WOMAN") && (
        <FemaleItem></FemaleItem>
      )}
      {Category?.value === "MAN" && <MaleItems></MaleItems>}
    </div>
  );
};

export default DropDownMenu;
