import * as React from 'react';
import { useState, useImperativeHandle, useEffect, forwardRef } from "react";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuDialog from './menu';


function CostomeToolbar(props) {
  const { label} = props;
  const [open, setOpen] = useState(false);
  const menuOpen = () => {
    setOpen(true)
  }
  return (
    <>
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={menuOpen} >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
       {label}
      </Typography>
    </Toolbar>
    <MenuDialog open={open} setOpen={setOpen} />
    </>
  )
}
export default CostomeToolbar;