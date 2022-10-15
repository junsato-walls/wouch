import * as React from 'react';
import dayjs from 'dayjs';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function AddressForm() {
  const [value, setValue] = React.useState(dayjs('2022-10-01'));
  const [value2, setValue2] = React.useState(dayjs('1992-12-01'));
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        社員情報
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name_kana"
            name="name_kana"
            label="社員番号"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name_kana"
            name="name_kana"
            label="社員証ID"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>

      <Grid item xs={12} sm={8}>
          <TextField
            required
            id="name_kana"
            name="name_kana"
            label="フリガナ"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <DatePicker
          disableFuture
          label="生年月日"
          openTo="year"
          views={['year', 'month', 'day']}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} 
          variant="standard"
          />}
        />
        </Grid>

        <Grid item xs={12} sm={8}>
          <TextField
            required
            id="name"
            name="name"
            label="氏名"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
        <DatePicker
          disableFuture
          label="入社日"
          openTo="year"
          views={['year', 'month', 'day']}
          value={value2}
          onChange={(newValue) => {
            setValue2(newValue);
          }}
          renderInput={(params) => 
          <TextField {...params} 
            variant="standard"
          />}
        />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="address1"
            name="address1"
            label="郵便番号"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="address1"
            name="address1"
            label="都道府県"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="address1"
            name="address1"
            label="市町村"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="番地 建物 部屋番号"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}sm={6}>
          <TextField
            required
            id="address1"
            name="address1"
            label="電話番号"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}sm={6}>
          <TextField
            id="address1"
            name="address1"
            label="マイナンバー"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}sm={6}>
          <TextField
            id="address1"
            name="address1"
            label="国籍"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>

      </Grid>
    </React.Fragment>
    </LocalizationProvider>
  );
}