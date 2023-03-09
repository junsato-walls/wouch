
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

      console.log(dayjs(event))
      if (dayjs(event).format("YYYY-MM-DD") == "Invalid Date"){
        setValue(null)
      }else{
        setValue(dayjs(event).format("YYYY-MM-DD"))        
      }
      // console.log(dayjs(event).format("YYYY-MM-DD"))
      // // console.log(isNaN(Date.getDate(event)))
      // let date = new Date(dayjs(event).format("YYYY"),dayjs(event).format("MM"),dayjs(event).format("DD"))
      // setValue(dayjs(event).format("YYYY-MM-DD"))
      // console.log(date)
      // setValue(event)
      
        // if (dayjs(event).format("YYYY-MM-DD") = ""){
        //   setValue(null)  
        // } else(
        //   setValue(dayjs(event).format("YYYY-MM-DD"))
        // )
      }
    return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>    
      <DatePicker
        // minDate={dayjs('1960-01-01')}
        // maxDate={dayjs('2050-01-01')}
        disableFuture={false}        
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