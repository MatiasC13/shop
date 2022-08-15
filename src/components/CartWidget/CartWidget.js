import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Menu, MenuItem, Typography, Button, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import useCartList from "../../customHooks/useCartList";
import "./CartWidget.css";

const CartWidget = () => {
  const { cartListItems, removeItem } = useCartList();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const quantityItems = () =>
    cartListItems.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <Box>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Badge
          badgeContent={quantityItems()}
          showZero
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <LocalGroceryStoreOutlinedIcon fontSize="large" />
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
            <Box key={i} className="box-menu-item">
              <MenuItem onClick={handleClose}>
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
                <IconButton onClick={() => removeItem(id)}>
                  <DeleteOutlineOutlinedIcon />
                </IconButton>
              </MenuItem>
              <Button>
                <Link to="/cart" className="button-link">
                  Ver Carrito
                </Link>
              </Button>
            </Box>
          )
        )}
      </Menu>
    </Box>
  );
};

export default CartWidget;
