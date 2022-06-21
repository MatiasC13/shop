import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import "./Item.css";

const Item = ({ p: { imagen, titulo, artista, precio } }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="100%"
            image={`./img/${imagen}`}
            alt=""
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              align="center"
              className="title-item"
            >
              {titulo}
            </Typography>
            <Grid container direction="row" justifyContent="space-between">
              <Typography variant="subtitle1">{artista}</Typography>
              <Typography variant="subtitle1">${precio}</Typography>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Item;
