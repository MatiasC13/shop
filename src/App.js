import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CartProvider from "./context/CartContext";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
// import ModalCart from "./components/ModalCart/ModalCart";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <CartProvider>
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <NavBar />
          {/* <ModalCart /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categorias/:categoria" element={<Categories />} />
            <Route path="/detalle/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
