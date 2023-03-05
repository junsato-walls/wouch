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
import Worktime from './WorktimeForm';
import Payment from './PaymentForm';
import DeductionForm from './DeductionForm';

import axios from "axios";

const steps = ['勤務情報', '給与・手当', '保険料・税金等'];
const theme = createTheme();

export default function AlertDialog(props) {
  const { open, setOpen, paymentData, dialogTitle } = props
  const baseURL = 'http://localhost:8000'

  const [activeStep, setActiveStep] = React.useState(0);
  const [paymentID, setPaymentID] = React.useState("");
  const [empID, setEmpID] = React.useState("");

  // 支払日	労働日数	労働時間数	時間外労働時間数	休日労働時間数 深夜労働時間数 
  const [paymentDate, setPaymentDate] = React.useState("")
  const [workDate, setWorkDate] = React.useState("");
  const [workingHours, setWorkingHours] = React.useState("");
  const [overtimeWork, setOvertimeWork] = React.useState("");
  const [holidayWork, setHolidayWork] = React.useState("");
  const [nighttimeWork, setNighttimeWork] = React.useState("");

  //基本給 時間外労働手当	休日労働手当	深夜労働手当	通勤手当	調整手当	その他手当て1	その他手当て2	その他手当て3	その他手当て4	その他手当て5 支給合計 
  const [base, setBase] = React.useState("");
  const [overtimePay, setOvertimePay] = React.useState("");
  const [nighttimePay, setNighttimePay] = React.useState("");
  const [holidayPay, setholidayPay] = React.useState("");
  const [commutingPay, setCommutingPay] = React.useState("");
  const [adjPay, setAdjPay] = React.useState("");
  const [otherAllowance_1, setOtherAllowance_1] = React.useState("");
  const [otherAllowance_2, setOtherAllowance_2] = React.useState("");
  const [otherAllowance_3, setOtherAllowance_3] = React.useState("");
  const [otherAllowance_4, setOtherAllowance_4] = React.useState("");
  const [otherAllowance_5, setOtherAllowance_5] = React.useState("");
  const [income, setIncome] = React.useState("");

  //健康保険料	介護保険料	厚生年金保険料	雇用保険料	所得税	住民税	その他控除	控除合計	差引支給合計					
  const [healthInsur, setHealthInsur] = React.useState("");
  const [careInsur, setCareInsur] = React.useState("");
  const [pensionInsur, setPensionInsur] = React.useState("");
  const [employeeInsur, setEmployeeInsur] = React.useState("");
  const [incomeTax, setIncome_tax] = React.useState("");
  const [inhabitantTax, setInhabitantTax] = React.useState("");
  const [othersDeduction, setOthersDeduction] = React.useState("");
  const [totalDeduction, setTotalDeduction] = React.useState("");
  const [totalPay, setTotalPay] = React.useState("");


  useEffect(() => {
    // console.log(paymentData)
    if (paymentData != "") {
      setPaymentID(paymentData.t_paymentstable.id)
      setEmpID(paymentData.t_paymentstable.employee_id)

      // 支払日	労働日数	労働時間数	時間外労働時間数	休日労働時間数 深夜労働時間数 基本給
      setPaymentDate(paymentData.t_paymentstable.payment_date)
      setWorkDate(paymentData.t_paymentstable.work_date)
      setWorkingHours(paymentData.t_paymentstable.working_hours)
      setOvertimeWork(paymentData.t_paymentstable.overtime_work)
      setHolidayWork(paymentData.t_paymentstable.holiday_work)
      setNighttimeWork(paymentData.t_paymentstable.nighttime_work)
      setBase(paymentData.t_paymentstable.base)

      //時間外労働手当	休日労働手当	深夜労働手当	通勤手当	調整手当	その他手当て1	その他手当て2	その他手当て3	その他手当て4	その他手当て5 支給合計 
      setOvertimePay(paymentData.t_paymentstable.overtime_pay)
      setNighttimePay(paymentData.t_paymentstable.nighttime_pay)
      setholidayPay(paymentData.t_paymentstable.holiday_pay)
      setCommutingPay(paymentData.t_paymentstable.commuting_pay)
      setAdjPay(paymentData.t_paymentstable.adj_pay)
      setOtherAllowance_1(paymentData.t_paymentstable.other_allowance_1)
      setOtherAllowance_2(paymentData.t_paymentstable.other_allowance_2)
      setOtherAllowance_3(paymentData.t_paymentstable.other_allowance_3)
      setOtherAllowance_4(paymentData.t_paymentstable.other_allowance_4)
      setOtherAllowance_5(paymentData.t_paymentstable.other_allowance_5)
      setIncome(paymentData.t_paymentstable.income)

      //健康保険料	介護保険料	厚生年金保険料	雇用保険料	所得税	住民税	その他控除	控除合計	差引支給合計					
      setHealthInsur(paymentData.t_paymentstable.health_insur)
      setCareInsur(paymentData.t_paymentstable.care_insur)
      setPensionInsur(paymentData.t_paymentstable.pension_insur)
      setEmployeeInsur(paymentData.t_paymentstable.employee_insur)
      setIncome_tax(paymentData.t_paymentstable.income_tax)
      setInhabitantTax(paymentData.t_paymentstable.inhabitant_tax)
      setOthersDeduction(paymentData.t_paymentstable.others_deduction)
      setTotalDeduction(paymentData.t_paymentstable.total_deduction)
      setTotalPay(paymentData.t_paymentstable.total_pay)
    }
  }, [open])

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <Worktime
          // 支払日	労働日数	労働時間数	時間外労働時間数	休日労働時間数 深夜労働時間数 基本給
          paymentDate={paymentDate}
          setPaymentDate={setPaymentDate}
          workDate={workDate}
          setWorkDate={setWorkDate}
          workingHours={workingHours}
          setWorkingHours={setWorkingHours}
          overtimeWork={overtimeWork}
          setOvertimeWork={setOvertimeWork}
          holidayWork={holidayWork}
          setHolidayWork={setHolidayWork}
          nighttimeWork={nighttimeWork}
          setNighttimeWork={setNighttimeWork}
          base={base}
          setBase={setBase}
        />;
      case 1:
        return <Payment
          //時間外労働手当	休日労働手当	深夜労働手当	通勤手当	調整手当	その他手当て1	その他手当て2	その他手当て3	その他手当て4	その他手当て5 支給合計 
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
          otherAllowance_1={otherAllowance_1}
          setOtherAllowance_1={setOtherAllowance_1}
          otherAllowance_2={otherAllowance_2}
          setOtherAllowance_2={setOtherAllowance_2}
          otherAllowance_3={otherAllowance_3}
          setOtherAllowance_3={setOtherAllowance_3}
          otherAllowance_4={otherAllowance_4}
          setOtherAllowance_4={setOtherAllowance_4}
          otherAllowance_5={otherAllowance_5}
          setOtherAllowance_5={setOtherAllowance_5}
          income={income}
          setIncome={setIncome}
        />;
      case 2:
        return <DeductionForm
          //健康保険料	介護保険料	厚生年金保険料	雇用保険料	所得税	住民税	その他控除	控除合計	差引支給合計	
          healthInsur={healthInsur}
          setHealthInsur={setHealthInsur}
          careInsur={careInsur}
          setCareInsur={setCareInsur}
          pensionInsur={pensionInsur}
          setPensionInsur={setPensionInsur}
          employeeInsur={employeeInsur}
          setEmployeeInsur={setEmployeeInsur}
          incomeTax={incomeTax}
          setIncome_tax={setIncome_tax}
          inhabitantTax={inhabitantTax}
          setInhabitantTax={setInhabitantTax}
          othersDeduction={othersDeduction}
          setOthersDeduction={setOthersDeduction}
          totalDeduction={totalDeduction}
          setTotalDeduction={setTotalDeduction}
          totalPay={totalPay}
          setTotalPay={setTotalPay}
        />;
      default:
        throw new Error('Unknown step');
    }
  }

  const handleNext = () => {
    if (activeStep + 1 === steps.length) {
      console.log('登録')
      if (dialogTitle.mode == 1) {
        axios.put(baseURL + "/t_payments_upd", {
          id: paymentID,
          employee_id: empID,
          payment_date: paymentDate,
          work_date: workDate,
          working_hours:workingHours,
          overtime_work:overtimeWork,
          holiday_work:holidayWork,
          nighttime_work:nighttimeWork,
          income: income,
          base: base,
          overtime_pay: overtimePay,
          nighttime_pay: nighttimePay,
          holiday_pay: holidayPay,
          commuting_pay: commutingPay,
          health_insur: healthInsur,
          care_insur: careInsur,
          pension_insur: pensionInsur,
          employee_insur: employeeInsur,
          income_tax: incomeTax,
          inhabitant_tax: inhabitantTax,
          adj_pay: adjPay,
          other_allowance_1: otherAllowance_1,
          other_allowance_2: otherAllowance_2,
          other_allowance_3: otherAllowance_3,
          other_allowance_4: otherAllowance_4,
          other_allowance_5: otherAllowance_5,
          others_deduction: othersDeduction,
          total_deduction: totalDeduction,
          total_pay: totalPay
        }).then((res) => {

        })
      } else if (dialogTitle.mode == 2) {
        console.log(paymentDate)
        console.log({
          employee_id: empID,
          payment_date: paymentDate,
          work_date: workDate,
          working_hours:workingHours,
          overtime_work:overtimeWork,
          holiday_work:holidayWork,
          nighttime_work:nighttimeWork,
          income: income,
          base: base,
          overtime_pay: overtimePay,
          nighttime_pay: nighttimePay,
          holiday_pay: holidayPay,
          commuting_pay: commutingPay,
          health_insur: healthInsur,
          care_insur: careInsur,
          pension_insur: pensionInsur,
          employee_insur: employeeInsur,
          income_tax: incomeTax,
          inhabitant_tax: inhabitantTax,
          adj_pay: adjPay,
          other_allowance_1: otherAllowance_1,
          other_allowance_2: otherAllowance_2,
          other_allowance_3: otherAllowance_3,
          other_allowance_4: otherAllowance_4,
          other_allowance_5: otherAllowance_5,
          others_deduction: othersDeduction,
          total_deduction: totalDeduction,
          total_pay: totalPay
        })
        

        axios.post(baseURL + "/t_payments_ins", {
          employee_id: empID,
          payment_date: paymentDate,
          work_date: workDate,
          working_hours:workingHours,
          overtime_work:overtimeWork,
          holiday_work:holidayWork,
          nighttime_work:nighttimeWork,
          income: income,
          base: base,
          overtime_pay: overtimePay,
          nighttime_pay: nighttimePay,
          holiday_pay: holidayPay,
          commuting_pay: commutingPay,
          health_insur: healthInsur,
          care_insur: careInsur,
          pension_insur: pensionInsur,
          employee_insur: employeeInsur,
          income_tax: incomeTax,
          inhabitant_tax: inhabitantTax,
          adj_pay: adjPay,
          other_allowance_1: otherAllowance_1,
          other_allowance_2: otherAllowance_2,
          other_allowance_3: otherAllowance_3,
          other_allowance_4: otherAllowance_4,
          other_allowance_5: otherAllowance_5,
          others_deduction: othersDeduction,
          total_deduction: totalDeduction,
          total_pay: totalPay
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
