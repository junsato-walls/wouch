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
# m_jobshift テーブルのモデル定義
class m_jobshifttable(Base):
    __tablename__ = 'm_jobshift'
    id = Column(Integer, primary_key=True, autoincrement=True)
    shift_name =Column(String, nullable=False)
    delete_flg =Column(Integer, nullable=False)
    job_type =Column(Integer, nullable=False)
    work_in_time =Column(Time, nullable=False)
    work_out_time =Column(Time, nullable=False)
    rest =Column(Time, nullable=False)
    memo =Column(String)
    create_at =Column(DateTime, nullable=False)
    create_acc =Column(Integer, nullable=False)
    update_at =Column(DateTime)
    update_acc =Column(Integer)

class m_jobshift(BaseModel):
    id: Union[int, None] = None
    shift_name: Union[str, None] = None
    delete_flg: Union[int, None] = None
    job_type: Union[int, None] = None
    work_in_time: Union[time, None] = None
    work_out_time: Union[time, None] = None
    rest: Union[time, None] = None
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