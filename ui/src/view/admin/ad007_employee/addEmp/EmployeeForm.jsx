import * as React from 'react';
import dayjs from 'dayjs';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import ja from 'date-fns/locale/ja'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
const AddressForm = (props) => {
  const {employeeNum,setEmployeeNum,
         name,setName,
         nameKana,setNameKana,
         birthday,setBirthday,
         inCompany,setInCompany,
         exitCompany,setExitCompany,
         sex,setSex,
         postCode,setPostCode,
         addressPref,setAddressPref,
         addressCity,setAddressCity,
         addressOther,setAddressOther,
         tell,setTell,
         mynumber,setMynumber,
         nationality,setNationality
        } = props
  const Change_employeeNum = (event) =>{    
    setEmployeeNum(event.target.data)
  }
  const Change_name = (event) =>{    
    setName(event.target.data)
  }
  const Change_nameKana = (event) =>{ 
    setNameKana(event.target.data)
  }
  const Change_birthday = (event) =>{
    setBirthday(event)
  }
  const Change_inCompany = (event) =>{
    setInCompany(dayjs(event))
  }
  const Change_exitCompany = (event) =>{
    setExitCompany(dayjs(event))
  }
  const Change_sex = (event) =>{    
    setSex(event.target.data)
  }
  const Change_postCode = (event) =>{    
    setPostCode(event.target.data)
  }
  const Change_addressPref = (event) =>{    
    setAddressPref(event.target.data)
  }
  const Change_addressCity = (event) =>{    
    setAddressCity(event.target.data)
  }
  const Change_addressOther = (event) =>{    
    setAddressOther(event.target.data)
  }
  const Change_tell = (event) =>{    
    setTell(event.target.data)
  }
  const Change_mynumber = (event) =>{    
    setMynumber(event.target.data)
  }
  const Change_nationality = (event) =>{    
    setNationality(event.target.data)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        社員情報
      </Typography>
      <Grid container spacing={3}>

      <Grid item xs={12} sm={2}>
          <TextField
            required
            id="employeeNum"
            name="employeeNum"
            label="社員番号"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            value={employeeNum}
            onChange={(event) => Change_employeeNum(event)}
          />
      </Grid>

      <Grid item xs={12} sm={5}>
      <DatePicker
        disableFuture
        label="入社日"
        openTo="year"
        views={['year', 'month', 'day']}
        value={inCompany}
        onChange={(event) => Change_inCompany(event)}
        renderInput={(params) => 
        <TextField {...params} 
          variant="standard"
          InputLabelProps={{ shrink: true }}
        />}
      />
      </Grid>

      <Grid item xs={12} sm={5}>
        <DatePicker
        disableFuture
        label="退社日"
        openTo="year"
        views={['year', 'month', 'day']}
        value={exitCompany}
        onChange={(event) => {Change_exitCompany(event)}}
        inputFormat='YYYY年MM月DD日'
        mask='____年__月__日'
        leftArrowButtonText="前月を表示"
        rightArrowButtonText="次月を表示"
        toolbarTitle="日付選択"
        cancelText="キャンセル"
        okText="選択"
        toolbarFormat="YYYY年MM月DD日"
        renderInput={(params) =>
        <TextField {...params} 
          variant="standard"
          InputLabelProps={{ shrink: true }}
        />}
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
          InputLabelProps={{ shrink: true }}
          value={nationality}
          onChange={(event) => Change_nationality(event)}
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
          InputLabelProps={{ shrink: true }}
          value={mynumber}
          onChange={(event) => Change_mynumber(event)}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="氏名"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            value={name}
            onChange={(event) => Change_name(event)}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name_kana"
            name="name_kana"
            label="フリガナ"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            value={nameKana}
            onChange={(event) => Change_nameKana(event)}
          />
        </Grid>

        <Grid item xs={12} sm={5}>
          <FormControl variant="standard" sx={{minWidth: 200}} size="small">
            <InputLabel id="sex-select-label" labelPlacement="top" shrink>性別</InputLabel>
            <Select
              labelId="sex-select-label"
              id="sex-select"
              value={sex}
              onChange={(event) => Change_sex(event)}
            >
            <MenuItem value={1}>男性</MenuItem>
            <MenuItem value={2}>女性</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={12} sm={1}>
        </Grid>

        <Grid item xs={12} sm={5}>
          <DatePicker
          disableFuture
          label="生年月日"
          openTo="year"
          views={['year', 'month', 'day']}
          value={birthday}
          onChange={(event) => Change_birthday(event)}
          renderInput={(params) => <TextField {...params} 
          variant="standard"
          InputLabelProps={{ shrink: true }}
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
            InputLabelProps={{ shrink: true }}
            value={postCode}
            onChange={(event) => Change_postCode(event)}
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="address1"
            name="address1"
            label="都道府県"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            value={addressPref}
            onChange={(event) => Change_addressPref(event)}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            required
            id="address1"
            name="address1"
            label="市町村"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            value={addressCity}
            onChange={(event) => Change_addressCity(event)}
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
            InputLabelProps={{ shrink: true }}
            value={addressOther}
            onChange={(event) => Change_addressOther(event)}
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
            InputLabelProps={{ shrink: true }}
            value={tell}
            onChange={(event) => Change_tell(event)}            
          />
        </Grid>
      </Grid>
    </React.Fragment>
    </LocalizationProvider>
  );
}
export default AddressForm