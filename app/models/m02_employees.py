# -*- coding: utf-8 -*-
# モデルの定義
from sqlalchemy import Column, Integer, String, text, decimal, datetime, time, date, boolean
from sqlalchemy.dialects.mysql import DATETIME, DATE, TIME, DECIMAL
from pydantic import BaseModel
from db import Base
from db import ENGINE
from datetime import datetime, time, date
from decimal import decimal
    
# wouch #################################################################
# m_employees テーブルのモデル定義
class m_employeestable(Base):
    __tablename__ = 'm_employees'
    id = Column(Integer, primary_key=True, autoincrement=True)
    shift_id =Column(Integer, nullable=False)
    name =Column(String, nullable=False)
    name_kana =Column(String, nullable=False)
    birthday =Column(DATE, nullable=False)
    in_company =Column(DATE, nullable=False)
    exit_company =Column(DATE)
    sex =Column(Integer, nullable=False)
    salary_type =Column(Integer, nullable=False)
    base =Column(Integer, nullable=False)
    weekly_work_time =Column(decimal, nullable=False)
    std_monthly_compensation =Column(Integer, nullable=False)
    empl_insur_insured_num =Column(String)
    pension_num =Column(String)
    mynumber =Column(String)
    former_job =Column(String)
    dependent =Column(Integer, nullable=False)
    health_insur_num =Column(String)
    nationality =Column(String)
    empl_insur_insur_qual_acq_date =Column(DATE)
    empl_insur_insur_qual_lost_date =Column(DATE)
    soc_insur_insur_qual_acq_date =Column(DATE)
    soc_insur_insur_qual_lost_date =Column(DATE)
    start =Column(DATE)
    end =Column(DATE)
    create_at =Column(DATETIME, nullable=False)
    create_acc =Column(Integer, nullable=False)
    update_at =Column(DATETIME)
    update_acc =Column(Integer)
    memo =Column(String)

class m_employees(BaseModel):
    id: int
    shift_id: int
    name: str
    name_kana: str
    birthday: date
    in_company: date
    exit_company: date
    sex: int
    salary_type: int
    base: int
    weekly_work_time: decimal
    std_monthly_compensation: int
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