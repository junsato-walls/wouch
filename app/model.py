# # -*- coding: utf-8 -*-
# # モデルの定義
# from sqlalchemy import Column, Integer, String, text
# from sqlalchemy.types import Date, DateTime, Time, Float
# from pydantic import BaseModel
# from db import Base
# from db import ENGINE
# from datetime import datetime, time, date
# import sys

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
    
# # wouch #################################################################
# # m_companies テーブルのモデル定義
# class m_companiestable(Base):
#     __tablename__ = 'm_companies'
#     id = Column(Integer, primary_key=True, autoincrement=True)
#     company_name = Column(String(100), nullable=False)
#     post_code = Column(String(8), nullable=False)
#     address_pref = Column(String(100), nullable=False)
#     address_city = Column(String(100), nullable=False)
#     address_other = Column(String(100), nullable=False)
#     facility_name = Column(String(100), nullable=False)
#     tell = Column(String(20), nullable=False)
#     ceo = Column(String(50), nullable=False)
#     capital = Column(String(15), nullable=False)
#     pay_cutoff_date = Column(String(2), nullable=False)
#     pay_date = Column(String(2), nullable=False)
#     empl_insur_apply_office_num = Column(String(13))
#     empl_insur_estab_date = Column(Date)
#     labor_insur_num = Column(String)
#     labor_insur_estab_date = Column(Date)
#     social_insur_num = Column(String)
#     social_insur_estab_date = Column(Date)
#     welfare_pension_insur_office_num = Column(String)
#     corporate_num = Column(String)
#     industry_class = Column(Integer)
#     industry_type = Column(String)
#     start = Column(Date)
#     paidvacanmt_cutoff_date = Column(String)
#     end = Column(Date)
#     create_at = Column(DateTime, nullable=False)
#     create_acc = Column(Integer, nullable=False)
#     update_at = Column(DateTime)
#     update_acc = Column(Integer)


# class m_companies(BaseModel):
#     id: int
#     company_name: str
#     post_code: str
#     address_pref: str
#     address_city: str
#     address_other: str
#     facility_name: str
#     tell: str
#     ceo: str
#     capital: str
#     pay_cutoff_date: str
#     pay_date: str
#     empl_insur_apply_office_num: str
#     empl_insur_estab_date: date
#     labor_insur_num: str
#     labor_insur_estab_date: date
#     social_insur_num: str
#     social_insur_estab_date: date
#     welfare_pension_insur_office_num: str
#     corporate_num: str
#     industry_class: int
#     industry_type: str
#     start: date
#     paidvacanmt_cutoff_date: str
#     end: date
#     create_at: datetime
#     create_acc: int
#     update_at: datetime
#     update_acc: int


# # m_employees テーブルのモデル定義
# class m_employeestable(Base):
#     __tablename__ = 'm_employees'
#     id = Column(Integer, primary_key=True, autoincrement=True)
#     shift_id =Column(Integer, nullable=False)
#     name =Column(String, nullable=False)
#     name_kana =Column(String, nullable=False)
#     birthday =Column(Date, nullable=False)
#     in_company =Column(Date, nullable=False)
#     exit_company =Column(Date)
#     sex =Column(Integer, nullable=False)
#     salary_type =Column(Integer, nullable=False)
#     base =Column(Integer, nullable=False)
#     weekly_work_time =Column(Float, nullable=False)
#     std_monthly_compensation =Column(Integer, nullable=False)
#     empl_insur_insured_num =Column(String)
#     pension_num =Column(String)
#     mynumber =Column(String)
#     former_job =Column(String)
#     dependent =Column(Integer, nullable=False)
#     health_insur_num =Column(String)
#     nationality =Column(String)
#     empl_insur_insur_qual_acq_date =Column(Date)
#     empl_insur_insur_qual_lost_date =Column(Date)
#     soc_insur_insur_qual_acq_date =Column(Date)
#     soc_insur_insur_qual_lost_date =Column(Date)
#     start =Column(Date)
#     end =Column(Date)
#     create_at =Column(DateTime, nullable=False)
#     create_acc =Column(Integer, nullable=False)
#     update_at =Column(DateTime)
#     update_acc =Column(Integer)
#     memo =Column(String)


