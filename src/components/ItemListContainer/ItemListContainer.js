import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import ItemList from "../ItemList/ItemList";
import discos from "../../utils/discsMock";
import "./ItemListContainer.css";

const ItemListContainer = ({ slider }) => {
  const navigate = useNavigate();
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
          console.log("filtrado por categoria");
          console.log(filterByCategory);
          filterByCategory.length === 0
            ? navigate("/notFound")
            : setItems(filterByCategory);
          setItems(filterByCategory);
        } else {
          setItems(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoria, navigate]);

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

  const assignamentTitle = () => {
    let title = "";
    if (categoria === "LP") {
      title = "LP";
    } else if (categoria === "EP") {
      title = "EP";
    } else {
      title = "Destacados";
    }
    return title;
  };

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
          {assignamentTitle()}
        </Typography>
      </ThemeProvider>
      <ItemList items={items} slider={slider} />
    </>
  );
};

export default ItemListContainer;
