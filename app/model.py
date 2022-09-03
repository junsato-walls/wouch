# -*- coding: utf-8 -*-
# モデルの定義
from sqlalchemy import Column, Integer, String, text, decimal, datetime, time, date, boolean
from sqlalchemy.dialects.mysql import DATETIME, DATE, TIME, DECIMAL
from pydantic import BaseModel
from db import Base
from db import ENGINE
from datetime import datetime, time, date
from decimal import decimal

# # サンプル
# # userテーブルのモデルUserTableを定義
# class UserTable(Base):
#     __tablename__ = 'user'
#     id = Column(Integer, primary_key=True, autoincrement=True)
#     name = Column(String(30), nullable=False)
#     age = Column(Integer)


# # POSTやPUTのとき受け取るRequest Bodyのモデルを定義
# class User(BaseModel):
#     id: int
#     name: str
#     age: int
    
# # # wouch #################################################################
# # # m_campanies テーブルのモデル定義
# # class m_campaniestable(Base):
# #     __tablename__ = 'm_campanies'
# #     id = Column(Integer, primary_key=True, autoincrement=True)
# #     company_name =Column(String, nullable=False)
# #     post_code =Column(String, nullable=False)
# #     address_pref =Column(String, nullable=False)
# #     address_city =Column(String, nullable=False)
# #     address_other =Column(String, nullable=False)
# #     facility_name =Column(String, nullable=False)
# #     tell =Column(String, nullable=False)
# #     ceo =Column(String, nullable=False)
# #     capital =Column(String, nullable=False)
# #     pay_cutoff_date =Column(String, nullable=False)
# #     pay_date =Column(String, nullable=False)
# #     empl_insur_apply_office_num =Column(String)
# #     empl_insur_estab_date =Column(DATE)
# #     labor_insur_num =Column(String)
# #     labor_insur_estab_date =Column(DATE)
# #     social_insur_num =Column(String)
# #     social_insur_estab_date =Column(DATE)
# #     welfare_pension_insur_office_num =Column(String)
# #     corporate_num =Column(String)
# #     induStringy_class =Column(Integer)
# #     induStringy_type =Column(String)
# #     start =Column(DATE)
# #     paidvacanmt_cutoff_date =Column(String)
# #     end =Column(DATE)
# #     create_at =Column(DATETIME, nullable=False)
# #     create_acc =Column(Integer, nullable=False)
# #     update_at =Column(DATETIME)
# #     update_acc =Column(Integer)


# # class m_campanies(BaseModel):
# #     id: int
# #     company_name: str
# #     post_code: str
# #     address_pref: str
# #     address_city: str
# #     address_other: str
# #     facility_name: str
# #     tell: str
# #     ceo: str
# #     capital: str
# #     pay_cutoff_date: str
# #     pay_date: str
# #     empl_insur_apply_office_num: str
# #     empl_insur_estab_date: date
# #     labor_insur_num: str
# #     labor_insur_estab_date: date
# #     social_insur_num: str
# #     social_insur_estab_date: date
# #     welfare_pension_insur_office_num: str
# #     corporate_num: str
# #     industry_class: int
# #     industry_type: str
# #     start: date
# #     paidvacanmt_cutoff_date: str
# #     end: date
# #     create_at: datetime
# #     create_acc: int
# #     update_at: datetime
# #     update_acc: int


# # # m_employees テーブルのモデル定義
# # class m_employeestable(Base):
# #     __tablename__ = 'm_employees'
# #     id = Column(Integer, primary_key=True, autoincrement=True)
# #     shift_id =Column(Integer, nullable=False)
# #     name =Column(String, nullable=False)
# #     name_kana =Column(String, nullable=False)
# #     birthday =Column(DATE, nullable=False)
# #     in_company =Column(DATE, nullable=False)
# #     exit_company =Column(DATE)
# #     sex =Column(Integer, nullable=False)
# #     salary_type =Column(Integer, nullable=False)
# #     base =Column(Integer, nullable=False)
# #     weekly_work_time =Column(decimal, nullable=False)
# #     std_monthly_compensation =Column(Integer, nullable=False)
# #     empl_insur_insured_num =Column(String)
# #     pension_num =Column(String)
# #     mynumber =Column(String)
# #     former_job =Column(String)
# #     dependent =Column(Integer, nullable=False)
# #     health_insur_num =Column(String)
# #     nationality =Column(String)
# #     empl_insur_insur_qual_acq_date =Column(DATE)
# #     empl_insur_insur_qual_lost_date =Column(DATE)
# #     soc_insur_insur_qual_acq_date =Column(DATE)
# #     soc_insur_insur_qual_lost_date =Column(DATE)
# #     start =Column(DATE)
# #     end =Column(DATE)
# #     create_at =Column(DATETIME, nullable=False)
# #     create_acc =Column(Integer, nullable=False)
# #     update_at =Column(DATETIME)
# #     update_acc =Column(Integer)
# #     memo =Column(String)

