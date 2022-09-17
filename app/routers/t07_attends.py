from fastapi import APIRouter, FastAPI, HTTPException
from models.t07_attends import t_attends, t_attendstable
from sqlalchemy.orm import session
from typing import List  # ネストされたBodyを定義するために必要
from db import session  # DBと接続するためのセッション


router = APIRouter()


@router.get("/t_attends",)
async def t_attends():
    t_attends = session.query(t_attendstable).all()
    return t_attends

# @router.put("/m_companies_i")
# async def insert_m_companies():
#     pass

# @router.post("/m_companies_u")
# async def update_m_companies():
#     pass
