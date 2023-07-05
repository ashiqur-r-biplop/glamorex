import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa6";

const CartRow = ({ item }) => {
  const { name, image, price } = item;

  return (
    <tr>
      <td className="flex flex-col md:flex-row md:items-center md:gap-4">
        <Image
          className="py-5"
          src={image}
          width={100}
          height={100}
          alt="image"
        />
        <div>
          <p className="text-lg">{name}</p>
          <p>Price: ${price}.00</p>
          <p className="text-red-500 cursor-pointer">Remove</p>
        </div>
      </td>
      <td>
        <div className="flex">
          <button className="border rounded-s-md p-2"><FaMinus /></button>
          <p className="border px-3 py-2">{1}</p>
          <button className="border rounded-e-md p-2"><FaPlus /></button>
        </div>
      </td>
      <td className="text-end">${price}</td>
    </tr>
  );
};

export default CartRow;
