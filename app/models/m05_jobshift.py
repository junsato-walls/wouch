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
# m_jobshift テーブルのモデル定義
class m_jobshifttable(Base):
    __tablename__ = 'm_jobshift'
    id = Column(Integer, primary_key=True, autoincrement=True)
    shift_name =Column(String, nullable=False)
    delete_flg =Column(Integer, nullable=False)
    job_type =Column(Integer, nullable=False)
    work_in_time =Column(TIME, nullable=False)
    work_out_time =Column(TIME, nullable=False)
    rest =Column(TIME, nullable=False)
    memo =Column(String)
    create_at =Column(DATETIME, nullable=False)
    create_acc =Column(Integer, nullable=False)
    update_at =Column(DATETIME)
    update_acc =Column(Integer)

class m_jobshift(BaseModel):
    id: int
    shift_name: str
    delete_flg: int
    job_type: int
    work_in_time: time
    work_out_time: time
    rest: time
    memo: str
    create_at: datetime
    create_acc: int
    update_at: datetime
    update_acc: int

    def main():
    # テーブルが存在しなければ、テーブルを作成
    Base.metadata.create_all(bind=ENGINE)


if __name__ == "__main__":
    main()