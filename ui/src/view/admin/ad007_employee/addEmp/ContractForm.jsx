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

export default function Review(props) {
  const {base, setbase,
         std_monthly_compensation, setstd_monthly_compensation,
         commuting_pay, setcommuting_pay,
         health_insur, sethealth_insur,
         care_insur, setcare_insur,
         pension_insur, setpension_insur,
         income_tax, setincome_tax,
         inhabitant_tax, setinhabitant_tax,
        } = props
  const Change_base = (event) =>{
    setbase(event.target.data)
  }
  const Change_std_monthly_compensation = (event) =>{
    setstd_monthly_compensation(event.target.data)
  }
  const Change_commuting_pay = (event) =>{
    setcommuting_pay(event.target.data)
  }
  const Change_health_insur = (event) =>{
    sethealth_insur(event.target.data)
  }
  const Change_care_insur = (event) =>{
    setcare_insur(event.target.data)
  }
  const Change_pension_insur = (event) =>{
    setpension_insur(event.target.data)
  }
  const Change_income_tax = (event) =>{
    setincome_tax(event.target.data)
  }
  const Change_inhabitant_tax = (event) =>{
    setinhabitant_tax(event.target.data)
  }
  
  return (
    
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        契約
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="Name"
            label="基本給"
            fullWidth
            autoComplete="name"
            variant="standard"
            value={base}
            onChange={(event) => Change_base(event)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="Name"
            label="標準月額報酬"
            fullWidth
            autoComplete="name"
            variant="standard"
            value={std_monthly_compensation}   
            onChange={(event) => Change_std_monthly_compensation(event)}         
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="Name"
            label="通勤手当"
            fullWidth
            autoComplete="name"
            variant="standard"
            value={commuting_pay}
            onChange={(event) => Change_commuting_pay(event)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="Name"
            label="所得税"
            fullWidth
            autoComplete="name"
            variant="standard"
            value={income_tax}
            onChange={(event) => Change_income_tax(event)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="Name"
            label="住民税"
            fullWidth
            autoComplete="name"
            variant="standard"
            value={inhabitant_tax}
            onChange={(event) => Change_inhabitant_tax(event)}
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
            autoComplete="name"
            variant="standard"
            value={health_insur}
            onChange={(event) => Change_health_insur(event)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="Name"
            label="介護保険料"
            fullWidth
            autoComplete="name"
            variant="standard"
            value={care_insur}
            onChange={(event) => Change_care_insur(event)}
          />
        </Grid>        
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="Name"
            label="厚生年金保健料"
            fullWidth
            autoComplete="name"
            variant="standard"
            value={pension_insur}
            onChange={(event) => Change_pension_insur(event)}
          />
        </Grid>
      </Grid>
    </React.Fragment>
    </LocalizationProvider>
  );
}