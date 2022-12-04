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
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const test = [{ title: "会社休み", start: "2022-10-18", end: "2022-10-25" }]


function Calendar() {
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
  const [InfoDate, setInfoDate] = useState();
  const [YMD, setYMD] = useState(new Date());
  const [HMS, setHMS] = useState();
  const [open, setOpen] = useState(true);

  const [OpenAlert, setOpenAlert] = React.useState(false);

  const handleClickOpenAlert = () => {
      setOpenAlert(true);
  };

  const handleCloseAlert = () => {
      setOpenAlert(false);
  };

  //リクエストをDBへ投げる
  const sendLeaveDayDate = () => {
      axios.post(baseURL + "/m_calendar2/")
      setOpenAlert(false);
  };

  //リクエストをDBへ投げる
  //testID : 012e5524f1463b3d
  useEffect(() => {
      if (nfcid !== "") {
          axios.post(baseURL + "/ad008_01/", {ymd: YMD})
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
const getYMD = (valueDate) => {
    setYMD(valueDate)
}
useEffect(() => {
    console.log(YMD.startStr)
    if (new Date(YMD.startStr).getDate() != 1){
        if (new Date(YMD.startStr).getMonth() + 1 == 12){
            console.log(new Date(YMD.startStr).getFullYear() + 1, 1, 1)
        }else{
            console.log(new Date(YMD.startStr).getFullYear(), new Date(YMD.startStr).getMonth() + 2, 1)
        }
    }else{
        console.log(new Date(YMD.startStr).getFullYear(), new Date(YMD.startStr).getMonth() + 1, new Date(YMD.startStr).getDate())
    }
}, [YMD]);
//   const countup = () => {
//       const nowTime = new Date();
//       const dayOfWeekStrJP = [" (日)", " (月)", " (火)", " (水)", " (木)", " (金)", " (土)"];
//       setYMD(nowTime.getFullYear() + "年" + (nowTime.getMonth() + 1) + "月" + nowTime.getDate() + "日" + dayOfWeekStrJP[nowTime.getDay()]);
//       setHMS(('00' + nowTime.getHours()).slice(-2) + ":" + ('00' + nowTime.getMinutes()).slice(-2) + ":" + ('00' + nowTime.getSeconds()).slice(-2));
//   }; setInterval(countup, 1000);

  const handleClose = () => {
      setOpen(false);
  };
    return (
        <>
          <div>
              <Dialog
                  fullScreen
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Transition}
              >
                  <table>
                      <tr>
                          <td style={{ width: "80%" }}>
                              <FullCalendar
                                  plugins={[dayGridPlugin, interactionPlugin]}
                                  contentHeight="auto"
                                  locale="ja"
                                  selectable="true"
                                  // 取得データを配列に挿入
                                  events={test}
                                  // 日付クリック動作
                                  dateClick={
                                      function (infoDate) {
                                          setInfoDate(infoDate.dateStr);
                                          handleClickOpenAlert();
                                      }
                                  }
                                  // 前へ　次へを押下時にgetリクエストの送信
                                  datesSet={(valueDate) => getYMD(valueDate)}
                              />
                          </td>
                          <td style={{ width: "20%" }}>
                              <TableContainer component={Paper}>
                                  <Table aria-label="spanning table">
                                      <TableHead>
                                          <TableRow>
                                              <TableCell align="">休業日{InfoDate}</TableCell>
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
                            open={OpenAlert}
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
              </Dialog>
          </div>
      </>
  );
}
export default Calendar;

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
