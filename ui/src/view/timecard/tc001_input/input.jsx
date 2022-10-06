import * as React from 'react';
import { useState, useRef } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ErrorDialog from '../../../components/dialog';

function Input(props) {

    const childRef = useRef()
    const baseURL = "http://localhost:8000/";
    const [nfcid, setNFCID] = useState("");
    const [UserDate, setUserDate] = useState();
    const [workMode, setworkMode] = useState(0);
    const [ModeWord, setModeWord] = useState("モードは選択されていません");
    const [VisibleFlg, setVisibleFlg] = useState(false);

    const countup = () => {
        const nowTime = new Date();
        const msg = nowTime.getFullYear() + "/" + (nowTime.getMonth() + 1) + "/" + nowTime.getDate() +
            ('00' + nowTime.getHours()).slice(-2) + ":" + ('00' + nowTime.getMinutes()).slice(-2) + ":" + ('00' + nowTime.getSeconds()).slice(-2);
        document.getElementById("localClock").innerHTML = msg;
    };
    setInterval(countup, 1000);

    /////////モード参照処理///////////
    // 0 = 出勤 , 1 = 休憩 , 2 = 退勤
    /////////////////////////////////
    const WorkIn = () => {
        if (workMode !== 0) {
            setworkMode(0);
            setModeWord("出勤")
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

    return (
        <>
            <div id="localClock"></div>
            <Box sx={{ '& button': { m: 1 } }}>
                <Button variant="contained" size="large" onClick={WorkIn}>出勤</Button>
                <Button variant="contained" size="large" onClick={BreakTime}>休憩</Button>
                <Button variant="contained" size="large" onClick={WorkOut}>退勤</Button>
                <a href="http://localhost:3000/submission">
                    <Button variant="contained" size="large">
                        有給申請
                    </Button>
                </a>
                <Button variant="contained" id="SendID" size="large" onClick={PostID} >ID送信</Button>
                {VisibleFlg &&
                    <div>
                        <p>現在モード : {ModeWord}</p>
                        <p>社員番号：{UserDate.employee_num}</p>
                        <p>名前：{UserDate.name}</p>
                        <p>時間  {UserDate.time}</p>
                    </div>
                }
                <ErrorDialog ref={childRef}></ErrorDialog>
            </Box>
            <input type="text" id="nfc_input" name="name" size="20" value={nfcid} onChange={(event) => setNFCID(event.target.value)}
                style={{ color: 'white', border: 'none', outline: 'none' }}></input>
            <p>{nfcid}</p>
        </>
    );
}
export default Input;