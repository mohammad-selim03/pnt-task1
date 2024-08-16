// "use client";
import Container from "../Container";
import { ProductsApi } from "../ProductsAPI/ProductsApi";
import Products from "./Products";

const TendingProducts = async () => {

  const products = await ProductsApi("https://dummyjson.com/products");

  return (
    <div>
      <Products products={products} />
    </div>
  );
};

export default TendingProducts;
