from fastapi import APIRouter, FastAPI, HTTPException
from models.m04_calendar import m_calendar, m_calendartable
from models.admin.ad008_calendar import ad008
from sqlalchemy.orm import session
from typing import List  # ネストされたBodyを定義するために必要
from db import session  # DBと接続するためのセッション
from datetime import datetime, time, date, timedelta, timezone
import json

router = APIRouter()

@router.get("/ad008_01/")
async def ad008_get(ymd: date):
    YYYY = ymd.year
    MM = ymd.month
    ad008_get = session.query(m_calender)\
                .filter(m_calendertable.year == YYYY)\
                .filter(m_calendertable.month == MM)\
                .all()
    return ad008_get


@router.put("/ad008_02/")
async def ad008_put(item: ad008):
    t_delta = timedelta(hours=9)
    JST = timezone(t_delta, 'JST')
    get_time = datetime.now(JST)
    YYYY = ymd.year
    MM = ymd.month
    ad008_get = session.query(m_calender)\
                .filter(m_calendertable.id == item.id)\
                .filter(m_calendertable.year == YYYY)\
                .filter(m_calendertable.month == MM)\
                .first()
    m_calendertable.memo = item.memo
    m_calendertable.working_st = item.working_st
    m_calendertable.update_at = get_time
    session.commit()
    session.close()
    return


@router.post("/ad008_03/")
async def ad008_post(item: ad008):
    calender = m_calendertable()
    t_delta = timedelta(hours=9)
    JST = timezone(t_delta, 'JST')
    get_time = datetime.now(JST)
    YYYY = ymd.year
    MM = ymd.month
    DD = ymd.day
    calender.ymd = item.ymd
    calender.year = YYYY
    calender.month = MM
    calender.day = DD
    calender.day_of_week = ymd.strftime('%a')
    calender.memo = item.memo
    calender.working_st = item.working_st
    calender.visible_flg = "0"
    calender.create_at = get_time
    session.add(calender)
    session.commit()
    session.close()
    return

@router.delete("/ad008_03/")
async def ad008_delete(item: ad008):
    cal_del = session.query(m_calender)\
                .filter(m_calender.id == item.id)\
                .first()
    session.delete(cal_del)
    session.commit()
    session.close()
    return
