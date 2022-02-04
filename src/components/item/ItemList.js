import React, { useEffect, useState } from "react";

export default function ItemList() {
  const url = "https://fakestoreapi.com/products/";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => console.log(json));
  });

  return <div></div>;
}
