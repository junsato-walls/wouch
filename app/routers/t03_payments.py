from fastapi import APIRouter, FastAPI, HTTPException
from models.m02_employees import m_employees, m_employeestable
from models.t03_payments import t_payments, t_paymentstable
from sqlalchemy.orm import session
from typing import List  # ネストされたBodyを定義するために必要
from db import session  # DBと接続するためのセッション

router = APIRouter()

@router.get("/t_payments")
async def t_payments(employee_id: int):
    t_payments = session.query(m_employeestable, t_paymentstable)\
                .join(m_employeestable, m_employeestable.id == t_paymentstable.employee_id)\
                .filter(t_paymentstable.employee_id = employee_id)
                .all()
    return t_payments

@router.put("/t_payments_in")
async def insert_m_companies(item:t_payments):
    pay = session.query(t_paymentstable)\
            .filter(t_paymentstable.id = item.id)
            .filter(t_paymentstable.employee_id == item.employee_id).first()
    pay.employee_id = item.employee_id
    pay.payment_date = item.payment_date
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
    pay.withholding_tax = item.withholding_tax
    pay.adj_pay = item.adj_pay
    pay.others = item.others
    session.commit()
    session.close()
    return

@router.post("/t_payments_up")
async def update_m_companies(item:t_payments):
    pay = t_paymentstable()
    pay.employee_id = item.employee_id
    pay.payment_date = item.payment_date
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
    pay.withholding_tax = item.withholding_tax
    pay.adj_pay = item.adj_pay
    pay.others = item.others
    session.add(pay)
    session.commit()
    session.close()
    return
