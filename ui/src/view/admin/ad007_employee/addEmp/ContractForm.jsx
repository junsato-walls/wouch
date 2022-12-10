import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import Button from '@mui/material/Button';

export default function Review(props) {
  const {weeklyWorkTime,setWeeklyWorkTime,
         base, setBase,
         stdMonthlyCompensation, setStdMonthlyCompensation,
         commutingPay, setCommutingPay,
         healthInsur, setHealthInsur,
         careInsur, setCareInsur,
         pensionInsur, setPensionInsur,
         incomeTax, setIncomeTax,
         inhabitantTax, setInhabitantTax,
         memo,setMemo
        } = props

  const Change_weeklyWorkTime = (event) =>{
    setWeeklyWorkTime(event.target.value)
  }
      
  const Change_base = (event) =>{
    setBase(event.target.value)
  }
  const Change_stdMonthlyCompensation = (event) =>{
    setStdMonthlyCompensation(event.target.value)
  }
  const Change_commutingPay = (event) =>{
    setCommutingPay(event.target.value)
  }
  const Change_healthInsur = (event) =>{
    setHealthInsur(event.target.value)
  }
  const Change_careInsur = (event) =>{
    setCareInsur(event.target.value)
  }
  const Change_pensionInsur = (event) =>{
    setPensionInsur(event.target.value)
  }
  const Change_incomeTax = (event) =>{
    setIncomeTax(event.target.value)
  }
  const Change_inhabitantTax = (event) =>{
    setInhabitantTax(event.target.value)
  }
  const Change_memo = (event) =>{
    setMemo(event.target.value)
  }
  
  return (    
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        契約
      </Typography>
      <Grid container spacing={6}>
         <Grid item xs={12} sm={4}>
          <TextField
            required
            id="Name"
            label="週所定労働時間"
            fullWidth
            type="number"
            autoComplete="name"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            value={weeklyWorkTime}
            onChange={(event) => Change_weeklyWorkTime(event)}
          />
        </Grid>
        
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="Name"
            label="標準月額報酬"
            fullWidth
            type="number"
            autoComplete="name"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            value={stdMonthlyCompensation}   
            onChange={(event) => Change_stdMonthlyCompensation(event)}         
          />
        </Grid>
        <Grid item xs={12} sm={1}>
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="Name"
            label="基本給"
            fullWidth
            type="number"
            autoComplete="name"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            value={base}
            onChange={(event) => Change_base(event)}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="Name"
            label="通勤手当"
            fullWidth
            type="number"
            autoComplete="name"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            value={commutingPay}
            onChange={(event) => Change_commutingPay(event)}
          />
        </Grid>

        <Grid item xs={12} sm={1}>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="Name"
            label="所得税"
            fullWidth
            type="number"
            autoComplete="name"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            value={incomeTax}
            onChange={(event) => Change_incomeTax(event)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="Name"
            label="住民税"
            fullWidth
            type="number"
            autoComplete="name"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            value={inhabitantTax}
            onChange={(event) => Change_inhabitantTax(event)}
          />
        </Grid>
        <Grid item xs={12} sm={1}>
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="Name"
            label="健康保険料"
            fullWidth
            type="number"
            autoComplete="name"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            value={healthInsur}
            onChange={(event) => Change_healthInsur(event)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="Name"
            label="介護保険料"
            fullWidth
            type="number"
            autoComplete="name"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            value={careInsur}
            onChange={(event) => Change_careInsur(event)}
          />
        </Grid>        
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="Name"
            label="厚生年金保健料"
            fullWidth
            type="number"

            autoComplete="name"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            value={pensionInsur}
            onChange={(event) => Change_pensionInsur(event)}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="Name"
            label="メモ"
            fullWidth
            autoComplete="name"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            value={memo}
            onChange={(event) => Change_memo(event)}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}