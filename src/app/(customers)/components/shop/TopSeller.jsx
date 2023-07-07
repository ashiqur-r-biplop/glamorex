import React from "react";

const TopSeller = () => {
  const handleRadioButton = (e) => {
    console.log(e.target.value);
  };
  return (
    <form
      onChange={handleRadioButton}
      className="grid grid-cols-2 md:grid-cols-1 space-y-1 mt-2 w-full"
    >
      <div>
        <input
          className="me-2"
          type="radio"
          id="Top_Sales"
          name="Top_SeLlers"
          value="Top_Sales"
        />
        <label htmlFor="Top_Sales">Top Sales</label>
      </div>
      <div>
        <input
          className="me-2"
          type="radio"
          id="Top_Ratting"
          name="Top_SeLlers"
          value="Top_Ratting"
        />
        <label htmlFor="Top_Ratting">Top_Ratting</label>
      </div>
      <div>
        <input
          className="me-2"
          type="radio"
          id="Discount_product"
          name="Top_SeLlers"
          value="Discount_product"
        />
        <label htmlFor="Discount_product">Discount product</label>
      </div>
      <div>
        <input
          className="me-2"
          type="radio"
          id="All_Top_sale"
          name="Top_SeLlers"
          value="All_Top_sale"
        />
        <label htmlFor="All_Top_sale">All Top Sale</label>
      </div>
    </form>
  );
};

export default TopSeller;
