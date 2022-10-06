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
    id: Union[int, None] = None
    ymd: Union[date, None] = None
    year: Union[int, None] = None
    month: Union[int, None] = None
    day: Union[int, None] = None
    day_of_week: Union[str, None] = None
    visible_flg: Union[int, None] = None
    working_st: Union[int, None] = None
    memo: Union[str, None] = None
    create_at: Union[datetime, None] = None
    create_acc: Union[int, None] = None
    update_at: Union[datetime, None] = None
    update_acc: Union[int, None] = None

def main():
    # テーブルが存在しなければ、テーブルを作成
    Base.metadata.create_all(bind=ENGINE)


if __name__ == "__main__":
    main()