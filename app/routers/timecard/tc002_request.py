from fastapi import APIRouter, FastAPI, HTTPException
from models.m07_leavemanage import m_leavemanage, m_leavemanagetable
from models.t02_leaverequest import t_leaverequest, t_leaverequesttable
from models.timecard.tc002_request import tc002
from sqlalchemy.orm import session
from typing import List  # ネストされたBodyを定義するために必要
from db import session  # DBと接続するためのセッション
from datetime import datetime, time, date, timedelta, timezone
import json

router = APIRouter()

@router.get("/tc002_01/")
async def tc002_01(employee_id: int):
    ymd = date.today()
    remain_day = 0
    get_request = session.query(t_leaverequesttable)\
                    .filter(t_leaverequesttable.employee_id == employee_id)\
                    .filter(t_leaverequesttable.target_date > ymd + timedelta(days=-30))\
                    .all()
    session.close
    get_remain = session.query(m_leavemanagetable)\
                    .filter(m_leavemanagetable.employee_id == employee_id)\
                    .filter(m_leavemanagetable.start < ymd)\
                    .filter(m_leavemanagetable.end > ymd)\
                    .all()
    session.close
    get_add = session.query(m_leavemanagetable)\
                    .order_by(m_leavemanagetable.start)\
                    .filter(m_leavemanagetable.employee_id == employee_id)\
                    .filter(m_leavemanagetable.start > ymd)\
                    .first()
    session.close
    for i in range(len(get_remain)):
        remain_day = remain_day + get_remain[i].remain_day
    param = {
        "request": get_request,
        "remain_day": remain_day,
        "add_date": get_add.start,
        "add_at": get_add.add_day
    }
    return param