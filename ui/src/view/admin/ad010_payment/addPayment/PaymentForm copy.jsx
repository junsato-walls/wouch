import * as React from 'react';
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import dayjs from 'dayjs';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import ja from 'date-fns/locale/ja'

const AddressForm = (props) => {
  const {
    empID, setEmpID,
    paymentDate, setPaymentDate,
    income, setIncome,
    base, setBase,
    overtimePay, setOvertimePay,
    nighttimePay, setNighttimePay,
    holidayPay, setholidayPay,
    commutingPay, setCommutingPay,
    adjPay, setAdjPay
  } = props
  const baseURL = 'http://localhost:8000'
  const [employeesData, setEmployeesData] = useState([])
  const [selectEmpID, setSelectEmpID] = React.useState(empID);
  const [selectEmpName, setSelectEmpName] = React.useState('');
  const [selectEmpNum, setSelectEmpNum] = React.useState('');

  const handleChange = (event) => {
    setSelectEmpID(event.target.value);
    setEmpID(event.target.value)
    let valuess = employeesData.filter((emp) => {
      return emp.m_employeestable.id == event.target.value
    });
    setSelectEmpName(valuess[0].m_employeestable.name)
    if (valuess.length) {
      setSelectEmpNum(valuess[0].m_employeestable.employee_num)
    }
  };

  const valueChange = (event) => {
    setSelectEmpNum(event.target.value);
    let valuess = employeesData.filter((emp) => {
      return emp.m_employeestable.employee_num == event.target.value
    });
    if (valuess.length) {
      setSelectEmpID(valuess[0].m_employeestable.id)
      setEmpID(valuess[0].m_employeestable.id)
    }
  };

  useEffect(() => {
    GetEmpoyees()
  }, [])

  const GetEmpoyees = () => {
    axios.get(baseURL + '/m_employees').then(res => {
      setEmployeesData(res.data)
      console.log(res.data)
    })
  }

  const Change_value = (event, value) => {
    switch (value) {
      case 'income':
        setIncome(parseInt(event.target.value, 10))
        break;
      case 'base':
        setBase(parseInt(event.target.value, 10))
        break;
      case 'overtimePay':
        setOvertimePay(parseInt(event.target.value, 10))
        break;
      case 'nighttimePay':
        setNighttimePay(parseInt(event.target.value, 10))
        break;
      case 'holidayPay':
        setholidayPay(parseInt(event.target.value, 10))
        break;
      case 'commutingPay':
        setCommutingPay(parseInt(event.target.value, 10))
        break;
      case 'adjPay':
        setAdjPay(parseInt(event.target.value, 10))
        break;
    }
  }

  return (

      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          給与・手当
        </Typography>
        <Grid container spacing={3}>

          {/* <Grid item xs={12} sm={6}>
            <FormControl sx={{ minWidth: 200 }}>
              <InputLabel id="demo-simple-select-label" shrink>社員番号</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectEmpNum}
                onChange={valueChange}
                variant="standard"
              >
                {employeesData.map((emp, i) =>
                  <MenuItem value={emp.m_employeestable.employee_num}>{emp.m_employeestable.employee_num}</MenuItem>
                )}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl sx={{ minWidth: 200 }}>
              <InputLabel id="demo-simple-select-label" shrink>名前</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectEmpID}
                onChange={handleChange}
                variant="standard"
              >
                {employeesData.map((emp, i) =>
                  <MenuItem value={emp.m_employeestable.id}>{emp.m_employeestable.name}</MenuItem>
                )}
              </Select>
            </FormControl>
          </Grid> */}

          <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
          <Grid item xs={12} sm={6}>
            <DatePicker
              disableFuture
              label="支払日"
              openTo="year"
              views={['year', 'month', 'day']}
              value={paymentDate}
              onChange={(newValue) => {
                setPaymentDate(dayjs(newValue).format("YYYY-MM-DD"));
              }}
              inputFormat='yyyy年MM月dd日'
              mask='____年__月__日'
              leftArrowButtonText="前月を表示"
              rightArrowButtonText="次月を表示"
              toolbarTitle="日付選択"
              cancelText="キャンセル"
              okText="選択"
              toolbarFormat="YYYY年MM月DD日"
              renderInput={(params) =>
                <TextField {...params}
                  variant="standard"
                  InputLabelProps={{ shrink: true }}
                />}
            />
          </Grid>
          </LocalizationProvider>
          
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="name"
              name="name"
              label="支払給与"
              type="number"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              InputLabelProps={{ shrink: true }}
              value={income}
              onChange={(event) => Change_value(event, 'income')}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="sex"
              name="sex"
              label="基本給"
              type="number"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              InputLabelProps={{ shrink: true }}
              value={base}
              onChange={(event) => Change_value(event, 'base')}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="name_kana"
              name="name_kana"
              label="時間外労働手当"
              type="number"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              InputLabelProps={{ shrink: true }}
              value={overtimePay}
              onChange={(event) => Change_value(event, 'overtimePay')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="name_kana"
              name="name_kana"
              label="深夜手当"
              type="number"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              InputLabelProps={{ shrink: true }}
              value={nighttimePay}
              onChange={(event) => Change_value(event, 'nighttimePay')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="name_kana"
              name="name_kana"
              type="number"
              label="休日手当"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              InputLabelProps={{ shrink: true }}
              value={holidayPay}
              onChange={(event) => Change_value(event, 'holidayPay')}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="address1"
              name="address1"
              type="number"
              label="通勤手当"
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
              InputLabelProps={{ shrink: true }}
              value={commutingPay}
              onChange={(event) => Change_value(event, 'commutingPay')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="address1"
              name="address1"
              type="number"
              label="調整手当"
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
              InputLabelProps={{ shrink: true }}
              value={adjPay}
              onChange={(event) => Change_value(event, 'adjPay')}
            />
          </Grid>

        </Grid>
      </React.Fragment>
  );
}
export default AddressForm