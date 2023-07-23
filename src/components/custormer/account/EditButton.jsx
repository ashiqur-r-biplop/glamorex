import { FaArrowRight } from "react-icons/fa";

const EditButton = ({ children }) => {
  return (
    <>
      <button className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-green-500 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-green-500 group-hover:h-full"></span>
        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
          <FaArrowRight />
        </span>
        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200 text-white">
          <FaArrowRight />
        </span>
        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
          {children}
        </span>
      </button>
    </>
  );
};

export default EditButton;
