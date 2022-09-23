# -*- coding: utf-8 -*-
# モデルの定義
# from sqlalchemy import Column, Integer, String, text
# from sqlalchemy.types import Date, DateTime, Time, Float
from pydantic import BaseModel
# from db import Base
# from db import ENGINE
from datetime import datetime, time, date
import sys

class tc001(BaseModel):
    workMode: int
    idm: str

# def main():
#     # テーブルが存在しなければ、テーブルを作成
#     Base.metadata.create_all(bind=ENGINE)


# if __name__ == "__main__":
#     main()