# # class m_employees(BaseModel):
# #     id: int
# #     shift_id: int
# #     name: str
# #     name_kana: str
# #     birthday: date
# #     in_company: date
# #     exit_company: date
# #     sex: int
# #     salary_type: int
# #     base: int
# #     weekly_work_time: decimal
# #     std_monthly_compensation: int
# #     empl_insur_insured_num: str
# #     pension_num: str
# #     mynumber: str
# #     former_job: str
# #     dependent: int
# #     health_insur_num: str
# #     nationality: str
# #     empl_insur_insur_qual_acq_date: date
# #     empl_insur_insur_qual_lost_date: date
# #     soc_insur_insur_qual_acq_date: date
# #     soc_insur_insur_qual_lost_date: date
# #     start: date
# #     end: date
# #     create_at: datetime
# #     create_acc: int
# #     update_at: datetime
# #     update_acc: int
# #     memo: str


# # # m_payments テーブルのモデル定義
# # class m_paymentstable(Base):
# #     __tablename__ = 'm_payments'
# #     id = Column(Integer, primary_key=True, autoincrement=True)
# #     employee_id =Column(Integer, nullable=False)
# #     base =Column(Integer)
# #     commuting_pay =Column(Integer)
# #     health_insur =Column(Integer)
# #     care_insur =Column(Integer)
# #     pension_insur =Column(Integer)
# #     income_tax =Column(Integer)
# #     inhabitant_tax =Column(Integer)
# #     create_at =Column(DATETIME, nullable=False)
# #     create_acc =Column(Integer, nullable=False)
# #     update_at =Column(DATETIME)
# #     update_acc =Column(Integer)

# # class m_payments(BaseModel):
# #     id: int
# #     employee_id: int
# #     base: int
# #     commuting_pay: int
# #     health_insur: int
# #     care_insur: int
# #     pension_insur: int
# #     income_tax: int
# #     inhabitant_tax: int
# #     create_at: datetime
# #     create_acc: int
# #     update_at: datetime
# #     update_acc: int


# # # m_calendar テーブルのモデル定義
# # class m_calendartable(Base):
# #     __tablename__ = 'm_calendar'
# #     id = Column(Integer, primary_key=True, autoincrement=True)
# #     ymd =Column(DATE, nullable=False)
# #     year =Column(Integer, nullable=False)
# #     month =Column(Integer, nullable=False)
# #     day =Column(Integer, nullable=False)
# #     day_of_week =Column(String, nullable=False)
# #     visible_flg =Column(Integer, nullable=False)
# #     working_st =Column(Integer, nullable=False)
# #     memo =Column(String)
# #     create_at =Column(DATETIME, nullable=False)
# #     create_acc =Column(Integer, nullable=False)
# #     update_at =Column(DATETIME)
# #     update_acc =Column(Integer)

# # class m_calendar(BaseModel):
# #     id: int
# #     ymd: date
# #     year: int
# #     month: int
# #     day: int
# #     day_of_week: str
# #     visible_flg: int
# #     working_st: int
# #     memo: str
# #     create_at: datetime
# #     create_acc: int
# #     update_at: datetime
# #     update_acc: int


# # # m_jobshift テーブルのモデル定義
# # class m_jobshifttable(Base):
# #     __tablename__ = 'm_jobshift'
# #     id = Column(Integer, primary_key=True, autoincrement=True)
# #     shift_name =Column(String, nullable=False)
# #     delete_flg =Column(Integer, nullable=False)
# #     job_type =Column(Integer, nullable=False)
# #     work_in_time =Column(TIME, nullable=False)
# #     work_out_time =Column(TIME, nullable=False)
# #     rest =Column(TIME, nullable=False)
# #     memo =Column(String)
# #     create_at =Column(DATETIME, nullable=False)
# #     create_acc =Column(Integer, nullable=False)
# #     update_at =Column(DATETIME)
# #     update_acc =Column(Integer)

# # class m_jobshift(BaseModel):
# #     id: int
# #     shift_name: str
# #     delete_flg: int
# #     job_type: int
# #     work_in_time: time
# #     work_out_time: time
# #     rest: time
# #     memo: str
# #     create_at: datetime
# #     create_acc: int
# #     update_at: datetime
# #     update_acc: int


