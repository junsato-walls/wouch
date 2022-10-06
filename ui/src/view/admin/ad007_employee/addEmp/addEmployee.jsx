import React from 'react'
import { useState, useImperativeHandle,useEffect, forwardRef } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './addressform';
import PaymentForm from './paymentform';
import Review from './review';

const steps = ['社員情報', '各種保険', '契約情報'];
const theme = createTheme();

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}


const AlertDialog = (props) => {
    const {open,setOpen} = props
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
      setActiveStep(activeStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep(activeStep - 1);
    };
    useEffect(() => {
      if(open == 'true'){
        setActiveStep(0);
      }
    }, [open])

    const dialogclose = () => {
        setOpen(false);
      }

    return (
        <div>
          <Dialog
            open={open}
            onClose={dialogclose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
            <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        {/* <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}> */}
          <Typography component="h1" variant="h4" align="center">
            従業員追加
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="subtitle1">
                  登録が完了しました。
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                    variant="contained"
                    onClick={dialogclose}
                    sx={{ mt: 3, ml: 1 }}
                  >
                   閉じる
                  </Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button onClick={dialogclose} sx={{ mt: 3, ml: 1 }}>
                      キャンセル
                    </Button>
                    
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      戻る
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? '登録' : '次へ'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        {/* </Paper> */}
      </Container>
    </ThemeProvider>
            
            </DialogContentText>
          </DialogContent>
        </Dialog>

      </div>
    )
}
export default forwardRef(AlertDialog)