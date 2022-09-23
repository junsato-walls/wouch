# -*- coding: utf-8 -*-
# モデルの定義
from pydantic import BaseModel
from datetime import datetime, time, date
import sys

class tc001(BaseModel):
    workMode: int
    idm: str
