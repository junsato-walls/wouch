from fastapi import APIRouter, FastAPI, HTTPException
from models.m02_employees import m_employees, m_employeestable
from models.t02_leaverequest import t_leaverequest, t_leaverequesttable
from sqlalchemy.orm import session
from typing import List  # ネストされたBodyを定義するために必要
from db import session  # DBと接続するためのセッション


router = APIRouter()


@router.get("/t_leaverequest")
async def t_leaverequest():
    t_leaverequest = session.query(m_employeestable, t_leaverequesttable)\
    .join(m_employeestable, m_employeestable.id == t_leaverequesttable.employee_id).all()
    return t_leaverequest

# @router.put("/m_companies_i")
# async def insert_m_companies():
#     pass

# @router.post("/m_companies_u")
# async def update_m_companies():
#     pass
