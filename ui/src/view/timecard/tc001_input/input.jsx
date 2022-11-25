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

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const test = [{ title: "会社休み", start: "2022-10-18", end: "2022-10-25" }]

function Input(props) {
    const childRef = useRef()
    const baseURL = "http://localhost:8000";
    const [nfcid, setNFCID] = useState("");
    const [UserDate, setUserDate] = useState();
    const [workMode, setWorkMode] = useState(0);
    const [ModeWord, setModeWord] = useState("出勤");
    const [VisibleFlg, setVisibleFlg] = useState(false);
    const [WorkInColor, setWorkInColor] = useState(true);
    const [BreakTimeColor, setBreakTimeColor] = useState(false);
    const [WorkOutColor, setWorkOutColor] = useState(false);
    const [LeaveRequestColor, setLeaveRequestColor] = useState(false);
    const [LeaveRequestDate, setLeaveRequestDate] = useState();


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
                    if (res.status === 200) {
                        setUserDate(res.data);
                        setVisibleFlg(true);
                        setTimeout(() => {
                            setVisibleFlg(false)
                        }, 5000);

                    } if (res.status === 500) {
                        childRef.current.MessageOpen(res.data.errorcode)
                    }
                });
            if (workMode == 3) {
                setOpen(true);
                console.log(UserDate.employee_id)
                // let param = '/tc002_01/?employee_id=' + UserDate.employee_num
                // axios.get(baseURL + param).then(res => {
                //     setLeaveRequestDate(res.data)
                console.log(UserDate.employee_num)
                // })
                console.log(UserDate.employee_id)
                setOpen(true)
            }
        };

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
            setModeWord("出勤");
            setWorkInColor(true)
            setBreakTimeColor(false)
            setWorkOutColor(false)
            setLeaveRequestColor(false)
            return;
        }
    }

    const BreakTime = () => {
        if (workMode !== 1) {
            setWorkMode(1);
            setModeWord("休憩")
            setWorkInColor(false)
            setBreakTimeColor(true)
            setWorkOutColor(false)
            setLeaveRequestColor(false)
            return;
        }
    }

    const WorkOut = () => {
        if (workMode !== 2) {
            setModeWord("退勤")
            setWorkMode(2);
            setWorkInColor(false)
            setBreakTimeColor(false)
            setWorkOutColor(true)
            setLeaveRequestColor(false)
            return;
        }
    }

    const LeaveRequest = () => {
        if (workMode !== 3) {
            setModeWord("有給申請")
            setWorkMode(3);
            setWorkInColor(false)
            setBreakTimeColor(false)
            setWorkOutColor(false)
            setLeaveRequestColor(true)
            return;
        }
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleDatesChange = (DatesSetArg) => {
        console.log(DatesSetArg);
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
                    {
                        WorkInColor ?
                            <Button style={{ background: '#FF6600' }} theme={WorkInButton} onClick={WorkIn}>出勤</Button>
                            :
                            <Button theme={WorkInButton} onClick={WorkIn}>出勤</Button>
                    }
                    {
                        BreakTimeColor ?
                            <Button style={{ background: '#FF6600' }} theme={BreakTimeButton} onClick={BreakTime}>休憩</Button>
                            :
                            <Button theme={BreakTimeButton} onClick={BreakTime}>休憩</Button>
                    }
                    {
                        WorkOutColor ?
                            <Button style={{ background: '#FF6600' }} theme={WorkOutButton} onClick={WorkOut}>退勤</Button>
                            :
                            <Button theme={WorkOutButton} onClick={WorkOut}>退勤</Button>
                    }
                    {
                        LeaveRequestColor ?
                            <Button style={{ background: '#FF6600' }} theme={LeaveRequestButton} onClick={LeaveRequest}>有給</Button>
                            :
                            <Button theme={LeaveRequestButton} onClick={LeaveRequest}>有給</Button>
                    }
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
                    <table border="1">
                        <tr>
                            <td style={{ width: "80%" }}>
                                <FullCalendar
                                    plugins={[dayGridPlugin, interactionPlugin]}
                                    initialView={props.initialView}
                                    contentHeight="auto"
                                    locale="ja"
                                    selectable="true"
                                    // 取得データを配列に挿入
                                    events={test}
                                    datesSet={handleDatesChange}
                                    // 日付クリック動作
                                    dateClick={
                                        function (infoDate) {
                                            console.log(infoDate.dateStr)
                                        }
                                    }
                                />
                            </td>
                            <td style={{ width: "20%" }}>
                                有給残日数：3日
                                <TableContainer component={Paper}>
                                    <Table aria-label="spanning table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="">有給予定日</TableCell>
                                                <TableCell align="">承認</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>test2</TableCell>
                                                <TableCell>test3</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </td>
                        </tr>
                    </table>
                    <div style={{ display: "flex" }}>
                        <Button>test1</Button>
                        <div>test2</div>
                    </div>
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
    // background: "#FFFFAA",
    color: "#00000",

};

const BreakTimeButton = {
    // background: "#AADDFF",
    color: "#00000",
};

const WorkOutButton = {
    // background: "#FFBBBB",
    color: "#00000",
};

const LeaveRequestButton = {
    // background: "#AAFF88",
    color: "#00000",
};

const FooterTheme = {
};

const LeaveLabel = {
    // background: "#AAFF88",
    color: "#00000",
};