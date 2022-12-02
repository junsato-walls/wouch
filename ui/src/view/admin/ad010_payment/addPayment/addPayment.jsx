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
import Review from './ContractForm';

const steps = ['給与・手当', '保険料・税金等', 'テスト'];
const theme = createTheme();

export default function AlertDialog(props) {
  const { open, setOpen } = props
  const [activeStep, setActiveStep] = React.useState(0);
  const [data, setData] = React.useState(0);

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
  const [health_insur, setHealthInsur] = React.useState("");
  const [careInsur, setCareInsur] = React.useState("");
  const [pensionInsur, setPensionInsur] = React.useState("");
  const [employeeInsur, setEmployeeInsur] = React.useState("");

  // 所得税 住民税 源泉徴収 その他
  const [incomeTax, setIncome_tax] = React.useState("");
  const [inhabitantTax, setInhabitantTax] = React.useState("");
  const [withholdingTax, setWithholdingTax] = React.useState("");
  const [others, setOthers] = React.useState("");

  useEffect(() => {
    if (empData != ""){
      // 社員情報
      setEmployeeNum(empData.m_employeestable.employee_num)
      setName(empData.m_employeestable.name)
      setNameKana(empData.m_employeestable.name_kana)
      setBirthday(empData.m_employeestable.birthday)
      setInCompany(empData.m_employeestable.in_company)
      setExitCompany(empData.m_employeestable.post_code)
      setSex(empData.m_employeestable.sex)
      setPostCode(empData.m_employeestable.post_code)
      setAddressPref(empData.m_employeestable.address_pref)
      setAddressCity(empData.m_employeestable.address_city)
      setAddressOther(empData.m_employeestable.address_other)
      setTell(empData.m_employeestable.tell)
      setMynumber(empData.m_employeestable.mynumber)
      setNationality(empData.m_employeestable.nationality)

      // 各種保険
      setWeeklyWorkTime(empData.m_employeestable.weekly_work_time)
      setEmplInsurInsuredNum(empData.m_employeestable.empl_insur_insured_num)
      setPensionNum(empData.m_employeestable.pension_num)
      setFormerJob(empData.m_employeestable.former_job)
      setDependent(empData.m_employeestable.dependent)
      setHealthInsurNum(empData.m_employeestable.health_insur_num)
      setEmplInsurInsurQualAcqDate(empData.m_employeestable.empl_insur_insur_qual_acq_date)
      setEmplInsurInsurQualLostDate(empData.m_employeestable.empl_insur_insur_qual_lost_date)
      setSocInsurInsurQualAcqDate(empData.m_employeestable.soc_insur_insur_qual_acq_date)
      setSocInsurInsurQualLostDate(empData.m_employeestable.soc_insur_insur_qual_lost_date)
      setMemo(empData.m_employeestable.memo)

      // 契約
      setBase(empData.m_paymentstable.base)
      setSalaryType(empData.m_paymentstable.salary_type)
      setStdMonthlyCompensation(empData.m_paymentstable.std_monthly_compensation)
      setCommutingPay(empData.m_paymentstable.commuting_pay)
      setCareInsur(empData.m_paymentstable.care_insur)
      setPensionInsur(empData.m_paymentstable.pension_insur)
      setIncomeTax(empData.m_paymentstable.income_tax)
      setInhabitantTax(empData.m_paymentstable.inhabitant_tax)    
    }
  }, [open])

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <Payment 
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
        health_insur={health_insur}
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
      case 2:
        return <Review />;
      default:
        throw new Error('Unknown step');
    }
  }

  const handleNext = () => {
    console.log(empData)
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  useEffect(() => {
    if (open == 'true') {
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
              </Container>
            </ThemeProvider>

          </DialogContentText>
        </DialogContent>
      </Dialog>

    </div>
  )
}
