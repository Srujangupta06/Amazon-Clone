"use client";

import { useState, useEffect } from "react";
import Product from "../../components/Product";

const Clothing = () => {
  const [clothingProducts, setClothingProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const jsonData = await data.json();
    const clothingItems = jsonData.map((eachItem) => {
      const item = eachItem.category.split(" ");
      if (item[1] === "clothing") {
        return eachItem;
      }
    });
    //console.log(clothingItems)
    setClothingProducts(clothingItems);
  };
  if (clothingProducts.length === 0) {
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
      <h1 className="mt-5 text-xl">Fashion Wear Page</h1>
      <ul className="w-[85%] flex flex-wrap mt-10 justify-center">
        {clothingProducts.map(
          (eachProduct) =>
            eachProduct && (
              <Product key={eachProduct.id} eachProduct={eachProduct} />
            )
        )}
      </ul>
    </div>
  );
};
export default Clothing;
