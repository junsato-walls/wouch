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
# m_calendar テーブルのモデル定義
class m_calendartable(Base):
    __tablename__ = 'm_calendar'
    id = Column(Integer, primary_key=True, autoincrement=True)
    ymd =Column(Date, nullable=False)
    year =Column(Integer, nullable=False)
    month =Column(Integer, nullable=False)
    day =Column(Integer, nullable=False)
    day_of_week =Column(String, nullable=False)
    visible_flg =Column(Integer, nullable=False)
    working_st =Column(Integer, nullable=False)
    memo =Column(String)
    create_at =Column(DateTime, nullable=False)
    create_acc =Column(Integer, nullable=False)
    update_at =Column(DateTime)
    update_acc =Column(Integer)

class m_calendar(BaseModel):
    id: int
    ymd: date
    year: int
    month: int
    day: int
    day_of_week: str
    visible_flg: int
    working_st: int
    memo: str
    create_at: datetime
    create_acc: int
    update_at: datetime
    update_acc: int

def main():
    # テーブルが存在しなければ、テーブルを作成
    Base.metadata.create_all(bind=ENGINE)


if __name__ == "__main__":
    main()