import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import db from "../../utils/firebaseConfig";
import Loader from "../Loader/Loader";
import ItemDetail from "../ItemDetail/ItemDetail";
// import getItem from "../../services/Request";

const ItemDetailContainer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { loading, setLoading } = useContext(CartContext);
  const [item, setItem] = useState({});

  // const getItem = () => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(discos);
  //     }, 2000);
  //   });
  // };

  useEffect(() => {
    const getItem = async () => {
      const docRef = doc(db, "discos", id);
      const docSnaptshop = await getDoc(docRef);
      let disc = docSnaptshop.data();
      disc.id = docSnaptshop.id;
      return disc;
    };

    setLoading(true);
    getItem()
      .then((response) => {
        // const findById = response.find((d) => d.id == id);
        // findById === undefined ? navigate("/notFound") : setItem(findById);
        response === undefined ? navigate("/notFound") : setItem(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [navigate, setLoading, id]);

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

  return <>{loading ? <Loader /> : <ItemDetail item={item} />}</>;
};

export default ItemDetailContainer;
