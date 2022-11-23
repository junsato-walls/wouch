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
    YYYY = item.ymd.year
    MM = item.ymd.month
    ad008_get = session.query(m_calendar)\
                .filter(m_calendartable.year == YYYY)\
                .filter(m_calendartable.month == MM)\
                .all()
    return ad008_get


@router.put("/ad008_02/")
async def ad008_put(item: ad008):
    t_delta = timedelta(hours=9)
    JST = timezone(t_delta, 'JST')
    get_time = datetime.now(JST)
    YYYY = item.ymd.year
    MM = item.ymd.month
    ad008_get = session.query(m_calendartable)\
                .filter(m_calendartable.id == item.id)\
                .filter(m_calendartable.year == YYYY)\
                .filter(m_calendartable.month == MM)\
                .first()
    ad008_get.memo = item.memo
    ad008_get.working_st = item.working_st
    ad008_get.update_at = get_time
    session.commit()
    session.close()
    return ad008_get


@router.post("/ad008_03/")
async def ad008_post(item: ad008):
    calendar = m_calendartable()
    t_delta = timedelta(hours=9)
    JST = timezone(t_delta, 'JST')
    get_time = datetime.now(JST)
    YYYY = item.ymd.year
    MM = item.ymd.month
    DD = item.ymd.day
    calendar.ymd = item.ymd
    calendar.year = YYYY
    calendar.month = MM
    calendar.day = DD
    calendar.day_of_week = item.ymd.strftime('%a')
    calendar.memo = item.memo
    calendar.working_st = item.working_st
    calendar.visible_flg = "0"
    calendar.create_at = get_time
    session.add(calendar)
    session.commit()
    session.close()
    return

@router.delete("/ad008_04/")
async def ad008_delete(id: int):
    cal_del = session.query(m_calendartable)\
                .filter(m_calendartable.id == id)\
                .first()
    session.delete(cal_del)
    session.commit()
    session.close()
    return
