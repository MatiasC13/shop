import { useState } from "react";
import { Button, Typography } from "@mui/material";
import "./ItemCount.css";

const ItemCount = ({ setOnAdd, stock, initial }) => {
  const [count, setCount] = useState(initial);

  // const onAdd = () => {
  //   console.log(`${count} disco/s agregado/s.`);
  // };

  return (
    <>
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
            disabled={count >= stock}
            variant="text"
            color="inherit"
            sx={{ fontSize: "1.5rem" }}
          >
            +
          </Button>
        </div>
        <Button
          onClick={setOnAdd}
          disabled={count <= 0 || count > stock}
          variant="outlined"
          color="inherit"
          size="large"
        >
          Agregar Producto
        </Button>
      </div>
    </>
  );
};

export default ItemCount;
