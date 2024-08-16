import React from "react";
import Image from "next/image";
import { MdFavoriteBorder, MdStar } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { LuEye } from "react-icons/lu";
import { ProductType } from "../../../type";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

interface Props {
    products: ProductType;
  }

const ProductCard = ({products}: Props) => {

    
      
      const SideBar = () => {
        return (
          <div className="absolute right-2 bottom-12 border flex flex-col text-2xl border-borderColor bg-white rounded-md overflow-hidden transform translate-x-20 group-hover:translate-x-0 duration-300">
            <button className="p-2 hover:bg-skyColor duration-300 hover:text-white">
              <FiShoppingCart />
            </button>
            <button className="p-2 hover:bg-skyColor duration-300 hover:text-white border-y border-y-borderColor">
              <LuEye />
            </button>
            <button className="p-2 hover:bg-skyColor duration-300 hover:text-white">
              <MdFavoriteBorder />
            </button>
          </div>
        );
      };
      
  return (
    <div className="border border-borderColor hover:shadow-lg hover:shadow-black/30 duration-300 rounded-md group overflow-hidden">
      <div className=" relative">
        <Image
          src={products?.images[0]}
          alt="product-image"
          width={500}
          height={500}
          className="w-full h-64 object-contain hover:scale-110 duration-300"
        />
        <p className="absolute top-2 right-2 bg-orange-600 text-white py-1 px-2 text-xs rounded-lg flex items-center">
          {products?.rating}
          <MdStar />
        </p>
        <SideBar />
      </div>
      <div className="border-t border-t-borderColor py-2 px-4 flex flex-col gap-y-1 relative h-44">
        <p className="text-sm text-lightText capitalize font-medium">
          {products?.category}
        </p>

        <h2 className="font-semibold text-base line-clamp-2">
          {products?.title}
        </h2>
        <p className="font-semibold text-skyColor">${products?.price}</p>
        <AddToCartButton />
      </div>
    </div>
  )
}

export default ProductCard