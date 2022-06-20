import { useState } from "react";
import "./MenuCategories.css";
import { Button, Menu, MenuItem } from "@mui/material";

const MenuCategories = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const categories = ["LP", "EP"];

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        disableRipple
        // style={{ backgroundColor: "transparent" }}
        variant="text"
        color="inherit"
      >
        Categorías
      </Button>
      <Menu
        id="basic-menu"
        className="menu-categories"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {categories.map((cat, i) => {
          return (
            <MenuItem key={i} onClick={handleClose}>
              {cat}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default MenuCategories;
