import React from "react";
import Container from "../Container";
import Link from "next/link";
import { navigation } from "@/constants";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";

const BottomHeader = () => {
  return (
    <div className="border-b border-b-gray-400 ">
      <Container className="flex items-center justify-between h-[45px]">
        <div className="text-xs md:text-sm font-medium flex items-center gap-5">
          <div className="flex items-center justify-between px-3 cursor-pointer">
            <p className="text-md font-semibold bg-themePrimary text-white h-[45px] w-[290px] px-3 flex items-center gap-2">
              <CgMenuRightAlt size={20}/> All Departments
              <span>
                <IoIosArrowDown className="ml-20" size={16} />{" "}
              </span>
            </p>
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
            <FiPhoneCall className="text-themePrimary"/>{" "}
          </span>
          <p className="text-xs text-gray-400 font-medium ">
            Hotline: <br /><span className="text-black">+88 01012345678</span>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default BottomHeader;
