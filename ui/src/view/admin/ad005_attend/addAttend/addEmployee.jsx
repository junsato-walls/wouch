import React from 'react'
import { useState, useImperativeHandle, useEffect, forwardRef } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './addressform';

const steps = ['社員情報', '各種保険', '契約情報'];
const theme = createTheme();

const AlertDialog = (props) => {
  const {open,setOpen,ym,empNum,name,empId,attend } = props

  const [activeStep, setActiveStep] = React.useState(0);
  const [workInTimeH, setWorkInTimeH] = React.useState("09");
  const [workInTimeM, setWorkInTimeM] = React.useState("00");
  const [workOutTimeH, setWorkOutTimeH] = React.useState("18");
  const [workOutTimeM, setWorkOutTimeM] = React.useState("00");
  const [restH, setRestH] = React.useState("01");
  const [restM, setRestM] = React.useState("00");

  const valueChange = (event) => {
    // console.log(event.target.id)
    let value = ('0' + event.target.value.slice(-2)).substring( 1, 3 )
    // console.log((event.target.id).substr(-1,1))
    if (event.target.id.substr(-1,1) == "M" && Number(value) >= 60){
      return
    }
    
    switch (event.target.id) {
      case "workInTimeH":
        setWorkInTimeH(value)
        break;
      case "workInTimeM":
        setWorkInTimeM(value)
        break;
      case "workOutTimeH":
        setWorkOutTimeH(value)
        break;
      case "workOutTimeM":
        setWorkOutTimeM(value)
        break;
      case "restH":
        setRestH(value)
        break;
      case "restM":
        setRestM(value)
        break;
    }
  };

  useEffect(() => {
    if (open == 'true') {
      setActiveStep(0);
    }
  }, [open])

  const dialogclose = () => {
    setOpen(false);
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={dialogclose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
            <Typography component="h1" variant="h4" align="center">
              {ym.format("YYYY年MM月") + attend.day + "日" + "(" + attend.day_of_week + ")"}
            </Typography>
            <Grid item xs={12} sm={12}>
              <div style={{ marginTop: '5ch' }}>社員番号</div>
              <FormControl sx={{ m: 1, minWidth: '30ch' }} >
                <TextField id="standard-basic" value={empNum} variant="standard" />
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={12}>
              <div>名前</div>
              <FormControl sx={{ m: 1, minWidth: '30ch' }} >
                <TextField id="standard-basic" value={name} variant="standard" />
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={12}>
              <div>出勤時間</div>
              <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '10ch' }}>
                <Input
                  id="workInTimeH"
                  type="number"
                  value={workInTimeH}
                  onChange={valueChange}
                  endAdornment={<InputAdornment position="end">時</InputAdornment>}
                  aria-describedby="standard-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                />
                {/* <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText> */}
              </FormControl>
              <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '10ch' }}>
                <Input
                  id="workInTimeM"
                  type="number"
                  value={workInTimeM}
                  onChange={valueChange}
                  endAdornment={<InputAdornment position="end">分</InputAdornment>}
                  aria-describedby="standard-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                />
                {/* <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText> */}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
              <div>退勤時間</div>
              <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '10ch' }}>
                <Input
                  id="workOutTimeH"
                  type="number"
                  value={workOutTimeH}
                  onChange={valueChange}
                  endAdornment={<InputAdornment position="end">時</InputAdornment>}
                  aria-describedby="standard-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                />
                {/* <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText> */}
              </FormControl>
              <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '10ch' }}>
                <Input
                  id="workOutTimeM"
                  type="number"
                  value={workOutTimeM}
                  onChange={valueChange}
                  endAdornment={<InputAdornment position="end">分</InputAdornment>}
                  aria-describedby="standard-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                />
                {/* <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText> */}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
              <div>休憩時間</div>
              <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '10ch' }}>
                <Input
                  id="restH"
                  type="number"
                  value={restH}
                  onChange={valueChange}
                  endAdornment={<InputAdornment position="end">時間</InputAdornment>}
                  aria-describedby="standard-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                />
                {/* <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText> */}
              </FormControl>
              <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '10ch' }}>
                <Input
                  id="restM"
                  type="number"
                  value={restM}
                  onChange={valueChange}
                  endAdornment={<InputAdornment position="end">分</InputAdornment>}
                  aria-describedby="standard-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                />
                {/* <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText> */}
              </FormControl>
            </Grid>
          </Container>
        </DialogContent>
        <DialogActions>
          <Button onClick={dialogclose} sx={{ mt: 3, ml: 1 }} variant="contained">登録</Button>
          <Button onClick={dialogclose} sx={{ mt: 3, ml: 1 }}>キャンセル</Button>
        </DialogActions>
      </Dialog>

    </>
  )
}
export default forwardRef(AlertDialog)