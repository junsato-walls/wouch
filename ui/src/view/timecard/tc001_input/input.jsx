import * as React from 'react';
import { useState, useRef, useEffect } from "react";
import ErrorDialog from '../../../components/dialog';
import Footer from '../../../components/footer';
import Button from '../../../components/button';
import Label from '../../../components/label';
import styled from "styled-components";
import axios from "axios";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const test = [{ title: "申請", start: "2022-10-18", display: "background" }]

function Input(props) {
    const childRef = useRef()
    const baseURL = "http://localhost:8000";
    const [nfcid, setNFCID] = useState("");
    const [UserDate, setUserDate] = useState();
    const [workMode, setWorkMode] = useState(0);
    const [ModeWord, setModeWord] = useState("出勤");
    const [VisibleFlg, setVisibleFlg] = useState(false);
    const [YMD, setYMD] = useState();
    const [HMS, setHMS] = useState();
    const [open, setOpen] = useState(false);

    //リクエストをDBへ投げる
    useEffect(() => {
        if (nfcid !== "") {
            axios.post(baseURL + "/tc001_01/", {
                workMode: workMode,
                idm: nfcid
            })
                .then((res) => {
                    console.log(workMode)

                    if (res.status === 200) {
                        if (workMode === 3) {
                            setOpen(true);
                        }
                        setUserDate(res.data);
                        setVisibleFlg(true);
                        setTimeout(() => {
                            setVisibleFlg(false)
                        }, 5000);

                    } if (res.status === 500) {
                        childRef.current.MessageOpen(res.data.errorcode)
                    }
                });
        }
    }, [nfcid]);

    const countup = () => {
        const nowTime = new Date();
        const dayOfWeekStrJP = [" (日)", " (月)", " (火)", " (水)", " (木)", " (金)", " (土)"];
        setYMD(nowTime.getFullYear() + "年" + (nowTime.getMonth() + 1) + "月" + nowTime.getDate() + "日" + dayOfWeekStrJP[nowTime.getDay()]);
        setHMS(('00' + nowTime.getHours()).slice(-2) + ":" + ('00' + nowTime.getMinutes()).slice(-2) + ":" + ('00' + nowTime.getSeconds()).slice(-2));
    }; setInterval(countup, 1000);

    const WorkIn = () => {
        if (workMode !== 0) {
            setWorkMode(0);
            setModeWord("出勤")
            return;
        }
    }

    const BreakTime = () => {
        if (workMode !== 1) {
            setWorkMode(1);
            setModeWord("休憩")
            return;
        }
    }

    const WorkOut = () => {
        if (workMode !== 2) {
            setModeWord("退勤")
            setWorkMode(2);
            return;
        }
    }

    const LeaveRequest = () => {
        if (workMode !== 3) {
            setModeWord("有給申請")
            setWorkMode(3);
            return;
        }
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Back>
                <ClockYMD>{YMD}</ClockYMD>
                <input type="text" id="nfc_input" name="name" size="20" value={nfcid} onChange={(event) => setNFCID(event.target.value)}
                    style={{ background: 'transparent', border: 'none', outline: 'none' }}>
                </input>
                <Main>
                    <ClockHMS>{HMS}</ClockHMS>
                    {
                        VisibleFlg &&
                        <Label>
                            {UserDate.employee_num + " " + UserDate.name}
                            <p>{ModeWord + " " + UserDate.time}</p>
                        </Label>
                    }
                </Main>
                <ErrorDialog ref={childRef}></ErrorDialog>
                <Footer theme={FooterTheme}>
                    <Button theme={WorkInButton} onClick={WorkIn}>出勤</Button>
                    <Button theme={BreakTimeButton} onClick={BreakTime}>休憩</Button>
                    <Button theme={WWorkOutButton} onClick={WorkOut}>退勤</Button>
                    <Button theme={LeaveRequestButton} onClick={LeaveRequest}>有給</Button>
                </Footer>
            </Back>

            <div>
                <Dialog
                    fullScreen
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Transition}
                >
                    <AppBar sx={{ position: 'relative' }}>
                        <Toolbar>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleClose}
                                aria-label="close"
                            >
                                <CloseIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
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
                </Dialog>
            </div>
        </>
    );
}
export default Input;

const Back = styled.div`
            background-color: #FFFFFF;
            min-height: 90vh;
            `;

const Main = styled.div`
            display: flex;
            justify-content: top;
            flex-direction: column;
            align-items: top;
            min-height: 65vh;
            `;

const ClockYMD = styled.div`
            font-size: 5.0vw;
            color: black;
            `;

const ClockHMS = styled.div`
            font-size: 15.0vw;
            color: black;
            `;

const WorkInButton = {
    background: "#FFFFAA",
    color: "#00000"
};

const BreakTimeButton = {
    background: "#AADDFF",
    color: "#00000"
};

const WWorkOutButton = {
    background: "#FFBBBB",
    color: "#00000"
};

const LeaveRequestButton = {
    background: "#AAFF88",
    color: "#00000"
};

const FooterTheme = {
};