"use client";

import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "@/app/redux/shofySlice";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";


const AddToCartButton = ({ product }: any) => {
  const { cart } = useSelector((state: any) => state.shofy);
  const [existingProduct, setExistingProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    // this method will be set existing product on redux cart & we can use it wherever we want.
    const availableProduct = cart?.find((item) => item?.id === product?.id);
    if (availableProduct) setExistingProduct(availableProduct);
  }, [cart, product]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
      toast.success("product added successfully.!");
    }
  };

  const handleAdd = () => {
    dispatch(increaseQuantity(product?.id));
    toast.success("Quantity increase.!");
  };
  const handleRemove = () => {
    if (existingProduct?.quantity > 1) {
      dispatch(decreaseQuantity(product?.id));
      toast.success("Quantity decreased.!");
    } else {
      toast.error("Quantity can't be decress less than 1");
    }
  };

  return (
    <>
      {existingProduct ? (
        <div className="flex items-center justify-between h-10 rounded-full">
          <button
            onClick={handleRemove}
            className="bg-gray-100 h-full w-10 rounded-full flex items-center justify-center border hover:border-skyColor hover:bg-transparent duration-200 disabled:text-gray-500 disabled:bg-white"
          >
            <FaMinus />
          </button>{" "}
          <p className="text-base font-semibold">{existingProduct?.quantity}</p>{" "}
          <button
            onClick={handleAdd}
            className="bg-gray-100 h-full w-10 rounded-full flex items-center justify-center border hover:border-skyColor hover:bg-transparent duration-200"
          >
            <FaPlus />
          </button>
        </div>
      ) : (
        <button
          onClick={handleAddToCart}
          className="bg-transparent border border-skyColor text-black rounded-full py-1.5 hover:bg-skyColor hover:text-white duration-300 my-2"
        >
          Add to cart
        </button>
      )}
    </>
  );
};

export default AddToCartButton;
