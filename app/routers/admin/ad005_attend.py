from fastapi import APIRouter, FastAPI, HTTPException
from sqlalchemy import extract
from sqlalchemy.types import Date, DateTime, Time, Float
from models.t01_attends import t_attends, t_attendstable
from models.admin.ad005_attend import ad005
from sqlalchemy.orm import session
from typing import List  # ネストされたBodyを定義するために必要
from db import session  # DBと接続するためのセッション
from datetime import datetime, time, date, timedelta, timezone
import json
import calendar
import locale

locale.setlocale(locale.LC_TIME, "ja_JP.UTF-8")

router = APIRouter()

@router.get("/ad005_01/")
async def ad005_01(employee_id: int, YYYY: str, MM: str):
    get_ad005 = session.query(t_attendstable)\
                .filter(t_attendstable.employee_id == employee_id)\
                .filter(extract('year',t_attendstable.round_work_in_time) == YYYY )\
                .filter(extract('month',t_attendstable.round_work_in_time) == MM ).all()
    session.close
    m_range = calendar.monthrange(int(YYYY), int(MM))[1]
    param = []
    for i in range(1, m_range + 1):
        day = date(int(YYYY), int(MM), i)
        rec = list(filter(lambda x: x.round_work_in_time.day == i, get_ad005))
        rwit = ''
        rwot = ''
        rest = ''
        if len(rec) != 0:
            rwit = rec[0].round_work_in_time
            rwot = rec[0].round_work_out_time
            rest = rec[0].rest
        param.append({
            'dd': i,
            'dow': day.strftime('%a'),
            'round_work_in_time': rwit,
            'round_work_out_time': rwot,
            'rest': rest
            })
    return param