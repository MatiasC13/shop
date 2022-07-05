import { useContext } from "react";
import { Button, Typography } from "@mui/material";
import { CartContext } from "../../context/CartContext";
import "./ItemCount.css";

const ItemCount = ({ item, count, setCount, showButton }) => {
  const { addItem } = useContext(CartContext);

  const handlerAdd = (item, quantity) => {
    addItem(item, quantity);
    showButton(false);
  };

  // const onAdd = () => {
  //   console.log(`${count} disco/s agregado/s.`);
  // };

  return (
    <div className="flex">
      <div className="count-item">
        <Button
          onClick={() => setCount(count - 1)}
          disabled={count === 0}
          variant="text"
          color="inherit"
          sx={{ fontSize: "1.5rem" }}
        >
          -
        </Button>
        <Typography variant="h6">{count}</Typography>
        <Button
          onClick={() => setCount(count + 1)}
          disabled={count >= item.copias}
          variant="text"
          color="inherit"
          sx={{ fontSize: "1.5rem" }}
        >
          +
        </Button>
      </div>
      <Button
        onClick={() => handlerAdd(item, count)}
        disabled={count <= 0 || count > item.copias}
        variant="outlined"
        color="inherit"
        size="large"
      >
        Agregar Producto
      </Button>
    </div>
  );
};

export default ItemCount;
