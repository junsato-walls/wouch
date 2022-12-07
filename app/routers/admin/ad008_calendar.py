from fastapi import APIRouter, FastAPI, HTTPException
from models.m02_employees import m_employees, m_employeestable
from models.m04_calendar import m_calendar, m_calendartable
from models.t01_attends import t_attends, t_attendstable
from models.admin.ad008_calendar import ad008
from sqlalchemy.orm import session
from typing import List  # ネストされたBodyを定義するために必要
from db import session  # DBと接続するためのセッション
from datetime import datetime, time, date, timedelta, timezone
import json

router = APIRouter()

@router.get("/ad008_01/")
async def ad008_get(year: int, month: int):
    ad008_get = session.query(m_calendartable)\
                .filter(m_calendartable.year == year)\
                .filter(m_calendartable.month == month)\
                .filter(m_calendartable.attend_st != 3)\
                .all()
    label=[]
    for data in ad008_get:
        label.append({
            "title": "休業日",
            "start": data.ymd
        })
    return label

@router.post("/ad008_02/")
async def ad008_post(item: ad008):
    calendar = m_calendartable()
    t_delta = timedelta(hours=9)
    JST = timezone(t_delta, 'JST')
    get_time = datetime.now(JST)
    YYYY = item.ymd.year
    MM = item.ymd.month
    DD = item.ymd.day
    chek = session.query(m_calendartable)\
            .filter(m_calendartable.ymd == item.ymd)\
            .filter(m_calendartable.attend_st != 3)\
            .first()
    if chek != None:
        #存在判定　既にレコードがる場合は中止
        raise HTTPException(status_code=400, detail="ad008-e001")
        return
    calendar.ymd = item.ymd
    calendar.year = YYYY
    calendar.month = MM
    calendar.day = DD
    calendar.day_of_week = item.ymd.strftime('%a')
    calendar.memo = item.memo
    calendar.attend_st = item.attend_st
    calendar.visible_flg = "0"
    calendar.create_at = get_time
    session.add(calendar)
    session.commit()
    # 全従業員の休日レコードを作成
    emp_rec = session.query(m_employeestable)\
            .filter(m_employeestable.exit_company == None)\
            .all()
    for emp in emp_rec:
        attends = t_attendstable()
        attends.employee_id = emp.id
        attends.ymd = item.ymd
        attends.working_st = 7
        attends.create_at = get_time
        # attends.create_acc = item.acc_id
        session.add(attends)
        session.commit()
    session.close()
    return emp_rec

# 論理削除API
@router.put("/ad008_03/")
async def ad008_delete(item:ad008):
    t_delta = timedelta(hours=9)
    JST = timezone(t_delta, 'JST')
    get_time = datetime.now(JST)
    cal_del = session.query(m_calendartable)\
                .filter(m_calendartable.ymd == item.ymd)\
                .filter(m_calendartable.attend_st != 3)\
                .first()
    cal_del.attend_st = 3
    cal_del.update_at = get_time
    # attends.update_acc = item.acc_id
    session.commit()
    attend_del = session.query(t_attendstable)\
                .filter(t_attendstable.ymd == item.ymd)\
                .filter(t_attendstable.working_st != 2)\
                .filter(t_attendstable.working_st != 6)\
                .filter(t_attendstable.round_work_in_time == None)\
                .all()
    for delete in attend_del:
        delete.working_st = 8
        delete.update_at = get_time
        # attends.update_acc = item.acc_id
        session.commit()
    session.close()
    return
