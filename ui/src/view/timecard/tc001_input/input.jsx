import * as React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



function Input() {

    const [nfcid, setNFCID] = useState("");

    return (
        <>
            <Box sx={{ '& button': { m: 1 } }}>
                <Button variant="contained" size="large">出勤</Button>
                <Button variant="contained" size="large">休憩</Button>
                <Button variant="contained" size="large">退勤</Button>
            </Box>
            <Button variant="contained" size="medium">有給申請</Button>
            <input type="text" id="nfc_input" name="name" maxlength="20" size="20" value={nfcid} onChange={(event) => setNFCID(event.target.value)}
                style={{ color: 'white', border: 'none', outline: 'none' }}></input>
            <p>{nfcid}</p>
        </>
    );
}
export default Input;