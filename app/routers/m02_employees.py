from fastapi import APIRouter, FastAPI, HTTPException
from models.m02_employees import m_employees, m_employeestable
from models.m03_payments import m_payments, m_paymentstable
from sqlalchemy.orm import session
from typing import List  # ネストされたBodyを定義するために必要
from db import session  # DBと接続するためのセッション


router = APIRouter()

@router.get("/m_employees",)
async def m_employees():
    m_employees = session.query(m_employeestable,m_paymentstable)\
    .join(m_employeestable, m_employeestable.id == m_paymentstable.employee_id).all()
    return m_employees

@router.put("/m_companies_i")
async def insert_m_employees():
    m_employees = session.query(m_employeestable,m_paymentstable)\
    .join(m_employeestable, m_employeestable.id == m_paymentstable.employee_id).all()
    return m_employees_i

async def insert_m_companies(m_employees):
    t_delta = datetime.timedelta(hours=9)
    JST = datetime.timezone(t_delta, 'JST')
    m_employees = m_employeestable()

    m_employees.employee_num = employee_num
    m_employees.idm = idm
    m_employees.shift_id = shift_id
    m_employees.name = name
    m_employees.name_kana = name_kana
    m_employees.birthday = birthday
    m_employees.in_company = in_company
    m_employees.exit_company = exit_company
    m_employees.sex = sex
    m_employees.weekly_work_time = weekly_work_time
    m_employees.post_code = post_code
    m_employees.address_pref = address_pref
    m_employees.address_city = address_city
    m_employees.address_other = address_other
    m_employees.tell = tell
    m_employees.empl_insur_insured_num = empl_insur_insured_num
    m_employees.pension_num = pension_num
    m_employees.mynumber = mynumber
    m_employees.former_job = former_job
    m_employees.dependent = dependent
    m_employees.health_insur_num = health_insur_num
    m_employees.nationality = nationality
    m_employees.empl_insur_insur_qual_acq_date = empl_insur_insur_qual_acq_date
    m_employees.empl_insur_insur_qual_lost_date = empl_insur_insur_qual_lost_date
    m_employees.soc_insur_insur_qual_acq_date = soc_insur_insur_qual_acq_date
    m_employees.soc_insur_insur_qual_lost_date = soc_insur_insur_qual_lost_date
    m_employees.start = start
    m_employees.end = end
    m_employees.create_at = create_at
    m_employees.create_acc = create_acc
    m_employees.update_at = update_at
    m_employees.update_acc = update_acc
    m_employees.memo = memo

    m_employees.create_at = datetime.datetime.now(JST)
    m_employees.update_at = datetime.datetime.now(JST)


# @router.post("/m_companies_u")
# async def update_m_companies():
#     pass
