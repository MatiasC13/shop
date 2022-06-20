import { ThemeProvider, createTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemListContainer.css";

const ItemListContainer = ({ title }) => {
  const theme = createTheme();
  theme.typography.h2 = {
    fontSize: "2rem",
    "@media (min-width:600px)": {
      fontSize: "2.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "3.75rem",
    },
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Typography
          className="title-itemListContainer"
          variant="h2"
          align="center"
          mt={2}
          mb={4}
        >
          {title}
        </Typography>
      </ThemeProvider>
      <ItemCount stock={5} initial={1} />
    </>
  );
};

export default ItemListContainer;
