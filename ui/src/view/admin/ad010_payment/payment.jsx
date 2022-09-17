import * as React from 'react';
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
        
function Payment() {
          const darkTheme = createTheme({
            palette: {
              mode: 'dark',
              primary: {
                main: '#1976d2',
              },
            },
          });
          return (
          <>
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={darkTheme}>
              <AppBar position="static" color="primary" enableColorOnDark>
                <Toolbar label='Atend'/>
              </AppBar>
            </ThemeProvider>
          </Stack>
          <div><TextField id="outlined-basic" label="従業員ID" variant="outlined"/></div>
          <div><TextField id="outlined-basic" label="ログインID" variant="outlined"/></div>
          <div><TextField id="outlined-basic" label="パスワード" variant="outlined"/></div>
          <div><TextField id="outlined-basic" label="ログイン試行回数" variant="outlined"/></div>
          <div><TextField id="outlined-basic" label="管理者編集画面フラグ" variant="outlined"/></div>
          <div><TextField id="outlined-basic" label="勤怠フラグ" variant="outlined"/></div>
          <div><TextField id="outlined-basic" label="有給管理フラグ" variant="outlined"/></div>
          <div><TextField id="outlined-basic" label="従業員フラグ" variant="outlined"/></div>
          <div><TextField id="outlined-basic" label="カレンダーフラグ" variant="outlined"/></div>
          <div><TextField id="outlined-basic" label="シフトフラグ" variant="outlined"/></div>
          <div><TextField id="outlined-basic" label="賃金フラグ" variant="outlined"/></div>
          <div><TextField id="outlined-basic" label="開始日" variant="outlined"/></div>
          <div><TextField id="outlined-basic" label="終了日" variant="outlined"/></div>
              <div><Button /></div>
              <div><Button variant="contained" endIcon={<SendIcon />} >登録</Button></div>
              {/* <Container maxWidth="sm">
              <Typography variant="h6" align="">登録済みメニュー</Typography>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 450 }} aria-label="spanning table">
                    <TableHead>
                      <TableRow>
                      <TableCell align="center">メニュー名</TableCell>
                        <TableCell align="center">価格</TableCell>
                        <TableCell align="center">表示順番</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                          <TableCell align="center">{SelectOrderData.menu}</TableCell>
                          <TableCell align="center">{SelectOrderData.price}</TableCell>
                          <TableCell align="center">{SelectOrderData.view_no}</TableCell>
                        </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Container> */}
          </>
          )
}
export default Payment;