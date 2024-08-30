"use client";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";

const CartPage = () => {
  const { cart } = useSelector((state) => state.shofy);
  console.log(cart);

  return (
    <div>
      <h3 className="text-2xl font-bold mt-5 mb-16">Products Details</h3>
      <div className="grid grid-cols-12">
        <div  className="   border-gray-500 col-span-9">
          {cart?.map((item) => (
            <div key={item?.id}>
              <div className="flex items-center justify-between h-40 gap-3 border-b-2 px-3 w-full ">
                <Image
                  src={item?.images[0]}
                  alt="product image"
                  width={200}
                  height={200}
                  className="rounded-xl"
                />
                <div className=" gap-2">
                  <p className="text-lg font-semibold">{item?.title}</p>
                  <p className="text-xs text-gray-500">
                    {item?.availabilityStatus}
                  </p>
                  <p className="text-sm font-semibold">{item?.brand}</p>
                </div>
                <p className="text-md text-semibold">${item?.price}</p>
                <div className="flex items-center gap-3 border-gray-500 rounded-md">
                  <button><FaMinus /></button>
                  <p className="text-base text-semibold">{cart?.quantity > 1 ? cart?.quantity : 0 }</p>
                  <button><FaPlus /></button>
                </div>
                <span className="hover:text-red-500 cursor-pointer translate-all duration-300"><MdDelete size={25} /></span> 
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-3">
          checkout process
        </div>
      </div>
    </div>
  );
};

export default CartPage;
