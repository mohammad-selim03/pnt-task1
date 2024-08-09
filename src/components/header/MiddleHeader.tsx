"use client";
import Container from "../Container";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { RiSearchLine, RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import { LiaUser } from "react-icons/lia";

const MiddleHeader = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="border-b border-b-gray-600">
      <Container className="py-5 flex items-center gap-20 justify-between">
        <Image src={logo} alt="logo" className="w-28" />
        <div className="flex-1 h-10 relative">
          <input
            type="text"
            placeholder="Search products here..."
            className="w-full h-full outline-none border-2 border-themeColor px-4"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          {searchValue && (
            <RiCloseLine
              onClick={() => setSearchValue("")}
              className="text-xl absolute top-2.5 right-12 text-gray-500 hover:text-red-500 cursor-pointer duration-200"
            />
          )}

          <span className="w-10 h-10 bg-themeColor/80 inline-flex items-center justify-center text-white absolute top-0 right-0 border border-themeColor hover:bg-themeColor duration-200 cursor-pointer">
            <RiSearchLine />
          </span>
        </div>
        <div>
          {/* User */}
          <div className="flex items-center gap-2">
            <div className="border-2 border-gray-700 p-2 rounded-full text-2xl">
              <LiaUser />
            </div>
            <div>
              <p className="text-xs">Hello, Guests</p>
              <p className="text-sm">Login / Register</p>
            </div>
          </div>
          {/* Favorite Icon */}
          {/* Cart Icon */}
        </div>
      </Container>
    </div>
  );
};

export default MiddleHeader;
