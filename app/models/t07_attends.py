# -*- coding: utf-8 -*-
# モデルの定義
from sqlalchemy import Column, Integer, String, text, decimal, datetime, time, date, boolean
from sqlalchemy.dialects.mysql import DATETIME, DATE, TIME, DECIMAL
from pydantic import BaseModel
from ../db import Base
from ../db import ENGINE
from datetime import datetime, time, date
from decimal import decimal
    
# wouch #################################################################
# t_attends テーブルのモデル定義
class t_attendstable(Base):
    __tablename__ = 't_attends'
    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id =Column(Integer, nullable=False)
    working_st =Column(Integer, nullable=False)
    round_work_in_time =Column(DATETIME)
    work_in =Column(DATETIME, nullable=False)
    round_work_out_time =Column(DATETIME)
    work_out =Column(DATETIME)
    work_time =Column(TIME)
    rest =Column(TIME)
    orvertime =Column(TIME)
    nighttime =Column(TIME)
    holiday_time =Column(TIME)
    create_at =Column(DATETIME)
    create_acc =Column(Integer)
    create_mac =Column(String)
    update_at =Column(DATETIME)
    update_acc =Column(Integer)
    update_mac =Column(String)

class t_attends(BaseModel):
    id: int
    employee_id: int
    working_st: int
    round_work_in_time: datetime
    work_in: datetime
    round_work_out_time: datetime
    work_out: datetime
    work_time: time
    rest: time
    orvertime: time
    nighttime: time
    holiday_time: time
    create_at: datetime
    create_acc: int
    create_mac: str
    update_at: datetime
    update_acc: int
    update_mac: str

    def main():
    # テーブルが存在しなければ、テーブルを作成
    Base.metadata.create_all(bind=ENGINE)


if __name__ == "__main__":
    main()