from fastapi import APIRouter, FastAPI, HTTPException
from models.m02_employees import m_employees, m_employeestable
from models.m03_payments import m_payments, m_paymentstable
from models.m07_leavemanage import m_leavemanage, m_leavemanagetable
from models.admin.ad007_employee import ad007
from sqlalchemy.orm import session
from typing import List  # ネストされたBodyを定義するために必要
from db import session  # DBと接続するためのセッション
from datetime import datetime, time, date, timedelta, timezone
from dateutil.relativedelta import relativedelta
import json

router = APIRouter()

@router.put("/ad007_01/")
async def ad007_01_put(item:ad007):
    m_employees = m_employeestable()
    m_payments = m_paymentstable()
    t_delta = timedelta(hours=9)
    JST = timezone(t_delta, 'JST')
    get_time = datetime.now(JST)
    emp = session.query(m_employeestable)\
            .filter(m_employeestable.id == item.employee_id).first()
    emp.employee_num = item.employee_num
    emp.idm = item.idm
    emp.shift_id = item.shift_id
    emp.name = item.name
    emp.name_kana = item.name_kana
    emp.birthday = item.birthday
    emp.in_company = item.in_company
    emp.exit_company = item.exit_company
    emp.sex = item.sex
    emp.weekly_work_time = item.weekly_work_time
    emp.post_code = item.post_code
    emp.address_pref = item.address_pref
    emp.address_city = item.address_city
    emp.address_other = item.address_other
    emp.tell = item.tell
    emp.empl_insur_insured_num = item.empl_insur_insured_num
    emp.pension_num = item.pension_num
    emp.mynumber = item.mynumber
    emp.former_job = item.former_job
    emp.dependent = item.dependent
    emp.health_insur_num = item.health_insur_num
    emp.nationality = item.nationality
    emp.empl_insur_insur_qual_acq_date = item.empl_insur_insur_qual_acq_date
    emp.empl_insur_insur_qual_lost_date = item.empl_insur_insur_qual_lost_date
    emp.soc_insur_insur_qual_acq_date = item.soc_insur_insur_qual_acq_date
    emp.soc_insur_insur_qual_lost_date = item.soc_insur_insur_qual_lost_date
    emp.start = item.start
    emp.end = item.end
    emp.memo = item.memo
    emp.update_at = get_time
    session.commit()
    session.close()
    # emp.update_acc = get_time
    pay = session.query(m_paymentstable)\
            .filter(m_paymentstable.employee_id == item.employee_id).first()
    pay.base = item.base
    pay.salary_type = item.salary_type
    pay.std_monthly_compensation = item.std_monthly_compensation
    pay.commuting_pay = item.commuting_pay
    pay.health_insur = item.health_insur
    pay.care_insur = item.care_insur
    pay.pension_insur = item.pension_insur
    pay.income_tax = item.income_tax
    pay.inhabitant_tax = item.inhabitant_tax
    pay.start = get_time
    pay.update_at = get_time
    # pay.update_acc = item.id
    session.commit()
    session.close()
    return 

@router.post("/ad007_02/")
async def ad007_01_post(item:ad007):
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

    current_id = m_employees.id
    in_comp = m_employees.in_company
    create_leaves(get_time, current_id, in_comp)

    m_payments.employee_id = current_id
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
    session.close()
    return

def create_leaves(get_time, current_id, in_comp):
    start = in_comp + relativedelta(months=6)
    end = start + relativedelta(years=2) - timedelta(days=1)
    for i in range(0,51):
        m_leavemanage = m_leavemanagetable()
        if i < 10:
            m_leavemanage.remain_day = 10 + i
            m_leavemanage.add_day = 10 + i
        elif i >= 10:
            m_leavemanage.remain_day = 20
            m_leavemanage.add_day = 20
        m_leavemanage.employee_id = current_id
        m_leavemanage.start = start + relativedelta(years=i)
        m_leavemanage.end = end + relativedelta(years=i)
        m_leavemanage.create_at = get_time
        m_leavemanage.create_acc = None
        session.add(m_leavemanage)
    session.commit()
    session.close()
    return '完了'