import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/store/get",
      {
        headers: {
          Authorization: "939fb4716e179377b83102e234239b47"
        }
      }
    );
    let items;
    try {
      items = await data.json();
      items = items.data;
    } catch (error) {
      console.log(error);
    }

    setItems(items);
  };

  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.itemId}>
            <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shop;
