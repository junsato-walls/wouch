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
import AddressForm from './EmployeeForm';
import PaymentForm from './InsuranceForm';
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
    setData(empData)
  }, [open])

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <AddressForm 
        // 給与・手当
        paymentDate={paymentDate} 
        setPaymentDate={setPaymentDate} 
        income={income} 
        setIncome={setIncome}
        base={base} 
        setBase={setBase} 

        overtimePay={overtimePay} 
        setOvertimePay={setOvertimePay} 
        employeeNum={holidayPay} 
        employeeNum={setholidayPay} 
        employeeNum={commutingPay} 
        employeeNum={setCommutingPay} 
        employeeNum={adjPay} 
        employeeNum={setAdjPay} 

  //         // 支払日 支払給与　基本給 

  // // 時間外労働手当 深夜手当 休日手当 通勤手当 調整手当  
  // const [overtimePay, setOvertimePay] = React.useState("");
  // const [nighttimePay, setNighttimePay] = React.useState("");
  // const [holidayPay, setholidayPay] = React.useState("");
  // const [commutingPay, setCommutingPay] = React.useState("");
  // const [adjPay, setAdjPay] = React.useState("");

        // 社員番号 名前 フリガナ
            employeeNum={employeeNum} 
            setEmployeeNum={setEmployeeNum} 
            name={name}
            setName={setName}
            nameKana={nameKana}
            setNameKana={setNameKana}
        // 生年月日　入社日　退社日
            birthday={birthday}
            setBirthday={setBirthday}
            inCompany={inCompany}
            setInCompany={setInCompany}
            exitCompany={exitCompany}
            setExitCompany={setExitCompany}
        // 性別、 郵便番号、 都道府県、 市町村、 番地・建物・部屋番号
            sex={sex}
            setSex={setSex}
            postCode={postCode}
            setPostCode={setPostCode}
            addressPref={addressPref}
            setAddressPref={setAddressPref}
            addressCity={addressCity}
            setAddressCity={setAddressCity}
            addressOther={addressOther}
            setAddressOther={setAddressOther}
        // 電話番号 マイナンバー 国籍
            tell={tell}
            setTell={setTell}
            mynumber={mynumber}
            setMynumber={setMynumber}
            nationality={nationality}
            setNationality={setNationality}
        />;
      case 1:
        return <PaymentForm 
        // 各種保険
        // 週所定労働時間、 雇用保険被保険者番号、 基礎年金番号、 被扶養者  健康保険被保険者整理記号
            weeklyWorkTime={weeklyWorkTime}
            setWeeklyWorkTime={setWeeklyWorkTime}
            emplInsurInsuredNum={emplInsurInsuredNum}
            setEmplInsurInsuredNum={setEmplInsurInsuredNum}
            pensionNum={pensionNum}
            setPensionNum={setPensionNum}
            formerJob={formerJob}
            setFormerJob={setFormerJob}
            dependent={dependent}
            setDependent={setDependent}
            healthInsurNum={healthInsurNum}
            setHealthInsurNum={setHealthInsurNum}
        // 雇用保険被保険者資格取得日 雇用保険被保険者資格喪失日 社会保険被保険者資格取得日 社会保険被保険者資格喪失日 備考
            emplInsurInsurQualAcqDate={emplInsurInsurQualAcqDate}
            setEmplInsurInsurQualAcqDate={setEmplInsurInsurQualAcqDate}
            emplInsurInsurQualLostDate={emplInsurInsurQualLostDate}
            setEmplInsurInsurQualLostDate={setEmplInsurInsurQualLostDate}
            socInsurInsurQualAcqDate={socInsurInsurQualAcqDate}
            setSocInsurInsurQualAcqDate={setSocInsurInsurQualAcqDate}
            socInsurInsurQualLostDate={socInsurInsurQualLostDate}
            setSocInsurInsurQualLostDate={setSocInsurInsurQualLostDate}
            memo={memo}
            setMemo={setMemo}            
        empData={insurance} setEmpData={setInsurance} 
        />;
      case 2:
        return <Review empData={contract} setEmpData={setContract} />;
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
