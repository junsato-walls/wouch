import * as React from 'react';
import dayjs from 'dayjs';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import { TimePicker } from '@mui/x-date-pickers';
// import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MenuItem from '@mui/material/MenuItem';

export default function AddressForm() {
  const [value, setValue] = React.useState(dayjs('2022-10-01'));
  const [value2, setValue2] = React.useState(dayjs('1992-12-01'));
  const working_st ={1: '出勤',2: '有給',3: '遅刻',4: '早退',5: '欠勤',6:'特別休暇'}

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <React.Fragment>
      <Grid container spacing={3}>

      <Grid item xs={12} sm={12}>
        <div>社員番号</div>
        <FormControl sx={{ m: 1, minWidth: '30ch' }} >
        <TextField id="standard-basic" value="w001" variant="standard" />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={12}>
        <div>名前</div>
        <FormControl sx={{ m: 1, minWidth: '30ch' }} >
        <TextField id="standard-basic" value="神谷太郎" variant="standard" />
        </FormControl>
      </Grid>
        
        <Grid item xs={6} sm={6}>
        <div>出勤時間</div>
        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '10ch' }}>
          <Input
            id="standard-adornment-weight"
            // value={values.weight}
            // onChange={handleChange('weight')}
            endAdornment={<InputAdornment position="end">時</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          {/* <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText> */}
        </FormControl>                
        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '10ch' }}>
          <Input
            id="standard-adornment-weight"
            // value={values.weight}
            // onChange={handleChange('weight')}
            endAdornment={<InputAdornment position="end">分</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          {/* <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText> */}
        </FormControl>
        </Grid>
        <Grid item xs={6} sm={6}>
        <div>退勤時間</div>
        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '10ch' }}>
          <Input
            id="standard-adornment-weight"
            // value={values.weight}
            // onChange={handleChange('weight')}
            endAdornment={<InputAdornment position="end">時</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          {/* <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText> */}
        </FormControl>                
        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '10ch' }}>
          <Input
            id="standard-adornment-weight"
            // value={values.weight}
            // onChange={handleChange('weight')}
            endAdornment={<InputAdornment position="end">分</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          {/* <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText> */}
        </FormControl>
        </Grid>

        <Grid item xs={12} sm={12}>
        <div>休憩時間</div>
        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '20ch' }}>
          <Input
            id="standard-adornment-weight"
            // value={values.weight}
            // onChange={handleChange('weight')}
            endAdornment={<InputAdornment position="end">時</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          {/* <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText> */}
        </FormControl>                
        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '20ch' }}>
          <Input
            id="standard-adornment-weight"
            // value={values.weight}
            // onChange={handleChange('weight')}
            endAdornment={<InputAdornment position="end">分</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          {/* <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText> */}
        </FormControl>
        </Grid>
        
      </Grid>
    </React.Fragment>
    </LocalizationProvider>
  );
}