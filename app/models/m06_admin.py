# -*- coding: utf-8 -*-
# モデルの定義
from sqlalchemy import Column, Integer, String, text
from sqlalchemy.types import Date, DateTime, Time, Float
from pydantic import BaseModel
from db import Base
from db import ENGINE
from datetime import datetime, time, date
import sys
    
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
    vacation_flg =Column(Integer)
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
    id: int
    employee_id: int
    admin_id: str
    password: str
    fail_count: int
    edit_flg: int
    attend_flg: int
    vacation_flg: int
    employee_flg: int
    calendar_flg: int
    shift_flg: int
    payment_flg: int
    start: date
    end: date
    create_at: datetime
    create_acc: int
    update_at: datetime
    update_acc: int

def main():
    # テーブルが存在しなければ、テーブルを作成
    Base.metadata.create_all(bind=ENGINE)


if __name__ == "__main__":
    main()