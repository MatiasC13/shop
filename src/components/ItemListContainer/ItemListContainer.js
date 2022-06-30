import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import ItemList from "../ItemList/ItemList";
import discos from "../../utils/discsMock";
import "./ItemListContainer.css";

const ItemListContainer = ({ title }) => {
  // const navigate = useNavigate();
  const { categoria } = useParams();
  const [items, setItems] = useState([]);

  const getItems = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(discos);
      }, 2000);
    });
  };

  useEffect(() => {
    getItems()
      .then((response) => {
        if (categoria) {
          const filterByCategory = response.filter(
            (item) => item.categoria === categoria
          );
          // filterByCategory === undefined ? navigate("/notFound") : setItems(filterByCategory);
          setItems(filterByCategory);
        } else {
          setItems(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoria]);

  // useEffect(() => {
  //   getItems()
  //     .then((response) => {
  //       if (categoria) {
  //         const filterByCategory = response.filter(
  //           (item) => item.categoria === categoria
  //         );
  //         setItems(filterByCategory);
  //       } else {
  //         setItems(response);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [categoria]);

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
      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;