# # # m_admin テーブルのモデル定義
# # class m_admintable(Base):
# #     __tablename__ = 'm_admin'
# #     id = Column(Integereger, primary_key=True, autoincrement=True)
# #     employee_id =Column(Integer, nullable=False)
# #     admin_id =Column(String, nullable=False)
# #     password =Column(String, nullable=False)
# #     fail_count =Column(Integer)
# #     edit_flg =Column(Integer)
# #     attend_flg =Column(Integer)
# #     vacation_flg =Column(Integer)
# #     employee_flg =Column(Integer)
# #     calendar_flg =Column(Integer)
# #     shift_flg =Column(Integer)
# #     payment_flg =Column(Integer)
# #     start =Column(DATE)
# #     end =Column(DATE)
# #     create_at =Column(DATETIME, nullable=False)
# #     create_acc =Column(Integer, nullable=False)
# #     update_at =Column(DATETIME)
# #     update_acc =Column(Integer)

# # class m_admin(BaseModel):
# #     id: int
# #     employee_id: int
# #     admin_id: str
# #     password: str
# #     fail_count: int
# #     edit_flg: int,
# #     attend_flg: int,
# #     vacation_flg: int,
# #     employee_flg: int,
# #     calendar_flg: int,
# #     shift_flg: int,
# #     payment_flg: int,
# #     start: date
# #     end: date
# #     create_at: datetime
# #     create_acc: int
# #     update_at: datetime
# #     update_acc: int


# # # t_attends テーブルのモデル定義
# # class t_attendstable(Base):
# #     __tablename__ = 't_attends'
# #     id = Column(Integer, primary_key=True, autoincrement=True)
# #     employee_id =Column(Integer, nullable=False)
# #     working_st =Column(Integer, nullable=False)
# #     round_work_in_time =Column(DATETIME)
# #     work_in =Column(DATETIME, nullable=False)
# #     round_work_out_time =Column(DATETIME)
# #     work_out =Column(DATETIME)
# #     work_time =Column(TIME)
# #     rest =Column(TIME)
# #     orvertime =Column(TIME)
# #     nighttime =Column(TIME)
# #     holiday_time =Column(TIME)
# #     create_at =Column(DATETIME)
# #     create_acc =Column(Integer)
# #     create_mac =Column(String)
# #     update_at =Column(DATETIME)
# #     update_acc =Column(Integer)
# #     update_mac =Column(String)

# # class t_attends(BaseModel):
# #     id: int
# #     employee_id: int
# #     working_st: int
# #     round_work_in_time: datetime
# #     work_in: datetime
# #     round_work_out_time: datetime
# #     work_out: datetime
# #     work_time: time
# #     rest: time
# #     orvertime: time
# #     nighttime: time
# #     holiday_time: time
# #     create_at: datetime
# #     create_acc: int
# #     create_mac: str
# #     update_at: datetime
# #     update_acc: int
# #     update_mac: str


# # # t_paidvacation テーブルのモデル定義
# # class t_paidvacationtable(Base):
# #     __tablename__ = 't_paidvacation'
# #     id = Column(Integer, primary_key=True, autoincrement=True)
# #     employee_id =Column(Integer, nullable=False)
# #     subm_date =Column(DATETIME, nullable=False)
# #     target_date =Column(DATE, nullable=False)
# #     subm_st =Column(Integer, nullable=False)
# #     authorizer =Column(Integer, nullable=False)
# #     create_at =Column(DATETIME, nullable=False)
# #     create_acc =Column(Integer, nullable=False)
# #     update_at =Column(DATETIME)
# #     update_acc =Column(Integer)

# # class t_paidvacation(BaseModel):
# #     id: int
# #     employee_id: int
# #     subm_date: datetime
# #     target_date: date
# #     subm_st: int
# #     authorizer: int
# #     create_at: datetime
# #     create_acc: int
# #     update_at: datetime
# #     update_acc: int


