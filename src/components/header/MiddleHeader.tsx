"use client";
import Container from "../Container";
import Image from "next/image";
import { RiSearchLine, RiCloseLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { LiaUser } from "react-icons/lia";
import { MdFavoriteBorder } from "react-icons/md";
import { BiShoppingBag } from "react-icons/bi";
import Link from "next/link";
import { logo } from "@/assets";
import { RiMenu3Fill } from "react-icons/ri";
import { signIn, signOut, useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { addUser } from "@/app/redux/shofySlice";

const MiddleHeader = () => {
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();
  const { data: session , status} = useSession();


  useEffect(() => {
    if (status === 'authenticated' && session?.user) {

      console.log('Dispatching user to Redux:', session.user);
      dispatch(addUser(session?.user));
    } 
  }, [session?.user]);

  if(status === "loading"){
    return <div> loading...</div>
  }

  return (
    <div className="border-b-[1px] border-b-gray-400 h-[90px]">
      <Container className="py-5 flex items-center gap-4 md:gap-6 lg:gap-20 justify-between ">
        <Link href={"/"}>
          <Image src={logo} alt="logo" className="w-36" />
        </Link>
        <div className="hidden md:inline-flex flex-1 h-10 relative">
          <input
            type="text"
            placeholder="Search products here..."
            className="w-full h-[48px] outline-none border  border-themePrimary px-4 py-3"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          {searchValue && (
            <RiCloseLine
              onClick={() => setSearchValue("")}
              className="text-xl absolute top-2.5 right-12 text-gray-500 hover:text-red-500 cursor-pointer duration-200"
            />
          )}
          <span className="w-[50px] h-[48px] bg-themePrimary inline-flex items-center justify-center text-white absolute top-0 right-0  duration-200 cursor-pointer">
            <RiSearchLine size={25} />
          </span>
        </div>
        <div className="hidden md:inline-flex items-center gap-3">
          {/* User */}
          <div className="flex items-center gap-2">
            <div className="border-2 border-gray-700 p-1.5 rounded-full text-xl">
              <LiaUser />
            </div>
            {session?.user ? (
              <>
                <div>
                  <p
                    className="text-md font-bold cursor-pointer"
                    onClick={() => signOut()}
                  >
                    Logout
                  </p>
                </div>
              </>
            ) : (
              <Link href={"/login"} onClick={() => signIn()}>
                <p className="text-xs">Hello, Guests</p>
                <p className="text-sm">Login / Register</p>
              </Link>
            )}
          </div>
          {/* Favorite Icon */}
          <Link href={"/favorite"} className="text-2xl relative">
            <MdFavoriteBorder />
            <span className="absolute -top-1 -right-1 text-[10px] font-medium w-4 h-4 bg-themeColor text-white rounded-full flex items-center justify-center">
              0
            </span>
          </Link>
          {/* Cart Icon */}
          <Link href="/cart" className="text-2xl relative">
            <BiShoppingBag />
            <span className="absolute -top-1 -right-1 text-[10px] font-medium w-4 h-4 bg-themeColor text-white rounded-full flex items-center justify-center">
              0
            </span>
          </Link>
        </div>
        <div className="text-3xl md:hidden text-gray-500 hover:text-themeColor duration-200 cursor-pointer">
          <RiMenu3Fill />
        </div>
      </Container>
    </div>
  );
};

export default MiddleHeader;
