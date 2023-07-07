import React from "react";

const AccessoriesItems = () => {
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
          id="Jewelry"
          name="Accessories"
          value="Jewelry"
        />
        <label htmlFor="Jewelry">Jewelry</label>
      </div>
      <div>
        <input
          className="me-2"
          type="radio"
          id="Watches"
          name="Accessories"
          value="Watches"
        />
        <label htmlFor="Watches">Watches</label>
      </div>
      <div>
        <input
          className="me-2"
          type="radio"
          id="Ties"
          name="Accessories"
          value="Ties"
        />
        <label htmlFor="Ties">Ties</label>
      </div>
      <div>
        <input
          className="me-2"
          type="radio"
          id="Gloves"
          name="Accessories"
          value="Gloves"
        />
        <label htmlFor="Gloves">Gloves</label>
      </div>
      <div>
        <input
          className="me-2"
          type="radio"
          id="Headphones"
          name="Accessories"
          value="Headphones"
        />
        <label htmlFor="Headphones">Headphones</label>
      </div>
      <div>
        <input
          className="me-2"
          type="radio"
          id="Umbrellas"
          name="Accessories"
          value="Umbrellas"
        />
        <label htmlFor="Umbrellas">Umbrellas</label>
      </div>
      <div>
        <input
          className="me-2"
          type="radio"
          id="Socks"
          name="Accessories"
          value="Socks"
        />
        <label htmlFor="Socks">Workout gear</label>
      </div>
      <div>
        <input
          className="me-2"
          type="radio"
          id="Keychains"
          name="Accessories"
          value="Keychains"
        />
        <label htmlFor="Keychains">Keychains</label>
      </div>
      <div>
        <input
          className="me-2"
          type="radio"
          id="Phone_cases"
          name="Accessories"
          value="Phone_cases"
        />
        <label htmlFor="Phone_cases">Phone cases</label>
      </div>
      <div>
        <input
          className="me-2"
          type="radio"
          id="Cufflinks"
          name="Accessories"
          value="Cufflinks"
        />
        <label htmlFor="Cufflinks">Cufflinks</label>
      </div>
    </form>
  );
};

export default AccessoriesItems;
