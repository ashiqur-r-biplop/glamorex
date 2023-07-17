import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa6";

const CartRow = ({ item, handlePlus, handleMinus, handleDeleteProduct }) => {
  const {
    name,
    image,
    price,
    product_id,
    productTotal,
    buy_quantity,
    quantity,
    _id,
  } = item;
  console.log(buy_quantity, "cartRow");
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
        <span>
          <p className="text-lg">{name}</p>
          <p>Price: ${price}.00</p>
          <p
            onClick={() => handleDeleteProduct(_id)}
            className="text-red-500 cursor-pointer"
          >
            Remove
          </p>
        </span>
      </td>
      <td>
        <span className="flex">
          <button
            onClick={() => handleMinus(product_id)}
            className={`border rounded-s-md p-2 ${
              buy_quantity <= 1 && "bg-[#e7e7e7]"
            }`}
            disabled={buy_quantity <= 1}
          >
            <FaMinus />
          </button>
          <p className="border px-3 py-2">{buy_quantity}</p>
          <button
            disabled={quantity <= buy_quantity}
            onClick={() => handlePlus(product_id)}
            className={`border rounded-e-md p-2 ${
              quantity <= buy_quantity && "bg-[#e7e7e7]"
            }`}
          >
            <FaPlus />
          </button>
        </span>
      </td>
      <td className="text-end">${productTotal || price}</td>
    </tr>
  );
};

export default CartRow;
