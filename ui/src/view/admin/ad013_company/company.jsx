import * as React from 'react';
import { useState, useEffect, useRef } from "react";
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Toolbar from '../../../components/toolbar'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import axios from "axios";
import Typography from '@mui/material/Typography';
//table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Test from './updateCompany/addEmployee'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import dayjs from 'dayjs';

function Company() {
  const [open, setOpen] = useState(false);
  // const baseURL = 'http://localhost:8000'
  const baseURL = process.env.REACT_APP_IP_PORT
  const [companyData, setCompanyData] = useState([])
//
  const [companyName, setCompanyName] = useState('')
  const [postCode, setPostCode] = useState('')
  const [addressPref, setAddressPref] = useState('')
  const [addressCity, setAddressCity] = useState('')
  const [addressOther, setAddressOther] = useState('')
  const [tell, setTell] = useState('')
  const [CEO, setCEO] = useState('')
  const [payCutoffDate, setPayCutoffDate] = useState('')
  const [payDate, setPayDate] = useState('')
  const [emplInsurApplyOfficeNum, setEmplInsurApplyOfficeNum] = useState('')
//   const [empl_insur_estab_date, setAddressOther] = useState('')
  const [laborInsurNum, setLaborInsurNum] = useState('')
//   const [labor_insur_estab_date, setAddressOther] = useState('')
  const [socialInsurNum, setSocialInsurNum] = useState('')
//   const [social_insur_estab_date, setAddressOther] = useState('')
  const [corporateNum, setCorporateNum] = useState('')

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

  useEffect(() => {
    GetCompany()
  }, [])
 
  //従業員データ取得
  const GetCompany = () => {
    axios.get(baseURL + '/m_companies').then(res => {
        // setCompanyData(res.data)
        // console.log(res.data)
        setCompanyName(res.data[0].company_name)
        setPostCode(res.data[0].post_code)
        setAddressPref(res.data[0].address_pref)
        setAddressCity(res.data[0].address_city)
        setAddressOther(res.data[0].address_other)
        setTell(res.data[0].tell)
        setCEO(res.data[0].ceo)
        setPayCutoffDate(res.data[0].pay_cutoff_date)
        setPayDate(res.data[0].pay_date)
        setEmplInsurApplyOfficeNum(res.data[0].empl_insur_apply_office_num)
        setLaborInsurNum(res.data[0].labor_insur_num)
        setSocialInsurNum(res.data[0].social_insur_num)
        setCorporateNum(res.data[0].corporate_num)
    })
  }
  const Change_CompanyName = (event) =>{
    setCompanyName(event.target.value)
  }
  const Change_PostCode = (event) =>{
    setPostCode(event.target.value)
  }
  const Change_AddressPref = (event) =>{
    setAddressPref(event.target.value)
  }
  const Change_AddressCity = (event) =>{
    setAddressCity(event.target.value)
  }
  const Change_AddressOther = (event) =>{
    setAddressOther(event.target.value)
  }
  const Change_Tell = (event) =>{
    setTell(event.target.value)
  }
  const Change_CEO = (event) =>{
    setCEO(event.target.value)
  }
  const Change_PayCutoffDate = (event) =>{
    setPayCutoffDate(event.target.value)
  }
  const Change_PayDate = (event) =>{
    setPayDate(event.target.value)
  }
  const Change_EmplInsurApplyOfficeNum = (event) =>{
    setEmplInsurApplyOfficeNum(event.target.value)
  }
  const Change_LaborInsurNum = (event) =>{
    setLaborInsurNum(event.target.value)
  }
  const Change_SocialInsurNum = (event) =>{
    setSocialInsurNum(event.target.value)
  }
  const Change_CorporateNum = (event) =>{
    setCorporateNum(event.target.value)
  }


  const test = () =>{
    console.log(companyData)
  }

  return (
  <>
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static" color="primary" enableColorOnDark>
        <Toolbar label='Company'/>
      </AppBar>
    </ThemeProvider>
    </Stack>
    <Container maxWidth="xls">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 600 }} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell align="center"></TableCell>
                <TableCell align="center">
                <Button onClick={test}variant="contained">更新</Button>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                  <TableCell align="center">事業所名</TableCell>
                  <TableCell align="center">
                    <TextField
                    fullWidth 
                    variant="standard" 
                    value={companyName}
                    onChange={(event) => Change_CompanyName(event)}/>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">郵便番号</TableCell>
                  <TableCell align="center">
                  <TextField 
                    fullWidth
                    variant="standard" 
                    value={postCode}
                    onChange={(event) => Change_PostCode(event)}/>
                  </TableCell>
                </TableRow>                
                <TableRow>
                  <TableCell align="center">住所 都道府県</TableCell>
                  <TableCell align="center">
                  <TextField 
                    fullWidth
                    variant="standard" 
                    value={addressPref}
                    onChange={(event) => Change_AddressPref(event)}/>
                  </TableCell>
                </TableRow>                
                <TableRow>
                  <TableCell align="center">住所 市町村</TableCell>
                  <TableCell align="center">
                  <TextField 
                    fullWidth
                    variant="standard" 
                    value={addressCity}
                    onChange={(event) => Change_AddressCity(event)}/>
                  </TableCell>
                </TableRow>                
                <TableRow>
                  <TableCell align="center">住所 その他</TableCell>
                  <TableCell align="center">                  
                  <TextField 
                    fullWidth
                    variant="standard" 
                    value={addressOther}
                    onChange={(event) => Change_AddressOther(event)}/>
                  </TableCell>
                </TableRow>                
                <TableRow>
                  <TableCell align="center">電話番号</TableCell>
                  <TableCell align="center">
                  <TextField 
                    fullWidth
                    variant="standard" 
                    value={tell}
                    onChange={(event) => Change_Tell(event)}/>
                  </TableCell>
                </TableRow>                
                <TableRow>
                  <TableCell align="center">代表者名</TableCell>
                  <TableCell align="center">
                  <TextField 
                    fullWidth
                    variant="standard" 
                    value={CEO}
                    onChange={(event) => Change_CEO(event)}/>
                  </TableCell>
                </TableRow>                
                <TableRow>
                  <TableCell align="center">賃金締め日</TableCell>
                  <TableCell align="center">
                  <TextField 
                    fullWidth
                    variant="standard" 
                    value={payCutoffDate}
                    onChange={(event) => Change_PayCutoffDate(event)}/>                    
                  </TableCell>
                </TableRow>                
                <TableRow>
                  <TableCell align="center">賃金支払日</TableCell>
                  <TableCell align="center">
                    <TextField 
                    fullWidth
                    variant="standard" 
                    value={payDate}
                    onChange={(event) => Change_PayDate(event)}/>
                  </TableCell>
                </TableRow>                
                <TableRow>
                  <TableCell align="center">雇用保険適用事業所番号</TableCell>
                  <TableCell align="center">
                  <TextField 
                    fullWidth
                    variant="standard" 
                    value={emplInsurApplyOfficeNum}
                    onChange={(event) => Change_EmplInsurApplyOfficeNum(event)}/>
                  </TableCell>
                </TableRow>                
                <TableRow>
                  <TableCell align="center">労働保険番号</TableCell>
                  <TableCell align="center">
                  <TextField 
                    fullWidth
                    variant="standard" 
                    value={laborInsurNum}
                    onChange={(event) => Change_LaborInsurNum(event)}/>
                  </TableCell>
                </TableRow>                
                <TableRow>
                  <TableCell align="center">社会保険番号・記号</TableCell>
                  <TableCell align="center">
                  <TextField 
                    fullWidth
                    variant="standard" 
                    value={socialInsurNum}
                    onChange={(event) => Change_SocialInsurNum(event)}/>
                  </TableCell>
                </TableRow>                
                <TableRow>
                  <TableCell align="center">法人番号</TableCell>
                  <TableCell align="center">
                  <TextField 
                    fullWidth
                    variant="standard" 
                    value={corporateNum}
                    onChange={(event) => Change_CorporateNum(event)}/>
                  </TableCell>
                </TableRow>                
            </TableBody>
          </Table>
        </TableContainer>
    </Container>
  </>
  )
    }
    export default Company;