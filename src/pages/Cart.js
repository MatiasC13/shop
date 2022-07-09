import { useState } from "react";
import useModal from "../customHooks/useModal";
import TableCart from "../components/TableCart/TableCart";
import ModalCart from "../components/ModalCart/ModalCart";
import ModalCompraAprobada from "../components/ModalCompraAprovada/ModalCompraAprovada";

const Cart = () => {
  const [isOpen, openModal, close] = useModal(false);
  const [isOpenModalAprove, openModalAprove] = useModal(false);
  const [order, setOrder] = useState(0);

  return (
    <>
      <TableCart openModal={openModal} />
      <ModalCart
        open={isOpen}
        close={close}
        openModalAprove={openModalAprove}
        setOrder={setOrder}
      />
      {Boolean(order) && (
        <ModalCompraAprobada open={isOpenModalAprove} order={order} />
      )}
    </>
  );
};

export default Cart;
