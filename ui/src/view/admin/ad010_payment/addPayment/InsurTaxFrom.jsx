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
  const { health_insur, setHealthInsur,
    careInsur, setCareInsur,
    pensionInsur, setPensionInsur,
    employeeInsur, setEmployeeInsur,
    incomeTax, setIncome_tax,
    inhabitantTax, setInhabitantTax,
    withholdingTax, setWithholdingTax,
    others, setOthers
  } = props
  const Change_value = (event, value) => {
    switch (value) {
      case 'health_insur':
        setHealthInsur(parseInt(event.target.value,10))
        break;
      case 'careInsur':
        setCareInsur(parseInt(event.target.value,10))
        break;
      case 'pensionInsur':
        setPensionInsur(parseInt(event.target.value,10))
        break;
      case 'employeeInsur':
        setEmployeeInsur(parseInt(event.target.value,10))
        break;
      case 'incomeTax':
        setIncome_tax(parseInt(event.target.value,10))
        break;
      case 'inhabitantTax':
        setInhabitantTax(parseInt(event.target.value,10))
        break;   
      case 'withholdingTax':
        setWithholdingTax(parseInt(event.target.value,10))
        break;
      case 'others':
        setOthers(parseInt(event.target.value,10))
        break;
    }
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          保険料・税金
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              required
              id="Name"
              label="健康保険料"
              type="number"
              fullWidth
              autoComplete="name"
              variant="standard"
              InputLabelProps={{ shrink: true }}
              value={health_insur}
              onChange={(event) => Change_value(event, 'health_insur')}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              required
              id="Name"
              label="介護保険料"
              type="number"
              fullWidth
              autoComplete="name"
              variant="standard"
              InputLabelProps={{ shrink: true }}
              value={careInsur}
              onChange={(event) => Change_value(event, 'careInsur')}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              required
              id="Name"
              label="厚生年金保険料"
              type="number"
              fullWidth
              autoComplete="name"
              variant="standard"
              InputLabelProps={{ shrink: true }}
              value={pensionInsur}
              onChange={(event) => Change_value(event, 'pensionInsur')}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              required
              id="Name"
              label="雇用保険料"
              type="number"
              fullWidth
              autoComplete="name"
              variant="standard"
              InputLabelProps={{ shrink: true }}
              value={employeeInsur}
              onChange={(event) => Change_value(event, 'employeeInsur')}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              required
              id="Name"
              label="所得税"
              type="number"
              fullWidth
              autoComplete="name"
              variant="standard"
              InputLabelProps={{ shrink: true }}
              value={incomeTax}
              onChange={(event) => Change_value(event, 'incomeTax')}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              required
              id="Name"
              label="住民税"
              type="number"
              fullWidth
              autoComplete="name"
              variant="standard"
              InputLabelProps={{ shrink: true }}
              value={inhabitantTax}
              onChange={(event) => Change_value(event, 'inhabitantTax')}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              required
              id="Name"
              label="源泉徴収"
              type="number"
              fullWidth
              autoComplete="name"
              variant="standard"
              InputLabelProps={{ shrink: true }}
              value={withholdingTax}
              onChange={(event) => Change_value(event, 'withholdingTax')}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              required
              id="Name"
              label="その他"
              type="number"
              fullWidth
              autoComplete="name"
              variant="standard"
              InputLabelProps={{ shrink: true }}
              value={others}
              onChange={(event) => Change_value(event, 'others')}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    </LocalizationProvider>
  );
}