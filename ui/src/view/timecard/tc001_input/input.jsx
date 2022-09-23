import * as React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function Input() {

    const baseURL = "http://localhost:8000/";
    const [nfcid, setNFCID] = useState("");
    const [UserDate, setUserDate] = useState();
    const [workMode, setworkMode] = useState();
    const [ModeWord, setModeWord] = useState("モードは選択されていません");


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

    const BreakTime= () => {
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
                setUserDate(res.data);
            });
    };

    return (
        <>
            <div id="localClock"></div>
            <Box sx={{ '& button': { m: 1 } }}>
                <Button variant="contained" size="large" onClick={WorkIn}>出勤</Button>
                <Button variant="contained" size="large" onClick={BreakTime}>休憩</Button>
                <Button variant="contained" size="large" onClick={WorkOut}>退勤</Button>
                <Button variant="contained" size="large">有給申請</Button>
                <Button variant="contained" id="SendID" size="large" onClick={PostID}>ID送信</Button>
                <div>現在モード : {ModeWord} </div>
                {/* <div>{UserDate.employee_num}{UserDate.name}{UserDate.time}{UserDate.errorcode}</div> */}
            </Box>
            <input type="text" id="nfc_input" name="name" maxlength="20" size="20" value={nfcid} onChange={(event) => setNFCID(event.target.value)}
                style={{ color: 'white', border: 'none', outline: 'none' }}></input>
            <p>{nfcid}</p>
        </>
    );
}
export default Input;