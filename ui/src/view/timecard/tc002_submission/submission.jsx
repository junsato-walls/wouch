import React, { useCallback, useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Container from '@mui/material/Container';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

const Item = [
    { title: "申請", start: "2022-10-09", display: "background" }
]

const CalendarData = (props) => {
    return (
        <Container maxWidth="md">

            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView={props.initialView}
                contentHeight="auto"
                locale="ja"
                selectable="true"
                // 取得データを配列に挿入
                events={Item}
                // 日付クリック動作
                dateClick={
                    function (infoDate) {
                        console.log(infoDate.dateStr)
                    }
                }
            />
        </Container>
    );
};
export default CalendarData;