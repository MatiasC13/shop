import { Grid } from "@mui/material";
import ItemSlider from "../ItemSlider/ItemSlider";

const ItemList = ({ items }) => {
  return (
    <Grid mx={4}>
      <ItemSlider items={items} />
    </Grid>
  );
};

export default ItemList;

// const ItemList = ({ items }) => {
//   return (
//     <Box mx={4} mb={5}>
//       <Grid container spacing={2}>
//         {items.map((item, i) => (
//           <Item key={i} p={item} />
//         ))}
//       </Grid>
//     </Box>
//   );
// };