# # # t_payments テーブルのモデル定義
# # class t_paymentstable(Base):
# #     __tablename__ = 't_payments'
# #     id = Column(Integer, primary_key=True, autoincrement=True)
# #     employee_ID =Column(Integer, nullable=False)
# #     payment_date =Column(DATE, nullable=False)
# #     income =Column(Integer, nullable=False)
# #     base =Column(Integer)
# #     overtime_pay =Column(Integer)
# #     nighttime_pay =Column(Integer)
# #     holiday_pay =Column(Integer)
# #     commuting_pay =Column(Integer)
# #     health_insur =Column(Integer)
# #     care_insur =Column(Integer)
# #     pension_insur =Column(Integer)
# #     employ_insur =Column(Integer)
# #     income_tax =Column(Integer)
# #     inhabitant_tax =Column(Integer)
# #     withholding_tax =Column(Integer)
# #     adj_pay =Column(Integer)
# #     others =Column(Integer)
# #     create_at =Column(DATETIME, nullable=False)
# #     create_acc =Column(Integer, nullable=False)
# #     update_at =Column(DATETIME)
# #     update_acc =Column(Integer)

# # class t_payments(BaseModel):
# #     id: int
# #     employee_ID: int
# #     payment_date: date
# #     income: int
# #     base: int
# #     overtime_pay: int
# #     nighttime_pay: int
# #     holiday_pay: int
# #     commuting_pay: int
# #     health_insur: int
# #     care_insur: int
# #     pension_insur: int
# #     employ_insur: int
# #     income_tax: int
# #     inhabitant_tax: int
# #     withholding_tax: int
# #     adj_pay: int
# #     others: int
# #     create_at: datetime
# #     create_acc: int
# #     update_at: datetime
# #     update_acc: int


# # # worder ################################################################
# # # メニューテーブルのモデル定義
# # class MenuTable(Base):
# #     __tablename__ = 'menus'
# #     id = Column(Integer, primary_key=True, autoincrement=True)
# #     category_id = Column(Integer, nullable=False)    
# #     menu = Column(String(30), nullable=False)
# #     price = Column(Integer, nullable=False)
# #     view_no = Column(Integer, nullable=False)
# #     visible_st = Column(Integer, nullable=False)
# #     created_at = Column(Timestamp, nullable=False,server_default=text('current_timestamp'))
# #     updated_at = Column(Timestamp, nullable=False,server_default=text('current_timestamp on update current_timestamp'))


# # # POSTやPUTのとき受け取るRequest Bodyのモデルを定義
# # class Menu(BaseModel):
# #     id: int
# #     category_id: int
# #     menu:str
# #     price: int
# #     view_no: int    
# #     visible_st: int
# #     created_at: str
# #     updated_at:str

# # # 注文テーブルのモデル定義
# # class OrderTable(Base):
# #     __tablename__ = 'orders'
# #     id = Column(Integer, primary_key=True, autoincrement=True)
# #     menu_id = Column(Integer, nullable=False)
# #     seat_id = Column(String(6), nullable=False)    
# #     price = Column(Integer, nullable=False)
# #     order_st = Column(Integer, nullable=False)
# #     bill_st = Column(Integer, nullable=False)
# #     created_at = Column(Timestamp, nullable=False,server_default=text('current_timestamp'))
# #     updated_at = Column(Timestamp, nullable=False,server_default=text('current_timestamp on update current_timestamp'))
    
# # # POSTやPUTのとき受け取るRequest Bodyのモデルを定義
# # class Order(BaseModel):
# #     id: int
# #     menu_id: int    
# #     seat_id:str
# #     price: int
# #     order_st: int
# #     bill_st: int
# #     created_at: str
# #     updated_at: str
    
# # class CategoryTable(Base):
# #     __tablename__ = 'categories'
# #     id = Column(Integer, primary_key=True, autoincrement=True)
# #     category = Column(String(15), nullable=False)
# #     created_at = Column(Timestamp, nullable=False,server_default=text('current_timestamp'))
# #     updated_at = Column(Timestamp, nullable=False,server_default=text('current_timestamp on update current_timestamp'))
    
# # # POSTやPUTのとき受け取るRequest Bodyのモデルを定義
# # class Category(BaseModel):
# #     id: int
# #     category: str
# #     created_at: str
# #     updated_at: str
    
# # class SeatTable(Base):
# #     __tablename__ = 'seats'
# #     id = Column(Integer, primary_key=True, autoincrement=True)
# #     seat = Column(String(15), nullable=False)
# #     created_at = Column(Timestamp, nullable=False,server_default=text('current_timestamp'))
# #     updated_at = Column(Timestamp, nullable=False,server_default=text('current_timestamp on update current_timestamp'))
    
# # # POSTやPUTのとき受け取るRequest Bodyのモデルを定義
# # class Seat(BaseModel):
# #     id: int
# #     seat: str
# #     created_at: str
# #     updated_at: str
    
    
# def main():
#     # テーブルが存在しなければ、テーブルを作成
#     Base.metadata.create_all(bind=ENGINE)


if __name__ == "__main__":
    main()
