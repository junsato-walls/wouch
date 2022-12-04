import React from 'react'
import { useState, useImperativeHandle, useEffect, forwardRef } from "react";
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
import Payment from './PaymentForm';
import InsurTax from './InsurTaxFrom';
import axios from "axios";

const steps = ['給与・手当', '保険料・税金等'];
const theme = createTheme();

export default function AlertDialog(props) {
  const { open, setOpen, paymentData,dialogTitle } = props
  const baseURL = 'http://localhost:8000'

  const [activeStep, setActiveStep] = React.useState(0);
  const [paymentID, setPaymentID] = React.useState("");
  const [empID, setEmpID] = React.useState("");

  // 支払日 支払給与　基本給 
  const [paymentDate, setPaymentDate] = React.useState("")
  const [income, setIncome] = React.useState("");
  const [base, setBase] = React.useState("");

  // 時間外労働手当 深夜手当 休日手当 通勤手当 調整手当  
  const [overtimePay, setOvertimePay] = React.useState("");
  const [nighttimePay, setNighttimePay] = React.useState("");
  const [holidayPay, setholidayPay] = React.useState("");
  const [commutingPay, setCommutingPay] = React.useState("");
  const [adjPay, setAdjPay] = React.useState("");

  // 健康保険料　介護保険料 厚生年金保険料 雇用保険料
  const [healthInsur, setHealthInsur] = React.useState("");
  const [careInsur, setCareInsur] = React.useState("");
  const [pensionInsur, setPensionInsur] = React.useState("");
  const [employeeInsur, setEmployeeInsur] = React.useState("");

  // 所得税 住民税 源泉徴収 その他
  const [incomeTax, setIncome_tax] = React.useState("");
  const [inhabitantTax, setInhabitantTax] = React.useState("");
  const [withholdingTax, setWithholdingTax] = React.useState("");
  const [others, setOthers] = React.useState("");

  useEffect(() => {
    console.log(paymentData)
    if (paymentData != "") {
      setPaymentID(paymentData.t_paymentstable.id)
      setEmpID(paymentData.t_paymentstable.employee_id)
      // 支払日 支払給与　基本給 
      setPaymentDate(paymentData.t_paymentstable.payment_date)
      setIncome(paymentData.t_paymentstable.income)
      setBase(paymentData.t_paymentstable.base)

      // 時間外労働手当 深夜手当 休日手当 通勤手当 調整手当  
      setOvertimePay(paymentData.t_paymentstable.overtime_pay)
      setNighttimePay(paymentData.t_paymentstable.nighttime_pay)
      setholidayPay(paymentData.t_paymentstable.holiday_pay)
      setCommutingPay(paymentData.t_paymentstable.commuting_pay)
      setAdjPay(paymentData.t_paymentstable.adj_pay)

      // 健康保険料　介護保険料 厚生年金保険料 雇用保険料
      setHealthInsur(paymentData.t_paymentstable.health_insur)
      setCareInsur(paymentData.t_paymentstable.care_insur)
      setPensionInsur(paymentData.t_paymentstable.pension_insur)
      setEmployeeInsur(paymentData.t_paymentstable.employee_insur)

      // 所得税 住民税 源泉徴収 その他
      setIncome_tax(paymentData.t_paymentstable.income_tax)
      setInhabitantTax(paymentData.t_paymentstable.inhabitant_tax)
      setWithholdingTax(paymentData.t_paymentstable.withholding_tax)
      setOthers(paymentData.t_paymentstable.others)
    }
  }, [open])

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <Payment
          // 社員ID
          empID = {empID}
          setEmpID = {setEmpID}

          // 支払日 支払給与　基本給
          paymentDate={paymentDate}
          setPaymentDate={setPaymentDate}
          income={income}
          setIncome={setIncome}
          base={base}
          setBase={setBase}

          // 時間外労働手当 深夜手当 休日手当 通勤手当 調整手当 
          overtimePay={overtimePay}
          setOvertimePay={setOvertimePay}
          nighttimePay={nighttimePay}
          setNighttimePay={setNighttimePay}
          holidayPay={holidayPay}
          setholidayPay={setholidayPay}
          commutingPay={commutingPay}
          setCommutingPay={setCommutingPay}
          adjPay={adjPay}
          setAdjPay={setAdjPay}
        />;
      case 1:
        return <InsurTax
          // 保険料・税金
          // 健康保険料　介護保険料 厚生年金保険料 雇用保険料
          healthInsur={healthInsur}
          setHealthInsur={setHealthInsur}
          careInsur={careInsur}
          setCareInsur={setCareInsur}
          pensionInsur={pensionInsur}
          setPensionInsur={setPensionInsur}
          employeeInsur={employeeInsur}
          setEmployeeInsur={setEmployeeInsur}

          // 所得税 住民税 源泉徴収 その他
          incomeTax={incomeTax}
          setIncome_tax={setIncome_tax}
          inhabitantTax={inhabitantTax}
          setInhabitantTax={setInhabitantTax}
          withholdingTax={withholdingTax}
          setWithholdingTax={setWithholdingTax}
          others={others}
          setOthers={setOthers}
        />;
      default:
        throw new Error('Unknown step');
    }
  }

  const handleNext = () => {
    if (activeStep + 1 === steps.length) {
      console.log('登録')
      if (dialogTitle.mode == 1){
      console.log('dialogTitle:' + dialogTitle.title)
      console.log({ 
        employee_id:empID,
        payment_date:paymentDate,
        income:income,
        base:base,
        overtime_pay:overtimePay,
        nighttime_pay:nighttimePay,
        holiday_pay:holidayPay,
        commuting_pay:commutingPay,
        health_insur:healthInsur,
        care_insur:careInsur,
        pension_insur:pensionInsur,
        employee_insur:employeeInsur,
        income_tax:incomeTax,
        inhabitant_tax:inhabitantTax,
        withholding_tax:withholdingTax,
        adj_pay:adjPay,
        others:others
      })

      axios.put(baseURL + "/t_payments_up", {
        id:paymentID, 
        employee_id:empID,
        payment_date:paymentDate,
        income:income,
        base:base,
        overtime_pay:overtimePay,
        nighttime_pay:nighttimePay,
        holiday_pay:holidayPay,
        commuting_pay:commutingPay,
        health_insur:healthInsur,
        care_insur:careInsur,
        pension_insur:pensionInsur,
        employee_insur:employeeInsur,
        income_tax:incomeTax,
        inhabitant_tax:inhabitantTax,
        withholding_tax:withholdingTax,
        adj_pay:adjPay,
        others:others
      }).then((res) => {

      })
    }else if(dialogTitle.mode == 2){ 
      console.log('dialogTitle:' + dialogTitle.title)
      console.log({ 
        employee_id:empID,
        payment_date:paymentDate,
        income:income,
        base:base,
        overtime_pay:overtimePay,
        nighttime_pay:nighttimePay,
        holiday_pay:holidayPay,
        commuting_pay:commutingPay,
        health_insur:healthInsur,
        care_insur:careInsur,
        pension_insur:pensionInsur,
        employee_insur:employeeInsur,
        income_tax:incomeTax,
        inhabitant_tax:inhabitantTax,
        withholding_tax:withholdingTax,
        adj_pay:adjPay,
        others:others
      })

      axios.post(baseURL + "/t_payments_in", { 
        employee_id:empID,
        payment_date:paymentDate,
        income:income,
        base:base,
        overtime_pay:overtimePay,
        nighttime_pay:nighttimePay,
        holiday_pay:holidayPay,
        commuting_pay:commutingPay,
        health_insur:healthInsur,
        care_insur:careInsur,
        pension_insur:pensionInsur,
        employee_insur:employeeInsur,
        income_tax:incomeTax,
        inhabitant_tax:inhabitantTax,
        withholding_tax:withholdingTax,
        adj_pay:adjPay,
        others:others
      }).then((res) => {

      })
    }
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  useEffect(() => {
    if (open == true) {
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
                <Typography component="h1" variant="h4" align="center">
                {dialogTitle.title}
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
              </Container>
            </ThemeProvider>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  )
}
