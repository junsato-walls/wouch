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

class ad007(BaseModel):
    emp_upd_flg: Union[int, None] = None
    pay_upd_flg: Union[int, None] = None
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
    memo: Union[str, None] = None
    employee_id: Union[int, None] = None
    base: Union[int, None] = None
    salary_type: Union[int, None] = None
    std_monthly_compensation: Union[int, None] = None
    commuting_pay: Union[int, None] = None
    health_insur: Union[int, None] = None
    care_insur: Union[int, None] = None
    pension_insur: Union[int, None] = None
    income_tax: Union[int, None] = None
    inhabitant_tax: Union[int, None] = None
    emp_upd_flg: Union[int, None] = None
    pay_upd_flg: Union[int, None] = None

def main():
    # テーブルが存在しなければ、テーブルを作成
    Base.metadata.create_all(bind=ENGINE)


if __name__ == "__main__":
    main()