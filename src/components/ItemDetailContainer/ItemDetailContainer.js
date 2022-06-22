import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import discos from "../../utils/discsMock";

const ItemDetailContainer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [item, setItem] = useState({});

  const getItem = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(discos);
      }, 2000);
    });
  };

  useEffect(() => {
    getItem()
      .then((response) => {
        const findById = response.find((d) => d.id == id);
        findById === undefined ? navigate("/notFound") : setItem(findById);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  // useEffect(() => {
  //   const findItem = discos.find((d) => {
  //     return d.id == id;
  //   });

  //   getItem()
  //     .then(() => {
  //       findItem === undefined ? navigate("/notFound") : setItem(findItem);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [id]);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
