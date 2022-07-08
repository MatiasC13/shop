import useModal from "../customHooks/useModal";
import TableCart from "../components/TableCart/TableCart";
import ModalCart from "../components/ModalCart/ModalCart";

const Cart = () => {
  const [isOpen, openModal, close] = useModal(false);
  return (
    <>
      <TableCart openModal={openModal} />
      <ModalCart open={isOpen} close={close} />
      {/* modal de exito */}
    </>
  );
};

export default Cart;

// <>
//   <div>Compra aprobada. Número de orden: {succesOrder}</div>
//   <Button onClick={finishOrder}>Aceptar</Button>
// </>;
