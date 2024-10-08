import React from "react";
import Image from "next/image";
import { MdFavoriteBorder, MdStar } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { LuEye } from "react-icons/lu";
import { ProductType } from "../../../type";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart, addToFavorite } from "@/app/redux/shofySlice";
import toast from "react-hot-toast";

interface Props {
  product: ProductType;
}

const ProductCard = ({ product }: Props) => {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart(product))
    toast.success("Product added to the cart.!")
  }
  const handleAddToFavorite = () => {
    dispatch(addToFavorite(product));
    toast.success("Product added to the favorite.!");
  }
  
  const SideBar = () => {
    return (
      <div className="absolute right-2 bottom-12 border flex flex-col text-2xl border-borderColor bg-white rounded-md overflow-hidden transform translate-x-20 group-hover:translate-x-0 duration-300">
        <button className="p-2 hover:bg-skyColor duration-300 hover:text-white">
          <FiShoppingCart onClick={handleAddToCart}/>
        </button>
        <button className="p-2 hover:bg-skyColor duration-300 hover:text-white border-y border-y-borderColor">
          <LuEye />
        </button>
        <button className="p-2 hover:bg-skyColor duration-300 hover:text-white">
          <MdFavoriteBorder onClick={handleAddToFavorite}/>
        </button>
      </div>
    );
  };

  return (
    <div className="border border-borderColor hover:shadow-lg hover:shadow-black/30 duration-300 rounded-md group overflow-hidden">
      <div className=" relative">
        <Link href={`products/${product?.id}`} className="cursor-pointer">
          <Image
            src={product?.images[0]}
            alt="product-image"
            width={500}
            height={500}
            className="w-full h-64 object-contain hover:scale-110 duration-300"
          />
        </Link>
        <p className="absolute top-2 right-2 bg-orange-600 text-white py-1 px-2 text-xs rounded-lg flex items-center">
          {product?.rating}
          <MdStar />
        </p>
        <SideBar />
      </div>
      <div className="border-t border-t-borderColor py-2 px-4 flex flex-col gap-y-1 relative h-44">
        <p className="text-sm text-lightText capitalize font-medium">
          {product?.category}
        </p>

        <h2 className="font-semibold text-base line-clamp-2 h-12">
          {product?.title}
        </h2>
        <p className="font-semibold text-themeyColor">${product?.price}</p>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
