from fastapi import APIRouter, FastAPI, HTTPException
from models.m01_companies import m_companies, m_companiestable
from sqlalchemy.orm import session
from typing import List  # ネストされたBodyを定義するために必要
from db import session  # DBと接続するためのセッション


router = APIRouter()

@router.get('/test')
async def select_test():
    test = session.query(UserTable).all()
    return test


@router.get("/m_companies",)
async def m_companies():
    m_companies_s = session.query(m_companiestable).all()
    return m_companies_s
    # pass

# @router.put("/m_companies_i")
# async def insert_m_companies():
#     pass

# @router.post("/m_companies_u")
# async def update_m_companies():
#     pass
