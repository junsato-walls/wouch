from ..cruds import m01_campanies as crud
from database import get_db
from fastapi import APIRouter, Depends
from ..models import m01_campanies  # 今回使うモデルをインポート
from sqlalchemy.orm import Session
from typing import List
from uuid import UUID

router = APIRouter()

@router.get('/')
async def read_m_companies(db: Session = Depends(get_db)):
    return crud.read_users(db=db)