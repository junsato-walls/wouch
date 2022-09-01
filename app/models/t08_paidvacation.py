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
# t_paidvacation テーブルのモデル定義
class t_paidvacationtable(Base):
    __tablename__ = 't_paidvacation'
    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id =Column(Integer, nullable=False)
    subm_date =Column(DateTime, nullable=False)
    target_date =Column(Date, nullable=False)
    subm_st =Column(Integer, nullable=False)
    authorizer =Column(Integer, nullable=False)
    create_at =Column(DateTime, nullable=False)
    create_acc =Column(Integer, nullable=False)
    update_at =Column(DateTime)
    update_acc =Column(Integer)

class t_paidvacation(BaseModel):
    id: int
    employee_id: int
    subm_date: datetime
    target_date: date
    subm_st: int
    authorizer: int
    create_at: datetime
    create_acc: int
    update_at: datetime
    update_acc: int

def main():
    # テーブルが存在しなければ、テーブルを作成
    Base.metadata.create_all(bind=ENGINE)


if __name__ == "__main__":
    main()