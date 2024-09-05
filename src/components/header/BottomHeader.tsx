import React from "react";
import Container from "../Container";
import Link from "next/link";
import { navigation } from "@/constants";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { IoGiftOutline, IoHomeOutline } from "react-icons/io5";
import { FcElectronics } from "react-icons/fc";
import { MdOutlineComputer } from "react-icons/md";
import { FaMobileScreen } from "react-icons/fa6";
import { RiTvFill } from "react-icons/ri";

const BottomHeader = () => {
  const Categories = () => {
    const departments = [
      {
        title: "new arrivals",
        link: "/",
        icons: <IoHomeOutline />,
      },
      {
        title: "electronics",
        link: "/",
        icons: <FcElectronics />,
      },
      {
        title: "gift",
        link: "/",
        icons: <IoGiftOutline />,
      },
      {
        title: "computers",
        link: "/",
        icons: <MdOutlineComputer />,
      },
      {
        title: "smart Phone & Tablest",
        link: "/",
        icons: <FaMobileScreen />,
      },
      {
        title: "Tv, Video & Music",
        link: "/",
        icons: <RiTvFill />,
      },
    ];
    return (
      <div className="absolute top-full left-[12px] w-[290px] bg-white text-black shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 translate-y-[-20px] ">
      <div>
        {departments?.map((dep, index) => (
          <div
            key={index}
            className="w-full flex items-center gap-3 p-4 capitalize hover:bg-gray-100 transition-all duration-200 cursor-pointer"
          >
            {dep?.icons}
            <span className="text-sm">{dep?.title}</span>
          </div>
        ))}
      </div>
    </div>
    );
  };
  return (
    <div className="border-b border-b-gray-400 ">
      <Container className="flex items-center justify-between h-[45px] ">
        <div className="text-xs md:text-sm font-medium flex items-center gap-5  ">
          <div className="flex items-center justify-between px-3 cursor-pointer group relative ">
              <p className="text-md font-semibold bg-themeColor hover:bg-black transition-all duration-300 text-white h-[45px] w-[290px] px-3 flex items-center gap-2 ">
                <CgMenuRightAlt size={20} /> All Departments
                <span>
                  <IoIosArrowDown className="ml-20" size={16} />{" "}
                </span>
              </p>
              <Categories />
          </div>
          {navigation?.map((item) => (
            <Link key={item?.title} href={item?.href}>
              {item?.title}
            </Link>
          ))}
        </div>
        <div className="md:inline-flex items-center gap-3 hidden">
          <span>
            {" "}
            <FiPhoneCall className="text-themeColor" />{" "}
          </span>
          <p className="text-xs text-gray-400 font-medium ">
            Hotline: <br />
            <span className="text-black">+88 01012345678</span>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default BottomHeader;
