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
# m_employees テーブルのモデル定義
class m_employeestable(Base):
    __tablename__ = 'm_employees'
    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_num = Column(String)
    idm = Column(String)
    shift_id =Column(Integer)
    name =Column(String)
    name_kana =Column(String)
    birthday =Column(Date)
    in_company =Column(Date)
    exit_company =Column(Date)
    sex =Column(Integer)
    weekly_work_time =Column(Float)
    post_code = Column(String)
    address_pref = Column(String)
    address_city = Column(String)
    address_other = Column(String)
    tell = Column(String)
    empl_insur_insured_num =Column(String)
    pension_num =Column(String)
    mynumber =Column(String)
    former_job =Column(String)
    dependent =Column(Integer)
    health_insur_num =Column(String)
    nationality =Column(String)
    empl_insur_insur_qual_acq_date =Column(Date)
    empl_insur_insur_qual_lost_date =Column(Date)
    soc_insur_insur_qual_acq_date =Column(Date)
    soc_insur_insur_qual_lost_date =Column(Date)
    start =Column(Date)
    end =Column(Date)
    create_at =Column(DateTime)
    create_acc =Column(Integer)
    update_at =Column(DateTime)
    update_acc =Column(Integer)
    memo =Column(String)

class m_employees(BaseModel):
    id: Union[int, None] = None
    employee_num: Union[str, None] = None
    idm: Union[str, None] = None
    shift_id: Union[int, None] = None
    name: Union[str, None] = None
    name_kana: Union[str, None] = None
    birthday: Union[date, None] = None
    in_company: Union[date, None] = None
    exit_company: Union[date, None] = None
    sex: Union[int, None] = None
    weekly_work_time: Union[float, None] = None
    post_code: Union[str, None] = None
    address_pref: Union[str, None] = None
    address_city: Union[str, None] = None
    address_other: Union[str, None] = None
    tell: Union[str, None] = None
    empl_insur_insured_num: Union[str, None] = None
    pension_num: Union[str, None] = None
    mynumber: Union[str, None] = None
    former_job: Union[str, None] = None
    dependent: Union[int, None] = None
    health_insur_num: Union[str, None] = None
    nationality: Union[str, None] = None
    empl_insur_insur_qual_acq_date: Union[date, None] = None
    empl_insur_insur_qual_lost_date: Union[date, None] = None
    soc_insur_insur_qual_acq_date: Union[date, None] = None
    soc_insur_insur_qual_lost_date: Union[date, None] = None
    start: Union[date, None] = None
    end: Union[date, None] = None
    create_at: Union[datetime, None] = None
    create_acc: Union[int, None] = None
    update_at: Union[datetime, None] = None
    update_acc: Union[int, None] = None
    memo: Union[str, None] = None

def main():
    # テーブルが存在しなければ、テーブルを作成
    Base.metadata.create_all(bind=ENGINE)


if __name__ == "__main__":
    main()