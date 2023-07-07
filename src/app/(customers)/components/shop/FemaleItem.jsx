import React from "react";

const FemaleItem = () => {
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
          id="Bag_or_backpack"
          name="FeMaleItem"
          value="Bag_or_backpack"
        />
        <label htmlFor="Bag_or_backpack">Bag or backpack</label>
      </div>
      <div>
        <input
          className="me-2"
          type="radio"
          id="Water_bottle"
          name="FeMaleItem"
          value="Water_bottle"
        />
        <label htmlFor="Water_bottle">Water bottle</label>
      </div>
      <div>
        <input
          className="me-2"
          type="radio"
          id="Sunglasses"
          name="FeMaleItem"
          value="Sunglasses"
        />
        <label htmlFor="Sunglasses">Sunglasses</label>
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
          id="Handbags_or_purses"
          name="FeMaleItem"
          value="Handbags_or_purses"
        />
        <label htmlFor="Handbags_or_purses">Handbags or purses</label>
      </div>
      <div>
        <input
          className="me-2"
          type="radio"
          id="Wallet_or_cardholder"
          name="FeMaleItem"
          value="Wallet_or_cardholder"
        />
        <label htmlFor="Wallet_or_cardholder">Wallet or cardholder</label>
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
          id="Art_supplies"
          name="FeMaleItem"
          value="Art_supplies"
        />
        <label htmlFor="Art_supplies">Art supplies</label>
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
          id="Fitness_equipment"
          name="FeMaleItem"
          value="Fitness_equipment"
        />
        <label htmlFor="Fitness_equipment">Fitness equipment</label>
      </div>
      <div>
        <input
          className="me-2"
          type="radio"
          id="Hobby_related_items"
          name="FeMaleItem"
          value="Hobby_related_items"
        />
        <label htmlFor="Hobby_related_items">Hobby related items</label>
      </div>
      <div>
        <input
          className="me-2"
          type="radio"
          id="Gift_items"
          name="FeMaleItem"
          value="Gift_items"
        />
        <label htmlFor="Gift_items">Gift items</label>
      </div>
    </form>
  );
};

export default FemaleItem;
