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
//table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Test from './addEmp/addEmployee'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

// const StyledFab = styled(Fab)({
//   position: 'absolute',
//   zIndex: 1,
//   top: -30,
//   left: 0,
//   right: 0,
//   margin: '0 auto',
// });

function Employee() {
  const [open, setOpen] = useState(false);
  const baseURL = 'http://localhost:8000'
  // const StyledFab = styled(Fab)({
  //   position: 'absolute',
  //   zIndex: 1,
  //   top: -30,
  //   left: 0,
  //   right: 0,
  //   margin: '0 auto',
  // });
  const [ EmployeeData, setEmployeeData] = useState([])
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
    axios.get(baseURL + '/m_employees').then(res => {
      setEmployeeData(res.data)
      console.log(res.data)
    })
  }

  const test = () =>{
    setOpen('true')
  }
  return (
  <>
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static" color="primary" enableColorOnDark>
        <Toolbar label='Employee'/>
      </AppBar>
    </ThemeProvider>
    </Stack>

    <Container maxWidth="xls">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 900 }} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell align="center">社員番号</TableCell>
                <TableCell align="center">名前</TableCell>
                <TableCell align="center">フリガナ</TableCell>
                <TableCell align="center"></TableCell>
                {/* <TableCell align="center">残業時間</TableCell>
                <TableCell align="center">実働時間</TableCell>                 */}
              </TableRow>
            </TableHead>
            <TableBody>
              {EmployeeData.map((data) => (
                <TableRow>
                  <TableCell align="center">{data.m_employeestable.pension_num}</TableCell>
                  <TableCell align="center">{data.m_employeestable.name}</TableCell>
                  <TableCell align="center">{data.m_employeestable.name_kana}</TableCell>
                  <TableCell align="center"><Button onClick={test}>詳細</Button></TableCell>
                  {/* <TableCell align="center">{data.m_employeestable.orvertime}</TableCell>
                  <TableCell align="center">{data.m_employeestable.work_time}</TableCell>                 */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </Container>


      {/* <div><Button variant="contained" endIcon={<SendIcon />} onClick={test}>登録</Button></div> */}
      <Fab color="primary" aria-label="add" variant="extended" onClick={test}>
        <AddIcon />add employee
      </Fab>
      <Test open={open} setOpen={setOpen}/>
  </>
  )
    }
    export default Employee;

