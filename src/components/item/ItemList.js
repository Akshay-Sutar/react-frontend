import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

export default function ItemList() {
  const url = "https://fakestoreapi.com/products/";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <>
      {!products.length && <p>Loading...</p>}
      {products.map((product) => (
        <ItemCard key={product.id} product={product} />
      ))}
    </>
  );
}
