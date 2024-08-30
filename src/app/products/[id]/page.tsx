"use client";
import { ProductsApi } from "@/components/ProductsAPI/ProductsApi";
import Image from "next/image";
import { useParams } from "next/navigation";

const SingleProductPage = async () => {
  const { id } = useParams();
  const endpoint = `https://dummyjson.com/products/${id}`;
  const product = await ProductsApi(endpoint);
  return (
    <div className="grid grid-cols-12 gap-2 items-center justify-between">
      {/* <div>product images</div> */}
      <div className="col-span-5">
        {/* Product first Image */}
        <Image
          src={product?.images[0]}
          alt="product image"
          width={300}
          height={300}
          className="rounded-xl"
        />
      </div>
      <div className="col-span-6">
        {/* title */}
        <h3 className="text-3xl font-semibold">{product?.title}</h3>
        {/* brand , star reviw*/}

        {/* description */}
        <p className="text-sm text-gray-500">{product?.description}</p>
        {/* price  */}
        <p className="text-xl font-semibold">${product?.price}</p>
        {/* stockAvailability */}
        {/* quantity addToCart */}
        {/* buy now */}
        {/* Share : social icon */}
        {/* days return */}
        {/* payment photo */}
      </div>
    </div>
  );
};

export default SingleProductPage;
