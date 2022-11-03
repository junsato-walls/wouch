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
import Dialog from './attend_dialog'
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import ja from 'date-fns/locale/ja'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

function Attend() {
  const baseURL = 'http://localhost:8000'
  const [employeesData, setEmployeesData] = useState([])
  const [attendData, setAttendData] = useState([])
  const [open, setOpen] = useState(false);
  const [value, setValue] = React.useState(dayjs('2022-10-01'));
  const [empName, setEmpName] = React.useState('');
  const [empNum,setEmpNum] = React.useState('');  
  
  const handleChange = (event) => {
    setEmpName(event.target.value);
    let valuess = employeesData.filter((emp)=>{
      return emp.m_employeestable.id == event.target.value
    });
    if (valuess.length){
      setEmpNum(valuess[0].m_employeestable.employee_num)
    }
  };

  const valueChange = (event) => {
    setEmpNum(event.target.value);
    let valuess = employeesData.filter((emp)=>{
      return emp.m_employeestable.employee_num == event.target.value
    });
    if (valuess.length){
      setEmpName(valuess[0].m_employeestable.id)
    }
  };
  
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

  useEffect(() => {
    GetEmpoyees()
  }, [])

  const GetEmpoyees = () => { 
    axios.get(baseURL + '/m_employees').then(res => {
      setEmployeesData(res.data)
      console.log(res.data)
    })
  }

  //勤怠データ取得
  const SearchAttend = () => {
    let param = '/ad005_01/?employee_id=' + empName +'&YYYY=' + value.format("YYYY") +'&MM=' + value.format("MM")
    // let param = '/ad005_01/?employee_id=01&YYYY=2022&MM=8'
    if (empName){
      axios.get(baseURL + param).then(res => {
        setAttendData(res.data)
        console.log(res.data)
      })  
    }
  }

  const UpdateAttend = (event, name) =>{
    setOpen(true)
    console.log(name)
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
      <FormControl sx={{ m: 1, minWidth: 200 }} variant="standard">
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <TextField
        id="input-with-icon-textfield"
        label="社員番号"
        onChange={valueChange}
        value={empNum}
      />
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 200 }} >
        <InputLabel id="demo-simple-select-label">名前</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={empName}
          label="Name"
          onChange={handleChange}
        >
          {employeesData.map((emp, i) =>
              <MenuItem value={emp.m_employeestable.id}>{emp.m_employeestable.name}</MenuItem>
            )}
        </Select>
      </FormControl>

      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
      <FormControl sx={{ m: 1, minWidth: 100 }} >
      <DatePicker
          disableFuture
          label="年月"
          openTo="year"
          views={['year','month']}
          value={value}
          onChange={(newValue) => {
            setValue(dayjs(newValue));
          }}
          inputFormat='yyyy年MM月'
          mask='____年__月'
          leftArrowButtonText="前月を表示"
          rightArrowButtonText="次月を表示"
          toolbarTitle="日付選択"
          cancelText="キャンセル"
          okText="選択"
          toolbarFormat="yyyy年MM月dd日"
          renderInput={(params) => 
          <TextField {...params}
          />}
        />
        </FormControl>
    </LocalizationProvider>
    <FormControl sx={{ m: 1, minWidth: 100 }} >
      <Button variant="contained" endIcon={<SendIcon />} onClick={SearchAttend}>検索</Button>
    </FormControl>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 900 }} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell align="center">日付</TableCell>
                <TableCell align="center">曜日</TableCell>
                <TableCell align="center">勤務状態</TableCell>
                <TableCell align="center">出勤時間</TableCell>
                <TableCell align="center">休憩時間</TableCell>
                <TableCell align="center">退勤時間</TableCell>
                <TableCell align="center">残業時間</TableCell>
                <TableCell align="center">実働時間</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {attendData.map((data) => (
                <TableRow
                // onClick={(event) => test(event,data.dd)}
                // key={data.dd}
                hover
                >
                  <TableCell align="center">{data.dd}</TableCell>
                  <TableCell align="center">{data.dow}</TableCell>
                  <TableCell align="center">出勤</TableCell>
                  <TableCell align="center">{data.round_work_in_time}</TableCell>
                  <TableCell align="center">{data.rest}</TableCell>
                  <TableCell align="center">{data.round_work_out_time}</TableCell>
                  <TableCell align="center">1:00</TableCell>
                  <TableCell align="center">8:00</TableCell>
                  <TableCell align="center">
                    <Button variant="contained" onClick={(event) => UpdateAttend(event,data.dd)}>編集</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell align="center">合計</TableCell>
                <TableCell align="center">30h</TableCell>
                <TableCell align="center">180h</TableCell>
            </TableRow>
          </Table>
        </TableContainer>
    </Container>
    <Dialog  open={open} setOpen={setOpen} ymd={"2022/10/10"} empNum={"w001"} name={"神谷太郎"}/>
  </>
  )
    }
    export default Attend;

    