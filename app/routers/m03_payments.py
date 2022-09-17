from fastapi import APIRouter, FastAPI, HTTPException
from models.m03_payments import m_payments, m_paymentstable
from sqlalchemy.orm import session
from typing import List  # ネストされたBodyを定義するために必要
from db import session  # DBと接続するためのセッション


router = APIRouter()

@router.get("/m_payments",)
async def m_payments():
    m_payments = session.query(m_paymentstable).all()
    return m_payments

# @router.put("/m_companies_i")
# async def insert_m_companies():
#     pass

# @router.post("/m_companies_u")
# async def update_m_companies():
#     pass
