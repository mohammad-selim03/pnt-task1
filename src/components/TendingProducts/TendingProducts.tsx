// "use client";
import Container from "../Container";
import { ProductsApi } from "../ProductsAPI/ProductsApi";
import Products from "./Products";

const TendingProducts = async () => {

  const products = await ProductsApi(process.env.API);

  return (
    <div>
      <Products products={products} />
    </div>
  );
};

export default TendingProducts;
