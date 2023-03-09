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
// search
import Select from '@mui/material/Select';
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
import AddPayment from './addPayment/addPayment'
// import AddPayment from './payment_dialog'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
// import AddPayment from './addPayment/addEmployee'
import { CSVLink, CSVDownload } from "react-csv";

function Payment() {
  const baseURL = process.env.REACT_APP_IP_PORT
  // const baseURL = 'http://localhost:8000'
  const [employeesData, setEmployeesData] = useState([])
  const [attendData, setAttendData] = useState([])
  const [paymentData, setPaymentData] = useState([])
  const [open, setOpen] = useState(false);
  const [empId, setEmpId] = React.useState('');
  const [empName, setEmpName] = React.useState('');
  const [empNum, setEmpNum] = React.useState('');
  const [selectedrow, setSelectedRow] = React.useState([]);
  // const headers = ["支払日", "支払い給与", "基本給", "時間外労働手当", "深夜手当", "休日手当", "通勤手当", "健康保険料", "介護保険料", "厚生年金保険料", "雇用保険料", "所得税", "住民税", "源泉徴収", "調整手当", "その他"]
  const headers = ["支払日", "労働日数", "労働時間数", "時間外労働時間数", "休日労働時間数", "深夜労働時間数", "基本給",
    "時間外労働手当", "休日労働手当", "深夜労働手当", "通勤手当", "調整手当",
    "その他手当て1", "その他手当て2", "その他手当て3", "その他手当て4", "その他手当て5", "支給合計",
    "健康保険料", "介護保険料", "厚生年金保険料", "雇用保険料", "所得税", "住民税", "その他控除", "控除合計", "差引支給合計"]

  const [outputData, setOutputData] = React.useState([])
  const [dialogTitle, setDialogTitle] = React.useState('')
  const handleChange = (event) => {
    setEmpId(event.target.value);
    let valuess = employeesData.filter((emp) => {
      return emp.m_employeestable.id == event.target.value
    });
    setEmpName(valuess[0].m_employeestable.name)
    if (valuess.length) {
      setEmpNum(valuess[0].m_employeestable.employee_num)
    }
  };

  const valueChange = (event) => {
    setEmpNum(event.target.value);
    let valuess = employeesData.filter((emp) => {
      return emp.m_employeestable.employee_num == event.target.value
    });
    if (valuess.length) {
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
    GetPayments()
  }, [])

  useEffect(() => {
    console.log('closeDialog!!')
    SearchAttend()
  }, [open])

  useEffect(() => {
    if (attendData.length != 0) {
      let over = 0
      let work = 0
      attendData.map((data) => (
        over = over + data.overtime
      ))
      attendData.map((data) => (
        work = work + data.worktime
      ))
    }
  }, [attendData])

  const GetPayments = () => {
    axios.get(baseURL + '/m_employees').then(res => {
      setEmployeesData(res.data)
      console.log(res.data)
    })
  }

  //勤怠データ取得
  const SearchAttend = () => {
    console.log(empId)
    console.log(empName)
    let param = '/t_payments_emp/?employee_id=' + empId
    if (empId) {
      axios.get(baseURL + param).then(res => {
        setPaymentData(res.data)
        console.log(res.data)
        const csvValue = res.data.map(data => {
          return [data.t_paymentstable.payment_date,
          data.t_paymentstable.income,
          data.t_paymentstable.base,
          data.t_paymentstable.overtime_pay,
          data.t_paymentstable.nighttime_pay,
          data.t_paymentstable.holiday_pay,
          data.t_paymentstable.commuting_pay,
          data.t_paymentstable.health_insur,
          data.t_paymentstable.care_insur,
          data.t_paymentstable.pension_insur,
          data.t_paymentstable.employee_insur,
          data.t_paymentstable.income_tax,
          data.t_paymentstable.inhabitant_tax,
          data.t_paymentstable.adj_pay,
          data.t_paymentstable.holiday_work,
          data.t_paymentstable.nighttime_work,
          data.t_paymentstable.overtime_work
          ]
        })
        setOutputData(csvValue)
        console.log(csvValue)
      })
    }
  }

  const UpdateAttend = (event, data) => {
    setDialogTitle({ title: '賃金台帳編集', mode: 1 })
    setSelectedRow(data)
    setOpen(true)
    console.log(data)
  }
  const DeleteAttend = (event, data) => {
    console.log(data)
    axios.put(baseURL + "/payments_del/", {
      id: data.t_paymentstable.id
    }).then((res) => {
      setTimeout(() => {
        SearchAttend()
      }, 100);
    })
  }

  const InsertPayment = (event, name) => {
    setDialogTitle({ title: '賃金台帳追加', mode: 2 })
    setSelectedRow({
      t_paymentstable: {
        id: "",
        employee_id: empId,
        payment_date: dayjs(new Date()).format("YYYY-MM-DD"),
        income: 0,
        base: 0,
        overtime_pay: 0,
        nighttime_pay: 0,
        holiday_pay: 0,
        commuting_pay: 0,
        health_insur: 0,
        care_insur: 0,
        pension_insur: 0,
        employee_insur: 0,
        income_tax: 0,
        inhabitant_tax: 0,
        adj_pay: 0,
        holiday_work: 0,
        nighttime_work: 0,
        other_allowance_1: 0,
        other_allowance_2: 0,
        other_allowance_3: 0,
        other_allowance_4: 0,
        other_allowance_5: 0,
        others_deduction: 0,
        overtime_work: 0,
        total_deduction: 0,
        total_pay: 0,
        work_date: 0,
        working_hours: 0
      }
    })
    setOpen(true)
  }

  return (
    <>
      <Stack spacing={2} sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={darkTheme}>
          <AppBar position="static" color="primary" enableColorOnDark>
            <Toolbar label='賃金台帳 (社員)' />
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

        <FormControl sx={{ m: 1, minWidth: 100 }} >
          <CSVLink data={outputData} headers={headers}><Button variant="contained" > CSV出力</Button></CSVLink>
        </FormControl>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 900 }} aria-label="spanning table">
            <TableHead>
              <TableRow>
              {/* // 支払日	労働日数	労働時間数	時間外労働時間数	休日労働時間数 深夜労働時間数 基本給 */}
                <TableCell align="center">支払日</TableCell>
                <TableCell align="center">労働日数</TableCell>
                <TableCell align="center">労働時間数</TableCell>
                <TableCell align="center">時間外労働時間数</TableCell>
                <TableCell align="center">休日労働時間数</TableCell>
                <TableCell align="center">深夜労働時間数</TableCell>
                <TableCell align="center">基本給</TableCell>
                {/* //時間外労働手当	休日労働手当	深夜労働手当	通勤手当	調整手当	その他手当て1	その他手当て2	その他手当て3	その他手当て4	その他手当て5 支給合計 */}
                <TableCell align="center">時間外労働手当</TableCell>
                <TableCell align="center">休日労働手当</TableCell>
                <TableCell align="center">深夜労働手当</TableCell>
                <TableCell align="center">通勤手当</TableCell>
                <TableCell align="center">調整手当</TableCell>
                <TableCell align="center">その他手当て1</TableCell>
                <TableCell align="center">その他手当て2</TableCell>
                <TableCell align="center">その他手当て3</TableCell>
                <TableCell align="center">その他手当て4</TableCell>
                <TableCell align="center">その他手当て5</TableCell>
                <TableCell align="center">支給合計</TableCell>
                
                {/* //健康保険料	介護保険料	厚生年金保険料	雇用保険料	所得税	住民税	その他控除	控除合計	差引支給合計 */}
                <TableCell align="center">健康保険料</TableCell>
                <TableCell align="center">介護保険料</TableCell>
                <TableCell align="center">厚生年金保険料</TableCell>
                <TableCell align="center">雇用保険料</TableCell>
                <TableCell align="center">所得税</TableCell>
                <TableCell align="center">住民税</TableCell>
                <TableCell align="center">その他控除</TableCell>
                <TableCell align="center">控除合計</TableCell>
                <TableCell align="center">差引支給合計</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {paymentData.map((data) => (
                <TableRow
                  hover
                >
      {/* // 支払日	労働日数	労働時間数	時間外労働時間数	休日労働時間数 深夜労働時間数 基本給 */}
                  <TableCell align="center">{data.t_paymentstable.payment_date}</TableCell>
                  <TableCell align="center">{data.t_paymentstable.work_date}</TableCell>
                  <TableCell align="center">{data.t_paymentstable.working_hours}</TableCell>
                  <TableCell align="center">{data.t_paymentstable.overtime_work}</TableCell>
                  <TableCell align="center">{data.t_paymentstable.holiday_work}</TableCell>
                  <TableCell align="center">{data.t_paymentstable.nighttime_work}</TableCell>
                  <TableCell align="center">{data.t_paymentstable.base}</TableCell>

      {/* //時間外労働手当	休日労働手当	深夜労働手当	通勤手当	調整手当	その他手当て1	その他手当て2	その他手当て3	その他手当て4	その他手当て5 支給合計 */}
                  <TableCell align="center">{data.t_paymentstable.overtime_pay}</TableCell>
                  <TableCell align="center">{data.t_paymentstable.nighttime_pay}</TableCell>
                  <TableCell align="center">{data.t_paymentstable.holiday_pay}</TableCell>
                  <TableCell align="center">{data.t_paymentstable.commuting_pay}</TableCell>
                  <TableCell align="center">{data.t_paymentstable.adj_pay}</TableCell>
                  <TableCell align="center">{data.t_paymentstable.other_allowance_1}</TableCell>
                  <TableCell align="center">{data.t_paymentstable.other_allowance_2}</TableCell>
                  <TableCell align="center">{data.t_paymentstable.other_allowance_3}</TableCell>
                  <TableCell align="center">{data.t_paymentstable.other_allowance_4}</TableCell>
                  <TableCell align="center">{data.t_paymentstable.other_allowance_5}</TableCell>
                  <TableCell align="center">{data.t_paymentstable.income}</TableCell>

      {/* //健康保険料	介護保険料	厚生年金保険料	雇用保険料	所得税	住民税	その他控除	控除合計	差引支給合計 */}
                  <TableCell align="center">{data.t_paymentstable.health_insur}</TableCell>
                  <TableCell align="center">{data.t_paymentstable.care_insur}</TableCell>
                  <TableCell align="center">{data.t_paymentstable.pension_insur}</TableCell>
                  <TableCell align="center">{data.t_paymentstable.employee_insur}</TableCell>
                  <TableCell align="center">{data.t_paymentstable.income_tax}</TableCell>
                  <TableCell align="center">{data.t_paymentstable.inhabitant_tax}</TableCell>
                  <TableCell align="center">{data.t_paymentstable.others_deduction}</TableCell>
                  <TableCell align="center">{data.t_paymentstable.total_deduction}</TableCell>
                  <TableCell align="center">{data.t_paymentstable.total_pay}</TableCell>

                  {/* <TableCell align="center">{data.t_paymentstable.aaaaaaaaaaaaa}</TableCell>
      <TableCell align="center">{data.t_paymentstable.aaaaaaaaaaaaa}</TableCell>
      <TableCell align="center">{data.t_paymentstable.aaaaaaaaaaaaa}</TableCell> */}


                  {/* <TableCell align="center">{data.t_paymentstable.payment_date}</TableCell>
                  <TableCell align="center">{data.t_paymentstable.income}</TableCell>
                  <TableCell align="center">{data.t_paymentstable.base}</TableCell>
                  <TableCell align="center">{data.t_paymentstable.overtime_pay}</TableCell>
                  <TableCell align="center">{data.t_paymentstable.nighttime_pay}</TableCell>
                  <TableCell align="center">{data.t_paymentstable.holiday_pay}</TableCell>
                  <TableCell align="center">{data.t_paymentstable.commuting_pay}</TableCell>
                  <TableCell align="center">{data.t_paymentstable.health_insur}</TableCell>
                  <TableCell align="center">{data.t_paymentstable.care_insur}</TableCell>
                  <TableCell align="center">{data.t_paymentstable.pension_insur}</TableCell>
                  <TableCell align="center">{data.t_paymentstable.employee_insur}</TableCell>
                  <TableCell align="center">{data.t_paymentstable.income_tax}</TableCell>
                  <TableCell align="center">{data.t_paymentstable.inhabitant_tax}</TableCell> */}
                  {/* <TableCell align="center">{data.t_paymentstable.withholding_tax}</TableCell> */}
                  {/* <TableCell align="center">{data.t_paymentstable.adj_pay}</TableCell> */}
                  {/* <TableCell align="center">{data.t_paymentstable.others}</TableCell>                 */}
                  <TableCell align="center">
                    <Button variant="contained" onClick={(event) => UpdateAttend(event, data)}>編集</Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button variant="contained" onClick={(event) => DeleteAttend(event, data)}>削除</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Fab color="primary" aria-label="add" variant="extended" onClick={InsertPayment}>
          <AddIcon />賃金台帳追加
        </Fab>
      </Container>
      <AddPayment open={open} setOpen={setOpen} paymentData={selectedrow} dialogTitle={dialogTitle} />
    </>
  )
}
export default Payment;
