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
import Button from '@mui/material/Button';
const AddressForm = (props) => {
  const {empData, setEmpData,
         employeeNum,setEmployeeNum,
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

  const [value, setValue] = React.useState(dayjs('2022-10-01'));
  const [value2, setValue2] = React.useState(dayjs('1992-12-01'));
  const test = () =>{
    console.log(empData)
  }

  const Change_employeeNum = (event) =>{    
    setEmployeeNum(event.target.data)
  }
  const Change_name = (event) =>{    
    setName(event.target.data)
  }
  const Change_nameKana = (event) =>{
    console.log(event.target.data)    
    setNameKana(event.target.data)
  }
  const Change_birthday = (event) =>{    
    setBirthday(event.target.data)
  }
  const Change_inCompany = (event) =>{    
    setInCompany(event.target.data)
  }
  const Change_exitCompany = (event) =>{    
    setExitCompany(event.target.data)
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

      <Grid item xs={12} sm={3}>
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

      <Grid item xs={12} sm={4}>
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
        />}
      />
      </Grid>

      <Grid item xs={12} sm={4}>
        <DatePicker
        disableFuture
        label="退社日"
        openTo="year"
        views={['year', 'month', 'day']}
        value={exitCompany}
        onChange={(event) => Change_exitCompany(event)}
        renderInput={(params) => <TextField {...params} 
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

      <Grid item xs={12} sm={3}>
        <TextField
          required
          id="sex"
          name="sex"
          label="性別"
          fullWidth
          autoComplete="family-name"
          variant="standard"
          InputLabelProps={{ shrink: true }}
          value={sex}
          onChange={(event) => Change_sex(event)}
        />
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