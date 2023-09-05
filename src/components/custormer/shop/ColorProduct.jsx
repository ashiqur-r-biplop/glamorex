import React, { useRef } from "react";

const ColorProduct = () => {
  const blackRef = useRef(null);
  const whiteRef = useRef(null);
  const blueRef = useRef(null);
  const purpleRef = useRef(null);
  const greenRef = useRef(null);
  const brownRef = useRef(null);

  const handleColorSelect = () => {
    const selectedColors = {
      black: blackRef.current.checked,
      white: whiteRef.current.checked,
      blue: blueRef.current.checked,
      purple: purpleRef.current.checked,
      green: greenRef.current.checked,
      brown: brownRef.current.checked,
    };
  };

  return (
    <form onChange={handleColorSelect} className="py-3">
      <div className="flex items-center py-1">
        <input type="checkbox" ref={blackRef} name="black" id="black" />
        <label htmlFor="black" className="ms-2">
          Black
        </label>
      </div>
      <div className="flex items-center py-1">
        <input type="checkbox" ref={whiteRef} name="white" id="white" />
        <label htmlFor="white" className="ms-2">
          White
        </label>
      </div>
      <div className="flex items-center py-1">
        <input type="checkbox" ref={blueRef} name="blue" id="blue" />
        <label htmlFor="blue" className="ms-2">
          Blue
        </label>
      </div>
      <div className="flex items-center py-1">
        <input type="checkbox" ref={purpleRef} name="purple" id="purple" />
        <label htmlFor="purple" className="ms-2">
          Purple
        </label>
      </div>
      <div className="flex items-center py-1">
        <input type="checkbox" ref={greenRef} name="green" id="green" />
        <label htmlFor="green" className="ms-2">
          Green
        </label>
      </div>
      <div className="flex items-center py-1">
        <input type="checkbox" ref={brownRef} name="brown" id="brown" />
        <label htmlFor="brown" className="ms-2">
          Brown
        </label>
      </div>
    </form>
  );
};

export default ColorProduct;
