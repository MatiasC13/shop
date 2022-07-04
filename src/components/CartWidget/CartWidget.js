import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Badge, Menu, MenuItem, Typography, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const CartWidget = () => {
  const { cartListItems, removeItem, clear } = useContext(CartContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const quantityItems = cartListItems.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <>
      <IconButton>
        <Badge
          badgeContent={quantityItems}
          showZero
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <LocalGroceryStoreOutlinedIcon
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            fontSize="large"
          />
        </Badge>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {cartListItems.length === 0 && (
          <Typography variant="caption" px={1}>
            Tu carrito está vacío
          </Typography>
        )}
        {cartListItems.map(
          ({ item: { imagen, titulo, id, precio }, quantity }, i) => (
            <>
              <MenuItem key={i} onClick={handleClose}>
                <img src={`/img/${imagen}`} alt="" />
                <Typography gutterBottom variant="caption">
                  {titulo}
                </Typography>
                <Typography gutterBottom variant="caption">
                  ${precio}
                </Typography>
                <Typography gutterBottom variant="caption">
                  Cantidad: {quantity}
                </Typography>
                <IconButton>
                  <DeleteOutlineOutlinedIcon onClick={() => removeItem(id)} />
                </IconButton>
              </MenuItem>
              <Button onClick={() => clear()}>Vaciar Carrito</Button>
            </>
          )
        )}
      </Menu>
    </>
  );
};

export default CartWidget;