# class m_employees(BaseModel):
#     id: int
#     shift_id: int
#     name: str
#     name_kana: str
#     birthday: date
#     in_company: date
#     exit_company: date
#     sex: int
#     salary_type: int
#     base: int
#     weekly_work_time: float
#     std_monthly_compensation: int
#     empl_insur_insured_num: str
#     pension_num: str
#     mynumber: str
#     former_job: str
#     dependent: int
#     health_insur_num: str
#     nationality: str
#     empl_insur_insur_qual_acq_date: date
#     empl_insur_insur_qual_lost_date: date
#     soc_insur_insur_qual_acq_date: date
#     soc_insur_insur_qual_lost_date: date
#     start: date
#     end: date
#     create_at: datetime
#     create_acc: int
#     update_at: datetime
#     update_acc: int


# # m_payments テーブルのモデル定義
# class m_paymentstable(Base):
#     __tablename__ = 'm_payments'
#     id = Column(Integer, primary_key=True, autoincrement=True)
#     employee_id =Column(Integer, nullable=False)
#     base =Column(Integer)
#     commuting_pay =Column(Integer)
#     health_insur =Column(Integer)
#     care_insur =Column(Integer)
#     pension_insur =Column(Integer)
#     income_tax =Column(Integer)
#     inhabitant_tax =Column(Integer)
#     create_at =Column(DateTime, nullable=False)
#     create_acc =Column(Integer, nullable=False)
#     update_at =Column(DateTime)
#     update_acc =Column(Integer)


# class m_payments(BaseModel):
#     id: int
#     employee_id: int
#     base: int
#     commuting_pay: int
#     health_insur: int
#     care_insur: int
#     pension_insur: int
#     income_tax: int
#     inhabitant_tax: int
#     create_at: datetime
#     create_acc: int
#     update_at: datetime
#     update_acc: int
#     memo: str


# # m_calendar テーブルのモデル定義
# class m_calendartable(Base):
#     __tablename__ = 'm_calendar'
#     id = Column(Integer, primary_key=True, autoincrement=True)
#     ymd =Column(Date, nullable=False)
#     year =Column(Integer, nullable=False)
#     month =Column(Integer, nullable=False)
#     day =Column(Integer, nullable=False)
#     day_of_week =Column(String, nullable=False)
#     visible_flg =Column(Integer, nullable=False)
#     working_st =Column(Integer, nullable=False)
#     memo =Column(String)
#     create_at =Column(DateTime, nullable=False)
#     create_acc =Column(Integer, nullable=False)
#     update_at =Column(DateTime)
#     update_acc =Column(Integer)


# class m_calendar(BaseModel):
#     id: int
#     ymd: date
#     year: int
#     month: int
#     day: int
#     day_of_week: str
#     visible_flg: int
#     working_st: int
#     memo: str
#     create_at: datetime
#     create_acc: int
#     update_at: datetime
#     update_acc: int


# # m_jobshift テーブルのモデル定義
# class m_jobshifttable(Base):
#     __tablename__ = 'm_jobshift'
#     id = Column(Integer, primary_key=True, autoincrement=True)
#     shift_name =Column(String, nullable=False)
#     delete_flg =Column(Integer, nullable=False)
#     job_type =Column(Integer, nullable=False)
#     work_in_time =Column(Time, nullable=False)
#     work_out_time =Column(Time, nullable=False)
#     rest =Column(Time, nullable=False)
#     memo =Column(String)
#     create_at =Column(DateTime, nullable=False)
#     create_acc =Column(Integer, nullable=False)
#     update_at =Column(DateTime)
#     update_acc =Column(Integer)


