import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { addProduct } from "../store/actions/actions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import { useDispatch } from "react-redux";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  const [product, setNameOfProduct] = React.useState("");
  const handleChange = (event) => {
    setNameOfProduct(event.target.value);
  };

  const onAgreeClick = (event) => {
    dispatch(addProduct(product));
    handleClose();
    setNameOfProduct("");
  };
  return (
    <div>
      <Fab
        color="primary"
        aria-label="add"
        size="large"
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Add a new product on your list"}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="normal"
            id="product"
            label="e.g. Beer"
            fullWidth
            onChange={handleChange}
            value={product}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={onAgreeClick} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
