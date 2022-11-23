from fastapi import APIRouter, FastAPI, HTTPException
from models.m02_employees import m_employees, m_employeestable
from models.m07_leavemanage import m_leavemanage, m_leavemanagetable
from models.t02_leaverequest import t_leaverequest, t_leaverequesttable
from models.admin.ad006_leaverequest import ad006
from sqlalchemy.orm import session
from typing import List  # ネストされたBodyを定義するために必要
from db import session  # DBと接続するためのセッション
from datetime import datetime, time, date, timedelta, timezone
import json

router = APIRouter()

@router.get("/ad006_01/")
async def ad006_01_get():
    get_request = session.query(m_employeestable, t_leaverequesttable)\
                .join(m_employeestable, m_employeestable.id == t_leaverequesttable.employee_id)\
                .filter(t_leaverequesttable.subm_st == 0).all()
    session.close()
    return get_request

@router.put("/ad006_01/")
async def ad006_01_put(item:ad006):
    t_delta = timedelta(hours=9)
    JST = timezone(t_delta, 'JST')
    get_time = datetime.now(JST)
    req = session.query(t_leaverequesttable)\
                .filter(t_leaverequesttable.subm_st == 0)\
                .filter(t_leaverequesttable.id == item.id).first()
    req.subm_st = item.subm_st
    req.update_at = get_time
    # req.authorizer = item.acc_id
    # req.update_acc = item.acc_id
    session.commit()
    session.close()
    return "ad006-i001"
