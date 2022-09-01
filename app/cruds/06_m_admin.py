from fastapi import FastAPI, HTTPException
from typing import List  # ネストされたBodyを定義するために必要
from starlette.middleware.cors import CORSMiddleware  # CORSを回避するために必要
from db import session  # DBと接続するためのセッション
from sqlalchemy.exc import SQLAlchemyError
from model import UserTable, User, MenuTable, Menu, OrderTable, Order, CategoryTable, Category,  SeatTable, Seat  # 今回使うモデルをインポート
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

# ----------wouchAPIの定義------------
# メニューリストを取得 GET


@app.get("/mst_admin")
async def read_menus():
    menus = session.query(MenuTable).all()
    return menus
# メニュー追加


@app.put("/mst_admin")
async def create_menu(category_id: int, menu: str, price: int, view_no: int):
    t_delta = datetime.timedelta(hours=9)
    JST = datetime.timezone(t_delta, 'JST')
    menus = MenuTable()
    menus.category_id = category_id
    menus.menu = menu
    menus.price = price
    menus.view_no = view_no
    menus.created_at = datetime.datetime.now(JST)
    menus.updated_at = datetime.datetime.now(JST)
    session.add(menus)
    session.commit()

# メニュー編集


@app.post("/mst_admin")
async def create_menu(id: int, category_id: int, menu: str, price: int, view_no: int):
    t_delta = datetime.timedelta(hours=9)
    JST = datetime.timezone(t_delta, 'JST')
    menus = session.query(MenuTable).filter(MenuTable.id == id).first()
    menus.category_id = category_id
    menus.menu = menu
    menus.price = price
    menus.view_no = view_no
    menus.updated_at = datetime.datetime.now(JST)
    session.commit()
