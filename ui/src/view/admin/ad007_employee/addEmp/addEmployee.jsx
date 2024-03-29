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
import axios from "axios";

const steps = ['社員情報', '各種保険', '契約情報'];
const theme = createTheme();

export default function AlertDialog(props) {
  const { open, setOpen, empData, dialogTitle } = props
  const baseURL = process.env.REACT_APP_IP_PORT
  // const baseURL = 'http://localhost:8000'
  const [activeStep, setActiveStep] = React.useState(0);
  const [data, setData] = React.useState(0);
  const [empId, setEmpId] = React.useState("")
  // 社員情報 名前 フリガナ
  const [employeeNum, setEmployeeNum] = React.useState("")
  const [name, setName] = React.useState("");
  const [nameKana, setNameKana] = React.useState("");

  // 生年月日　入社日　退社日
  const [birthday, setBirthday] = React.useState("");
  const [inCompany, setInCompany] = React.useState("");
  const [exitCompany, setExitCompany] = React.useState("");

  // 性別、 郵便番号、 都道府県、 市町村、 番地・建物・部屋番号
  const [sex, setSex] = React.useState("");
  const [postCode, setPostCode] = React.useState("");
  const [addressPref, setAddressPref] = React.useState("");
  const [addressCity, setAddressCity] = React.useState("");
  const [addressOther, setAddressOther] = React.useState("");

  // 電話番号 マイナンバー 国籍
  const [tell, setTell] = React.useState("");
  const [mynumber, setMynumber] = React.useState("");
  const [nationality, setNationality] = React.useState("");

  // 週所定労働時間、 雇用保険被保険者番号、 基礎年金番号、 被扶養者  健康保険被保険者整理記号
  const [weeklyWorkTime, setWeeklyWorkTime] = React.useState("");
  const [emplInsurInsuredNum, setEmplInsurInsuredNum] = React.useState("");
  const [pensionNum, setPensionNum] = React.useState("");
  const [formerJob, setFormerJob] = React.useState("");
  const [dependent, setDependent] = React.useState("");
  const [healthInsurNum, setHealthInsurNum] = React.useState("");

  // 雇用保険被保険者資格取得日 雇用保険被保険者資格喪失日 社会保険被保険者資格取得日 社会保険被保険者資格喪失日 備考
  const [emplInsurInsurQualAcqDate, setEmplInsurInsurQualAcqDate] = React.useState("");
  const [emplInsurInsurQualLostDate, setEmplInsurInsurQualLostDate] = React.useState("");
  const [socInsurInsurQualAcqDate, setSocInsurInsurQualAcqDate] = React.useState("");
  const [socInsurInsurQualLostDate, setSocInsurInsurQualLostDate] = React.useState("");
  const [memo, setMemo] = React.useState("");
  
  // 基本給 給与形態 標準月額報酬 通勤手当 健康保険料 介護保険料 厚生年金保険料 所得税 住民税
  const [base, setBase] = React.useState("");
  const [salaryType, setSalaryType] = React.useState("");
  const [stdMonthlyCompensation, setStdMonthlyCompensation] = React.useState("");
  const [commutingPay, setCommutingPay] = React.useState("");
  const [careInsur, setCareInsur] = React.useState("");
  const [pensionInsur, setPensionInsur] = React.useState("");
  const [incomeTax, setIncomeTax] = React.useState("");
  const [inhabitantTax, setInhabitantTax] = React.useState("");
  const [healthInsur, setHealthInsur] = React.useState("");  
  // 各種保険
  const [insurance, setInsurance] = React.useState({
    empl_insur_insured_num: "",
    pension_num: "",
    health_insur_num: "",
    dependent: "",
    empl_insur_insured_num: "",
    empl_insur_insur_qual_acq_date: "",
    empl_insur_insur_qual_lost_date: "",
    soc_insur_insur_qual_acq_date: "",
    soc_insur_insur_qual_lost_date: ""
  });
  // 契約
  const [contract, setContract] = React.useState({
    base: "",
    std_monthly_compensation: "",
    commuting_pay: "",
    health_insur: "",
    care_insur: "",
    pension_insur: "",
    income_tax: "",
    inhabitant_tax: ""
  });

  useEffect(() => {
    console.log(open)
    if (open == true){
      setEmpId(empData.m_employeestable.id)
      // 社員情報
      setEmployeeNum(empData.m_employeestable.employee_num)
      setName(empData.m_employeestable.name)
      setNameKana(empData.m_employeestable.name_kana)
      setBirthday(empData.m_employeestable.birthday)
      setInCompany(empData.m_employeestable.in_company)
      setExitCompany(empData.m_employeestable.exitCompany)
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

      // 契約
      setBase(empData.m_paymentstable.base)
      setSalaryType(empData.m_paymentstable.salary_type)
      setStdMonthlyCompensation(empData.m_paymentstable.std_monthly_compensation)
      setCommutingPay(empData.m_paymentstable.commuting_pay)
      setCareInsur(empData.m_paymentstable.care_insur)
      setPensionInsur(empData.m_paymentstable.pension_insur)
      setIncomeTax(empData.m_paymentstable.income_tax)
      setInhabitantTax(empData.m_paymentstable.inhabitant_tax)
      setHealthInsur(empData.m_paymentstable.health_insur)
      setMemo(empData.m_employeestable.memo)


    }else{
      setEmpId("")
      // 社員情報
      setEmployeeNum("")
      setName("")
      setNameKana("")
      setBirthday("")
      setInCompany("")
      setExitCompany("")
      setSex("")
      setPostCode("")
      setAddressPref("")
      setAddressCity("")
      setAddressOther("")
      setTell("")
      setMynumber("")
      setNationality("")

      // 各種保険
      setWeeklyWorkTime("")
      setEmplInsurInsuredNum("")
      setPensionNum("")
      setFormerJob("")
      setDependent("")
      setHealthInsurNum("")
      setEmplInsurInsurQualAcqDate("")
      setEmplInsurInsurQualLostDate("")
      setSocInsurInsurQualAcqDate("")
      setSocInsurInsurQualLostDate("")
      setMemo("")

      // 契約
      setBase("")
      setSalaryType("")
      setStdMonthlyCompensation("")
      setCommutingPay("")
      setCareInsur("")
      setPensionInsur("")
      setIncomeTax("")
      setInhabitantTax("")
      setHealthInsur("")
    }

    setData(empData)
  }, [open])

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <AddressForm
            dialogFlg={dialogTitle.mode} 
        // 社員情報
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
            formerJob={formerJob}
            setFormerJob={setFormerJob}
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
            empData={insurance} setEmpData={setInsurance} 
        />;
      case 2:
        return <Review empData={contract} setEmpData={setContract} 
        // 契約
        // 基本給 給与形態 標準月額報酬 通勤手当 健康保険料 介護保険料 厚生年金保険料 所得税 住民税
            weeklyWorkTime={weeklyWorkTime}
            setWeeklyWorkTime={setWeeklyWorkTime}            
            base={base}
            setBase={setBase}
            salaryType={salaryType}
            setSalaryType={setSalaryType}
            stdMonthlyCompensation={stdMonthlyCompensation}
            setStdMonthlyCompensation={setStdMonthlyCompensation}
            commutingPay={commutingPay}
            setCommutingPay={setCommutingPay}
            careInsur={careInsur}
            setCareInsur={setCareInsur}
            pensionInsur={pensionInsur}
            setPensionInsur={setPensionInsur}
            incomeTax={incomeTax}
            setIncomeTax={setIncomeTax}
            inhabitantTax={inhabitantTax}
            setInhabitantTax={setInhabitantTax}
            healthInsur={healthInsur}
            setHealthInsur={setHealthInsur}        
            memo={memo}
            setMemo={setMemo}            
        />;
      default:
        throw new Error('Unknown step');
    }
  }

  const handleNext = () => {
    if (activeStep + 1 === steps.length) {
      if (dialogTitle.mode == 1){
        console.log({
          employee_num:employeeNum,
          shift_id:1,
          name:name,
          name_kana:nameKana,
          birthday:birthday,
          in_company:inCompany,
          exit_company:exitCompany,
          sex:sex,
          weekly_work_time:weeklyWorkTime,
          post_code:postCode,
          address_pref:addressPref,
          address_city:addressCity,
          address_other:addressOther,
          tell:tell,
          empl_insur_insured_num:emplInsurInsuredNum,
          pension_num:pensionNum,
          mynumber:mynumber,
          former_job:formerJob,
          dependent:dependent,
          health_insur_num:healthInsurNum,
          nationality:nationality,
          empl_insur_insur_qual_acq_date:emplInsurInsurQualAcqDate,
          empl_insur_insur_qual_lost_date:emplInsurInsurQualLostDate,
          soc_insur_insur_qual_acq_date:socInsurInsurQualAcqDate,
          soc_insur_insur_qual_lost_date:socInsurInsurQualLostDate,
          memo:memo,
          base:Number(base),
          salary_type:Number(salaryType),
          std_monthly_compensation:Number(stdMonthlyCompensation),
          commuting_pay:Number(commutingPay),
          health_insur:Number(healthInsur),
          care_insur:Number(careInsur),
          pension_insur:Number(pensionInsur),
          income_tax:(incomeTax),
          inhabitant_tax:(inhabitantTax)
        })
      axios.put(baseURL + "/ad007_01", {
        employee_id:empId,
        employee_num:employeeNum,
        shift_id:1,
        name:name,
        name_kana:nameKana,
        birthday:birthday,
        in_company:inCompany,
        exit_company:exitCompany,
        sex:sex,
        weekly_work_time:weeklyWorkTime,
        post_code:postCode,
        address_pref:addressPref,
        address_city:addressCity,
        address_other:addressOther,
        tell:tell,
        empl_insur_insured_num:emplInsurInsuredNum,
        pension_num:pensionNum,
        mynumber:mynumber,
        former_job:formerJob,
        dependent:dependent,
        health_insur_num:healthInsurNum,
        nationality:nationality,
        empl_insur_insur_qual_acq_date:emplInsurInsurQualAcqDate,
        empl_insur_insur_qual_lost_date:emplInsurInsurQualLostDate,
        soc_insur_insur_qual_acq_date:socInsurInsurQualAcqDate,
        soc_insur_insur_qual_lost_date:socInsurInsurQualLostDate,
        memo:memo,
        base:base,
        salary_type:salaryType,
        std_monthly_compensation:stdMonthlyCompensation,
        commuting_pay:commutingPay,
        health_insur:healthInsur,
        care_insur:careInsur,
        pension_insur:pensionInsur,
        income_tax:incomeTax,
        inhabitant_tax:inhabitantTax
      }).then((res) => {

      })
    }else if(dialogTitle.mode == 2){ 
      console.log({
        employee_num:employeeNum,
        shift_id:1,
        name:name,
        name_kana:nameKana,
        birthday:birthday,
        in_company:inCompany,
        sex:Number(sex),
        weekly_work_time:weeklyWorkTime,
        post_code:postCode,
        address_pref:addressPref,
        address_city:addressCity,
        address_other:addressOther,
        tell:tell,
        empl_insur_insured_num:emplInsurInsuredNum,
        pension_num:pensionNum,
        mynumber:mynumber,
        former_job:formerJob,
        dependent:Number(dependent),
        health_insur_num:healthInsurNum,
        nationality:nationality,
        empl_insur_insur_qual_acq_date:emplInsurInsurQualAcqDate,
        empl_insur_insur_qual_lost_date:emplInsurInsurQualLostDate,
        soc_insur_insur_qual_acq_date:socInsurInsurQualAcqDate,
        soc_insur_insur_qual_lost_date:socInsurInsurQualLostDate,
        memo:memo,
        base:Number(base),
        salary_type:Number(salaryType),
        std_monthly_compensation:Number(stdMonthlyCompensation),
        commuting_pay:Number(commutingPay),
        health_insur:Number(healthInsur),
        care_insur:Number(careInsur),
        pension_insur:Number(pensionInsur),
        income_tax:Number(incomeTax),
        inhabitant_tax:Number(inhabitantTax)
      })
      axios.post(baseURL + "/ad007_02/", { 
        employee_num:employeeNum,
        shift_id:1,
        name:name,
        name_kana:nameKana,
        birthday:birthday,
        in_company:inCompany,
        sex:Number(sex),
        weekly_work_time:weeklyWorkTime,
        post_code:postCode,
        address_pref:addressPref,
        address_city:addressCity,
        address_other:addressOther,
        tell:tell,
        empl_insur_insured_num:emplInsurInsuredNum,
        pension_num:pensionNum,
        mynumber:mynumber,
        former_job:"test",
        dependent:Number(dependent),
        health_insur_num:healthInsurNum,
        nationality:nationality,
        empl_insur_insur_qual_acq_date:emplInsurInsurQualAcqDate,
        empl_insur_insur_qual_lost_date:emplInsurInsurQualLostDate,
        soc_insur_insur_qual_acq_date:socInsurInsurQualAcqDate,
        soc_insur_insur_qual_lost_date:socInsurInsurQualLostDate,
        memo:memo,
        base:Number(base),
        salary_type:Number(salaryType),
        std_monthly_compensation:Number(stdMonthlyCompensation),
        commuting_pay:Number(commutingPay),
        health_insur:Number(healthInsur),
        care_insur:Number(careInsur),
        pension_insur:Number(pensionInsur),
        income_tax:Number(incomeTax),
        inhabitant_tax:Number(inhabitantTax)
      }).then((res) => {
        console.log(res)
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
