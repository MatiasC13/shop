import { useState } from "react";
import TableCart from "../components/TableCart/TableCart";
import ModalCart from "../components/ModalCart/ModalCart";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <TableCart setIsOpen={setIsOpen} />
      {isOpen && <ModalCart open={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

export default Cart;

// <>
//   <div>Compra aprobada. Número de orden: {succesOrder}</div>
//   <Button onClick={finishOrder}>Aceptar</Button>
// </>;
