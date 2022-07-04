import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Typography, Button } from "@mui/material";
// import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  const { imagen, titulo, artista, discografica, anio, precio } = item;
  // const { setCartListItems } = useContext(CartContext);
  const [count, setCount] = useState(1);
  const [onAdd, setOnAdd] = useState(false);

  // const handlerPurchased = () => {
  //   const itemPurchased = { ...item, quantity: count };
  //   console.log("hanfler purchased: ", itemPurchased);
  //   // itemPurchased.quantity = count;
  //   setCartListItems((oldList) => [...oldList, itemPurchased]);
  // };

  return (
    <Box
      sx={{
        margin: { xs: "1rem 1rem 1rem 1rem", md: "1rem 4rem 1rem 4rem" },
      }}
    >
      <Grid container alignItems="center" spacing={5}>
        <Grid item className="grid-img" xs={12} md={6}>
          <img src={`/img/${imagen}`} alt="" className="img-detail" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            gutterBottom
            variant="h5"
            align="center"
            className="titulo-item"
          >
            {titulo}
          </Typography>
          <Box className="info-detail" my={5}>
            <Box>
              <Typography gutterBottom variant="subtitle1">
                {artista}
              </Typography>
              <Typography gutterBottom variant="subtitle1">
                {discografica}
              </Typography>
            </Box>
            <Box>
              <Typography gutterBottom variant="subtitle1">
                {anio}
              </Typography>
              <Typography gutterBottom variant="subtitle1">
                ${precio}
              </Typography>
            </Box>
          </Box>
          {!onAdd ? (
            <ItemCount
              count={count}
              setCount={setCount}
              setOnAdd={setOnAdd}
              item={item}
              // stock={copias}
              // initial={1}
            />
          ) : (
            <Button
              // onClick={setOnAdd}
              variant="outlined"
              color="inherit"
              size="large"
              className="item-detail-button"
            >
              <Link
                to="/cart"
                // onClick={handlerPurchased}
                className="item-detail-link"
              >
                Ir al Carrito
              </Link>
            </Button>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ItemDetail;
