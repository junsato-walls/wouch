from fastapi import APIRouter, FastAPI, HTTPException
from models.user import User, UserTable
from sqlalchemy.orm import session
from typing import List  # ネストされたBodyを定義するために必要
from db import session  # DBと接続するためのセッション

router = APIRouter()

@router.get('/user')
async def select_test():
    user = session.query(UserTable).all()
    return user