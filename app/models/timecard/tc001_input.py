# -*- coding: utf-8 -*-
# モデルの定義
from pydantic import BaseModel
from datetime import datetime, time, date
import sys
from typing import Union

class tc001(BaseModel):
    workMode: Union[str, None] = None
    idm: Union[str, None] = None
    employee_id: Union[int, None] = None
    employee_num: Union[str, None] = None
