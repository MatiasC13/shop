import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Typography, Button } from "@mui/material";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({
  item: { imagen, titulo, artista, discografica, anio, copias, precio },
}) => {
  const [onAdd, setOnAdd] = useState(false);

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
            <ItemCount setOnAdd={setOnAdd} stock={copias} initial={1} />
          ) : (
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              className="item-detail-button"
            >
              <Link to="/cart" className="item-detail-link">
                Comprar
              </Link>
            </Button>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ItemDetail;
