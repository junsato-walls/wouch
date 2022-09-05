import * as React from 'react';
import { useRef, useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog(props) {
  const {dialog} = props;
  const [open, setOpen] = useState(false);
  const renderFlgRef = useRef(false)

  useEffect(() => {
    console.log(renderFlgRef)
    if(renderFlgRef.current) {
        setOpen(true)
      } else {
        renderFlgRef.current = true
      }
  },[dialog])

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            メッセージ表示確認
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
          <Button onClick={handleClose} autoFocus>
            キャンセル
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
