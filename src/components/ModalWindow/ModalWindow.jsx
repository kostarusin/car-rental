import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import style from "./ModalWindow.module.css";
import Modal from "@mui/material/Modal";

const ModalWindow = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-ƒdescription"
      >
        <Box className={style.modalBackdrop}>
          <button
            type="button"
            className={style.closeBtn}
            onClick={handleClose}
          ></button>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalWindow;
