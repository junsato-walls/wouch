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
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

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

const AttendDialog = (props) => {
  const {open,setOpen } = props

  const [activeStep, setActiveStep] = React.useState(0);
  const [workInTimeH, setWorkInTimeH] = React.useState("09");
  const [workInTimeM, setWorkInTimeM] = React.useState("00");
  const [workOutTimeH, setWorkOutTimeH] = React.useState("18");
  const [workOutTimeM, setWorkOutTimeM] = React.useState("00");
  const [restH, setRestH] = React.useState("01");
  const [restM, setRestM] = React.useState("00");
  const [workingSt, setWorkingSt] = React.useState(1);
  const working_st = [{id:1,value:'出勤'},
                      {id:2,value:'有給'},
                      {id:3,value:'遅刻'},
                      {id:4,value:'早退'},
                      {id:5,value:'欠勤'},
                      {id:6,value:'特別休暇'}
                      ]
  const handleChange = (event) => {
    setWorkingSt(event.target.value);
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
          <Container component="main" Width="300ch" sx={{ mb: 4 }}>
            <Typography component="h1" variant="h4" align="center">
            神谷太郎
            </Typography>
            <Grid item xs={12} sm={12}>
              <div style={{ marginTop: '5ch' }}>社員番号</div>
              <FormControl sx={{ m: 1, minWidth: '30ch' }} >
                <TextField id="standard-basic"  variant="standard" />
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={12}>
              <div>名前</div>
              <FormControl sx={{ m: 1, minWidth: '30ch' }} >
                <TextField id="standard-basic"  variant="standard" />
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={12}>
              <div>支払日</div>
              <FormControl sx={{ m: 1, minWidth: '30ch' }} >
                <TextField id="standard-basic"  variant="standard" />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
              <div>支払給与</div>
              <FormControl sx={{ m: 1, minWidth: '30ch' }} >
                <TextField id="standard-basic"  variant="standard" />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
              <div>基本給</div>
              <FormControl sx={{ m: 1, minWidth: '30ch' }} >
                <TextField id="standard-basic"  variant="standard" />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
              <div>時間外労働手当</div>
              <FormControl sx={{ m: 1, minWidth: '30ch' }} >
                <TextField id="standard-basic"  variant="standard" />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
              <div>深夜手当</div>
              <FormControl sx={{ m: 1, minWidth: '30ch' }} >
                <TextField id="standard-basic"  variant="standard" />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
              <div>休日手当</div>
              <FormControl sx={{ m: 1, minWidth: '30ch' }} >
                <TextField id="standard-basic"  variant="standard" />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
              <div>通勤手当</div>
              <FormControl sx={{ m: 1, minWidth: '30ch' }} >
                <TextField id="standard-basic"  variant="standard" />
              </FormControl>
            </Grid>



            <Grid item xs={12} sm={12}>
              <div>出勤時間</div>
              <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '10ch' }}>
                <Input
                  id="workInTimeH"
                  type="number"
                  // value={workInTimeH}
                  // onChange={valueChange}
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
                  // value={workInTimeM}
                  // onChange={valueChange}
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
export default AttendDialog
// export default forwardRef(AttendDialog)