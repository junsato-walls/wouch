import * as React from 'react';
import { useState, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Box from '@mui/material/Box';
import ErrorDialog from '../../../components/dialog';
import Hedder from '../../../components/hedder';
import Footer from '../../../components/footer';
import Button from '../../../components/button';
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
    const baseURL = "http://localhost:8000/";
    const [nfcid, setNFCID] = useState("");
    const [UserDate, setUserDate] = useState();
    const [workMode, setworkMode] = useState(0);
    const [ModeWord, setModeWord] = useState("出勤");
    const [VisibleFlg, setVisibleFlg] = useState(false);
    const [open, setOpen] = useState(false);

    const countup = () => {
        const nowTime = new Date();
        const dayOfWeekStrJP = [" (日)", " (月)", " (火)", " (水)", " (木)", " (金)", " (土)"];
        const YMD = nowTime.getFullYear() + "年" + (nowTime.getMonth() + 1) + "月" + nowTime.getDate() + "日" + dayOfWeekStrJP[nowTime.getDay()];
        document.getElementById("localYMD").innerHTML = YMD;
        const HMS = ('00' + nowTime.getHours()).slice(-2) + ":" + ('00' + nowTime.getMinutes()).slice(-2) + ":" + ('00' + nowTime.getSeconds()).slice(-2);
        document.getElementById("localHMS").innerHTML = HMS;
    };
    setInterval(countup, 1000);

    /////////モード参照処理///////////
    // 0 = 出勤 , 1 = 休憩 , 2 = 退勤
    /////////////////////////////////
    const WorkIn = () => {
        if (workMode !== 0) {
            setworkMode(0);
            setModeWord("出勤")
            console.log(setworkMode)
            return;
        }
    }

    const BreakTime = () => {
        if (workMode !== 1) {
            setworkMode(1);
            setModeWord("休憩")
            return;
        }
    }

    const WorkOut = () => {
        if (workMode !== 2) {
            setModeWord("退勤")
            setworkMode(2);
            return;
        }
    }

    const LeaveRequest = () => {
        if (workMode !== 3) {
            setModeWord("有給申請")
            setworkMode(3);
            setOpen(true);
            return;
        }
    }

    //リクエストをDBへ投げる
    //testID : 012e5524f1463b3d
    const PostID = () => {
        axios
            .post(baseURL + "tc001/01", {
                workMode: workMode,
                idm: nfcid
            })
            .then((res) => {
                if (res.status === 200) {
                    setUserDate(res.data);

                    setVisibleFlg(true);
                    setTimeout(() => {
                        setVisibleFlg(false)
                    }, 2000);
                } if (res.status === 400) {
                    childRef.current.MessageOpen(res.data.errorcode)
                }
            });
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <h1><div id="localYMD" ></div></h1>
            <Test>
                <p>{nfcid}</p>
                <Title><div id="localHMS"></div></Title>
                {/* <Hedder>現在モード : {ModeWord}</Hedder> */}
                <Label>9:00　　　012345678　　　佐藤　太郎</Label>
            </Test>
            {
                VisibleFlg &&
                <div>
                    <p>社員番号：{UserDate.employee_num}</p>
                    <p>名前：{UserDate.name}</p>
                    <p>時間  {UserDate.time}</p>
                </div>
            }
            <ErrorDialog ref={childRef}></ErrorDialog>
            <input type="text" id="nfc_input" name="name" size="20" value={nfcid} onChange={(event) => setNFCID(event.target.value)}
                style={{ color: 'white', border: 'none', outline: 'none' }}></input>
            <Footer theme={FooterTheme}>
                <Box sx={{ '& button': { m: 1 } }}>
                    <Button theme={WorkInButton} onClick={WorkIn}>出勤</Button>
                    <Button theme={BreakTimeButton} onClick={BreakTime}>休憩</Button>
                    <Button theme={WWorkOutButton} onClick={WorkOut}>退勤</Button>
                    <Button theme={LeaveRequestButton} onClick={LeaveRequest}>有給申請</Button>
                    {/* <Button variant="contained" id="SendID" size="large" onClick={PostID} >ID送信</Button> */}
                </Box>
            </Footer>

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

const Test = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
min-height: 60vh;
`;

const Label = styled.div`
    width: 100%;
    font-weight: bold;
    font-size:2.5em
`;

const Title = styled.div`
font-size: 10.0em;
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
    background: "white"
};

const HedderTheme = {
    background: ""
};