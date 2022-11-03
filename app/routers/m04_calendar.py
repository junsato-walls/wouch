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

# @router.put("/m_companies_i")
# async def insert_m_companies():
#     pass

# @router.post("/m_companies_u")
# async def update_m_companies():
#     pass
