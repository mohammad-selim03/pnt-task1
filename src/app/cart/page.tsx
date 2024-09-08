"use client";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../redux/shofySlice";
import Link from "next/link";
import CheckOutPage from "../checkout/page";
import Container from "@/components/Container";
import { IoMdCheckmark } from "react-icons/io";

const CartPage = () => {
  const { cart } = useSelector((state:any) => state.shofy);
  const dispatch = useDispatch();
  const handlePlus = (id: number) => {
    dispatch(increaseQuantity(id));
  };
  const handleMinus = (id: number) => {
    dispatch(decreaseQuantity(id));
  };

  let totalPrice = 0;
  cart.forEach((item:any) => {
    const price = item?.price;
    const quantity = item?.quantity;
    totalPrice += price * quantity;
  })

  return (
    <Container>
      <h3 className="text-2xl font-bold mt-5 mb-16">Products Cart</h3>
      <div className=" md:grid grid-cols-12">
        <div className="   border-gray-500 col-span-9">
          {cart?.map((item: any) => (
            <div key={item?.id}>
              <div className="flex items-center justify-between h-40 gap-3 border-b-2 px-3   ">
                <Link href={`products/${item?.id}`} className="object-contain">
                  <Image
                    src={item?.images[0]}
                    alt="product image"
                    width={150}
                    height={150}
                    className="rounded-xl object-contain"
                  />
                </Link>
                <div className="w-72">
                  <p className="text-lg font-semibold">{item?.title}</p>
                  <p className="text-xs text-gray-500 font-bold  flex items-center gap-2">
                    <span className="text-green-500 "><IoMdCheckmark size={18}/></span>{item?.availabilityStatus}
                  </p>
                  <p className="text-sm font-semibold">{item?.brand}</p>
                </div>
                <p className="text-md text-semibold">
                  $
                  {item?.price && item?.quantity
                    ? (item.price * item.quantity).toFixed(2)
                    : "0.00"}
                </p>
                <div className="flex items-center justify-between gap-3 border-2 border-gray-500 rounded-md w-32 px-4 py-2">
                  <button
                    onClick={() => handleMinus(item?.id)}
                    disabled={item?.quantity === 1}
                  >
                    <FaMinus />
                  </button>
                  <p className="text-base text-bold">
                    {item?.quantity >= 1 ? item?.quantity : 0}
                  </p>
                  
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-3">
          <CheckOutPage cart={cart} totalPrice={totalPrice}/>
        </div>
      </div>
    </Container>
  );
};

export default CartPage;
