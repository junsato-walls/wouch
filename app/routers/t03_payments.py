from fastapi import APIRouter, FastAPI, HTTPException
from models.m02_employees import m_employees, m_employeestable
from models.t03_payments import t_payments, t_paymentstable
from sqlalchemy.orm import session
from typing import List  # ネストされたBodyを定義するために必要
from db import session  # DBと接続するためのセッション


router = APIRouter()


@router.get("/t_payments")
async def t_payments():
    t_payments = session.query(m_employeestable, t_paymentstable)\
    .join(m_employeestable, m_employeestable.id == t_paymentstable.employee_id).all()

    return t_payments

# @router.put("/m_companies_i")
# async def insert_m_companies():
#     pass

# @router.post("/m_companies_u")
# async def update_m_companies():
#     pass
