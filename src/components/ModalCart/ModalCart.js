import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import {
  Box,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { saveData } from "../../firebase/services";
import useCartList from "../../customHooks/hookCartList";
import { clear } from "@testing-library/user-event/dist/clear";

const ModalCart = ({ isOpen, setIsOpen }) => {
  console.log("isOpen", isOpen);
  const navigate = useNavigate();
  const { cartListItems, totalPrice } = useCartList();
  const [formValue, setFormValue] = useState({
    name: "",
    phone: "",
    email: "",
  });
  // const [order, setOrder] = useState({
  //   buyer: {},
  //   items: cartListItems.map((item) => {
  //     return {
  //       id: item.id,
  //       titulo: item.titulo,
  //       precio: item.precio,
  //       //quantity
  //     };
  //   }),
  //   total: totalPrice,
  // });
  const [succesOrder, setSuccesOrder] = useState(1);

  useEffect(() => {
    if (!isOpen) {
      setFormValue({});
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setOrder({ cartListItems, buyer: formValue });
    const items = cartListItems.map(
      ({ item: { id, titulo, precio }, quantity }) => ({
        id,
        titulo,
        precio,
        quantity,
      })
    );
    saveData({ items, buyer: formValue, totalPrice });
    clear();
    //   saveData({ ...order, buyer: formValue });
  };

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const finishOrder = () => {
    navigate("/");
  };

  // const saveData = async (newOrder) => {
  //   const orderFirebase = collection(db, "ordenes");
  //   const orderDoc = await addDoc(orderFirebase, newOrder);
  //   setSuccesOrder(orderDoc.id);
  //   clear();
  // };

  return (
    <>
      <Dialog isOpen={isOpen} onClose={handleClose}>
        <Box component="form" onSubmit={handleSubmit}>
          {/* <form onSubmit={handleSubmit}> */}
          <DialogTitle>Completa tus datos</DialogTitle>
          <DialogContent>
            <TextField
              required
              name="name"
              id="standard-required"
              label="Nombre y Apellido"
              variant="standard"
              type="text"
              value={formValue.name}
              onChange={handleChange}
            />
          </DialogContent>
          <DialogContent>
            <TextField
              required
              name="phone"
              id="standard-required"
              label="Teléfono"
              variant="standard"
              type="tel"
              value={formValue.phone}
              onChange={handleChange}
            />
          </DialogContent>
          <DialogContent>
            <TextField
              required
              name="email"
              id="standard-required"
              label="E-Mail"
              variant="standard"
              type="email"
              value={formValue.email}
              onChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button type="submit" onSubmit={handleSubmit}>
              Enviar
            </Button>
          </DialogActions>
        </Box>
        {/* </form> */}
      </Dialog>
    </>
  );
};

export default ModalCart;
