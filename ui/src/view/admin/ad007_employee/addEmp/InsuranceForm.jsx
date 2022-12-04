import * as React from 'react';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Button from '@mui/material/Button';

export default function PaymentForm(props) {
  const {weeklyWorkTime, setWeeklyWorkTime,
         emplInsurInsuredNum,setEmplInsurInsuredNum,
         pensionNum, setPensionNum,
         dependent, setDependent,
         healthInsurNum, setHealthInsurNum,
         emplInsurInsurQualAcqDate, setEmplInsurInsurQualAcqDate,
         emplInsurInsurQualLostDate, setEmplInsurInsurQualLostDate,
         socInsurInsurQualAcqDate, setSocInsurInsurQualAcqDate,
         socInsurInsurQualLostDate, setSocInsurInsurQualLostDate
        } = props

  const Change_emplInsurInsuredNum = (event) =>{
    console.log(event.target.value)
    setEmplInsurInsuredNum(event.target.value)
  }
  const Change_pensionNum = (event) =>{
    setPensionNum(event.target.value)
  }
  const Change_dependent = (event) =>{
    setDependent(event.target.value)
  }
  const Change_healthInsurNum = (event) =>{
    setHealthInsurNum(event.target.value)
  }
  const Change_emplInsurInsurQualAcqDate = (event) =>{
    setEmplInsurInsurQualAcqDate(dayjs(event))
  }
  const Change_emplInsurInsurQualLostDate = (event) =>{
    setEmplInsurInsurQualLostDate(dayjs(event))
  }
  const Change_socInsurInsurQualAcqDate = (event) =>{
    setSocInsurInsurQualAcqDate(dayjs(event))
  }
  const Change_socInsurInsurQualLostDate = (event) =>{
    setSocInsurInsurQualLostDate(dayjs(event))
  }
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        保険
      </Typography>

      <Grid container spacing={6}>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Name"
            label="雇用保険被保険者番号"
            fullWidth
            autoComplete="name"
            variant="standard"
            value={emplInsurInsuredNum}
            onChange={(event) => Change_emplInsurInsuredNum(event)}
          />
        </Grid>
        
        <Grid item xs={12} sm={1}>
        </Grid>
        
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="Name"
            label="被扶養者人数"
            fullWidth
            autoComplete="name"
            variant="standard"
            value={dependent}
            onChange={(event) => Change_dependent(event)}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
        <DatePicker
          disableFuture
          label="雇用保険被保険者資格取得日"
          fullWidth
          openTo="year"
          views={['year', 'month', 'day']}
          value={emplInsurInsurQualAcqDate}
          onChange={(event) => {Change_emplInsurInsurQualAcqDate(event)}}
          inputFormat='YYYY年MM月DD日'
          mask='____年__月'
          leftArrowButtonText="前月を表示"
          rightArrowButtonText="次月を表示"
          toolbarTitle="日付選択"
          cancelText="キャンセル"
          okText="選択"
          toolbarFormat="YYYY年MM月DD日"
          renderInput={(params) => 
          <TextField {...params} 
            variant="standard"
          />}
        />
        </Grid>

        <Grid item xs={12} sm={6}>
        <DatePicker
          disableFuture
          label="雇用保険被保険者資格喪失日"
          fullWidth
          openTo="year"
          views={['year', 'month', 'day']}
          value={emplInsurInsurQualLostDate}
          onChange={(event) => {Change_emplInsurInsurQualLostDate(event)}}
          inputFormat='YYYY年MM月DD日'
          mask='____年__月'
          leftArrowButtonText="前月を表示"
          rightArrowButtonText="次月を表示"
          toolbarTitle="日付選択"
          cancelText="キャンセル"
          okText="選択"
          toolbarFormat="YYYY年MM月DD日"
          renderInput={(params) => 
          <TextField {...params} 
            variant="standard"
          />}
        />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Name"
            label="基礎年金番号"
            fullWidth
            autoComplete="name"
            variant="standard"
            value={pensionNum}
            onChange={(event) => Change_pensionNum(event)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Name"
            label="健康保険被保険者整理記号"
            fullWidth
            autoComplete="name"
            variant="standard"
            value={healthInsurNum}
            onChange={(event) => Change_healthInsurNum(event)}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
        <DatePicker
          disableFuture
          label="社会保険被保険者資格取得日"
          fullWidth
          openTo="year"
          views={['year', 'month', 'day']}
          value={socInsurInsurQualAcqDate}
          onChange={(event) => {Change_socInsurInsurQualAcqDate(event)}}
          inputFormat='YYYY年MM月DD日'
          mask='____年__月'
          leftArrowButtonText="前月を表示"
          rightArrowButtonText="次月を表示"
          toolbarTitle="日付選択"
          cancelText="キャンセル"
          okText="選択"
          toolbarFormat="YYYY年MM月DD日"
          renderInput={(params) => 
          <TextField {...params} 
            variant="standard"
          />}
        />
        </Grid>

        <Grid item xs={12} sm={6}>
        <DatePicker
          disableFuture
          label="社会保険被保険者資格喪失日"
          fullWidth
          openTo="year"
          views={['year', 'month', 'day']}
          value={socInsurInsurQualLostDate}
          onChange={(newValue) => {
            Change_socInsurInsurQualLostDate(newValue);
          }}
          inputFormat='YYYY年MM月DD日'
          mask='____年__月'
          leftArrowButtonText="前月を表示"
          rightArrowButtonText="次月を表示"
          toolbarTitle="日付選択"
          cancelText="キャンセル"
          okText="選択"
          toolbarFormat="YYYY年MM月DD日"
          renderInput={(params) => 
          <TextField {...params} 
            variant="standard"
          />}
        />
        </Grid>
      </Grid>
    </React.Fragment>
    </LocalizationProvider>
  );
}