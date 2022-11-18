# -*- coding: utf-8 -*-
# モデルの定義
from pydantic import BaseModel
from datetime import datetime, time, date
import sys
from typing import Union

class ad006(BaseModel):
    employee_id: Union[int, None] = None
    idm: Union[int, None] = None
    id: Union[int, None] = None
    remain_day: Union[int, None] = None
    add_day: Union[int, None] = None
    memo: Union[str, None] = None
    start: Union[date, None] = None
    end: Union[date, None] = None
    acc_id: Union[int, None] = None 
    request_date: Union[datetime, None] = None
    target_date: Union[date, None] = None
    subm_st: Union[int, None] = None
    authorizer: Union[int, None] = None
    create_at: Union[datetime, None] = None
    create_acc: Union[int, None] = None
    update_at: Union[datetime, None] = None
    update_acc: Union[int, None] = None
