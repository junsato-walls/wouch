import * as React from 'react';
import { useState, useRef, useEffect } from "react";
import ErrorDialog from '../../../components/dialog';
import Footer from '../../../components/footer';
import Button from '../../../components/button';
import Label from '../../../components/label';
import styled from "styled-components";
import axios from "axios";
import Tc002 from "../tc002_submission/submission";

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
    // const baseURL = "http://localhost:8000";
    const baseURL = process.env.REACT_APP_IP_PORT
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
    const [requestPaper, setRequestPaper] = useState(false);
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
                employee_num: nfcid
            })
                .then((res) => {
                    if (res.status === 200) {
                        setUserDate(res.data);
                        setVisibleFlg(true);
                        setTimeout(() => {
                            setVisibleFlg(false)
                            setNFCID('')
                        }, 3000);
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
                setRequestPaper(true)
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
            <Tc002 empId ='w002' setOpen={setOpen} open={open}/>
                {/* {
                requestPaper &&
                    <Tc002 empId ={UserDate.employee_id} setOpen={setOpen} open={open}/>
                } */}
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