import { bannerImageOne } from "@/assets";
import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    banner: {
      _id: 1001,
      priceText: "Starting at $999.90",
      title: "The best tablet Collection 2024",
      textOne: "Exclusive offer",
      offerPrice: "-30%",
      textTwo: "off this week",
      buttonLink: "/products",
      image: bannerImageOne,
    },
    status: "success",
    message: "Keep alive!",
  });
};
