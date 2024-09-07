import Container from "@/components/Container";
import ProductCartBtn from "@/components/ProductCartBtn/ProductCartBtn";
import ProductImages from "@/components/productImages/ProductImages";
import { ProductsApi } from "@/components/ProductsAPI/ProductsApi";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";


const SingleProductPage = async ({ params }:any) => {
  const { id } = params;
  const endpoint = `https://dummyjson.com/products/${id}`;
  const product = await ProductsApi(endpoint);


  return (
    <Container>
      <div className="grid grid-cols-12 gap-2 items-center justify-between mt-10">
        {/* <div>product images</div> */}
        <div className="col-span-5 flex items-center gap-10">
          {/* All image goes here if has */}
          <div className="mt-10">
            <ProductImages product={product} />
          </div>
        </div>
        <div className="col-span-6 lg:ml-20">
          {/* title */}
          <h3 className="text-3xl font-semibold">{product?.title}</h3>
          {/* brand , star reviw*/}
          <div className="w-32 flex items-center justify-between gap-6 mt-4 mb-5">
            <p className="text-xs bg-green-200 p-1 rounded-md">
              {product?.brand}
            </p>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <IoMdStar className="text-yellow-500" />
                <IoMdStar className="text-yellow-500" />
                <IoMdStar className="text-yellow-500" />
                <IoMdStar className="text-yellow-500" />
                <IoMdStarOutline />
              </div>
              <p className="text-xs">({product?.rating})</p>
            </div>
          </div>
          {/* description */}
          <p className="text-xs text-gray-500 mt-4 mb-4">
            {product?.description}
          </p>
          {/* price  */}
          <p className="text-xl font-semibold">${product?.price}</p>
          {/* stockAvailability */}
          <div className="flex flex-col gap-5 mt-3">
            <p className="text-xs text-green-600">{product?.stock} products Available</p>
            {/* weight */}
            <div>
              <p className="text-xs">Weight</p>
              <div className="border border-black rounded-md p-1 w-12 mt-1 text-sm flex items-center justify-center">{product?.weight}KG</div>
            </div>
            {/* quantity addToCart */}
            <div>
              <ProductCartBtn product={product} />
            </div>
            {/* compare, add wishlist */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <span>
                  <IoGitCompareOutline />
                </span>
                <p className="text-xs">Compare</p>
              </div>
              <div className="flex items-center gap-1">
                <span >
                  <MdOutlineFavoriteBorder />
                </span>
                <p className="text-xs">Add Wishlist</p>
              </div>
            </div>
            {/* buy now */}
            {/* Share : social icon */}
            {/* days return */}
            {/* payment photo */}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SingleProductPage;
