# -*- coding: utf-8 -*-
# モデルの定義
from sqlalchemy import Column, Integer, String, text
from sqlalchemy.types import Date, DateTime, Time, Float
from pydantic import BaseModel, Field
from db import Base
from db import ENGINE
from datetime import datetime, time, date
import sys
from typing import Union

# wouch #################################################################
# m_companies テーブルのモデル定義
class m_companiestable(Base):
    __tablename__ = 'm_companies'
    id = Column(Integer, primary_key=True, autoincrement=True)
    company_name = Column(String)
    post_code = Column(String)
    address_pref = Column(String)
    address_city = Column(String)
    address_other = Column(String)
    facility_name = Column(String)
    tell = Column(String)
    ceo = Column(String)
    capital = Column(String)
    pay_cutoff_date = Column(String)
    pay_date = Column(String)
    empl_insur_apply_office_num = Column(String)
    empl_insur_estab_date = Column(Date)
    labor_insur_num = Column(String)
    labor_insur_estab_date = Column(Date)
    social_insur_num = Column(String)
    social_insur_estab_date = Column(Date)
    welfare_pension_insur_office_num = Column(String)
    corporate_num = Column(String)
    industry_class = Column(Integer)
    industry_type = Column(String)
    start = Column(Date)
    paidleave_cutoff_date = Column(String)
    end = Column(Date)
    create_at = Column(DateTime)
    create_acc = Column(Integer)
    update_at = Column(DateTime)
    update_acc = Column(Integer)


class m_companies(BaseModel):
    id: Union[int, None] = None
    company_name: Union[str, None] = None
    post_code: Union[str, None] = Field(None, max_length=8)
    address_pref: Union[str, None] = None
    address_city: Union[str, None] = None
    address_other: Union[str, None] = None
    facility_name: Union[str, None] = None
    tell: Union[str, None] = None
    ceo: Union[str, None] = None
    capital: Union[str, None] = None
    pay_cutoff_date: Union[str, None] = None
    pay_date: Union[str, None] = None
    empl_insur_apply_office_num: Union[str, None] = Field(None, max_length=13)
    empl_insur_estab_date: Union[date, None] = None
    labor_insur_num: Union[str, None] = Field(None, max_length=15)
    labor_insur_estab_date: Union[date, None] = None
    social_insur_num: Union[str, None] = Field(None, max_length=6)
    social_insur_estab_date: Union[date, None] = None
    welfare_pension_insur_office_num: Union[str, None] = None
    corporate_num: Union[str, None] = Field(None, max_length=13)
    industry_class: Union[int, None] = None
    industry_type: Union[str, None] = None
    start: Union[date, None] = None
    paidleave_cutoff_date: Union[str, None] = None
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