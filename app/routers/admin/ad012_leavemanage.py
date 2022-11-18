from fastapi import APIRouter, FastAPI, HTTPException
from models.m02_employees import m_employees, m_employeestable
from models.m07_leavemanage import m_leavemanage, m_leavemanagetable
from models.admin.ad012_leavemanage import ad012
from sqlalchemy.orm import session
from sqlalchemy import func
from typing import List  # ネストされたBodyを定義するために必要
from db import session  # DBと接続するためのセッション
from datetime import datetime, time, date, timedelta, timezone
import json

router = APIRouter()

@router.get("/ad012_01/")
async def ad012_01_get():
    m_leavemanage = m_leavemanagetable()
    t_delta = timedelta(hours=9)
    JST = timezone(t_delta, 'JST')
    get_time = datetime.now(JST)
    get_request = session.query(m_employeestable.id,
                                m_employeestable.name,
                                m_leavemanagetable.employee_id,
                                func.sum(m_leavemanagetable.remain_day).label('remain_day'),
                                func.sum(m_leavemanagetable.add_day).label('add_day'))\
                .join(m_employeestable, m_employeestable.id == m_leavemanagetable.employee_id)\
                .filter(m_leavemanagetable.start <= get_time)\
                .filter(m_leavemanagetable.end >= get_time)\
                .group_by(m_leavemanagetable.employee_id, m_employeestable.id, m_employeestable.name).all()
    session.close
    return get_request