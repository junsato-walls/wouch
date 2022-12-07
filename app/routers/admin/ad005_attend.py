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
async def ad005_01(employee_id: int, YYYY: int, MM: int):
    get_ad005 = session.query(t_attendstable)\
                .filter(t_attendstable.employee_id == employee_id)\
                .filter(t_attendstable.working_st != 8)\
                .filter(extract('year',t_attendstable.round_work_in_time) == YYYY )\
                .filter(extract('month',t_attendstable.round_work_in_time) == MM )\
                .all()
    session.close
    m_range = calendar.monthrange(YYYY, MM)[1]
    param = []
    for i in range(1, m_range + 1):
        day = date(YYYY, MM, i)
        rec = list(filter(lambda x: x.round_work_in_time.day == i, get_ad005))
        id = ''
        workst = ''
        rwit = ''
        rwot = ''
        rest = ''
        worktime = ''
        over = ''
        if len(rec) != 0:
            id = rec[0].id
            workst = rec[0].working_st
            rwit = rec[0].round_work_in_time.time()
            rwot = rec[0].round_work_out_time.time()
            rest = rec[0].rest
            worktime = rec[0].work_time
            over = rec[0].overtime
        param.append({
            'id': id,
            'day': i,
            'day_of_week': day.strftime('%a'),
            'working_st': workst,
            'round_work_in_time': rwit,
            'round_work_out_time': rwot,
            'rest': rest,
            'worktime': worktime,
            'overtime': over
            })
    return param

@router.put("/ad005_02/")
async def ad005_02(item:ad005):
    get_rec = session.query(t_attendstable)\
                .filter(t_attendstable.id == item.id).first()
    rest = timedelta(hours=1)
    std_work_time = timedelta(hours=8)
    t_delta = timedelta(hours=9)
    JST = timezone(t_delta, 'JST')
    get_time = datetime.now(JST)
    get_rec.employee_id = item.employee_id
    get_rec.round_work_in_time = item.round_work_in_time
    get_rec.rest = item.rest
    get_rec.round_work_out_time = item.round_work_out_time
    get_rec.working_st = item.working_st
    worktime = work_time(item)
    overtime = over_time(item, std_work_time)
    nighttime = night_time(item, worktime)
    get_rec.work_time = worktime
    get_rec.overtime = overtime
    get_rec.nighttime = nighttime
    get_rec.update_at = get_time
    # t_attendstable.update_acc = item.acc_id
    session.commit()
    session.close()
    return

@router.post("/ad005_03/")
async def ad005_02(item:ad005):
    attend = t_attendstable()
    rest = timedelta(hours=1)
    std_work_time = timedelta(hours=8)
    t_delta = timedelta(hours=9)
    JST = timezone(t_delta, 'JST')
    get_time = datetime.now(JST)
    attend.employee_id = item.employee_id
    attend.round_work_in_time = item.round_work_in_time
    attend.rest = item.rest
    attend.round_work_out_time = item.round_work_out_time
    attend.working_st = item.working_st
    worktime = work_time(item)
    overtime = over_time(item, std_work_time)
    nighttime = night_time(item, worktime)
    attend.work_time = worktime
    attend.overtime = overtime
    attend.nighttime = nighttime
    attend.create_at = get_time
    attend.create_acc = item.acc_id
    session.add(attend)
    session.commit()
    session.close()
    return 

def work_time(item):
    h = item.rest.hour
    m = item.rest.minute
    wt = item.round_work_out_time - item.round_work_in_time
    if  item.rest != None  and wt > timedelta(hours=h, minutes=m):
        wt = item.round_work_out_time - item.round_work_in_time - timedelta(hours=h, minutes=m)
    return wt

def over_time(item, std_work_time):
    h = item.rest.hour
    m = item.rest.minute
    if (item.round_work_out_time - item.round_work_in_time) > (std_work_time + timedelta(hours=h, minutes=m)):
        ovt = str((item.round_work_out_time - item.round_work_in_time) - (std_work_time + timedelta(hours=h, minutes=m)))
    else:
        ovt = "0:00"
    return ovt

def night_time(item, worktime):
    night_start = datetime.combine(item.round_work_in_time.date(),time(22,0,0))
    night_end1 = datetime.combine(item.round_work_in_time.date(),time(5,0,0))
    night_end2 = datetime.combine(item.round_work_in_time.date() + timedelta(days = 1),time(5,0,0))
    if item.round_work_in_time < night_end1 and item.round_work_out_time < night_end1:
        nt = worktime
    elif item.round_work_in_time < night_end1:
        nt = night_end1 - item.round_work_in_time
    elif night_start > item.round_work_in_time and item.round_work_out_time > night_start and item.round_work_out_time < night_end2 and night_end1 < item.round_work_in_time:
        nt = item.round_work_out_time - night_start
    elif night_start < item.round_work_in_time and  item.round_work_in_time > night_end2 and night_end1 < item.round_work_in_time:
        nt = night_end2 - item.round_work_in_time
    elif night_start < item.round_work_in_time and item.round_work_out_time < night_end2 and night_end1 < item.round_work_in_time:
        nt = worktime
    elif night_start > item.round_work_in_time and item.round_work_out_time > night_end2 and night_end1 < item.round_work_in_time:
        nt = night_end2 - night_start
    else :
        nt = "0:00"
    return nt