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
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import dayjs from 'dayjs';

function Employee() {
  const [open, setOpen] = useState(false);
  // const baseURL = 'http://localhost:8000'
  const baseURL = process.env.REACT_APP_IP_PORT
  const [ EmployeeData, setEmployeeData] = useState([])
  const [updateData,setUpdateData] = useState("")
  const [dialogTitle,setDialogTitle] = React.useState('')
  const [exitCompany,setExitCompany] = React.useState(1)
  
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
  useEffect(()=>{
    GetAttend()
  },[open])
  useEffect(()=>{
    GetAttend()
  },[exitCompany])

  //従業員データ取得
  const GetAttend = () => {
    axios.get(baseURL + '/m_employees').then(res => {
      setEmployeeData(res.data)
      if (exitCompany == 1){
        const res_filter = res.data.filter(data =>{
          return data.m_employeestable.exit_company == null
        })
        setEmployeeData(res_filter)
      }else if(exitCompany == 2) {
        const res_filter = res.data.filter(data =>{
          return data.m_employeestable.exit_company != null
        })
        setEmployeeData(res_filter)
      }
    })
  }

  // 退職者
  const Change_exitCompany = (event) =>{
    setExitCompany(event.target.value)
  }

  const AddAttend = () =>{
    setDialogTitle({title:'従業員追加', mode:2})        
    setUpdateData({
      m_employeestable:{
        address_city: "",
        address_other: "",
        address_pref: "",
        birthday: null,
        dependent: null,
        empl_insur_insur_qual_acq_date: null,
        empl_insur_insur_qual_lost_date: null,
        empl_insur_insured_num: "",
        employee_num: "",
        end: "",
        exit_company: null,
        former_job: "",
        health_insur_num: "",
        id: "",
        idm: "",
        in_company: dayjs(new Date()).format("YYYY-MM-DD"),
        memo: "",
        mynumber: "",
        name: "",
        name_kana: "",
        nationality: "",
        pension_num: "",
        post_code: "",
        sex: null,
        shift_id: 1,
        soc_insur_insur_qual_acq_date: null,
        soc_insur_insur_qual_lost_date: null,
        start: "",
        tell: "",
        weekly_work_time: null
      },m_paymentstable:{
        base: null,
        care_insur: null,
        commuting_pay: null,
        employee_id: null,
        health_insur: "",
        income_tax: null,
        inhabitant_tax: null,
        pension_insur: null,
        salary_type: 1,
        std_monthly_compensation: null
      }
    })
    setOpen(true)
  }
  
  const UpdateAttend = (event, name) =>{
    setDialogTitle({title:'従業員編集', mode:1})
    setUpdateData(name)
    setOpen(true)
    console.log(name)
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
          <Table sx={{ minWidth: 600 }} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell align="center">社員番号</TableCell>
                <TableCell align="center">名前</TableCell>
                <TableCell align="center">フリガナ</TableCell>
                <TableCell align="center">
                <FormControl variant="standard" sx={{minWidth: 200}} size="small">
                  <InputLabel id="sex-select-label" labelPlacement="top" shrink>退職者</InputLabel>
                    <Select
                      labelId="sex-select-label"
                      id="sex-select"
                      value={exitCompany}
                      onChange={(event) => Change_exitCompany(event)}
                    >
                    <MenuItem value={1}>在籍者のみ</MenuItem>
                    <MenuItem value={2}>退職者のみ</MenuItem>
                    <MenuItem value={3}>全て</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {EmployeeData.map((data) => (
                <TableRow>
                  <TableCell align="center">{data.m_employeestable.employee_num}</TableCell>
                  <TableCell align="center">{data.m_employeestable.name}</TableCell>
                  <TableCell align="center">{data.m_employeestable.name_kana}</TableCell>
                  <TableCell align="center">
                  <Button variant="contained" onClick={(event) => UpdateAttend(event,data)}>編集</Button>
                  </TableCell>
                </TableRow>

              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </Container>
      <Fab color="primary" aria-label="add" variant="extended" onClick={AddAttend}>
        <AddIcon />add employee
      </Fab>
      <Test open={open} setOpen={setOpen} empData={updateData} setEmpData={setUpdateData} dialogTitle={dialogTitle}/>
  </>
  )
    }
    export default Employee;