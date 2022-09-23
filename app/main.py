from fastapi import FastAPI, HTTPException, APIRouter
from typing import List  # ネストされたBodyを定義するために必要
from starlette.middleware.cors import CORSMiddleware  # CORSを回避するために必要
from db import session  # DBと接続するためのセッション
from sqlalchemy.exc import SQLAlchemyError
from routers import user
from routers import m01_companies
from routers import m02_employees
from routers import m03_payments
from routers import m04_calendar
from routers import m05_jobshift
from routers import m06_admin
from routers import t07_attends
from routers import t08_paidvacation
from routers import t09_payments
from routers.timecard import tc001_input
from models.user import User, UserTable
from models.m01_companies import m_companies, m_companiestable
from models.m02_employees import m_employees, m_employeestable
from models.m03_payments import m_payments, m_paymentstable
from models.m04_calendar import m_calendar, m_calendartable
from models.m05_jobshift import m_jobshift, m_jobshifttable
from models.m06_admin import m_admin, m_admintable
from models.t07_attends import t_attends, t_attendstable
from models.t08_paidvacation import t_paidvacation, t_paidvacationtable
from models.t09_payments import t_payments, t_paymentstable
from models.timecard.tc001_input import tc001

app = FastAPI()

app.include_router(user.router)
app.include_router(m01_companies.router)
app.include_router(m02_employees.router)
app.include_router(m03_payments.router)
app.include_router(m04_calendar.router)
app.include_router(m05_jobshift.router)
app.include_router(m06_admin.router)
app.include_router(t07_attends.router)
app.include_router(t08_paidvacation.router)
app.include_router(t09_payments.router)
app.include_router(tc001_input.router)

# CORSを回避するために設定
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

