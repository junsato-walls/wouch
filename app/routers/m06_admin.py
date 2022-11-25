from fastapi import APIRouter, FastAPI, HTTPException
from models.m02_employees import m_employees, m_employeestable
from models.m06_admin import m_admin, m_admintable
from sqlalchemy.orm import session
from typing import List  # ネストされたBodyを定義するために必要
from db import session  # DBと接続するためのセッション


router = APIRouter()


@router.post("/m_admin")
async def m_admin(item: m_admin):
    m_admin = session.query(m_admintable)\
            .filter(m_admintable.login_id == item.login_id)\
            .first()
    if m_admin == None:
        raise HTTPException(status_code=400, detail="ad001-e001")
        return 
    if m_admin.password != item.password:
        raise HTTPException(status_code=400, detail="ad001-e002")
        return
    if m_admin.password == item.password:
        return
    raise HTTPException(status_code=500, detail="bug")
    return 
