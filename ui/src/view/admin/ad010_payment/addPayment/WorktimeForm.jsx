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
import Datepickers from '../../../../components/datepicker';

const AddressForm = (props) => {
  const { 
    paymentDate,setPaymentDate,
    workDate,setWorkDate,
    workingHours,setWorkingHours,
    overtimeWork,setOvertimeWork,
    holidayWork,setHolidayWork,
    nighttimeWork,setNighttimeWork,
    base,setBase
    } = props
  const Change_value = (event, value) => {
    switch (value) {
      case 'workDate':
        setWorkDate(parseInt(event.target.value,10))
        break;
      case 'workingHours':
        setWorkingHours(parseInt(event.target.value,10))
        break;
      case 'overtimeWork':
        setOvertimeWork(parseInt(event.target.value,10))
        break;
      case 'holidayWork':
        setHolidayWork(parseInt(event.target.value,10))
        break;
      case 'nighttimeWork':
        setNighttimeWork(parseInt(event.target.value,10))
        break;   
      case 'base':
        setBase(parseInt(event.target.value,10))
        break;
    }
  }
  return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          勤務情報
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
          <Datepickers 
            label="支払日"
            value={paymentDate}
            setValue={setPaymentDate}
          />
{/* 
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
            /> */}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="name"
              name="name"
              label="労働日数"
              type="number"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              InputLabelProps={{ shrink: true }}
              value={workDate}
              onChange={(event) => Change_value(event, 'workDate')}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="sex"
              name="sex"
              label="労働時間数"
              type="number"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              InputLabelProps={{ shrink: true }}
              value={workingHours}
              onChange={(event) => Change_value(event, 'workingHours')}
            />
          </Grid>
{/* 時間外労働時間数	休日労働時間数 深夜労働時間数 */}
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="name_kana"
              name="name_kana"
              label="時間外労働時間数"
              type="number"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              InputLabelProps={{ shrink: true }}
              value={overtimeWork}
              onChange={(event) => Change_value(event, 'overtimeWork')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="name_kana"
              name="name_kana"
              label="休日労働時間数"
              type="number"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              InputLabelProps={{ shrink: true }}
              value={holidayWork}
              onChange={(event) => Change_value(event, 'holidayWork')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="name_kana"
              name="name_kana"
              type="number"
              label="深夜労働時間数"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              InputLabelProps={{ shrink: true }}
              value={nighttimeWork}
              onChange={(event) => Change_value(event, 'nighttimeWork')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="name_kana"
              name="name_kana"
              type="number"
              label="基本給"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              InputLabelProps={{ shrink: true }}
              value={base}
              onChange={(event) => Change_value(event, 'base')}
            />
          </Grid>
        </Grid>
      </React.Fragment>
  );
}
export default AddressForm