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
# t_attends テーブルのモデル定義
class t_attendstable(Base):
    __tablename__ = 't_attends'
    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id =Column(Integer)
    dd =Column(Date)
    working_st =Column(Integer)
    round_work_in_time =Column(DateTime)
    work_in =Column(DateTime)
    round_work_out_time =Column(DateTime)
    work_out =Column(DateTime)
    work_time =Column(Time)
    rest =Column(Time)
    overtime =Column(Time)
    nighttime =Column(Time)
    holiday_time =Column(Time)
    create_at =Column(DateTime)
    create_acc =Column(Integer)
    create_mac =Column(String)
    update_at =Column(DateTime)
    update_acc =Column(Integer)
    update_mac =Column(String)

class t_attends(BaseModel):
    id: Union[int, None] = None
    employee_id: Union[int, None] = None
    dd: Union[date, None] = None
    working_st: Union[int, None] = None
    round_work_in_time: Union[datetime, None] = None
    work_in: Union[datetime, None] = None
    round_work_out_time: Union[datetime, None] = None
    work_out: Union[datetime, None] = None
    work_time: Union[time, None] = None
    rest: Union[time, None] = None
    overtime: Union[time, None] = None
    nighttime: Union[time, None] = None
    holiday_time: Union[time, None] = None
    create_at: Union[datetime, None] = None
    create_acc: Union[int, None] = None
    create_mac: Union[str, None] = None
    update_at: Union[datetime, None] = None
    update_acc: Union[int, None] = None
    update_mac: Union[str, None] = None

def main():
    # テーブルが存在しなければ、テーブルを作成
    Base.metadata.create_all(bind=ENGINE)


if __name__ == "__main__":
    main()