from fastapi import APIRouter, FastAPI, HTTPException
from models.m02_employees import m_employees, m_employeestable
from models.m07_manage import m_leavemanage, m_leavemanagetable
from sqlalchemy.orm import session
from typing import List  # ネストされたBodyを定義するために必要
from db import session  # DBと接続するためのセッション


router = APIRouter()

@router.get("/m_leavemanage",)
async def m_leavemanage():
    get = session.query(m_employeestable,m_leavemanagetable)\
    .join(m_employeestable, m_employeestable.id == m_leavemanagetable.employee_id).all()
    return get