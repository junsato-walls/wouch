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
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
//table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import ja from 'date-fns/locale/ja'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

function Vacation() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

  const baseURL = 'http://localhost:8000'
  const [leaveRequest,setLeaveRequest] = React.useState([]);  

  useEffect(() => {
    GetEmpoyees()
  }, [])

  const GetEmpoyees = () => { 
    axios.get(baseURL + '/t_leaverequest').then(res => {
      setLeaveRequest(res.data)
      console.log(res.data)
    })
  }

  const leavePlus = (event, value) =>{
    // console.log('testdata:'+ value)
    console.log(value)
  }
  const leaveMinus = (event, value) =>{
    // console.log('testdata:'+ value)
    console.log(value)
  }

  return (
  <>
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static" color="primary" enableColorOnDark>
        <Toolbar label='有給管理'/>
      </AppBar>
    </ThemeProvider>
  </Stack>
  <TableContainer component={Paper}>
          <Table sx={{ minWidth: 900 }} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell align="center">社員番号</TableCell>
                <TableCell align="center">名前</TableCell>
                <TableCell align="center">残日数</TableCell>
                <TableCell align="center">MAX日数</TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leaveRequest.map((data) => (
                <TableRow
                hover
                >
                  <TableCell align="center">{data.m_employeestable.employee_num}</TableCell>
                  <TableCell align="center">{data.m_employeestable.name}</TableCell>
                  <TableCell align="center">{data.t_leaverequesttable.target_date}</TableCell>
                  <TableCell align="center">{data.t_leaverequesttable.request_date}</TableCell>
                  <TableCell align="center">
                    <Button variant="contained" onClick={(event) => leavePlus(event,data.t_leaverequesttable.id)}>＋</Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button variant="contained" onClick={(event) => leaveMinus(event,data.t_leaverequesttable.id)}>ー</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    
  </>
  )}
  export default Vacation;