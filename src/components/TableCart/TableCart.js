import useCartList from "../../customHooks/useCartList";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export default function TableCart({ openModal }) {
  const { cartListItems, removeItem, clear } = useCartList();

  const rows = cartListItems.map((i) => createRow(i));

  function createRow(order) {
    const {
      item: { id, imagen, titulo, artista, precio },
      quantity,
    } = order;
    const priceRow = calculatePriceRow(precio, quantity);
    return { precio, id, imagen, titulo, artista, quantity, priceRow };
  }

  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }

  function calculatePriceRow(qty, unit) {
    return qty * unit;
  }

  function totalPrice(items) {
    return items.map(({ priceRow }) => priceRow).reduce((sum, i) => sum + i, 0);
  }

  const invoiceTotal = totalPrice(rows);

  return (
    <>
      {cartListItems.length === 0 ? (
        <Typography variant="caption" px={1}>
          Tu carrito está vacío
        </Typography>
      ) : (
        <>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="spanning table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={3}>
                    Detalle
                  </TableCell>
                  <TableCell align="right">Precio</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Artista</TableCell>
                  <TableCell align="right">Titulo</TableCell>
                  <TableCell align="right">Cantidad</TableCell>
                  <TableCell align="right">Precio Unit.</TableCell>
                  <TableCell align="right">Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(
                  ({ precio, id, imagen, titulo, artista, priceRow }, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <img alt="" src={`/img/${imagen}`}></img>
                      </TableCell>
                      <TableCell align="right">{titulo}</TableCell>
                      <TableCell align="right">{artista}</TableCell>
                      <TableCell align="right">{ccyFormat(precio)}</TableCell>
                      <TableCell align="right">{ccyFormat(priceRow)}</TableCell>
                      <TableCell align="right">
                        <IconButton onClick={() => removeItem(id)}>
                          <DeleteOutlineOutlinedIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  )
                )}

                <TableRow>
                  <TableCell rowSpan={3} />
                </TableRow>

                <TableRow>
                  <TableCell colSpan={2}>Total</TableCell>
                  <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Button onClick={() => clear()}>Vaciar Carrito</Button>
          <Button variant="outlined" onClick={openModal}>
            Finalizar Compra
          </Button>
        </>
      )}
      <Link to="/">Ir a Home</Link>
    </>
  );
}
