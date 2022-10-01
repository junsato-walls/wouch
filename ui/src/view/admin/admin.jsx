import * as React from 'react';
import { useState, useEffect, useRef } from "react";
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Toolbar from '../../components/toolbar'
import Test from '../../components/dialog'

function Admin(props) {
  const childRef = useRef()
  const handleSubmit = () => {
            childRef.current.MessageOpen('ad999-q999')
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

    <Button variant="outlined" onClick={() => {handleSubmit()}}>
    <Test ref={childRef}></Test>
    ダイアログオープン
    </Button>

  </>
  )
}
export default Admin;