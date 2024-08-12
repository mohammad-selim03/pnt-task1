import React from "react";
import Container from "../Container";
import img1 from "../../assets/categories/product-cat-1.png";
import img2 from "../../assets/categories/product-cat-2.png";
import img3 from "../../assets/categories/product-cat-3.png";
import img4 from "../../assets/categories/product-cat-4.png";
import img5 from "../../assets/categories/product-cat-5.png";
import Image from "next/image";
import { CiDeliveryTruck, CiDiscount1 } from "react-icons/ci";
import { LuDollarSign } from "react-icons/lu";
import { FiHeadphones } from "react-icons/fi";

const Category = () => {
  return (
    <Container className="mt-10 ">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-5 gap-5">
        <div className="w-[180px] text-center cursor-pointer">
          <div className="bg-[#d4e3ff] h-[180px] w-[180px] rounded-full flex items-center justify-center ">
            <Image src={img1} alt="category one" className="hover:scale-110 transition-all duration-200" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Headphones</h3>
            <p className="text-sm ">20 product</p>
          </div>
        </div>
        <div className="w-[180px] text-center cursor-pointer">
          <div className="bg-[#d4e3ff] h-[180px] w-[180px] rounded-full flex items-center justify-center">
            <Image src={img2} alt="category one" className="hover:scale-110 transition-all duration-200"/>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Mobile Phone</h3>
            <p className="text-sm ">25 product</p>
          </div>
        </div>
        <div className="w-[180px] text-center cursor-pointer">
          <div className="bg-[#d4e3ff] h-[180px] w-[180px] rounded-full flex items-center justify-center">
            <Image src={img3} alt="category one" className="hover:scale-110 transition-all duration-200"/>
          </div>
          <div>
            <h3 className="text-xl font-semibold">CPU Head Pipes</h3>
            <p className="text-sm ">57 product</p>
          </div>
        </div>
        <div className="w-[180px] text-center cursor-pointer">
          <div className="bg-[#d4e3ff] h-[180px] w-[180px] rounded-full flex items-center justify-center">
            <Image src={img4} alt="category one" className="hover:scale-110 transition-all duration-200"/>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Smart Watch</h3>
            <p className="text-sm ">44 product</p>
          </div>
        </div>
        <div className="w-[180px] text-center cursor-pointer">
          <div className="bg-[#d4e3ff] h-[180px] w-[180px] rounded-full flex items-center justify-center">
            <Image src={img5} alt="category one" className="hover:scale-110 transition-all duration-200"/>
          </div>
          <div>
            <h3 className="text-xl font-semibold">With Bluetooth</h3>
            <p className="text-sm ">81 product</p>
          </div>
        </div>
      </div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto ">
        <div className="flex items-center justify-center gap-3 bg-[#dce8ff]/60 w-[280px] h-[100px]">
          <CiDeliveryTruck size={40} className="text-red-500 hover:scale-110 transition-all duration-200" />
          <div>
            <h3 className="text-md font-semibold">Free Delivary</h3>
            <p className="text-sm text-gray-600">Orders form all item</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 bg-[#dce8ff]/60 w-[280px] h-[100px]">
          <LuDollarSign size={40} className="text-red-500 hover:scale-110 transition-all duration-200" />
          <div>
            <h3 className="text-md font-semibold">Free Delivary</h3>
            <p className="text-sm text-gray-600">Orders form all item</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 bg-[#dce8ff]/60 w-[280px] h-[100px]">
          <CiDiscount1 size={40} className="text-red-500 hover:scale-110 transition-all duration-200" />
          <div>
            <h3 className="text-md font-semibold">Free Delivary</h3>
            <p className="text-sm text-gray-600">Orders form all item</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 bg-[#dce8ff]/60 w-[280px] h-[100px]">
          <FiHeadphones size={40} className="text-red-500 hover:scale-110 transition-all duration-200" />
          <div>
            <h3 className="text-md font-semibold">Free Delivary</h3>
            <p className="text-sm text-gray-600">Orders form all item</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Category;
