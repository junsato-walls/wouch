from fastapi import APIRouter, FastAPI, HTTPException
from models.m05_jobshift import m_jobshift, m_jobshifttable
from sqlalchemy.orm import session
from typing import List  # ネストされたBodyを定義するために必要
from db import session  # DBと接続するためのセッション


router = APIRouter()

@router.get("/m_jobshift")
async def m_jobshift():
    m_jobshift = session.query(m_jobshifttable).all()
    return m_jobshift

# @router.put("/m_companies_i")
# async def insert_m_companies():
#     pass

# @router.post("/m_companies_u")
# async def update_m_companies():
#     pass
