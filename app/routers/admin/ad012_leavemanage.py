from fastapi import APIRouter, FastAPI, HTTPException
from models.m02_employees import m_employees, m_employeestable
from models.m07_leavemanage import m_leavemanage, m_leavemanagetable
from models.admin.ad012_leavemanage import ad012
from sqlalchemy.orm import session
from sqlalchemy import func ,desc
from typing import List  # ネストされたBodyを定義するために必要
from db import session  # DBと接続するためのセッション
from datetime import datetime, time, date, timedelta, timezone
import json

router = APIRouter()

@router.get("/ad012_01/")
async def ad012_01_get():
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

@router.put("/leave_plus/")
async def leave_plus(item:ad012):
    t_delta = timedelta(hours=9)
    JST = timezone(t_delta, 'JST')
    get_time = datetime.now(JST)
    day = datetime.combine(date.today(),time(0,0,0))
    ymd = day.astimezone()
    plus = session.query(m_leavemanagetable)\
            .filter(m_leavemanagetable.employee_id == item.employee_id)\
            .filter(m_leavemanagetable.start < ymd)\
            .filter(m_leavemanagetable.end > ymd)\
            .filter(m_leavemanagetable.add_day != m_leavemanagetable.remain_day)\
            .order_by(desc(m_leavemanagetable.start)).first()
    if plus == None:
        raise HTTPException(status_code=400, detail="ad012-e001")
        return
    plus.remain_day = plus.remain_day + 1
    plus.update_at = get_time
    # plus.update_acc = item.acc_id
    session.commit()
    session.close()
    return

@router.put("/leave_minus/")
async def leave_minus(item:ad012):
    t_delta = timedelta(hours=9)
    JST = timezone(t_delta, 'JST')
    get_time = datetime.now(JST)
    day = datetime.combine(date.today(),time(0,0,0))
    ymd = day.astimezone()
    minus = session.query(m_leavemanagetable)\
            .filter(m_leavemanagetable.employee_id == item.employee_id)\
            .filter(m_leavemanagetable.start < ymd)\
            .filter(m_leavemanagetable.end > ymd)\
            .filter(m_leavemanagetable.remain_day > 0)\
            .order_by(m_leavemanagetable.start).first()
    if minus == None:
        raise HTTPException(status_code=400, detail="ad012-e002")
        return
    minus.remain_day = minus.remain_day - 1
    minus.update_at = get_time
    # minus.update_acc = item.acc_id
    session.commit()
    session.close()
    return
