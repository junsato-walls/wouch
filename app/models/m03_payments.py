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
# m_payments テーブルのモデル定義
class m_paymentstable(Base):
    __tablename__ = 'm_payments'
    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id =Column(Integer, nullable=False)
    base =Column(Integer)
    commuting_pay =Column(Integer)
    health_insur =Column(Integer)
    care_insur =Column(Integer)
    pension_insur =Column(Integer)
    income_tax =Column(Integer)
    inhabitant_tax =Column(Integer)
    create_at =Column(DateTime, nullable=False)
    create_acc =Column(Integer, nullable=False)
    update_at =Column(DateTime)
    update_acc =Column(Integer)

class m_payments(BaseModel):
    id: int
    employee_id: int
    base: int
    commuting_pay: int
    health_insur: int
    care_insur: int
    pension_insur: int
    income_tax: int
    inhabitant_tax: int
    create_at: datetime
    create_acc: int
    update_at: datetime
    update_acc: int

def main():
    # テーブルが存在しなければ、テーブルを作成
    Base.metadata.create_all(bind=ENGINE)


if __name__ == "__main__":
    main()