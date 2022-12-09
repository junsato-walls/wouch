import React from 'react'
import { useState, useImperativeHandle, forwardRef } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Link from '@mui/material/Link';

const AlertDialog = (props) => {
    const { open, setOpen } = props

    const dialogclose = () => {
        setOpen(false);
    }

    return (
        <>
            <Dialog
                open={open}
                onClose={dialogclose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                // fullScreen="true"
                fullWidth="ture"
                maxWidth="lg"
            >
                <DialogTitle id="alert-dialog-title">
                    メニュー
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <div><Link href="attend" underline="hover">勤怠管理</Link></div>
                        <div><Link href="employee" underline="hover">社員情報</Link></div>
                        <div><Link href="payment_month" underline="hover">賃金台帳(月間)</Link></div>
                        <div><Link href="payment_emp" underline="hover">賃金台帳(社員)</Link></div>
                        <div><Link href="calendar" underline="hover">会社カレンダー</Link></div>
                        <div><Link href="leaverequest" underline="hover">有給申請情報一覧</Link></div>
                        <div><Link href="leavemanage" underline="hover">有給管理</Link></div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                </DialogActions>
            </Dialog>
        </>
    )
}
export default AlertDialog