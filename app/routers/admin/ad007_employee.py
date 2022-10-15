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


@router.post("/ad007/01")
async def ad007_01(item:ad007):
    t_delta = datetime.timedelta(hours=9)
    JST = datetime.timezone(t_delta, 'JST')
    today = datetime.now(JST)
    m_employeestable.employee_num = item.employee_num
    m_employeestable.idm = item.idm
    m_employeestable.shift_id = item.shift_id
    m_employeestable.name = item.name
    m_employeestable.name_kana = item.name_kana
    m_employeestable.birthday = item.birthday
    m_employeestable.in_company = item.in_company
    m_employeestable.exit_company = item.exit_company
    m_employeestable.sex = item.sex
    m_employeestable.weekly_work_time = item.weekly_work_time
    m_employeestable.post_code = item.post_code
    m_employeestable.address_pref = item.address_pref
    m_employeestable.address_city = item.address_city
    m_employeestable.address_other = item.address_other
    m_employeestable.tell = item.tell
    m_employeestable.empl_insur_insured_num = item.empl_insur_insured_num
    m_employeestable.pension_num = item.pension_num
    m_employeestable.mynumber = item.mynumber
    m_employeestable.former_job = item.former_job
    m_employeestable.dependent = item.dependent
    m_employeestable.health_insur_num = item.health_insur_num
    m_employeestable.nationality = item.nationality
    m_employeestable.empl_insur_insur_qual_acq_date = item.empl_insur_insur_qual_acq_date
    m_employeestable.empl_insur_insur_qual_lost_date = item.empl_insur_insur_qual_lost_date
    m_employeestable.soc_insur_insur_qual_acq_date = item.soc_insur_insur_qual_acq_date
    m_employeestable.soc_insur_insur_qual_lost_date = item.soc_insur_insur_qual_lost_date
    m_employeestable.start = item.start
    m_employeestable.end = item.end
    m_employeestable.memo = item.memo
    m_employeestable.create_at = today
    m_employeestable.create_acc = item.id
    m_employeestable.update_at = JST
    m_employeestable.update_acc = JST
    session.add(m_employeestable)
    session.commit()

    m_paymentstable.employee_id = m_employeestable.id
    m_paymentstable.base = item.base
    m_paymentstable.salary_type = item.salary_type
    m_paymentstable.std_monthly_compensation = item.std_monthly_compensation
    m_paymentstable.commuting_pay = item.commuting_pay
    m_paymentstable.health_insur = item.health_insur
    m_paymentstable.care_insur = item.care_insur
    m_paymentstable.pension_insur = item.pension_insur
    m_paymentstable.income_tax = item.income_tax
    m_paymentstable.inhabitant_tax = item.inhabitant_tax
    m_paymentstable.create_at = today
    m_paymentstable.create_acc = item.id
    m_paymentstable.update_at = JST
    m_paymentstable.update_acc = JST
    session.add(m_paymentstable)
    session.commit()

    param = {
        'name': emp[0].name,
        'employee_num': emp[0].employee_num,
        'time': get_time.strftime('%H:%M:%S')
    }
    return JST