import { Box, Grid } from "@mui/material";
import ItemSlider from "../ItemSlider/ItemSlider";
import Item from "../Item/Item";

const ItemList = ({ items, slider }) => {
  const categoriesList = (
    <Grid container spacing={2}>
      {items.map((item, i) => (
        <Item key={i} p={item} />
      ))}
    </Grid>
  );

  const homeList = (
    <Grid mx={4}>
      <ItemSlider items={items} />
    </Grid>
  );

  const show = slider ? homeList : categoriesList;

  return (
    <Box mx={4} mb={5}>
      {show}
    </Box>
  );
};

export default ItemList;
