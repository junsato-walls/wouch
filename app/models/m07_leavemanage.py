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
# m_leavemanage テーブルのモデル定義
class m_leavemanagetable(Base):
    __tablename__ = 'm_leavemanage'
    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id = Column(Integer, nullable=False)
    remain_day = Column(Integer, nullable=False)
    add_day = Column(Integer, nullable=False)
    memo = Column(String)
    start = Column(Date, nullable=False)
    end = Column(Date, nullable=False)
    create_at = Column(DateTime, nullable=False)
    create_acc = Column(Integer, nullable=False)
    update_at = Column(DateTime)
    update_acc = Column(Integer)

class m_leavemanage(BaseModel):
    id: Union[int, None] = None
    employee_id: Union[int, None] = None
    remain_day: Union[int, None] = None
    add_day: Union[int, None] = None
    memo: Union[str, None] = None
    start: Union[date, None] = None
    end: Union[date, None] = None
    create_at: Union[datetime, None] = None
    create_acc: Union[int, None] = None
    update_at: Union[datetime, None] = None
    update_acc: Union[int, None] = None

def main():
    # テーブルが存在しなければ、テーブルを作成
    Base.metadata.create_all(bind=ENGINE)


if __name__ == "__main__":
    main()