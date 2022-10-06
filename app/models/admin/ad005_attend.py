# -*- coding: utf-8 -*-
# モデルの定義
from pydantic import BaseModel
from datetime import datetime, time, date
import sys
from typing import Union

class ad005(BaseModel):
    employee_id: Union[int, None] = None
    YYYY: Union[str, None] = None
    MM: Union[str, None] = None
    working_st: Union[int, None] = None
    round_work_in_time: Union[datetime, None] = None
    round_work_out_time: Union[datetime, None] = None
    rest: Union[str, None] = None


