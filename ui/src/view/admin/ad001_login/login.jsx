import * as React from 'react';
import { useState, useImperativeHandle, useEffect, forwardRef,useRef } from "react";
import {
  Container,
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import axios from "axios";
import Dialog from '../../../components/dialog'
import MenuDialog from '../../../components/menu';

function Login() {
  const baseURL = process.env.REACT_APP_IP_PORT
  // const baseURL = 'http://localhost:8000'
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);

  const childRef = useRef()
  const handleSubmit = (value) => {
    childRef.current.MessageOpen(value)
  }
  const menuOpen = () => {
    setOpen(true)
  }
  const Change_email = (event) =>{    
    setEmail(event.target.value)
  }
  const Change_pass = (event) =>{    
    setPass(event.target.value)
  }
  const Login_onClick = () =>{
    console.log(email)
    console.log(pass)
    // /m_admin
    axios.post(baseURL + "/m_admin/", { 
      login_id:email,
      password:pass
    }).then((res) => {
      console.log(res.status)
      if(res.status == 200){
        setOpen(true)
      }
    }).catch((res)=>{
      if (res.response.status == 400){
        console.log(res.response.data.detail)
        handleSubmit(res.response.data.detail)   
      }    
    })


  }

return (
        <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4">
          ログイン
        </Typography>

        <Box component="form" noValidate sx={{ mt:1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="メールアドレス"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(event) => Change_email(event)}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="パスワード"
            type="password"
            id="password"
            autoComplete="current-password"
            value={pass}
            onChange={(event) => Change_pass(event)}
          />

          <Button
            // type="submit"
            fullWidth
            variant="contained"
            onClick={Login_onClick}
            sx={{ mt:3, mb:2 }}
          >
            ログイン
          </Button>

          {/* <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                パスワードを忘れた
              </Link>
            </Grid>

            <Grid item>
              <Link href="#" variant="body2">
                新規登録
              </Link>
            </Grid>
          </Grid> */}
        </Box>
      </Box>
      <Dialog ref={childRef} />
      <MenuDialog open={open} setOpen={setOpen} />
    </Container>
      )
    }
    export default Login;

    