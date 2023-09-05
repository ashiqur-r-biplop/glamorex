import React, { useRef } from "react";

const ColorProduct = () => {
  const smRef = useRef(null);
  const mdRef = useRef(null);
  const lgRef = useRef(null);
  const xlRef = useRef(null);
  const xxlRef = useRef(null);
  const xxxlRef = useRef(null);

  const handleColorSelect = () => {
    const selectedColors = {
      sm: smRef.current?.checked,
      md: mdRef.current?.checked,
      lg: lgRef.current?.checked,
      xl: xlRef.current?.checked,
      xxl: xxlRef.current?.checked,
      xxxl: xxxlRef.current?.checked,
    };
    //// console.log(selectedColors);
  };

  return (
    <form onChange={handleColorSelect} className="py-3 uppercase">
      
      <div className="flex items-center py-1">
        <input type="checkbox" ref={mdRef} name="md" id="md" />
        <label htmlFor="md" className="ms-2">
          Md
        </label>
      </div>
      <div className="flex items-center py-1">
        <input type="checkbox" ref={lgRef} name="lg" id="lg" />
        <label htmlFor="lg" className="ms-2">
          Lg
        </label>
      </div>
      <div className="flex items-center py-1">
        <input type="checkbox" ref={xlRef} name="xl" id="xl" />
        <label htmlFor="xl" className="ms-2">
          Xl
        </label>
      </div>
      <div className="flex items-center py-1">
        <input type="checkbox" ref={xxlRef} name="xxl" id="xxl" />
        <label htmlFor="xxl" className="ms-2">
          Xxl
        </label>
      </div>
      <div className="flex items-center py-1">
        <input type="checkbox" ref={xxxlRef} name="xxxl" id="xxxl" />
        <label htmlFor="xxxl" className="ms-2">
          XXXl
        </label>
      </div>
    </form>
  );
};

export default ColorProduct;
