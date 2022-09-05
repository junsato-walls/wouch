# from cruds import m01_companies as crud
# from database import get_db
from fastapi import APIRouter
# from models import m01_companies  # 今回使うモデルをインポート
# from sqlalchemy.orm import Session
# from typing import List
# from uuid import UUID

router = APIRouter()

@router.get("m_companies")
async def select_m_companies():
    pass

# @router.put("/m_companies")
# async def insert_m_companies():
#     pass

# @router.post("/m_companies")
# async def update_m_companies():
#     pass
