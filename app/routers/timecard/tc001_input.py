from fastapi import APIRouter, FastAPI, HTTPException
from models.m02_employees import m_employees, m_employeestable
from models.m05_jobshift import m_jobshift, m_jobshifttable
from models.m07_leavemanage import m_leavemanage, m_leavemanagetable
from models.t02_leaverequest import t_leaverequest, t_leaverequesttable
from models.t01_attends import t_attends, t_attendstable
from models.timecard.tc001_input import tc001
from sqlalchemy.orm import session
from typing import List  # ネストされたBodyを定義するために必要
from db import session  # DBと接続するためのセッション
from datetime import datetime, time, date, timedelta, timezone
import json

router = APIRouter()


@router.post("/tc001_01/")
async def tc001_01(item:tc001):
    param = {}
    workMode = item.workMode
    rest = timedelta(hours=1)
    night_start = datetime.combine(date.today(),time(22,0,0))
    night_end = datetime.combine(date.today() + timedelta(days = 1),time(5,0,0))
    std_work_time = timedelta(hours=8)
    t_delta = timedelta(hours=9)
    JST = timezone(t_delta, 'JST')
    get_time = datetime.now(JST)
    rt = datetime.strptime(get_time.strftime('%Y年%m月%d日 %H時%M分%S秒'), '%Y年%m月%d日 %H時%M分%S秒')
    day = datetime.combine(date.today(),time(0,0,0))
    ymd = day.astimezone()
    emp = session.query(m_employeestable).filter(m_employeestable.idm == item.idm).all()
    attend = session.query(t_attendstable,m_employeestable)\
                .join(m_employeestable, m_employeestable.id == t_attendstable.employee_id)\
                .filter(m_employeestable.idm == item.idm, t_attendstable.work_in > ymd).all()
    shift = session.query(m_jobshifttable).filter(m_jobshifttable.id == emp[0].shift_id).all()

    if len(emp) == 0:
        raise HTTPException(status_code=400, detail="tc001-e001")
        return
        
    if (len(attend) == 0 and item.workMode != "0") and item.workMode != "3":
        raise HTTPException(status_code=400, detail="tc001-e002")
        return

    match workMode:
        case "0":
            round_in = round_in_time(rt, shift)
            if len(attend) == 0:
                t_attend = t_attendstable()
                t_attend.employee_id = emp[0].id
                t_attend.working_st = 0
                t_attend.round_work_in_time = round_in
                t_attend.work_in = get_time
                t_attend.create_at = get_time
                t_attend.create_acc = emp[0].id
                session.add(t_attend)
                session.commit()
            elif attend[0].t_attendstable.work_in == None:
                attend[0].t_attendstable.working_st = 0
                attend[0].t_attendstable.work_in = get_time
                attend[0].t_attendstable.update_at = get_time
                attend[0].t_attendstable.update_acc = emp[0].id
                session.commit()
            else:
                get_time = attend[0].t_attendstable.work_in

        case "1":
            if attend[0].t_attendstable.rest == None:
                attend[0].t_attendstable.rest = "1:00:00"
                attend[0].t_attendstable.update_at = get_time
                attend[0].t_attendstable.update_acc = emp[0].id
                session.commit()
            else:
                get_time = attend[0].t_attendstable.update_at

        case "2":
            if attend[0].t_attendstable.work_out == None:
                round_out = round_out_time(rt)
                worktime = work_time(round_out, attend)
                overtime = over_time(round_out, attend, std_work_time)
                nighttime = night_time(attend, round_out, worktime, night_start, night_end)
                attend[0].t_attendstable.work_out = get_time
                attend[0].t_attendstable.round_work_out_time = round_out
                attend[0].t_attendstable.work_time = worktime
                attend[0].t_attendstable.overtime = overtime
                attend[0].t_attendstable.nighttime = nighttime
                attend[0].t_attendstable.update_at = get_time
                attend[0].t_attendstable.update_acc = emp[0].id
                session.commit()
            else:
                get_time = attend[0].t_attendstable.update_at
        case "3":
            return workMode3(get_time, ymd, emp)
    
    param = {
        'name': emp[0].name,
        'employee_num': emp[0].employee_num,
        'employee_id': emp[0].employee_id,
        'time': get_time.strftime('%H:%M:%S'),
        "request": '',
        "remain_day": '',
        "add_date": '',
        "add_at": ''
    }
    session.close
    return param

def workMode3(get_time, ymd, emp):
    remain_day = 0
    get_request = session.query(t_leaverequesttable)\
                    .filter(t_leaverequesttable.employee_id == emp[0].id)\
                    .filter(t_leaverequesttable.target_date > ymd + timedelta(days=-90))\
                    .all()
    session.close
    get_remain = session.query(m_leavemanagetable)\
                    .filter(m_leavemanagetable.employee_id == emp[0].id)\
                    .filter(m_leavemanagetable.start < ymd)\
                    .filter(m_leavemanagetable.end > ymd)\
                    .all()
    session.close
    get_add = session.query(m_leavemanagetable)\
                    .order_by(m_leavemanagetable.start)\
                    .filter(m_leavemanagetable.employee_id == emp[0].id)\
                    .filter(m_leavemanagetable.start > ymd)\
                    .first()
    session.close
    for i in range(len(get_remain)):
        remain_day = remain_day + get_remain[i].remain_day
    param = {
        'name': emp[0].name,
        'employee_num': emp[0].employee_num,
        'employee_id': emp[0].employee_id,
        'time': '',
        "request": get_request,
        "remain_day": remain_day,
        "add_date": get_add.start,
        "add_at": get_add.add_day
    }
    return param

def round_in_time(rt, shift):
    in_time = shift[0].work_in_time
    in_time = datetime.combine(date.today(),in_time)
    if rt < in_time:
        round_time = in_time
    else:
        round_time = rt.replace(minute=rt.minute, second=0, microsecond=0)
    return round_time

def round_out_time(rt):
    round_time = rt.replace(minute=rt.minute, second=0, microsecond=0)
    return round_time

def work_time(round_out, attend):
    h = attend[0].t_attendstable.rest.hour
    m = attend[0].t_attendstable.rest.minute
    wt = round_out - attend[0].t_attendstable.round_work_in_time
    if  attend[0].t_attendstable.rest != None  and (wt - timedelta(hours=h, minutes=m)) > 0:
        wt = round_out - attend[0].t_attendstable.round_work_in_time - timedelta(hours=h, minutes=m)
    return wt

def over_time(round_out, attend, std_work_time):
    h = attend[0].t_attendstable.rest.hour
    m = attend[0].t_attendstable.rest.minute
    if (round_out - attend[0].t_attendstable.round_work_in_time) > (std_work_time + timedelta(hours=h, minutes=m)):
        ovt = str((round_out - attend[0].t_attendstable.round_work_in_time) - (std_work_time + timedelta(hours=h, minutes=m)))
    else:
        ovt = "0:00"
    return ovt

def night_time(attend, round_out, worktime, night_start, night_end):
    if night_start < round_out and round_out < night_end:
        nt = round_out - night_start
    elif night_start < attend[0].t_attendstable.round_work_in_time and  attend[0].t_attendstable.round_work_in_time < night_end:
        nt = night_end - attend[0].t_attendstable.round_work_in_time
    elif night_start < attend[0].t_attendstable.round_work_in_time and round_out <night_end:
        nt = worktime
    else :
        nt = "0:00"
    return nt