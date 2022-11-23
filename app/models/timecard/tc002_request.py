# -*- coding: utf-8 -*-
# モデルの定義
from pydantic import BaseModel
from datetime import datetime, time, date
import sys
from typing import Union

class tc002(BaseModel):
    employee_id: Union[int, None] = None
    idm: Union[int, None] = None
    target_date: Union[date, None] = None

