from fastapi import APIRouter, FastAPI, HTTPException
from models.m02_employees import m_employees, m_employeestable
from models.t01_attends import t_attends, t_attendstable
from models.timecard.tc001_input import tc001
from sqlalchemy.orm import session
from typing import List  # ネストされたBodyを定義するために必要
from db import session  # DBと接続するためのセッション
from datetime import datetime, time, date, timedelta, timezone
import json

router = APIRouter()


@router.post("/tc001/01")
async def tc001_01(item:tc001):
    workMode = item.workMode
    m_employees = m_employeestable
    t_attends = t_attendstable
    t_delta = timedelta(hours=9)
    JST = timezone(t_delta, 'JST')
    get_time = datetime.now(JST)
    round_time = "9:00"
    ymd = date.today()
    emp = session.query(m_employees).filter(m_employees.idm == item.idm).all()
    attend = session.query(t_attends,m_employees)\
                .join(m_employees, m_employees.id == t_attends.employee_id)\
                .filter(m_employees.idm == item.idm, t_attends.work_in > ymd).all()

    if len(emp) ==0:
        raise HTTPException(status_code=400, detail="tc001-eo001")
        return
        
    if len(attend) == 0 and item.workMode != 0:
        raise HTTPException(status_code=400, detail="tc001-eo002")
        return

    match workMode:
        case 0:
            if len(attend) == 0:
                t_attendstable.employee_id = emp[0].id
                t_attendstable.working_st = 0
                t_attendstable.work_in = get_time
                t_attendstable.created_at = get_time
                session.add(t_attendstable)
                session.commit()
            elif len(attend[0].t_attendstable.work_in) == 0:
                t_attendstable.working_st = 0
                t_attendstable.work_in = get_time
                attend[0].t_attendstable.updated_at = get_time
                session.commit()
            else:
                get_time = attend[0].t_attendstable.work_in

        case 1:
            if attend[0].t_attendstable.rest == "":
                attend[0].t_attendstable.rest = "1:00:00"
                attend[0].t_attendstable.updated_at = get_time
                session.commit()
            else:
                get_time = attend[0].t_attendstable.updated_at

        case 2:
            if attend[0].t_attendstable.work_out == "":
                attend[0].t_attendstable.work_out = get_time
                attend[0].t_attendstable.updated_at = get_time
                session.commit()
            else:
                get_time = attend[0].t_attendstable.updated_at

    param = {
        'name': emp[0].name,
        'employee_num': emp[0].employee_num,
        'time': get_time.strftime('%H:%M:%S')
    }
    return param