import React from "react";

const MaleItems = () => {
  const handleRadioButton = (e) => {
    console.log(e.target.value);
  };
  return (
    <form
      onChange={handleRadioButton}
      className="grid grid-cols-2 md:grid-cols-1 space-y-1 mt-2"
    >
      <div>
        <input
          className="me-2"
          type="radio"
          id="Clothing"
          name="FeMaleItem"
          value="Clothing"
        />
        <label htmlFor="Clothing">Clothing</label>
      </div>
      <div>
        <input
          className="me-2"
          type="radio"
          id="Shoes"
          name="FeMaleItem"
          value="Shoes"
        />
        <label htmlFor="Shoes">Shoes</label>
      </div>
      <div>
        <input
          className="me-2"
          type="radio"
          id="Accessories"
          name="FeMaleItem"
          value="Accessories"
        />
        <label htmlFor="Accessories">Accessories</label>
      </div>
      <div>
        <input
          className="me-2"
          type="radio"
          id="Undergarments"
          name="FeMaleItem"
          value="Undergarments"
        />
        <label htmlFor="Undergarments">Undergarments</label>
      </div>
      <div>
        <input
          className="me-2"
          type="radio"
          id="Swimwear"
          name="FeMaleItem"
          value="Swimwear"
        />
        <label htmlFor="Swimwear">Swimwear</label>
      </div>
      <div>
        <input
          className="me-2"
          type="radio"
          id="Workout_gear"
          name="FeMaleItem"
          value="Workout_gear"
        />
        <label htmlFor="Workout_gear">Workout gear</label>
      </div>
      <div>
        <input
          className="me-2"
          type="radio"
          id="Outerwear"
          name="FeMaleItem"
          value="Outerwear"
        />
        <label htmlFor="Outerwear">Outerwear</label>
      </div>
      <div>
        <input
          className="me-2"
          type="radio"
          id="Bags"
          name="FeMaleItem"
          value="Bags"
        />
        <label htmlFor="Bags">Bags</label>
      </div>
      <div>
        <input
          className="me-2"
          type="radio"
          id="Grooming_products"
          name="FeMaleItem"
          value="Grooming_products"
        />
        <label htmlFor="Grooming_products">Grooming products</label>
      </div>
      <div>
        <input
          className="me-2"
          type="radio"
          id="Hair_care_products"
          name="FeMaleItem"
          value="Hair_care_products"
        />
        <label htmlFor="Hair_care_products">Hair care products</label>
      </div>
      <div>
        <input
          className="me-2"
          type="radio"
          id="Bath_and_body_products"
          name="FeMaleItem"
          value="Bath_and_body_products"
        />
        <label htmlFor="Bath_and_body_products">Bath and body products</label>
      </div>
      <div>
        <input
          className="me-2"
          type="radio"
          id="Fragrances"
          name="FeMaleItem"
          value="Fragrances"
        />
        <label htmlFor="Fragrances">Fragrances</label>
      </div>
      <div>
        <input
          className="me-2"
          type="radio"
          id="Home_essentials"
          name="FeMaleItem"
          value="Home_essentials"
        />
        <label htmlFor="Home_essentials">Home essentials</label>
      </div>
      <div>
        <input
          className="me-2"
          type="radio"
          id="Electronics"
          name="FeMaleItem"
          value="Electronics"
        />
        <label htmlFor="Electronics">Electronics</label>
      </div>
      <div>
        <input
          className="me-2"
          type="radio"
          id="Home_essentials"
          name="FeMaleItem"
          value="Home_essentials"
        />
        <label htmlFor="Home_essentials">Home essentials</label>
      </div>
      <div>
        <input
          className="me-2"
          type="radio"
          id="Books_or_magazines"
          name="FeMaleItem"
          value="Books_or_magazines"
        />
        <label htmlFor="Books_or_magazines">Books or magazines</label>
      </div>
      <div>
        <input
          className="me-2"
          type="radio"
          id="Stationery"
          name="FeMaleItem"
          value="Stationery"
        />
        <label htmlFor="Stationery">Stationery</label>
      </div>
      <div>
        <input
          className="me-2"
          type="radio"
          id="Sports_equipment"
          name="FeMaleItem"
          value="Sports_equipment"
        />
        <label htmlFor="Sports_equipment">Sports equipment</label>
      </div>
      <div>
        <input
          className="me-2"
          type="radio"
          id="Fitness gear"
          name="FeMaleItem"
          value="Fitness gear"
        />
        <label htmlFor="Fitness gear">Fitness gear</label>
      </div>
      <div>
        <input
          className="me-2"
          type="radio"
          id="Tools"
          name="FeMaleItem"
          value="Tools"
        />
        <label htmlFor="Tools">Tools</label>
      </div>
      <div>
        <input
          className="me-2"
          type="radio"
          id="Gift items"
          name="FeMaleItem"
          value="Gift items"
        />
        <label htmlFor="Gift items">Gift items</label>
      </div>
    </form>
  );
};

export default MaleItems;
