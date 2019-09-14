import React, { useEffect, useState } from "react";
import "./App.css";

function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({
    images: {}
  });

  const fetchItem = async () => {
    const itemFetch = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`,
      {
        headers: {
          Authorization: "939fb4716e179377b83102e234239b47"
        }
      }
    );
    let item;
    try {
      item = await itemFetch.json();
      item = item.data.item;
      setItem(item);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Item Detail {item.name} </h1>

      <img src={item.images.icon} />
    </div>
  );
}

export default ItemDetail;
