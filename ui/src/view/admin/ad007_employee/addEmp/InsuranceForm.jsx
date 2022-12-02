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

export default function PaymentForm(props) {
  const {empl_insur_insured_num, setempl_insur_insured_num,
         pension_num, setpension_num,
         dependent, setdependent,
         health_insur_num, sethealth_insur_num,
         empl_insur_insur_qual_acq_date, setempl_insur_insur_qual_acq_date,
         empl_insur_insur_qual_lost_date, setempl_insur_insur_qual_lost_date,
         soc_insur_insur_qual_acq_date, setsoc_insur_insur_qual_acq_date,
         soc_insur_insur_qual_lost_date, setsoc_insur_insur_qual_lost_date
        } = props

  const Change_empl_insur_insured_num = (event) =>{
    setempl_insur_insured_num(event.target.data)
  }
  const Change_pension_num = (event) =>{
    setpension_num(event.target.data)
  }
  const Change_dependent = (event) =>{
    setdependent(event.target.data)
  }
  const Change_health_insur_num = (event) =>{
    sethealth_insur_num(event.target.data)
  }
  const Change_empl_insur_insur_qual_acq_date = (event) =>{
    setempl_insur_insur_qual_acq_date(dayjs(event))
  }
  const Change_empl_insur_insur_qual_lost_date = (event) =>{
    setempl_insur_insur_qual_lost_date(dayjs(event))
  }
  const Change_soc_insur_insur_qual_acq_date = (event) =>{
    setsoc_insur_insur_qual_acq_date(dayjs(event))
  }
  const Change_soc_insur_insur_qual_lost_date = (event) =>{
    setsoc_insur_insur_qual_lost_date(dayjs(event))
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
            value={empl_insur_insured_num}
            onChange={(event) => Change_empl_insur_insured_num(event)}
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
          value={empl_insur_insur_qual_acq_date}
          onChange={(event) => {Change_empl_insur_insur_qual_acq_date(event)}}
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
          value={empl_insur_insur_qual_lost_date}
          onChange={(event) => {Change_empl_insur_insur_qual_lost_date(event)}}
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
            value={pension_num}
            onChange={(event) => Change_pension_num(event)}
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
            value={health_insur_num}
            onChange={(event) => Change_health_insur_num(event)}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
        <DatePicker
          disableFuture
          label="社会保険被保険者資格取得日"
          fullWidth
          openTo="year"
          views={['year', 'month', 'day']}
          value={soc_insur_insur_qual_acq_date}
          onChange={(event) => {Change_soc_insur_insur_qual_acq_date(event)}}
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
          value={soc_insur_insur_qual_lost_date}
          onChange={(newValue) => {
            Change_soc_insur_insur_qual_lost_date(newValue);
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