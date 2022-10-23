import React, { useCallback, useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const test = [{ title: "承認", start: "2022-10-24" }]

const CalendarData = (props) => {
    return (
        <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView={props.initialView}
            contentHeight="auto"
            locale="ja"
            selectable="true"
            // 取得データを配列に挿入
            events={test}
            // 日付クリック動作
            dateClick={
                function (infoDate) {
                    console.log(infoDate.dateStr)
                }
            }           
        />
    );
};
export default CalendarData;