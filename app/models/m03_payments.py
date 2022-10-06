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
# m_payments テーブルのモデル定義
class m_paymentstable(Base):
    __tablename__ = 'm_payments'
    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id =Column(Integer, nullable=False)
    base =Column(Integer)
    salary_type =Column(Integer, nullable=False)
    std_monthly_compensation =Column(Integer, nullable=False)
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
    id: Union[int, None] = None
    employee_id: Union[int, None] = None
    base: Union[int, None] = None
    salary_type: Union[int, None] = None
    std_monthly_compensation: Union[int, None] = None
    commuting_pay: Union[int, None] = None
    health_insur: Union[int, None] = None
    care_insur: Union[int, None] = None
    pension_insur: Union[int, None] = None
    income_tax: Union[int, None] = None
    inhabitant_tax: Union[int, None] = None
    create_at: Union[datetime, None] = None
    create_acc: Union[int, None] = None
    update_at: Union[datetime, None] = None
    update_acc: Union[int, None] = None

def main():
    # テーブルが存在しなければ、テーブルを作成
    Base.metadata.create_all(bind=ENGINE)


if __name__ == "__main__":
    main()