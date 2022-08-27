import * as React from 'react';
function Calendar() {
   
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
        <Toolbar label='Calendar'/>
      </AppBar>
    </ThemeProvider>
  </Stack>
  </>
  )
    }
    export default Calendar;