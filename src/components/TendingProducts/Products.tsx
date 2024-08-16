"use client"
import { ProductType } from '../../../type'
import Container from '../Container';
import ProductCard from './ProductCard';

interface Props{
    products:{
        products: ProductType[];
    }
}

const Products = ({products}:Props) => {
    const product = products?.products;

  return (
    <Container className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {product?.map((item: ProductType) => (
        <ProductCard key={item?.id} products={item} />
      ))}
    </Container>
  )
}

export default Products