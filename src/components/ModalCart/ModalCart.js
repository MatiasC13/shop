import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
import useCartList from "../../customHooks/useCartList";

const initialState = {
  name: "",
  phone: "",
  email: "",
};
const ModalCart = ({ isOpen, close }) => {
  const navigate = useNavigate();
  const { cartListItems, totalPrice, setCartListItems } = useCartList();

  const [formValue, setFormValue] = useState(initialState);

  useEffect(() => {
    if (isOpen) {
      setFormValue({});
    }
  }, [isOpen]);

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
    close();
    navigate("/");
    setCartListItems([]);
    //   saveData({ ...order, buyer: formValue });
  };

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  // const finishOrder = () => {
  //   navigate("/");
  // };

  // const saveData = async (newOrder) => {
  //   const orderFirebase = collection(db, "ordenes");
  //   const orderDoc = await addDoc(orderFirebase, newOrder);
  //   setSuccesOrder(orderDoc.id);
  //   clear();
  // };

  return (
    <>
      <Dialog isOpen={isOpen} onClose={close}>
        <Box component="form" onSubmit={handleSubmit}>
          {/* <form onSubmit={handleSubmit}> */}
          <DialogTitle>Completa tus datos</DialogTitle>
          <DialogContent>
            <TextField
              required
              autoComplete="off"
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
              autoComplete="off"
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
              autoComplete="off"
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
            <Button onClick={close}>Cancelar</Button>
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
