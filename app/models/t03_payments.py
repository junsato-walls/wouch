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
# t_payments テーブルのモデル定義
class t_paymentstable(Base):
    __tablename__ = 't_payments'
    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id =Column(Integer, nullable=False)
    payment_date =Column(Date, nullable=False)
    work_date =Column(Integer)
    working_hours =Column(Integer)
    overtime_work =Column(Integer)
    holiday_work =Column(Integer)
    nighttime_work =Column(Integer)
    income =Column(Integer, nullable=False)
    base =Column(Integer)
    overtime_pay =Column(Integer)
    nighttime_pay =Column(Integer)
    holiday_pay =Column(Integer)
    commuting_pay =Column(Integer)
    health_insur =Column(Integer)
    care_insur =Column(Integer)
    pension_insur =Column(Integer)
    employee_insur =Column(Integer)
    income_tax =Column(Integer)
    inhabitant_tax =Column(Integer)
    withholding_tax =Column(Integer)
    adj_pay =Column(Integer)
    other_allowance_1 =Column(Integer)
    other_allowance_2 =Column(Integer)
    other_allowance_3 =Column(Integer)
    other_allowance_4 =Column(Integer)
    other_allowance_5 =Column(Integer)
    others =Column(Integer)
    create_at =Column(DateTime, nullable=False)
    create_acc =Column(Integer, nullable=False)
    update_at =Column(DateTime)
    update_acc =Column(Integer)

class t_payments(BaseModel):
    id: Union[int, None] = None
    employee_id: Union[int, None] = None
    payment_date: Union[date, None] = None
    work_date: Union[int, None] = None
    working_hours: Union[int, None] = None
    overtime_work: Union[int, None] = None
    holiday_work: Union[int, None] = None
    nighttime_work: Union[int, None] = None
    income: Union[int, None] = None
    base: Union[int, None] = None
    overtime_pay: Union[int, None] = None
    nighttime_pay: Union[int, None] = None
    holiday_pay: Union[int, None] = None
    commuting_pay: Union[int, None] = None
    health_insur: Union[int, None] = None
    care_insur: Union[int, None] = None
    pension_insur: Union[int, None] = None
    employee_insur: Union[int, None] = None
    income_tax: Union[int, None] = None
    inhabitant_tax: Union[int, None] = None
    withholding_tax: Union[int, None] = None
    adj_pay: Union[int, None] = None
    other_allowance_1: Union[int, None] = None
    other_allowance_2: Union[int, None] = None
    other_allowance_3: Union[int, None] = None
    other_allowance_4: Union[int, None] = None
    other_allowance_5: Union[int, None] = None
    others: Union[int, None] = None
    create_at: Union[datetime, None] = None
    create_acc: Union[int, None] = None
    update_at: Union[datetime, None] = None
    update_acc: Union[int, None] = None

def main():
    # テーブルが存在しなければ、テーブルを作成
    Base.metadata.create_all(bind=ENGINE)


if __name__ == "__main__":
    main()