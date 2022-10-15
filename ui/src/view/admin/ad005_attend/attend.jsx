import * as React from 'react';
import { useState, useEffect, useRef } from "react";
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Toolbar from '../../../components/toolbar'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import axios from "axios";
import Typography from '@mui/material/Typography';
// search
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
//table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

import Test from './attend_dialog'

function Attend() {
  const baseURL = 'http://localhost:8000'
  const [attendData, setAttendData] = useState([])
  const [open, setOpen] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

  useEffect(() => {
    GetAttend()
  }, [])

  //勤怠データ取得
  const GetAttend = () => {
    axios.get(baseURL + '/t_attends').then(res => {
      setAttendData(res.data)
      console.log(res.data)
    })
  }
  //
  const test = () => {
    console.log('test')
    setOpen('true')
  }
  return (
  <>
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static" color="primary" enableColorOnDark>
        <Toolbar label='Atend'/>
      </AppBar>
    </ThemeProvider>
  </Stack>
    <Container maxWidth="xls">
      <TextField
        id="input-with-icon-textfield"
        label="社員番号"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />Search
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <TextField
        id="input-with-icon-textfield"
        label="名前"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />Search
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <TextField
        id="input-with-icon-textfield"
        label="年"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />Search
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <TextField
        id="input-with-icon-textfield"
        label="月"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />Search
            </InputAdornment>
          ),
        }}
        variant="standard"
      />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 900 }} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell align="center">名前</TableCell>
                <TableCell align="center">出勤時間</TableCell>
                <TableCell align="center">休憩時間</TableCell>
                <TableCell align="center">退勤時間</TableCell>
                <TableCell align="center">残業時間</TableCell>
                <TableCell align="center">実働時間</TableCell>                
              </TableRow>
            </TableHead>
            <TableBody>
              {attendData.map((data) => (
                <TableRow>
                  <TableCell align="center">{data.m_employeestable.name}</TableCell>
                  <TableCell align="center">{data.t_attendstable.work_in}</TableCell>
                  <TableCell align="center">{data.t_attendstable.rest}</TableCell>
                  <TableCell align="center">{data.t_attendstable.work_out}</TableCell>
                  <TableCell align="center">{data.t_attendstable.orvertime}</TableCell>
                  <TableCell align="center">{data.t_attendstable.work_time}</TableCell>                
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </Container>

      <div><TextField id="outlined-basic" label="勤務ステータス" variant="outlined"/></div>
      <div><TextField id="outlined-basic" label="出勤時間" variant="outlined"/></div>
      <div><TextField id="outlined-basic" label="退勤時間" variant="outlined"/></div>
      <div><Button /></div>
      <div>
        <Button variant="contained" endIcon={<SendIcon />} >更新</Button>
        <Button variant="contained" endIcon={<SendIcon />} onClick={test} >追加</Button>
      </div>
      <Test open={open} setOpen={setOpen}/>

  </>
  )
    }
    export default Attend;