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
from routers import t01_attends
from routers import t02_leaverequest
from routers import t03_payments
from routers.timecard import tc001_input
from routers.timecard import tc002_request
from routers.admin import ad005_attend
from models.user import User, UserTable
from models.m01_companies import m_companies, m_companiestable
from models.m02_employees import m_employees, m_employeestable
from models.m03_payments import m_payments, m_paymentstable
from models.m04_calendar import m_calendar, m_calendartable
from models.m05_jobshift import m_jobshift, m_jobshifttable
from models.m06_admin import m_admin, m_admintable
from models.t01_attends import t_attends, t_attendstable
from models.t02_leaverequest import t_leaverequest, t_leaverequesttable
from models.t03_payments import t_payments, t_paymentstable
from models.timecard.tc001_input import tc001
from models.timecard.tc002_request import tc002
from models.admin.ad005_attend import ad005

app = FastAPI()

app.include_router(user.router)
app.include_router(m01_companies.router)
app.include_router(m02_employees.router)
app.include_router(m03_payments.router)
app.include_router(m04_calendar.router)
app.include_router(m05_jobshift.router)
app.include_router(m06_admin.router)
app.include_router(t01_attends.router)
app.include_router(t02_leaverequest.router)
app.include_router(t03_payments.router)
app.include_router(tc001_input.router)
app.include_router(tc002_request.router)
app.include_router(ad005_attend.router)

# CORSを回避するために設定
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

