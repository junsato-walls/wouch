from fastapi import APIRouter, FastAPI, HTTPException
from models.m04_calendar import m_calendar, m_calendartable
from sqlalchemy.orm import session
from typing import List  # ネストされたBodyを定義するために必要
from db import session  # DBと接続するためのセッション


router = APIRouter()

@router.get("/m_calendar")
async def m_calendar():
    m_calendar = session.query(m_calendartable).all()
    return m_calendar

@router.get("/m_calendar2/")
async def calendar_label():
    calendar = session.query(m_calendartable)\
                .filter(m_calendartable.attend_st == 2)\
                .all()
    label=[]
    for data in calendar:
        label.append({
            "title": "休業日",
            "start": data.ymd
        })
    return label