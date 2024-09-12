"use client";

import { useState, useEffect } from "react";
import Product from "../../components/Product";
import Loading from "../../components/Loading"
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
    return <Loading />;
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
