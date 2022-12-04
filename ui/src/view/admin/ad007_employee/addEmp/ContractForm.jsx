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

  const {base, setBase,
         stdMonthlyCompensation, setStdMonthlyCompensation,
         commutingPay, setCommutingPay,
         healthInsur, setHealthInsur,
         careInsur, setCareInsur,
         pensionInsur, setPensionInsur,
         incomeTax, setIncomeTax,
         inhabitantTax, setInhabitantTax,
        } = props
  const Change_base = (event) =>{
    setBase(event.target.data)
  }
  const Change_stdMonthlyCompensation = (event) =>{
    setStdMonthlyCompensation(event.target.data)
  }
  const Change_commutingPay = (event) =>{
    setCommutingPay(event.target.data)
  }
  const Change_healthInsur = (event) =>{
    setHealthInsur(event.target.data)
  }
  const Change_careInsur = (event) =>{
    setCareInsur(event.target.data)
  }
  const Change_pensionInsur = (event) =>{
    setPensionInsur(event.target.data)
  }
  const Change_incomeTax = (event) =>{
    setIncomeTax(event.target.data)
  }
  const Change_inhabitantTax = (event) =>{
    setInhabitantTax(event.target.data)
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
            InputLabelProps={{ shrink: true }}
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
            InputLabelProps={{ shrink: true }}
            value={stdMonthlyCompensation}   
            onChange={(event) => Change_stdMonthlyCompensation(event)}         
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
            InputLabelProps={{ shrink: true }}
            value={commutingPay}
            onChange={(event) => Change_commutingPay(event)}
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
            autoComplete="name"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            value={pensionInsur}
            onChange={(event) => Change_pensionInsur(event)}
          />
        </Grid>
      </Grid>
    </React.Fragment>
    </LocalizationProvider>
  );
}