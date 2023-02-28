from fastapi import APIRouter, FastAPI, HTTPException
from sqlalchemy import extract
from models.m01_companies import m_companies, m_companiestable
from sqlalchemy.orm import session
from sqlalchemy import func ,desc
from typing import List  # ネストされたBodyを定義するために必要
from db import session  # DBと接続するためのセッション
from datetime import datetime, time, date, timedelta, timezone
import json

router = APIRouter()

@router.get("/m_companies")
async def comp_data():
    comp_data = session.query(m_companiestable).all()
    return comp_data

@router.put("/m_companies/")
async def upd_comp(item:m_companies):
    t_delta = timedelta(hours=9)
    JST = timezone(t_delta, 'JST')
    get_time = datetime.now(JST)
    record = session.query(m_companiestable)\
                .filter(m_companiestable.id == item.id)\
                .first()
    record.company_name = item.company_name
    record.post_code = item.post_code
    record.address_pref = item.address_pref
    record.address_city = item.address_city
    record.address_other = item.address_other
    record.tell = item.tell
    record.ceo = item.ceo
    record.pay_cutoff_date = item.pay_cutoff_date
    record.pay_date = item.pay_date
    record.empl_insur_apply_office_num = item.empl_insur_apply_office_num
    record.labor_insur_num = item.labor_insur_num
    record.social_insur_num = item.social_insur_num
    record.corporate_num = item.corporate_num
    record.update_at = get_time
    session.commit()
    session.close()
    return 

# @router.post("/m_companies_i/")
# async def insert_m_companies(Item:m_companies):
#     # t_delta = datetime.timedelta(hours=9)
#     # JST = datetime.timezone(t_delta, 'JST')
#     m_companies = m_companiestable()

#     m_companies.company_name = Item.company_name
#     m_companies.post_code = Item.post_code
#     m_companies.address_pref = Item.address_pref
#     m_companies.address_city = Item.address_city
#     m_companies.address_other = Item.address_other
#     m_companies.facility_name = Item.facility_name
#     m_companies.tell = Item.tell
#     m_companies.ceo = Item.ceo
#     m_companies.capital = Item.capital
#     m_companies.pay_cutoff_date = Item.pay_cutoff_date
#     m_companies.pay_date = Item.pay_date
#     m_companies.empl_insur_apply_office_num = Item.empl_insur_apply_office_num
#     m_companies.empl_insur_estab_date = Item.empl_insur_estab_date
#     m_companies.labor_insur_num = Item.labor_insur_num
#     m_companies.labor_insur_estab_date = Item.labor_insur_estab_date
#     m_companies.social_insur_num = Item.social_insur_num
#     m_companies.social_insur_estab_date = Item.social_insur_estab_date
#     m_companies.welfare_pension_insur_office_num = Item.welfare_pension_insur_office_num
#     m_companies.corporate_num = Item.corporate_num
#     m_companies.industry_class = Item.industry_class
#     m_companies.industry_type = Item.industry_type
#     m_companies.start = Item.start
#     m_companies.C = Item.paidleave_cutoff_date
#     m_companies.end = Item.end
#     m_companies.create_acc = Item.create_acc
#     m_companies.update_acc = Item.update_acc

#     # m_companies.create_at = datetime.datetime.now(JST)
#     # m_companies.update_at = datetime.datetime.now(JST)

#     session.add(m_companies)
#     session.commit()
#     return m_companies

