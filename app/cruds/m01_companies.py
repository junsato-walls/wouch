from fastapi import FastAPI, HTTPException
from typing import List  # ネストされたBodyを定義するために必要
from starlette.middleware.cors import CORSMiddleware  # CORSを回避するために必要
from db import db  # DBと接続するためのセッション
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session
from starlette.status import HTTP_404_NOT_FOUND
from models.m01_companies import m_companies, m_companiestable  # 今回使うモデルをインポート
import datetime

app = FastAPI()

# CORSを回避するために設定
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/m_")
def read_m_companies():
    users = session.query(m_companies).all()
    return users


# def create_user(db: Session , user: schemas.User):
#     try:
#         db.add(user)
#           db.commit()
#           dbrefresh(user)
#     except BaseException:
#         raise HTTPException(status_code=HTTP_404_NOT_FOUND,
#                             detail='Record not found.')
#     return item

# @app.put("/menus")
# async def create_menu(category_id: int, menu: str, price: int, view_no: int):
#     t_delta = datetime.timedelta(hours=9)
#     JST = datetime.timezone(t_delta, 'JST')
#     menus = MenuTable()
#     menus.category_id = category_id
#     menus.menu = menu
#     menus.price = price
#     menus.view_no = view_no
#     menus.created_at = datetime.datetime.now(JST)
#     menus.updated_at = datetime.datetime.now(JST)
#     session.add(menus)
#     session.commit()


# @app.post("/orders")
# async def update_order(id: int, order_st: int):
#     t_delta = datetime.timedelta(hours=9)
#     JST = datetime.timezone(t_delta, 'JST')
#     orders = session.query(OrderTable).filter(OrderTable.id == id).first()
#     orders.order_st = order_st
#     orders.updated_at = datetime.datetime.now(JST)
#     session.commit()






# # ----------APIの定義------------
# # テーブルにいる全ユーザ情報を取得 GET


# @app.get("/users")
# def read_users():
#     users = session.query(UserTable).all()
#     return users

# # idにマッチするユーザ情報を取得 GET


# @app.get("/users/{user_id}")
# def read_user(user_id: int):
#     user = session.query(UserTable).\
#         filter(UserTable.id == user_id).first()
#     return user

# # ユーザ情報を登録 POST


# @app.post("/user")
# # クエリでnameとstrを受け取る
# # /user?name="三郎"&age=10
# async def create_user(name: str, age: int):
#     user = UserTable()
#     user.name = name
#     user.age = age
#     session.add(user)
#     session.commit()

# # 複数のユーザ情報を更新 PUT


# @app.put("/users")
# # modelで定義したUserモデルのリクエストbodyをリストに入れた形で受け取る
# # users=[{"id": 1, "name": "一郎", "age": 16},{"id": 2, "name": "二郎", "age": 20}]
# async def update_users(users: List[User]):
#     for new_user in users:
#         user = session.query(UserTable).\
#             filter(UserTable.id == new_user.id).first()
#         user.name = new_user.name
#         user.age = new_user.age
#         session.commit()
