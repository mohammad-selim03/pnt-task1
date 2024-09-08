"use client";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "@/app/redux/shofySlice";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const ProductCartBtn = ({ product }: any) => {
  const [existingProduct, setExistingProduct] = useState(null);
  const dispatch = useDispatch();
  const { cart } = useSelector((state:any) => state.shofy);

  useEffect(() => {
    // this method will be set existing product on redux cart & we can use it wherever we want.
    const availableProduct = cart?.find(
      (item: any) => item?.id === product?.id
    );
    if (availableProduct) setExistingProduct(availableProduct);
  }, [cart, product]);

  const handleAddtoCart = () => {
    if (product) {
      dispatch(addToCart(product));
      toast.success("Product add to cart.!");
    }
  };

  const handleIncrement = () => {
    dispatch(increaseQuantity(product?.id));
    toast.success("Product quantity increased.!");
  };

  const handleDecrement = () => {
    if (existingProduct?.quantity > 1) {
      dispatch(decreaseQuantity(product?.id));
      toast.success("Quantity decreased.!");
    } else {
      toast.error("Quantity can't be decress less than 1");
    }
  };
  return (
    <div>
      <p>Quantity</p>
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-between rounded-md p-3 font-semibold w-32 border border-slate-200 h-12">
          <p
            className="text-3xl cursor-pointer hover:text-red-500"
            onClick={handleDecrement}
          >
            -
          </p>
          <p className="text-lg">{product?.quantity ? product?.quantity : 1}</p>
          <p
            className="text-2xl cursor-pointer hover:text-green-500"
            onClick={handleIncrement}
          >
            +
          </p>
        </div>
        <div className="w-full">
          <button
            className="border border-black text-black hover:bg-black hover:text-white transition-all duration-300 font-semibold w-full rounded-md h-12"
            onClick={handleAddtoCart}
          >
            Add To Cart
          </button>
        </div>
      </div>
      <div className="w-full">
        <button className="bg-themeColor/80 text-white font-semibold w-full rounded-md h-12 mt-5 hover:bg-themeColor">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCartBtn;
