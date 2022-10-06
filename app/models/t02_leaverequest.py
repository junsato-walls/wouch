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
# t_leaverequest テーブルのモデル定義
class t_leaverequesttable(Base):
    __tablename__ = 't_leaverequest'
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

class t_leaverequest(BaseModel):
    id: Union[int, None] = None
    employee_id: Union[int, None] = None
    subm_date: Union[datetime, None] = None
    target_date: Union[date, None] = None
    subm_st: Union[int, None] = None
    authorizer: Union[int, None] = None
    create_at: Union[datetime, None] = None
    create_acc: Union[int, None] = None
    update_at: Union[datetime, None] = None
    update_acc: Union[int, None] = None

def main():
    # テーブルが存在しなければ、テーブルを作成
    Base.metadata.create_all(bind=ENGINE)


if __name__ == "__main__":
    main()