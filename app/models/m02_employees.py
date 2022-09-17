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
# m_employees テーブルのモデル定義
class m_employeestable(Base):
    __tablename__ = 'm_employees'
    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_num = Column(String)
    idm = Column(String)
    shift_id =Column(Integer, nullable=False)
    name =Column(String, nullable=False)
    name_kana =Column(String, nullable=False)
    birthday =Column(Date, nullable=False)
    in_company =Column(Date, nullable=False)
    exit_company =Column(Date)
    sex =Column(Integer, nullable=False)
    weekly_work_time =Column(Float, nullable=False)
    post_code = Column(String, nullable=False)
    address_pref = Column(String, nullable=False)
    address_city = Column(String, nullable=False)
    address_other = Column(String, nullable=False)
    empl_insur_insured_num =Column(String)
    pension_num =Column(String)
    mynumber =Column(String)
    former_job =Column(String)
    dependent =Column(Integer, nullable=False)
    health_insur_num =Column(String)
    nationality =Column(String)
    empl_insur_insur_qual_acq_date =Column(Date)
    empl_insur_insur_qual_lost_date =Column(Date)
    soc_insur_insur_qual_acq_date =Column(Date)
    soc_insur_insur_qual_lost_date =Column(Date)
    start =Column(Date)
    end =Column(Date)
    create_at =Column(DateTime, nullable=False)
    create_acc =Column(Integer, nullable=False)
    update_at =Column(DateTime)
    update_acc =Column(Integer)
    memo =Column(String)

class m_employees(BaseModel):
    id: int
    employee_num: str
    idm: str
    shift_id: int
    name: str
    name_kana: str
    birthday: date
    in_company: date
    exit_company: date
    sex: int
    weekly_work_time: float
    post_code: str
    address_pref: str
    address_city: str
    address_other: str
    empl_insur_insured_num: str
    pension_num: str
    mynumber: str
    former_job: str
    dependent: int
    health_insur_num: str
    nationality: str
    empl_insur_insur_qual_acq_date: date
    empl_insur_insur_qual_lost_date: date
    soc_insur_insur_qual_acq_date: date
    soc_insur_insur_qual_lost_date: date
    start: date
    end: date
    create_at: datetime
    create_acc: int
    update_at: datetime
    update_acc: int
    memo: str

def main():
    # テーブルが存在しなければ、テーブルを作成
    Base.metadata.create_all(bind=ENGINE)


if __name__ == "__main__":
    main()