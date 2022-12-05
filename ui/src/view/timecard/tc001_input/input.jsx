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
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const test1 = [
    {
        "title": "有給",
        "start": "2022-12-01"
    },
    {
        "title": "有給",
        "start": "2022-12-06"
    }
]

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
    const [LeaveRemainDate, setLeaveRemainDate] = useState([]);
    const [LeaveRequestDate, setLeaveRequestDate] = useState([]);
    const [EventInfoDate, setEventInfoDate] = useState();
    const [InfoDate, setInfoDate] = useState();
    const [YMD, setYMD] = useState();
    const [HMS, setHMS] = useState();
    const [open, setOpen] = useState(false);
    const [OpenGetAlert, setOpenGetAlert] = useState(false);
    const [OpenCancelAlert, setOpenCancelAlert] = useState(false);

    const [OpenAlert, setOpenAlert] = useState(false);


    //DBへユーザーが存在しているかリクエストを送る
    //testID : 012e5524f1463b3d
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
        };
    }, [nfcid]);

    //有給申請を送信
    const sendLeaveDayDate = () => {
        axios.post(baseURL + "/tc002_01/", {
            employee_id: UserDate.employee_id,
            target_date: InfoDate
        })
        console.log(UserDate.employee_id)
        console.log(InfoDate)
        GetLeaveRemainDate();
        GetLeaveRequestDate();
        setOpenAlert(false);
    };

    //有給取り消しを送信
    const sendLeaveCancelDayDate = () => {
        axios.post(baseURL + "", {
            employee_id: UserDate.employee_id,
            target_date: EventInfoDate
        })
        console.log(UserDate.employee_id)
        console.log(EventInfoDate)
        GetLeaveRemainDate();
        GetLeaveRequestDate();
        setOpenAlert(false);
    };

    //残有給日数の取得
    const GetLeaveRemainDate = () => {
        let param = '/tc002_01/?employee_id=' + UserDate.employee_id
        axios.get(baseURL + param).then(res => {
            setLeaveRemainDate(res.data)
        })
    }
    //有給申請ステータス(日付も)の取得
    const GetLeaveRequestDate = () => {
        let param = '/tc002_02/?employee_id=' + UserDate.employee_id
        axios.get(baseURL + param).then(res => {
            setLeaveRequestDate(res.data)
        })
    }

    //ユーザーの存在が確認されてからカレンダーを開くようにする
    useEffect(() => {
        if (VisibleFlg == true) {
            if (workMode == 3) {
                GetLeaveRemainDate()
                GetLeaveRequestDate()
                setOpen(true)
            }
        }
    }, [VisibleFlg])

    //メイン画面の日付操作
    const countup = () => {
        const nowTime = new Date();
        const dayOfWeekStrJP = [" (日)", " (月)", " (火)", " (水)", " (木)", " (金)", " (土)"];
        setYMD(nowTime.getFullYear() + "年" + (nowTime.getMonth() + 1) + "月" + nowTime.getDate() + "日" + dayOfWeekStrJP[nowTime.getDay()]);
        setHMS(('00' + nowTime.getHours()).slice(-2) + ":" + ('00' + nowTime.getMinutes()).slice(-2) + ":" + ('00' + nowTime.getSeconds()).slice(-2));
    }; setInterval(countup, 1000);

    //      各種ボタン制御
    //出勤・休憩・退勤・有給取得
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
            setOpen(true)
            return;
        }
    }

    const handleClickOpenAlert = () => {
        setOpenGetAlert(true);
    };

    const handleClickCancelAlert = () => {
        setOpenCancelAlert(true);
    };

    const handleCloseAlert = () => {
        setOpenGetAlert(false);
        setOpenCancelAlert(false);

    };

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
                >
                    <AppBar sx={{ position: 'relative' }}>
                        <Toolbar>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleClose}
                                aria-label="close"
                            >
                                <ArrowBackIosIcon />戻る
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
                                    events={test1}
                                    //イベントクリック動作
                                    eventClick={
                                        function (eventClickInfo) {
                                            setEventInfoDate(eventClickInfo.event.startStr);
                                            handleClickCancelAlert();
                                        }
                                    }
                                    // 日付クリック動作
                                    dateClick={
                                        function (infoDate) {
                                            setInfoDate(infoDate.dateStr);
                                            handleClickOpenAlert();
                                        }
                                    }
                                />
                            </td>
                            <td style={{ width: "20%" }}>
                                <div>有給残日数：{LeaveRemainDate.remain_day}日</div>
                                <TableContainer component={Paper}>
                                    <Table aria-label="spanning table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="">有給予定日</TableCell>
                                                <TableCell align="">申請状態</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {LeaveRequestDate.map((data) => (
                                                <TableRow>
                                                    <TableCell>{data.target_date}</TableCell>
                                                    <TableCell>{data.subm_st}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </td>
                        </tr>
                    </table>
                    <div>
                        <Dialog
                            open={OpenGetAlert}
                            onClose={handleCloseAlert}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                                {"取得確認"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    {InfoDate}に有給休暇を取得しますか？
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Stack direction="row" spacing={1}>
                                    <Chip label="いいえ" onClick={handleCloseAlert} />
                                    <Chip label="はい" onClick={sendLeaveDayDate} />
                                </Stack>
                            </DialogActions>
                        </Dialog>
                    </div>
                    <div>
                        <Dialog
                            open={OpenCancelAlert}
                            onClose={handleCloseAlert}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                                {"取り消し確認"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    {EventInfoDate}の有給休暇を取り消ししますか？
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Stack direction="row" spacing={1}>
                                    <Chip label="いいえ" onClick={handleCloseAlert} />
                                    <Chip label="はい" onClick={sendLeaveCancelDayDate} />
                                </Stack>
                            </DialogActions>
                        </Dialog>
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