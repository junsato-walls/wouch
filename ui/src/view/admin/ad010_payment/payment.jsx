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
import AddAttend from './attend_dialog'

function Payment() {
  const baseURL = 'http://localhost:8000'
  const [employeesData, setEmployeesData] = useState([])
  const [attendData, setAttendData] = useState([])
  const [open, setOpen] = useState(false);
  const [value, setValue] = React.useState(dayjs('2022-10-01'));
  const [empId,setEmpId] = React.useState('');
  const [empName, setEmpName] = React.useState('');
  const [empNum,setEmpNum] = React.useState('');
  const [overtime,setOvertime] = React.useState('0h');
  const [worktime,setWorktime] = React.useState('0h');  
  const [selectedrow,setSelectedRow] = React.useState([]);

  const working_st ={1: '出勤',2: '有給',3: '遅刻',4: '早退',5: '欠勤',6:'特別休暇'} 

  const handleChange = (event) => {
    setEmpId(event.target.value);
    let valuess = employeesData.filter((emp)=>{
      return emp.m_employeestable.id == event.target.value
    });
    setEmpName(valuess[0].m_employeestable.name)
    if (valuess.length){
      setEmpNum(valuess[0].m_employeestable.employee_num)
    }
  };

  const valueChange = (event) => {
    setEmpNum(event.target.value);
    let valuess = employeesData.filter((emp)=>{
      return emp.m_employeestable.employee_num == event.target.value
    });
    setEmpName(valuess[0].m_employeestable.name)
    if (valuess.length){
      setEmpId(valuess[0].m_employeestable.id)
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

  useEffect(() => {
    if (attendData.length != 0)  {
      let over = 0
      let work = 0
      attendData.map((data) => (
        over = over + data.overtime
      ))
      attendData.map((data) => (
        work = work + data.worktime      
      ))
      setWorktime(work + 'h')
      setOvertime(over + 'h')
    }
  }, [attendData])

  const GetEmpoyees = () => { 
    axios.get(baseURL + '/m_employees').then(res => {
      setEmployeesData(res.data)
      console.log(res.data)
    })
  }

  //勤怠データ取得
  const SearchAttend = () => {
    let param = '/t_payments/?employee_id=' + empId
    if (empName){
      axios.get(baseURL + param).then(res => {
        setAttendData(res.data)
        console.log(res.data)
      })  
    }
  }

  const UpdateAttend = (event, name) =>{
    setOpen(true)
    console.log(value.format("YYYY年MM月"))
    console.log(attendData[name -1])
    // console.log(value.)
    setSelectedRow(attendData[name - 1])

  }
  return (
  <>
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static" color="primary" enableColorOnDark>
        <Toolbar label='Payment'/>
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
          value={empId}
          onChange={handleChange}
        >
          {employeesData.map((emp, i) =>
              <MenuItem value={emp.m_employeestable.id}>{emp.m_employeestable.name}</MenuItem>
            )}
        </Select>
      </FormControl>

    <FormControl sx={{ m: 1, minWidth: 100 }} >
      <Button variant="contained" endIcon={<SendIcon />} onClick={SearchAttend}>検索</Button>
    </FormControl>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 900 }} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell align="center">支払日</TableCell>
                <TableCell align="center">支払い給与</TableCell>                
                <TableCell align="center">基本給</TableCell>
                <TableCell align="center">時間外労働手当</TableCell>
                <TableCell align="center">深夜手当</TableCell>
                <TableCell align="center">休日手当</TableCell>
                <TableCell align="center">通勤手当</TableCell>
                <TableCell align="center">健康保険料</TableCell>
                <TableCell align="center">介護保険料</TableCell>
                <TableCell align="center">厚生年金保険料</TableCell>
                <TableCell align="center">雇用保険料</TableCell>
                <TableCell align="center">所得税</TableCell>
                <TableCell align="center">住民税</TableCell>
                <TableCell align="center">源泉徴収</TableCell>
                <TableCell align="center">調整手当</TableCell>
                <TableCell align="center">その他</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {attendData.map((data) => (
                <TableRow
                // onClick={(event) => test(event,data.dd)}
                // key={data.dd}
                hover
                >               
                <TableCell align="center">{data.payment_date}</TableCell>
                <TableCell align="center">{data.income}</TableCell>                
                <TableCell align="center">{data.base}</TableCell>
                <TableCell align="center">{data.overtime_pay}</TableCell>
                <TableCell align="center">{data.nighttime_pay}</TableCell>
                <TableCell align="center">{data.holiday_pay}</TableCell>
                <TableCell align="center">{data.commuting_pay}</TableCell>
                <TableCell align="center">{data.health_insur}</TableCell>
                <TableCell align="center">{data.care_insur}</TableCell>
                <TableCell align="center">{data.pension_insur}</TableCell>
                <TableCell align="center">{data.employee_insur}</TableCell>
                <TableCell align="center">{data.income_tax}</TableCell>
                <TableCell align="center">{data.inhabitant_tax}</TableCell>
                <TableCell align="center">{data.withholding_tax}</TableCell>
                <TableCell align="center">{data.adj_pay}</TableCell>
                <TableCell align="center">{data.others}</TableCell>
                  <TableCell align="center">
                    <Button variant="contained" onClick={(event) => UpdateAttend(event,data.day)}>編集</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </Container>
    <AddAttend open={open} setOpen={setOpen} ym={value} empNum={empNum} name={empName} empId={empId} attend={selectedrow} />
  </>
  )
    }
    export default Payment;
