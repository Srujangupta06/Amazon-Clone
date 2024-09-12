"use client";

import { useState, useEffect } from "react";
import Product from "../components/Product";

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
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="text-2xl font-bold">
          <span className="ball">🔴</span>
          <span className="ball delay-1">🟣</span>
          <span className="ball delay-2">🟠</span>
          <span className="ball delay-3">🟢</span>
          <span className="ball delay-4">🔵</span>
        </span>
      </div>
    );
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
