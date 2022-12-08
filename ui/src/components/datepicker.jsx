
import React from 'react'
import { useState, useImperativeHandle, forwardRef } from "react";
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import ja from 'date-fns/locale/ja'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';

const AlertDialog = (props) => {
    const {label, value, setValue} = props
    const changeValue = (event) =>{
        setValue(dayjs(event).format("YYYY-MM-DD"))
      }
    return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>    
      <DatePicker
        disableFuture
        label={label}
        openTo="year"
        views={['year', 'month', 'day']}
        value={value}
        onChange={(event) => changeValue(event)}
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
      </LocalizationProvider>
    </>
    )
}
export default AlertDialog