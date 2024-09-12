"use client";

import { useState, useEffect } from "react";
import Product from "../../components/Product";
import Loading from "@/app/components/Loading";
const Electronics = () => {
  const [electronicProducts, setElectronicProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const jsonData = await data.json();
    const electronicItems = jsonData.filter(
      (eachItem) => eachItem.category === "electronics"
    );
    setElectronicProducts(electronicItems);
  };
  if (electronicProducts.length === 0) {
    return <Loading />;
  }
  return (
    <div className="flex flex-col items-center">
      <h1 className="mt-5 text-xl">Electronics Products Page</h1>
      <ul className="w-[85%] flex flex-wrap mt-10 justify-center">
        {electronicProducts.map((eachProduct) => (
          <Product key={eachProduct.id} eachProduct={eachProduct} />
        ))}
      </ul>
    </div>
  );
};
export default Electronics;
