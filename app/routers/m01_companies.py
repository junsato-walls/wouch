from fastapi import APIRouter, FastAPI, HTTPException
from models.m01_companies import m_companies, m_companiestable
from sqlalchemy.orm import session
from typing import List  # ネストされたBodyを定義するために必要
from db import session  # DBと接続するためのセッション
from datetime import datetime, time, date, timedelta

router = APIRouter()

@router.get("/m_companies",)
async def m_companies():
    m_companies = session.query(m_companiestable).all()
    return m_companies

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
#     m_companies.paidvacanmt_cutoff_date = Item.paidvacanmt_cutoff_date
#     m_companies.end = Item.end
#     m_companies.create_acc = Item.create_acc
#     m_companies.update_acc = Item.update_acc

#     # m_companies.created_at = datetime.datetime.now(JST)
#     # m_companies.updated_at = datetime.datetime.now(JST)

#     session.add(m_companies)
#     session.commit()
#     return m_companies