# class m_jobshift(BaseModel):
#     id: int
#     shift_name: str
#     delete_flg: int
#     job_type: int
#     work_in_time: time
#     work_out_time: time
#     rest: time
#     memo: str
#     create_at: datetime
#     create_acc: int
#     update_at: datetime
#     update_acc: int


# # m_admin テーブルのモデル定義
# class m_admintable(Base):
#     __tablename__ = 'm_admin'
#     id = Column(Integer, primary_key=True, autoincrement=True)
#     employee_id =Column(Integer, nullable=False)
#     admin_id =Column(String, nullable=False)
#     password =Column(String, nullable=False)
#     fail_count =Column(Integer)
#     edit_flg =Column(Integer)
#     attend_flg =Column(Integer)
#     vacation_flg =Column(Integer)
#     employee_flg =Column(Integer)
#     calendar_flg =Column(Integer)
#     shift_flg =Column(Integer)
#     payment_flg =Column(Integer)
#     start =Column(Date)
#     end =Column(Date)
#     create_at =Column(DateTime, nullable=False)
#     create_acc =Column(Integer, nullable=False)
#     update_at =Column(DateTime)
#     update_acc =Column(Integer)


# class m_admin(BaseModel):
#     id: int
#     employee_id: int
#     admin_id: str
#     password: str
#     fail_count: int
#     edit_flg: int
#     attend_flg: int
#     vacation_flg: int
#     employee_flg: int
#     calendar_flg: int
#     shift_flg: int
#     payment_flg: int
#     start: date
#     end: date
#     create_at: datetime
#     create_acc: int
#     update_at: datetime
#     update_acc: int


# # t_attends テーブルのモデル定義
# class t_attendstable(Base):
#     __tablename__ = 't_attends'
#     id = Column(Integer, primary_key=True, autoincrement=True)
#     employee_id =Column(Integer, nullable=False)
#     working_st =Column(Integer, nullable=False)
#     round_work_in_time =Column(DateTime)
#     work_in =Column(DateTime, nullable=False)
#     round_work_out_time =Column(DateTime)
#     work_out =Column(DateTime)
#     work_time =Column(Time)
#     rest =Column(Time)
#     orvertime =Column(Time)
#     nighttime =Column(Time)
#     holiday_time =Column(Time)
#     create_at =Column(DateTime)
#     create_acc =Column(Integer)
#     create_mac =Column(String)
#     update_at =Column(DateTime)
#     update_acc =Column(Integer)
#     update_mac =Column(String)


# class t_attends(BaseModel):
#     id: int
#     employee_id: int
#     working_st: int
#     round_work_in_time: datetime
#     work_in: datetime
#     round_work_out_time: datetime
#     work_out: datetime
#     work_time: time
#     rest: time
#     orvertime: time
#     nighttime: time
#     holiday_time: time
#     create_at: datetime
#     create_acc: int
#     create_mac: str
#     update_at: datetime
#     update_acc: int
#     update_mac: str


# # t_paidvacation テーブルのモデル定義
# class t_paidvacationtable(Base):
#     __tablename__ = 't_paidvacation'
#     id = Column(Integer, primary_key=True, autoincrement=True)
#     employee_id =Column(Integer, nullable=False)
#     subm_date =Column(DateTime, nullable=False)
#     target_date =Column(Date, nullable=False)
#     subm_st =Column(Integer, nullable=False)
#     authorizer =Column(Integer, nullable=False)
#     create_at =Column(DateTime, nullable=False)
#     create_acc =Column(Integer, nullable=False)
#     update_at =Column(DateTime)
#     update_acc =Column(Integer)


# class t_paidvacation(BaseModel):
#     id: int
#     employee_id: int
#     subm_date: datetime
#     target_date: date
#     subm_st: int
#     authorizer: int
#     create_at: datetime
#     create_acc: int
#     update_at: datetime
#     update_acc: int


# def main():
#     # テーブルが存在しなければ、テーブルを作成
#     Base.metadata.create_all(bind=ENGINE)


# if __name__ == "__main__":
#     main()