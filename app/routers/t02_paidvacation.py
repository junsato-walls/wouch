from fastapi import APIRouter, FastAPI, HTTPException
from models.m02_employees import m_employees, m_employeestable
from models.t02_paidvacation import t_paidvacation, t_paidvacationtable
from sqlalchemy.orm import session
from typing import List  # ネストされたBodyを定義するために必要
from db import session  # DBと接続するためのセッション


router = APIRouter()


@router.get("/t_paidvacation",)
async def t_paidvacation():
    t_paidvacation = session.query(m_employeestable, t_paidvacationtable)\
    .join(m_employeestable, m_employeestable.id == t_paidvacationtable.employee_id).all()

    return t_paidvacation

# @router.put("/m_companies_i")
# async def insert_m_companies():
#     pass

# @router.post("/m_companies_u")
# async def update_m_companies():
#     pass
