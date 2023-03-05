from fastapi import APIRouter, FastAPI, HTTPException
from models.m02_employees import m_employees, m_employeestable
from models.t03_payments import t_payments, t_paymentstable
from sqlalchemy.orm import session
from sqlalchemy import func, desc, extract
from typing import List  # ネストされたBodyを定義するために必要
from db import session  # DBと接続するためのセッション
from datetime import datetime, time, date, timedelta, timezone
import json

router = APIRouter()

@router.get("/t_payments_emp/")
async def t_payments_get(employee_id: int):
    t_payments_get = session.query(m_employeestable, t_paymentstable)\
                .join(m_employeestable, m_employeestable.id == t_paymentstable.employee_id)\
                .filter(t_paymentstable.employee_id == employee_id)\
                .filter(t_paymentstable.visible_flg == 1)\
                .order_by(desc(t_paymentstable.payment_date))\
                .all()
    return t_payments_get

@router.get("/t_payments_comp/")
async def t_payments_get(YYYY: int, MM: int):
    t_payments_get = session.query(m_employeestable, t_paymentstable)\
                .join(m_employeestable, m_employeestable.id == t_paymentstable.employee_id)\
                .filter(extract('year',t_paymentstable.payment_date) == YYYY )\
                .filter(extract('month',t_paymentstable.payment_date) == MM )\
                .filter(t_paymentstable.visible_flg == 1)\
                .order_by(m_employeestable.employee_num)\
                .all()
    return t_payments_get

@router.put("/t_payments_upd/")
async def t_payments_upd(item:t_payments):
    if item.payment_date == None:
        raise HTTPException(status_code=400, detail="t03-e001")
        return
    t_delta = timedelta(hours=9)
    JST = timezone(t_delta, 'JST')
    get_time = datetime.now(JST)
    pay = session.query(t_paymentstable)\
            .filter(t_paymentstable.id == item.id)\
            .filter(t_paymentstable.employee_id == item.employee_id)\
            .first()
    pay.visible_flg = 1
    pay.payment_date = item.payment_date
    pay.work_date = item.work_date
    pay.working_hours = item.working_hours
    pay.overtime_work = item.overtime_work
    pay.holiday_work = item.holiday_work
    pay.nighttime_work = item.nighttime_work
    pay.employee_id = item.employee_id
    pay.income = item.income
    pay.base = item.base
    pay.overtime_pay = item.overtime_pay
    pay.nighttime_pay = item.nighttime_pay
    pay.holiday_pay = item.holiday_pay
    pay.commuting_pay = item.commuting_pay
    pay.health_insur = item.health_insur
    pay.care_insur = item.care_insur
    pay.pension_insur = item.pension_insur
    pay.employee_insur = item.employee_insur
    pay.income_tax = item.income_tax
    pay.inhabitant_tax = item.inhabitant_tax
    pay.adj_pay = item.adj_pay
    pay.other_allowance_1 = item.other_allowance_1
    pay.other_allowance_2 = item.other_allowance_2
    pay.other_allowance_3 = item.other_allowance_3
    pay.other_allowance_4 = item.other_allowance_4
    pay.other_allowance_5 = item.other_allowance_5
    pay.others_deduction = item.others_deduction
    pay.total_deduction = item.total_deduction
    pay.total_pay = item.total_pay
    pay.update_at = get_time
    session.commit()
    session.close()
    return

@router.post("/t_payments_ins/")
async def t_payments_ins(item:t_payments):
    if item.payment_date == None:
        raise HTTPException(status_code=400, detail="t03-e001")
        return
    t_delta = timedelta(hours=9)
    JST = timezone(t_delta, 'JST')
    get_time = datetime.now(JST)
    pay = t_paymentstable()
    pay.visible_flg = 1
    pay.employee_id = item.employee_id
    pay.payment_date = item.payment_date
    pay.work_date = item.work_date
    pay.working_hours = item.working_hours
    pay.overtime_work = item.overtime_work
    pay.holiday_work = item.holiday_work
    pay.nighttime_work = item.nighttime_work
    pay.income = item.income
    pay.base = item.base
    pay.overtime_pay = item.overtime_pay
    pay.nighttime_pay = item.nighttime_pay
    pay.holiday_pay = item.holiday_pay
    pay.commuting_pay = item.commuting_pay
    pay.health_insur = item.health_insur
    pay.care_insur = item.care_insur
    pay.pension_insur = item.pension_insur
    pay.employee_insur = item.employee_insur
    pay.income_tax = item.income_tax
    pay.inhabitant_tax = item.inhabitant_tax
    pay.adj_pay = item.adj_pay
    pay.other_allowance_1 = item.other_allowance_1
    pay.other_allowance_2 = item.other_allowance_2
    pay.other_allowance_3 = item.other_allowance_3
    pay.other_allowance_4 = item.other_allowance_4
    pay.other_allowance_5 = item.other_allowance_5
    pay.others_deduction = item.others_deduction
    pay.total_deduction = item.total_deduction
    pay.total_pay = item.total_pay
    pay.create_at = get_time
    session.add(pay)
    session.commit()
    session.close()
    return 

    # 論理削除API
@router.put("/payments_del/")
async def payments_del(item:t_payments):
    t_delta = timedelta(hours=9)
    JST = timezone(t_delta, 'JST')
    get_time = datetime.now(JST)
    record = session.query(t_paymentstable)\
                .filter(t_paymentstable.id == item.id).first()
    record.visible_flg = 0
    record.create_at = get_time
    session.commit()
    session.close()
    return record