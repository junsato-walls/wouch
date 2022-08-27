import * as React from 'react';
function Payment() {
   
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
        <Toolbar label='payment'/>
      </AppBar>
    </ThemeProvider>
  </Stack>
  </>
  )
    }
    export default Payment;