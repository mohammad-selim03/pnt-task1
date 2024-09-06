import Link from "next/link";


const CheckOutPage = ({ cart, totalPrice }:any) => {
  let tax = 15;
  return (
    <div className="shadow-themeColor/30 sticky top-60 shadow-xl p-4 rounded-md lg:ml-10 w-full">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-semibold">Subtotal</h2>
        <h2 className="text-xl font-semibold">${totalPrice.toFixed(2)}</h2>
      </div>
      <hr />
      <div className="flex items-center justify-between mt-2 mb-3">
        <p className="text-gray-500">Tax</p>
        <p className="text-gray-500">${tax}</p>
      </div>
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg font-semibold">Total</h3>
          <p className="text-xs inline-block text-gray-500">
            (Shipping fees not included)
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">${(totalPrice + tax).toFixed(2)}</h3>
        </div>
      </div>
      <div>
        <button className="capitalize font-bold text-white bg-black mt-5 h-12 rounded-md w-full" onClick={() => window.alert("Unfortunatly, checkout not available at the moment.!")}>
          proceed to checkout
        </button>
      </div>
      <Link href={"/"}>
        {" "}
        <p className="underline text-sm mt-5 text-center">Continue Shopping</p>
      </Link>
    </div>
  );
};

export default CheckOutPage;
