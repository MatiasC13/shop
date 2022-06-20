import IconButton from "@mui/material/IconButton";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import { Badge } from "@mui/material";

const CartWidget = () => {
  return (
    <IconButton>
      <Badge
        badgeContent={0}
        showZero
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <LocalGroceryStoreOutlinedIcon fontSize="large" />
      </Badge>
    </IconButton>
  );
};

export default CartWidget;
