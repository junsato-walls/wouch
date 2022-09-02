# -*- coding: utf-8 -*-
# モデルの定義
from sqlalchemy import Column, Integer, String, text, decimal, datetime, time, date, boolean
from sqlalchemy.dialects.mysql import DATETIME, DATE, TIME, DECIMAL
from pydantic import BaseModel
from ..db import Base
from ..db import ENGINE
from datetime import datetime, time, date
from decimal import decimal
    
# wouch #################################################################
# m_campanies テーブルのモデル定義
class m_campaniestable(Base):
    __tablename__ = 'm_campanies'
    id = Column(Integer, primary_key=True, autoincrement=True)
    company_name =Column(String, nullable=False)
    post_code =Column(String, nullable=False)
    address_pref =Column(String, nullable=False)
    address_city =Column(String, nullable=False)
    address_other =Column(String, nullable=False)
    facility_name =Column(String, nullable=False)
    tell =Column(String, nullable=False)
    ceo =Column(String, nullable=False)
    capital =Column(String, nullable=False)
    pay_cutoff_date =Column(String, nullable=False)
    pay_date =Column(String, nullable=False)
    empl_insur_apply_office_num =Column(String)
    empl_insur_estab_date =Column(DATE)
    labor_insur_num =Column(String)
    labor_insur_estab_date =Column(DATE)
    social_insur_num =Column(String)
    social_insur_estab_date =Column(DATE)
    welfare_pension_insur_office_num =Column(String)
    corporate_num =Column(String)
    induStringy_class =Column(Integer)
    induStringy_type =Column(String)
    start =Column(DATE)
    paidvacanmt_cutoff_date =Column(String)
    end =Column(DATE)
    create_at =Column(DATETIME, nullable=False)
    create_acc =Column(Integer, nullable=False)
    update_at =Column(DATETIME)
    update_acc =Column(Integer)


class m_campanies(BaseModel):
    id: int
    company_name: str
    post_code: str
    address_pref: str
    address_city: str
    address_other: str
    facility_name: str
    tell: str
    ceo: str
    capital: str
    pay_cutoff_date: str
    pay_date: str
    empl_insur_apply_office_num: str
    empl_insur_estab_date: date
    labor_insur_num: str
    labor_insur_estab_date: date
    social_insur_num: str
    social_insur_estab_date: date
    welfare_pension_insur_office_num: str
    corporate_num: str
    industry_class: int
    industry_type: str
    start: date
    paidvacanmt_cutoff_date: str
    end: date
    create_at: datetime
    create_acc: int
    update_at: datetime
    update_acc: int

def main():
    # テーブルが存在しなければ、テーブルを作成
    Base.metadata.create_all(bind=ENGINE)


if __name__ == "__main__":
    main()