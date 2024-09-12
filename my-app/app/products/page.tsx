"use client";

import { useState, useEffect } from "react";
import Product from "../components/Product";
import Loading from "../components/Loading"
type Rating = {
  rate: number;
  count: number;
};

interface ProductType {
  id: number;
  title: string;
  category: string;
  rating: Rating;
  price: number;
  description: string;
  image: string;
}

export default function Products() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const jsonData = await data.json();
    setProducts(jsonData);
  };
  if (products.length === 0) {
    return <Loading />;
  }
  return (
    <div className="flex flex-col items-center">
      <h1 className="mt-5 text-xl">Products Page</h1>
      <ul className="w-[85%] flex flex-wrap mt-10 justify-center">
        {products.map((eachProduct) => (
          <Product key={eachProduct.id} eachProduct={eachProduct} />
        ))}
      </ul>
    </div>
  );
}
