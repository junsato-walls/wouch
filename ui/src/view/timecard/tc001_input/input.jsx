import * as React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Input() {
    return (
        <>
            <Box sx={{ '& button': { m: 1 } }}>
                <Button variant="contained" size="large">出勤</Button>
                <Button variant="contained" size="large">休憩</Button>
                <Button variant="contained" size="large">退勤</Button>
            </Box>
            <Button variant="contained" size="medium">有給申請</Button>
        </>
    );
}
export default Input;