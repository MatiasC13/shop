import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { disco } from "../../utils/discsMock";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  const getItem = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(disco);
      }, 2000);
    });
  };

  useEffect(() => {
    getItem()
      .then((response) => {
        setItem(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
