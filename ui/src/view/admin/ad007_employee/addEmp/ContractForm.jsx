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
  const {empData, setEmpData} = props
  const [value, setValue] = React.useState(dayjs('2022-10-01'));
  return (
    
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        契約
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="Name"
            label="基本給"
            fullWidth
            autoComplete="name"
            variant="standard"
            value={empData.base}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Name"
            label="標準月額報酬"
            fullWidth
            autoComplete="name"
            variant="standard"
            value={empData.std_monthly_compensation}            
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Name"
            label="通勤手当"
            fullWidth
            autoComplete="name"
            variant="standard"
            value={empData.commuting_pay}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Name"
            label="健康保険料"
            fullWidth
            autoComplete="name"
            variant="standard"
            value={empData.health_insur}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Name"
            label="介護保険料"
            fullWidth
            autoComplete="name"
            variant="standard"
            value={empData.care_insur}
          />
        </Grid>        
        <Grid item xs={12}>
          <TextField
            required
            id="Name"
            label="厚生年金保健料"
            fullWidth
            autoComplete="name"
            variant="standard"
            value={empData.pension_insur}
          />
        </Grid>        
        <Grid item xs={12}>
          <TextField
            required
            id="Name"
            label="所得税"
            fullWidth
            autoComplete="name"
            variant="standard"
            value={empData.income_tax}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Name"
            label="住民税"
            fullWidth
            autoComplete="name"
            variant="standard"
            value={empData.inhabitant_tax}
          />
        </Grid>
      </Grid>
    </React.Fragment>
    </LocalizationProvider>
  );
}