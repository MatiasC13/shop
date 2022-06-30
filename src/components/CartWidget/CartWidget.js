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

  const quantityItems = () => {
    let count = 0;
    cartListItems.forEach((i) => {
      count += i.quantity;
    });
    return count;
  };

  return (
    <>
      <IconButton>
        <Badge
          badgeContent={quantityItems()}
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
        {cartListItems.map((item, i) => {
          const { imagen, titulo, precio } = item.item;
          return (
            <>
              <MenuItem key={i} onClick={handleClose}>
                <img src={`/img/${imagen}`} alt="" />
                <Typography gutterBottom variant="caption">
                  {titulo}
                </Typography>
                <Typography gutterBottom variant="caption">
                  ${precio}
                </Typography>
                <IconButton>
                  <DeleteOutlineOutlinedIcon onClick={() => removeItem(item)} />
                </IconButton>
              </MenuItem>
              <Button onClick={() => clear()}>Vaciar Carrito</Button>
            </>
          );
        })}
      </Menu>
    </>
  );
};

export default CartWidget;
