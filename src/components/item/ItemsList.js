import axios from "axios";
import { useEffect, useState } from "react";

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/items`)
      .then((data) => {
        setItems(data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  let itemView = items.map((item) => {
    return (
      <div>
        <p>{item.itemName}</p>
        <p>{item.itemCategory}</p>
        <p>{item.description}</p>
      </div>
    );
  });

  return itemView;
};

export default ItemList;
