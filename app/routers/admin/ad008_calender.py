# from fastapi import APIRouter, FastAPI, HTTPException
# from models.m04_calender import m_calender, m_calendertable
# from models.admin.ad008_calender import ad008
# from sqlalchemy.orm import session
# from typing import List  # ネストされたBodyを定義するために必要
# from db import session  # DBと接続するためのセッション
# from datetime import datetime, time, date, timedelta, timezone
# import json

# router = APIRouter()

# @router.get("/ad008_01/")
# async def ad008_get(ymd: date):
#     YYYY = ymd.year
#     MM = ymd.month
#     ad008_get = session.query(m_calender)
#                 .filter(m_calendertable.year = YYYY)\
#                 .filter(m_calendertable.month == MM)\
#                 .all()
#     return ad008_get


# @router.put("/ad008_02/")
# async def ad008_put(item: ad008):
#     t_delta = timedelta(hours=9)
#     JST = timezone(t_delta, 'JST')
#     get_time = datetime.now(JST)
#     YYYY = ymd.year
#     MM = ymd.month
#     ad008_get = session.query(m_calender)
#                 .filter(m_calendertable.id = item.id)\
#                 .filter(m_calendertable.year = YYYY)\
#                 .filter(m_calendertable.month == MM)\
#                 .first()
#     m_calendertable.memo = item.memo
#     m_calendertable.working_st = item.working_st
#     m_calendertable.update_at = get_time


# @router.post("/ad008_03/")
# async def ad008_post(item: ad008):