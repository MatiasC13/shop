import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const ModalCart = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        {/* <Dialog> */}
        <DialogTitle>Completa tus datos</DialogTitle>
        <DialogContent>
          <DialogContentText>Nombre:</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            // label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          <DialogContentText>Teléfono</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            // label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          <DialogContentText>Email:</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            // label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Cancel</Button> */}
          {/* <Button onClick={handleClose}>Subscribe</Button> */}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ModalCart;
