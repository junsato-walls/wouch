# -*- coding: utf-8 -*-
# モデルの定義
from pydantic import BaseModel
from datetime import datetime, time, date
import sys
from typing import Union

class ad005(BaseModel):
    id: Union[int, None] = None
    acc_id: Union[int, None] = None
    employee_id: Union[int, None] = None
    working_st: Union[int, None] = None
    round_work_in_time: Union[datetime, None] = None
    round_work_out_time: Union[datetime, None] = None
    work_time: Union[time, None] = None
    rest: Union[time, None] = None
    overtime: Union[time, None] = None
    nighttime: Union[time, None] = None
    holiday_time: Union[time, None] = None
    create_at: Union[datetime, None] = None
    create_acc: Union[int, None] = None
    create_mac: Union[str, None] = None
    update_at: Union[datetime, None] = None
    update_acc: Union[int, None] = None
    update_mac: Union[str, None] = None