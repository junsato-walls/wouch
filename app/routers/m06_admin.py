from fastapi import APIRouter, FastAPI, HTTPException
from models.m06_admin import m_admin, m_admintable
from sqlalchemy.orm import session
from typing import List  # ネストされたBodyを定義するために必要
from db import session  # DBと接続するためのセッション


router = APIRouter()


@router.get("/m_admin",)
async def m_admin():
    m_admin = session.query(m_admintable).all()
    return m_admin

# @router.put("/m_companies_i")
# async def insert_m_companies():
#     pass

# @router.post("/m_companies_u")
# async def update_m_companies():
#     pass
