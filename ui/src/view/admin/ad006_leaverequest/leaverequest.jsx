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
import Test from '../../../components/dialog'

function Vacation() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });
  const childRef = useRef()

  const handleSubmit = (value) => {
            childRef.current.MessageOpen(value)
        }

  const baseURL = 'http://localhost:8000'
  const [leaveRequest,setLeaveRequest] = React.useState([]);  

  useEffect(() => {
    GetEmpoyees()
  }, [])

  const GetEmpoyees = () => { 
    axios.get(baseURL + '/ad006_01').then(res => {
      setLeaveRequest(res.data)
      console.log(res.data)
    })
  }
//承認
  const leaveOK = (event, value) =>{    
    axios.put(baseURL + "/ad006_01/", {
      id: value.id,
      subm_st: 1
    }).then((res) => {

    })
    axios.put(baseURL + "/leave_minus", {
      employee_id: value.employee_id
    }).then((res) => {
      setTimeout(() => {
        GetEmpoyees()
    }, 100);
    })
    handleSubmit('ad006-i001')
    console.log(value)
  }

//否認
  const leaveNG = (event, value) =>{
    axios.put(baseURL + "/ad006_01/", {
      id: value.id,
      subm_st: "2"
    }).then((res) => {
      setTimeout(() => {
        GetEmpoyees()
      }, 100);
    })

    handleSubmit('ad006-i002')
    console.log(value)
  }

  return (
  <>
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static" color="primary" enableColorOnDark>
        <Toolbar label='有給申請管理'/>
      </AppBar>
    </ThemeProvider>
  </Stack>
  <TableContainer component={Paper}>
          <Table sx={{ minWidth: 900 }} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell align="center">社員番号</TableCell>
                <TableCell align="center">名前</TableCell>
                <TableCell align="center">有給取得日</TableCell>
                <TableCell align="center">申請日</TableCell>
                <TableCell align="center">承認</TableCell>
                <TableCell align="center">否認</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leaveRequest.map((data) => (
                <TableRow
                hover
                // onClick={(event) => handleClick(event, row.name)}
                // role="checkbox"
                // aria-checked={isItemSelected}
                // tabIndex={-1}
                // key={row.name}
                // selected={isItemSelected}
                >
                  <TableCell align="center">{data.m_employeestable.employee_num}</TableCell>
                  <TableCell align="center">{data.m_employeestable.name}</TableCell>
                  <TableCell align="center">{data.t_leaverequesttable.target_date}</TableCell>
                  <TableCell align="center">{data.t_leaverequesttable.request_date}</TableCell>
                  <TableCell align="center">
                    <Button variant="contained" onClick={(event) => leaveOK(event,data.t_leaverequesttable)}>承認</Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button variant="contained" onClick={(event) => leaveNG(event,data.t_leaverequesttable)}>否認</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Test ref={childRef} />
  </>
  )}
  export default Vacation;