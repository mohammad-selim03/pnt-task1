"use client";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../redux/shofySlice";
import { useEffect } from "react";

const CartPage = () => {
  const { cart } = useSelector((state) => state.shofy);
  const dispatch = useDispatch();


  const handlePlus = (id) => {
    dispatch(increaseQuantity(id))

  }
  const handleMinus = (id) => {
    dispatch(decreaseQuantity(id));
  }

  return (
    <div>
      <h3 className="text-2xl font-bold mt-5 mb-16">Products Details</h3>
      <div className="grid grid-cols-12">
        <div className="   border-gray-500 col-span-9">
          {cart?.map((item) => (
            <div key={item?.id}>
              <div className="flex items-center justify-between h-40 gap-3 border-b-2 px-3   ">
                <Image
                  src={item?.images[0]}
                  alt="product image"
                  width={100}
                  height={100}
                  className="rounded-xl"
                />

                <div className="w-72">
                  <p className="text-lg font-semibold">{item?.title}</p>
                  <p className="text-xs text-gray-500">
                    {item?.availabilityStatus}
                  </p>
                  <p className="text-sm font-semibold">{item?.brand}</p>
                </div>
                <p className="text-md text-semibold">${item?.price}</p>
                <div className="flex items-center gap-3 border-2 border-gray-500 rounded-md px-3 py-2">
                  <button onClick={() => handleMinus(item?.id)}>
                    <FaMinus />
                  </button>
                  <p className="text-base text-bold">
                    {item?.quantity > 1 ? item?.quantity : 0}
                  </p>
                  <button>
                    <FaPlus onClick={() => handlePlus(item?.id)} />
                  </button>
                </div>
                <span className="hover:text-red-500 cursor-pointer translate-all duration-300">
                  <MdDelete size={25} />
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-3">checkout process</div>
      </div>
    </div>
  );
};

export default CartPage;
