from fastapi import APIRouter, FastAPI, HTTPException
from models.user import User, UserTable
from sqlalchemy.orm import session
from typing import List  # ネストされたBodyを定義するために必要
from db import session  # DBと接続するためのセッション
from pydantic import BaseModel

router = APIRouter()

@router.get('/user')
async def select_test():
    user = session.query(UserTable).all()
    return user


@router.post("/user")
# クエリでnameとstrを受け取る
# /user?name="三郎"&age=10
async def create_user(Item:User):
    user = UserTable()
    user.name = Item.name
    user.age = Item.age
    session.add(user)
    session.commit()
    return user
# 複数のユーザ情報を更新 PUT


@router.put("/users")
# modelで定義したUserモデルのリクエストbodyをリストに入れた形で受け取る
# users=[{"id": 1, "name": "一郎", "age": 16},{"id": 2, "name": "二郎", "age": 20}]
async def update_users(users: List[User]):
    for new_user in users:
        user = session.query(UserTable).\
            filter(UserTable.id == new_user.id).first()
        user.name = new_user.name
        user.age = new_user.age
        session.commit()

@router.post("/user/")
async def post_user(item:User):
    for i in range(1,5):
        user = UserTable()
        user.name = i
        user.age = i
        session.add(user)
    session.commit()
    # user.name = item.name
    # user.age = item.age
    # session.add(user)
    # session.commit()

@router.get('/user/count')
async def count_test():
    user = session.query(UserTable).filter(UserTable.id == 1).all()
    return user
