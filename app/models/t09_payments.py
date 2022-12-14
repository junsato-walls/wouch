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
# t_payments テーブルのモデル定義
class t_paymentstable(Base):
    __tablename__ = 't_payments'
    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_ID =Column(Integer, nullable=False)
    payment_date =Column(Date, nullable=False)
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
    others =Column(Integer)
    create_at =Column(DateTime, nullable=False)
    create_acc =Column(Integer, nullable=False)
    update_at =Column(DateTime)
    update_acc =Column(Integer)

class t_payments(BaseModel):
    id: int
    employee_ID: int
    payment_date: date
    income: int
    base: int
    overtime_pay: int
    nighttime_pay: int
    holiday_pay: int
    commuting_pay: int
    health_insur: int
    care_insur: int
    pension_insur: int
    employee_insur: int
    income_tax: int
    inhabitant_tax: int
    withholding_tax: int
    adj_pay: int
    others: int
    create_at: datetime
    create_acc: int
    update_at: datetime
    update_acc: int

def main():
    # テーブルが存在しなければ、テーブルを作成
    Base.metadata.create_all(bind=ENGINE)


if __name__ == "__main__":
    main()