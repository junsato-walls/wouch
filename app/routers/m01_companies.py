from fastapi import APIRouter, FastAPI, HTTPException
from models.m01_companies import m_companies, m_companiestable
from sqlalchemy.orm import session
from typing import List  # ネストされたBodyを定義するために必要
from db import session  # DBと接続するためのセッション
import datetime

router = APIRouter()

@router.get("/m_companies",)
async def m_companies():
    m_companies_s = session.query(m_companiestable).all()
    return m_companies_s

# @router.put("/m_companies_i")
# async def insert_m_companies():
#     m_companies_s = session.query(m_companiestable).all()
#     return m_companies_s
#     pass

# async def insert_m_companies(company_name: str,
#                              post_code: str, 
#                              address_pref: str, 
#                              address_city: str, 
#                              address_other: str, 
#                              facility_name: str, 
#                              tell: str, ceo: str, 
#                              capital: str, 
#                              pay_cutoff_date: str, 
#                              pay_date: str, 
#                              empl_insur_apply_office_num: str, 
#                              empl_insur_estab_date: date, 
#                              labor_insur_num: str, 
#                              labor_insur_estab_date: date, 
#                              social_insur_num: str, 
#                              social_insur_estab_date: date, 
#                              welfare_pension_insur_office_num: str, 
#                              corporate_num: str, 
#                              industry_class: str, 
#                              industry_type: int, 
#                              start: date, 
#                              paidvacanmt_cutoff_date: str, 
#                              end: date, 
#                              create_at: datetime, 
#                              create_acc: int, 
#                              update_at: datetime, 
#                              update_acc: int
#                              ):
#     t_delta = datetime.timedelta(hours=9)
#     JST = datetime.timezone(t_delta, 'JST')
#     m_companies = m_companiestable()

#     company_namem_companies. = company_name
#     post_codem_companies. = post_code
#     address_prefm_companies. = address_pref
#     address_citym_companies. = address_city
#     address_otherm_companies. = address_other
#     facility_namem_companies. = facility_name
#     tellm_companies. = tell
#     ceom_companies. = ceo
#     capitalm_companies. = capital
#     pay_cutoff_datem_companies. = pay_cutoff_date
#     pay_datem_companies. = pay_date
#     empl_insur_apply_office_numm_companies. = empl_insur_apply_office_num
#     empl_insur_estab_datem_companies. = empl_insur_estab_date
#     labor_insur_numm_companies. = labor_insur_num
#     labor_insur_estab_datem_companies. = labor_insur_estab_date
#     social_insur_numm_companies. = social_insur_num
#     social_insur_estab_datem_companies. = social_insur_estab_date
#     welfare_pension_insur_office_numm_companies. = welfare_pension_insur_office_num
#     corporate_numm_companies. = corporate_num
#     industry_classm_companies. = industry_class
#     industry_typem_companies. = industry_type
#     startm_companies. = start
#     paidvacanmt_cutoff_datem_companies. = paidvacanmt_cutoff_date
#     endm_companies. = end
#     create_at.m_companies. = create_at
#     create_acc.m_companies. = create_acc
#     update_at.m_companies. = update_at
#     update_acc.m_companies. = update_acc

#     m_companies.created_at = datetime.datetime.now(JST)
#     m_companies.updated_at = datetime.datetime.now(JST)

#     session.add(m_companies)
#     session.commit()


# @router.post("/m_companies_u")
# async def update_m_companies():
#     pass
