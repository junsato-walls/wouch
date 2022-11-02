from fastapi import APIRouter, FastAPI, HTTPException
from models.m02_employees import m_employees, m_employeestable
from models.m03_payments import m_payments, m_paymentstable
from models.admin.ad007_employee import ad007
from sqlalchemy.orm import session
from typing import List  # ネストされたBodyを定義するために必要
from db import session  # DBと接続するためのセッション
from datetime import datetime, time, date, timedelta, timezone
import json

router = APIRouter()


@router.put("/ad007_01/")
async def ad007_01(item:ad007):
    m_employees = m_employeestable()
    m_payments = m_paymentstable()
    t_delta = timedelta(hours=9)
    JST = timezone(t_delta, 'JST')
    get_time = datetime.now(JST)
    if item.emp_upd_flg == 1:
        m_employees.employee_num = item.employee_num
        m_employees.idm = item.idm
        m_employees.shift_id = item.shift_id
        m_employees.name = item.name
        m_employees.name_kana = item.name_kana
        m_employees.birthday = item.birthday
        m_employees.in_company = item.in_company
        m_employees.exit_company = item.exit_company
        m_employees.sex = item.sex
        m_employees.weekly_work_time = item.weekly_work_time
        m_employees.post_code = item.post_code
        m_employees.address_pref = item.address_pref
        m_employees.address_city = item.address_city
        m_employees.address_other = item.address_other
        m_employees.tell = item.tell
        m_employees.empl_insur_insured_num = item.empl_insur_insured_num
        m_employees.pension_num = item.pension_num
        m_employees.mynumber = item.mynumber
        m_employees.former_job = item.former_job
        m_employees.dependent = item.dependent
        m_employees.health_insur_num = item.health_insur_num
        m_employees.nationality = item.nationality
        m_employees.empl_insur_insur_qual_acq_date = item.empl_insur_insur_qual_acq_date
        m_employees.empl_insur_insur_qual_lost_date = item.empl_insur_insur_qual_lost_date
        m_employees.soc_insur_insur_qual_acq_date = item.soc_insur_insur_qual_acq_date
        m_employees.soc_insur_insur_qual_lost_date = item.soc_insur_insur_qual_lost_date
        m_employees.start = item.start
        m_employees.end = item.end
        m_employees.memo = item.memo
        m_employees.update_at = get_time
        m_employees.update_acc = get_time
        session.commit()

    if pay_upd_flg == 1:
        m_paymentstable.end
        session.commit()

        # m_payments.employee_id = m_employeestable.id
        m_payments.base = item.base
        m_payments.salary_type = item.salary_type
        m_payments.std_monthly_compensation = item.std_monthly_compensation
        m_payments.commuting_pay = item.commuting_pay
        m_payments.health_insur = item.health_insur
        m_payments.care_insur = item.care_insur
        m_payments.pension_insur = item.pension_insur
        m_payments.income_tax = item.income_tax
        m_payments.inhabitant_tax = item.inhabitant_tax
        m_payments.update_at = get_time
        m_payments.update_acc = item.id
        session.add(m_payments)
        session.commit()

    param = {
        # 'name': emp[0].name,
        # 'employee_num': emp[0].employee_num,
        'time': get_time.strftime('%H:%M:%S')
    }
    session.close
    return 1

@router.post("/ad007_01/")
async def ad007_01(item:ad007):
    m_employees = m_employeestable()
    m_payments = m_paymentstable()
    t_delta = timedelta(hours=9)
    JST = timezone(t_delta, 'JST')
    get_time = datetime.now(JST)
    m_employees.employee_num = item.employee_num
    m_employees.idm = item.idm
    m_employees.shift_id = item.shift_id
    m_employees.name = item.name
    m_employees.name_kana = item.name_kana
    m_employees.birthday = item.birthday
    m_employees.in_company = item.in_company
    m_employees.exit_company = item.exit_company
    m_employees.sex = item.sex
    m_employees.weekly_work_time = item.weekly_work_time
    m_employees.post_code = item.post_code
    m_employees.address_pref = item.address_pref
    m_employees.address_city = item.address_city
    m_employees.address_other = item.address_other
    m_employees.tell = item.tell
    m_employees.empl_insur_insured_num = item.empl_insur_insured_num
    m_employees.pension_num = item.pension_num
    m_employees.mynumber = item.mynumber
    m_employees.former_job = item.former_job
    m_employees.dependent = item.dependent
    m_employees.health_insur_num = item.health_insur_num
    m_employees.nationality = item.nationality
    m_employees.empl_insur_insur_qual_acq_date = item.empl_insur_insur_qual_acq_date
    m_employees.empl_insur_insur_qual_lost_date = item.empl_insur_insur_qual_lost_date
    m_employees.soc_insur_insur_qual_acq_date = item.soc_insur_insur_qual_acq_date
    m_employees.soc_insur_insur_qual_lost_date = item.soc_insur_insur_qual_lost_date
    m_employees.start = item.start
    m_employees.end = item.end
    m_employees.memo = item.memo
    m_employees.create_at = get_time
    m_employees.create_acc = item.id
    session.add(m_employees)
    session.commit()

    # m_payments.employee_id = m_employeestable.id
    m_payments.base = item.base
    m_payments.salary_type = item.salary_type
    m_payments.std_monthly_compensation = item.std_monthly_compensation
    m_payments.commuting_pay = item.commuting_pay
    m_payments.health_insur = item.health_insur
    m_payments.care_insur = item.care_insur
    m_payments.pension_insur = item.pension_insur
    m_payments.income_tax = item.income_tax
    m_payments.inhabitant_tax = item.inhabitant_tax
    m_payments.create_at = get_time
    m_payments.create_acc = item.id
    session.add(m_payments)
    session.commit()

    param = {
        # 'name': emp[0].name,
        # 'employee_num': emp[0].employee_num,
        'time': get_time.strftime('%H:%M:%S')
    }
    session.close
    return 1
