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
  // //健康保険料	介護保険料	厚生年金保険料	雇用保険料	所得税	住民税	その他控除	控除合計	差引支給合計	
  const {
    healthInsur, setHealthInsur,
    careInsur, setCareInsur,
    pensionInsur, setPensionInsur,
    employeeInsur, setEmployeeInsur,
    incomeTax, setIncome_tax,
    inhabitantTax, setInhabitantTax,
    othersDeduction, setOthersDeduction,
    totalDeduction, setTotalDeduction,
    totalPay, setTotalPay
  } = props

  // const { health_insur, setHealthInsur,
  //   careInsur, setCareInsur,
  //   pensionInsur, setPensionInsur,
  //   employeeInsur, setEmployeeInsur,
  //   incomeTax, setIncome_tax,
  //   inhabitantTax, setInhabitantTax,
  //   withholdingTax, setWithholdingTax,
  //   others, setOthers
  // } = props
  const Change_value = (event, value) => {
    switch (value) {
      case 'healthInsur':
        setHealthInsur(parseInt(event.target.value, 10))
        break;
      case 'careInsur':
        setCareInsur(parseInt(event.target.value, 10))
        break;
      case 'pensionInsur':
        setPensionInsur(parseInt(event.target.value, 10))
        break;
      case 'employeeInsur':
        setEmployeeInsur(parseInt(event.target.value, 10))
        break;
      case 'incomeTax':
        setIncome_tax(parseInt(event.target.value, 10))
        break;
      case 'inhabitantTax':
        setInhabitantTax(parseInt(event.target.value, 10))
        break;
      case 'othersDeduction':
        setOthersDeduction(parseInt(event.target.value, 10))
        break;
      case 'totalDeduction':
        setTotalDeduction(parseInt(event.target.value, 10))
        break;
      case 'totalPay':
        setTotalPay(parseInt(event.target.value, 10))
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
              value={healthInsur}
              onChange={(event) => Change_value(event, 'healthInsur')}
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
              label="その他控除"
              type="number"
              fullWidth
              autoComplete="name"
              variant="standard"
              InputLabelProps={{ shrink: true }}
              value={othersDeduction}
              onChange={(event) => Change_value(event, 'othersDeduction')}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              required
              id="Name"
              label="控除合計"
              type="number"
              fullWidth
              autoComplete="name"
              variant="standard"
              InputLabelProps={{ shrink: true }}
              value={totalDeduction}
              onChange={(event) => Change_value(event, 'totalDeduction')}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              required
              id="Name"
              label="差引支給合計"
              type="number"
              fullWidth
              autoComplete="name"
              variant="standard"
              InputLabelProps={{ shrink: true }}
              value={totalPay}
              onChange={(event) => Change_value(event, 'totalPay')}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    </LocalizationProvider>
  );
}