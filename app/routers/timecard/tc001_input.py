from fastapi import APIRouter, FastAPI, HTTPException
from models.m02_employees import m_employees, m_employeestable
from models.t07_attends import t_attends, t_attendstable
from models.timecard.tc001_input import tc001
from sqlalchemy.orm import session
from typing import List  # ネストされたBodyを定義するために必要
from db import session  # DBと接続するためのセッション
from datetime import datetime, time, date, timedelta, timezone
import json

router = APIRouter()


@router.post("/tc001/01",)
async def tc001_01(item:tc001):
    workMode = item.workMode
    m_employees = m_employeestable
    t_attends = t_attendstable
    t_delta = timedelta(hours=9)
    JST = timezone(t_delta, 'JST')
    get_time = datetime.now(JST)
    ymd = date.today()
    emp = session.query(m_employees).filter(m_employees.idm == item.idm).all()
    attend = session.query(t_attends,m_employees)\
                .join(m_employees, m_employees.id == t_attends.employee_id)\
                .filter(m_employees.idm == item.idm, t_attends.work_in > ymd).all()

    if len(emp) ==0:
        errorcode = "tc001-eoo1"
        return errorcode 

    if attend == 0 & item.workMode != 0:
        errorcode = "tc001-eoo2"
        return errorcode

    match workMode:
        case 0:
            if len(attend) == 0:
                t_attend = t_attendstable()
                t_attend.employee_id = emp[0].id
                t_attend.working_st = 0
                t_attend.work_in = get_time
                t_attend.created_at = get_time
                session.add(t_attend)
                session.commit()

        case 1:
            if len(attend) != 0:
                attend.t_attends.rest = get_time
                attend.t_attend.updated_at = get_time
                session.commit()

        case 2:
            if en(attend) != 0:
                attend.t_attends.work_in = get_time
                attend.t_attend.updated_at = get_time
                session.commit()

    param = {
        'name': emp[0].name,
        'employee_num': emp[0].employee_num,
        'time': get_time.strftime('%H:%M:%S')
    }

    return json.dumps(param, ensure_ascii=False)