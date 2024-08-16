"use client";

const AddToCartButton = () => {
  return (
    <button
    onClick={() => window.alert("Testing cart")}
    className="bg-transparent border border-skyColor text-black rounded-full py-1.5 hover:bg-skyColor hover:text-white duration-300 my-2 absolute bottom-2 flex justify-center items-center w-60"
  >
    Add to cart
  </button>
  )
}

export default AddToCartButton