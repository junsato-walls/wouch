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
import Dialog from '../../../components/dialog'

function Vacation() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });
  const baseURL = process.env.REACT_APP_IP_PORT
  // const baseURL = 'http://localhost:8000'
  const [leaveRequest,setLeaveRequest] = React.useState([]);  

  useEffect(() => {
    GetEmpoyees()
  }, [])

  const childRef = useRef()
  const handleSubmit = (value) => {
    childRef.current.MessageOpen(value)
  }

  const GetEmpoyees = () => { 
    axios.get(baseURL + '/ad012_01').then(res => {
      setLeaveRequest(res.data)
      console.log(res.data)
    })
  }

// 有給増やす 
  const leavePlus = (event, value) =>{
    axios.put(baseURL + "/leave_plus/", {
      employee_id: value.employee_id
    }).then((res) => {
      setTimeout(() => {
        GetEmpoyees()
      }, 100);
    }).catch((res)=>{
      if (res.response.status == 400){
        handleSubmit(res.response.data.detail)   
      }    
    })
    console.log(value)
  }
// 有給減らす 
  const leaveMinus = (event, value) =>{
    axios.put(baseURL + "/leave_minus/", {
      employee_id: value.employee_id  
    }).then((res) => {
      setTimeout(() => {
        GetEmpoyees()
    }, 100);
    }).catch((res)=>{
      if (res.response.status == 400){
        handleSubmit(res.response.data.detail)   
      }    
    })

    console.log(value.employee_id)
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
                  <TableCell align="center">{data.employee_num}</TableCell>
                  <TableCell align="center">{data.name}</TableCell>
                  <TableCell align="center">{data.remain_day}</TableCell>
                  <TableCell align="center">{data.add_day}</TableCell>
                  <TableCell align="center">
                    <Button variant="contained" onClick={(event) => leavePlus(event,data)}>＋</Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button variant="contained" onClick={(event) => leaveMinus(event,data)}>ー</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Dialog ref={childRef} />
  </>
  )}
  export default Vacation;