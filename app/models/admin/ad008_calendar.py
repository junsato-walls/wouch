# -*- coding: utf-8 -*-
# モデルの定義
from pydantic import BaseModel
from datetime import datetime, time, date
import sys
from typing import Union

class ad008(BaseModel):
    id: Union[int, None] = None
    ymd: Union[date, None] = None
    year: Union[int, None] = None
    month: Union[int, None] = None
    day: Union[int, None] = None
    day_of_week: Union[str, None] = None
    visible_flg: Union[int, None] = None
    attend_st: Union[int, None] = None
    working_st: Union[int, None] = None
    memo: Union[str, None] = None
    create_at: Union[datetime, None] = None
    create_acc: Union[int, None] = None
    update_at: Union[datetime, None] = None
    update_acc: Union[int, None] = None