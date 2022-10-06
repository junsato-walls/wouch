# -*- coding: utf-8 -*-
# モデルの定義
from sqlalchemy import Column, Integer, String, text
from sqlalchemy.types import Date, DateTime, Time, Float
from pydantic import BaseModel
from db import Base
from db import ENGINE
from datetime import datetime, time, date
import sys
from typing import Union
    
# wouch #################################################################
# m_admin テーブルのモデル定義
class m_admintable(Base):
    __tablename__ = 'm_admin'
    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id =Column(Integer, nullable=False)
    admin_id =Column(String, nullable=False)
    password =Column(String, nullable=False)
    fail_count =Column(Integer)
    edit_flg =Column(Integer)
    attend_flg =Column(Integer)
    leave_flg =Column(Integer)
    employee_flg =Column(Integer)
    calendar_flg =Column(Integer)
    shift_flg =Column(Integer)
    payment_flg =Column(Integer)
    start =Column(Date)
    end =Column(Date)
    create_at =Column(DateTime, nullable=False)
    create_acc =Column(Integer, nullable=False)
    update_at =Column(DateTime)
    update_acc =Column(Integer)

class m_admin(BaseModel):
    id: Union[int, None] = None
    employee_id: Union[int, None] = None
    admin_id: Union[str, None] = None
    password: Union[str, None] = None
    fail_count: Union[int, None] = None
    edit_flg: Union[int, None] = None
    attend_flg: Union[int, None] = None
    leave_flg: Union[int, None] = None
    employee_flg: Union[int, None] = None
    calendar_flg: Union[int, None] = None
    shift_flg: Union[int, None] = None
    payment_flg: Union[int, None] = None
    start: Union[date, None] = None
    end: Union[date, None] = None
    create_at: Union[datetime, None] = None
    create_acc: Union[int, None] = None
    update_at: Union[datetime, None] = None
    update_acc: Union[int, None] = None

def main():
    # テーブルが存在しなければ、テーブルを作成
    Base.metadata.create_all(bind=ENGINE)


if __name__ == "__main__":
    main()