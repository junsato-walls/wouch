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
  //時間外労働手当	休日労働手当	深夜労働手当	通勤手当	調整手当	その他手当て1	その他手当て2	その他手当て3	その他手当て4	その他手当て5 支給合計 
  const {
    overtimePay, setOvertimePay,
    nighttimePay, setNighttimePay,
    holidayPay, setholidayPay,
    commutingPay, setCommutingPay,
    adjPay, setAdjPay,
    otherAllowance_1, setOtherAllowance_1,
    otherAllowance_2, setOtherAllowance_2,
    otherAllowance_3, setOtherAllowance_3,
    otherAllowance_4, setOtherAllowance_4,
    otherAllowance_5, setOtherAllowance_5,
    income, setIncome
  } = props
  const Change_value = (event, value) => {
    switch (value) {
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
      case 'otherAllowance_1':
        setOtherAllowance_1(parseInt(event.target.value, 10))
        break;
      case 'otherAllowance_2':
        setOtherAllowance_2(parseInt(event.target.value, 10))
        break;
      case 'otherAllowance_3':
        setOtherAllowance_3(parseInt(event.target.value, 10))
        break;
      case 'otherAllowance_4':
        setOtherAllowance_4(parseInt(event.target.value, 10))
        break;
      case 'otherAllowance_5':
        setOtherAllowance_5(parseInt(event.target.value, 10))
        break;
      case 'income':
        setIncome(parseInt(event.target.value, 10))
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
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="address1"
            name="address1"
            type="number"
            label="その他手当て1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            value={otherAllowance_1}
            onChange={(event) => Change_value(event, 'otherAllowance_1')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="address1"
            name="address1"
            type="number"
            label="その他手当て2"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            value={otherAllowance_2}
            onChange={(event) => Change_value(event, 'otherAllowance_2')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="address1"
            name="address1"
            type="number"
            label="その他手当て3"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            value={otherAllowance_3}
            onChange={(event) => Change_value(event, 'otherAllowance_3')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="address1"
            name="address1"
            type="number"
            label="その他手当て4"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            value={otherAllowance_4}
            onChange={(event) => Change_value(event, 'otherAllowance_4')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="address1"
            name="address1"
            type="number"
            label="その他手当て5"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            value={otherAllowance_5}
            onChange={(event) => Change_value(event, 'otherAllowance_5')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="支給合計"
            type="number"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            value={income}
            onChange={(event) => Change_value(event, 'income')}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
export default AddressForm