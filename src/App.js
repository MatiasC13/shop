import { ThemeProvider, createTheme } from "@mui/material/styles";
import NavBar from "./components/NavBar/NavBar";
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <NavBar />
      <ItemDetailContainer />
      {/* <ItemListContainer title={"Destacados"} /> */}
    </ThemeProvider>
  );
}

export default App;
