import * as React from 'react';
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Dialog from '@mui/material/Dialog';
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
import dayjs from 'dayjs';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Calendar() {
  const baseURL = "http://localhost:8000";
  const [InfoDate, setInfoDate] = useState();
  const [YMD, setYMD] = useState(new Date());
  const [open, setOpen] = useState(true);
  const [holiday, setHoliday] = useState([]);
  const dayOfWeekStrJP = [" (日)", " (月)", " (火)", " (水)", " (木)", " (金)", " (土)"];

  const [OpenGet, setOpenGet] = React.useState(false);
  const [OpenDel, setOpenDel] = React.useState(false);

  const handleCloseAlert = () => {
      setOpenGet(false);
      setOpenDel(false);
  };

  //リクエストをDBへ投げる
  const getHoliday = () => {
    console.log(InfoDate)
    axios.post(baseURL + "/ad008_02/", {
      ymd: InfoDate,
      attend_st: 0
    }).then((res) => {
        setTimeout(() => {
            getholiday()
      }, 100);
    })
    setOpenGet(false);
  };

  const delHoliday = () => {
    console.log(InfoDate)
    axios.put(baseURL + "/ad008_03/", {
      ymd: InfoDate,
      attend_st: 0
    }).then((res) => {
        setTimeout(() => {
            getholiday()
      }, 100);
    })
    setOpenDel(false);
  };

  const getYMD = (valueDate) => {
    setYMD(valueDate)
  }

  useEffect(() => {
        getholiday()
  }, [YMD]);
    
  const getholiday = () => {
    let targetYear = new Date(YMD.startStr).getFullYear()
    let targetMonth = new Date(YMD.startStr).getMonth() + 1
    let targetDate = new Date(YMD.startStr).getDate()
    if (targetDate != 1){
        if (targetMonth == 12){
            targetYear = targetYear + 1
            targetMonth = 1
            targetDate = 1
        }else{
            targetMonth = targetMonth + 1
            targetDate = 1
        }
    }else{
        targetDate = 1
    }
    console.log(targetYear, targetMonth, targetDate)

    let param = '/ad008_01/?year=' + targetYear +'&month=' + targetMonth
    axios.get(baseURL + param).then(res => {
        setHoliday(res.data)
        console.log(res.data)
    })
  }

  const ExistHoliday = (value) =>{
    setInfoDate(value.dateStr);
    const checkHoliday = holiday.filter((data, index) => {
      return data.start == value.dateStr;
    });
    if (checkHoliday.length == 1){
        console.log('休日')
        setOpenDel(true);
    }else{
        console.log('休日設定なし')
        setOpenGet(true);
    }
    console.log(value.dateStr)
  }

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
                                  events={holiday}
                                  // 日付クリック動作
                                  dateClick={(value) => ExistHoliday(value) }
                                  // 前へ　次へを押下時にgetリクエストの送信
                                  datesSet={(valueDate) => getYMD(valueDate)}
                              />
                          </td>
                          <td style={{ width: "20%" }}>
                              <TableContainer component={Paper}>
                                  <Table aria-label="spanning table">
                                      <TableHead>
                                          <TableRow>
                                              <TableCell align="">休業日</TableCell>
                                          </TableRow>
                                      </TableHead>
                                      <TableBody>
                                          {holiday.map((holi) => (
                                              <TableRow>
                                                  <TableCell>{dayjs(holi.start).format("M月D日") + dayOfWeekStrJP[dayjs(holi.start).format("d")]}</TableCell>
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
                            open={OpenGet}
                            onClose={handleCloseAlert}
                            aria-labelledby="get-dialog-title"
                            aria-describedby="get-dialog-description"
                        >
                            <DialogTitle id="get-dialog-title">
                                {"休業日設定"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="get-dialog-description">
                                    {dayjs(InfoDate).format("M月D日") + dayOfWeekStrJP[dayjs(InfoDate).format("d")]}を休業日に設定しますか？
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Stack direction="row" spacing={1}>
                                    <Chip label="いいえ" onClick={handleCloseAlert} />
                                    <Chip label="はい" onClick={getHoliday} />
                                </Stack>
                            </DialogActions>
                        </Dialog>
                  </div>
                  <div>
                        <Dialog
                            open={OpenDel}
                            onClose={handleCloseAlert}
                            aria-labelledby="del-dialog-title"
                            aria-describedby="del-dialog-description"
                        >
                            <DialogTitle id="del-dialog-title">
                                {"休業日解除"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="del-dialog-description">
                                    {dayjs(InfoDate).format("M月D日") + dayOfWeekStrJP[dayjs(InfoDate).format("d")]}を稼働日に設定しますか？
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Stack direction="row" spacing={1}>
                                    <Chip label="いいえ" onClick={handleCloseAlert} />
                                    <Chip label="はい" onClick={delHoliday} />
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
