import * as React from 'react';
import { useState, useEffect, useCallback, forwardRef,constructor } from "react";
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Toolbar from '../../components/toolbar'
import Dialog from '../../components/dialog'


function Admin(props) {
  const [dialog, setDialog] = useState(false);
  const toggle = () => {
    console.log(dialog)
    setDialog(prevState => !prevState)
  }

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });
  return (
  <>
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary" enableColorOnDark>
          <Toolbar label='Admin'/>
        </AppBar>
      </ThemeProvider>
    </Stack>
    <Button variant="outlined" onClick={toggle}>
    {/* <Button variant="outlined" > */}
        Open alert dialog
      </Button>
    <Dialog 
    dialog={dialog}
    />
  </>
  )
}
export default Admin;