"use client";
import Image from "next/image";
import { useState } from "react";

const ProductImages = ({ product }: any) => {
  const [images, setImages] = useState(product?.images[0]);
  return (
    <div className="flex flex-col md:flex-row gap-10">
      <div>
        {product &&
          product?.images?.map((item:any, index:number) => (
            <div key={index} className="">
              <Image
                src={item}
                alt="product images"
                height={100}
                width={100}
                className={`mt-1 rounded-md object-contain cursor-pointer p-2 ${item === images ? " border border-gray-500": "border border-gray-200" }`}
                onClick={() => setImages(item)}
              />
            </div>
          ))}
      </div>
      <div>
        <Image
          src={images}
          alt="product image"
          width={400}
          height={400}
          className="rounded-xl object-contain"
        />
      </div>
    </div>
  );
};

export default ProductImages;
