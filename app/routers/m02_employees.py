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

# @router.put("/m_companies_i")
# async def insert_m_companies():
#     pass

# @router.post("/m_companies_u")
# async def update_m_companies():
#     pass
