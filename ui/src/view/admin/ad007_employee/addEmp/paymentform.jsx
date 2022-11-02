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

export default function PaymentForm() {
  const [value, setValue] = React.useState(dayjs('2022-10-01'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        保険
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="Name"
            label="雇用保険被保険者番号"
            fullWidth
            autoComplete="name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Name"
            label="基礎年金番号"
            fullWidth
            autoComplete="name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Name"
            label="健康保険被保険者整理記号"
            fullWidth
            autoComplete="name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Name"
            label="被扶養者"
            fullWidth
            autoComplete="name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Name"
            label="雇用保険被保険者番号"
            fullWidth
            autoComplete="name"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
        <DatePicker
          disableFuture
          label="雇用保険被保険者資格取得日"
          openTo="year"
          views={['year', 'month', 'day']}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
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
          openTo="year"
          views={['year', 'month', 'day']}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => 
          <TextField {...params} 
            variant="standard"
          />}
        />
        </Grid>

        <Grid item xs={12} sm={6}>
        <DatePicker
          disableFuture
          label="社会保険被保険者資格取得日"
          openTo="year"
          views={['year', 'month', 'day']}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
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
          openTo="year"
          views={['year', 'month', 'day']}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
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