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
async def tc002_get(employee_id: int):
    ymd = date.today()
    remain_day = 0
    get_request = session.query(t_leaverequesttable)\
                    .filter(t_leaverequesttable.employee_id == employee_id)\
                    .filter(t_leaverequesttable.target_date > ymd + timedelta(days=-90))\
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

@router.post("/tc002_01/")
async def tc002_post(item:tc002):
    t_delta = timedelta(hours=9)
    JST = timezone(t_delta, 'JST')
    get_time = datetime.now(JST)
    req = t_leaverequesttable()
    req.employee_id = item.employee_id
    req.request_date = get_time
    req.target_date = item.target_date
    req.subm_st = 0
    req.create_at = get_time
    # req.create_acc = item.acc_id
    session.add(req)
    session.commit()
    session.close()
    return
