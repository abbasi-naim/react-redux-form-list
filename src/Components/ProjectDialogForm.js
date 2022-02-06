import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Users from "./Users";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        New Project +
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Project Name"
            type="text"
            fullWidth
            variant="standard"
            autoComplete="off"
          />
          <TextField
            margin="dense"
            id="description"
            label="Project Desc"
            type="text"
            fullWidth
            variant="standard"
            autoComplete="off"
          />
          <Users />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
